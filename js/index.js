document.title = "乌龙导航";
const DATA_URL = './config/navigation.json';
let data = [];

function loadData() {
    return new Promise((resolve) => {
        fetch(DATA_URL)
            .then(res => res.json())
            .then(res => {
                data = res || [];
                resolve(data);
            })
            .catch(() => { loadFallback(); resolve(data); });
    });
}

function loadFallback() {
    data = [
        {"name": "小白网", "url": "https://xiaobainet.github.io", "tags": ["小白网","xiaobainet","github"]},
        {"name": "百度", "url": "https://www.baidu.com", "tags": ["百度", "搜索引擎","中国"]},
        {"name": "谷歌", "url": "https://www.google.com", "tags": ["谷歌", "搜索引擎","美国"]},
        {"name": "F 搜", "url": "https://fsoufsou.com", "tags": ["F 搜","搜索引擎"]},
        {"name": "导航网站", "url": "http://wulongkj.github.io", "tags": ["导航", "导航网站","中国"]}
    ];
}

function showNavigation(data) {
    const navigation = document.getElementById("navigation");
    if (!navigation) return;
    
    navigation.innerHTML = "";
    if (data.length === 0) {
        navigation.innerHTML = '<div style="color: #666; padding: 40px; grid-column: 1/-1;">暂无数据</div>';
        return;
    }
    
    data.forEach(item => {
        const link = document.createElement("a");
        link.href = item.url;
        link.target = "_blank";
        link.textContent = item.name;
        navigation.appendChild(link);
    });
}

loadData().then(() => {
    const navigation = document.getElementById("navigation");
    const searchInput = document.getElementById("search");

    showNavigation(data);

    if (searchInput) {
        searchInput.addEventListener("input", function() {
            const searchText = searchInput.value.trim().toLowerCase();
            const filtered = data.filter(item =>
                item.tags.some(tag => tag.toLowerCase().includes(searchText))
            );
            showNavigation(filtered);
        });
    }
});
