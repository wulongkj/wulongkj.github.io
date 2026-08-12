/**
 * 极简导航 - 高并发骨架屏搜索服务
 * - 静态资源：index.html / jump.html / assets
 * - 搜索 API：内存索引遍历 data/*.json（排除 ads.json），mtime 感知热更新
 * - 结果缓存：LRU 结果缓存，命中直接返回，支撑高并发
 */
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3003;
const DATA_DIR = path.join(__dirname, "data");

app.use(cors());
app.use(express.json());

/* ---------- 数据加载与内存索引 ---------- */
const state = { mtimes: {}, items: [], strings: [] };
let loaded = false;

function safeRead(file) {
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("读取数据失败:", file, e.message);
    return [];
  }
}

function dataFiles() {
  return fs.readdirSync(DATA_DIR)
    .filter((f) => f.endsWith(".json") && f !== "ads.json")
    .sort();
}

function rebuild() {
  const items = [];
  for (const f of dataFiles()) {
    for (const it of safeRead(path.join(DATA_DIR, f))) {
      if (it && it.name && it.url) items.push(it);
    }
  }
  state.items = items;
  state.strings = items.map((it) =>
    [it.name, it.url, it.desc || "", (it.tags || []).join(" ")].join(" ").toLowerCase()
  );
  resultCache.clear();
}

function isFresh() {
  try {
    const files = dataFiles();
    if (files.length !== Object.keys(state.mtimes).length) return false;
    return files.every((f) => state.mtimes[f] === fs.statSync(path.join(DATA_DIR, f)).mtimeMs);
  } catch (e) {
    return false;
  }
}

function getState() {
  if (!loaded) {
    rebuild();
    for (const f of dataFiles()) {
      state.mtimes[f] = fs.statSync(path.join(DATA_DIR, f)).mtimeMs;
    }
    loaded = true;
  } else if (!isFresh()) {
    rebuild();
    for (const f of dataFiles()) {
      state.mtimes[f] = fs.statSync(path.join(DATA_DIR, f)).mtimeMs;
    }
  }
  return state;
}

/* ---------- LRU 结果缓存 ---------- */
const resultCache = new Map();
const CACHE_MAX = 200;

function search(q, limit) {
  const key = q + "::" + limit;
  if (resultCache.has(key)) return resultCache.get(key);

  const s = getState();
  const list = [];
  for (let i = 0; i < s.items.length; i++) {
    if (s.strings[i].includes(q)) {
      list.push(s.items[i]);
      if (list.length >= limit) break;
    }
  }
  const out = { total: list.length, list };
  if (resultCache.size >= CACHE_MAX) {
    resultCache.delete(resultCache.keys().next().value);
  }
  resultCache.set(key, out);
  return out;
}

/* ---------- 广告配置（带缓存） ---------- */
let adsCache = null;
let adsMtime = 0;

function getAds() {
  const file = path.join(DATA_DIR, "ads.json");
  try {
    const mt = fs.statSync(file).mtimeMs;
    if (mt !== adsMtime) {
      adsMtime = mt;
      adsCache = JSON.parse(fs.readFileSync(file, "utf8"));
    }
  } catch (e) {
    adsCache = null;
  }
  return adsCache || { image: [], text: [] };
}

/* ---------- 路由 ---------- */
app.get("/api/search", (req, res) => {
  const q = String(req.query.q || "").trim().toLowerCase();
  if (!q) return res.json({ total: 0, list: [] });
  const limit = Math.min(parseInt(req.query.limit, 10) || 50, 100);
  res.json(search(q, limit));
});

app.get("/api/ads", (req, res) => {
  res.json(getAds());
});

app.use(express.static(__dirname, { index: "index.html" }));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`极简导航服务已启动: http://localhost:${PORT}`);
  console.log(`数据目录: ${DATA_DIR}`);
});
