// JSON数据
var data = [
  {
    "name": "百度",
    "url": "https://www.baidu.com",
    "tags": ["百度", "搜索引擎","中国"]
  },
  {
    "name": "谷歌",
    "url": "https://www.google.com",
    "tags": ["谷歌", "搜索引擎","美国"]
  },
  {
    "name": "导航网站",
    "url": "http://cesi.1919810.com/5",
    "tags": ["导航", "导航网站","中国"]
  }
];

// 在页面加载完成后执行的函数
document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.getElementById("navLinks");
  
  // 遍历JSON数据
  for (var i = 0; i < data.length; i++) {
    var navLink = document.createElement("div");
    navLink.className = "navLink";
    
    var website = data[i];
    
    var name = document.createElement("h2");
    name.textContent = website.name;
    
    var url = document.createElement("a");
    url.href = website.url;
    url.textContent = website.url;
    
    navLink.appendChild(name);
    navLink.appendChild(url);
    
    navLinks.appendChild(navLink);
  }
  
  var searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", search);
});

// 在页面加载完成后执行的函数
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.getElementById("navLinks");

  // 遍历JSON数据...

  var searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", search);

  var searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      // 按下回车键，执行搜索
      search();
    }
  });
});

// 在页面加载完成后执行的函数
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.getElementById("navLinks");

  // 遍历JSON数据...

  var searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", search);

  var searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      // 按下回车键，执行搜索
      search();
    }
  });
});

// 搜索函数
function search() {
  var searchInput = document.getElementById("searchInput");
  var searchQuery = searchInput.value.toLowerCase();
  
  var navLinks = document.getElementsByClassName("navLink");
  
  // 遍历导航链接并根据搜索条件显示或隐藏
  for (var i = 0; i < navLinks.length; i++) {
    var navLink = navLinks[i];
    var websiteName = navLink.getElementsByTagName("h2")[0].textContent.toLowerCase();
    var websiteTags = data[i].tags;
    
    if (websiteName.includes(searchQuery) || websiteTags.includes(searchQuery)) {
      navLink.style.display = "block";
    } else {
      navLink.style.display = "none";
    }
  }
}