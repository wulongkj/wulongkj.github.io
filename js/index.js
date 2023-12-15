//动态修改标题
document.title="乌龙导航";
// JSON数据
var data = [
  //搜索引擎
  {
    "name": "小白网",
    "url": "https://xiaobainet.github.io",
    "tags": ["小白网","xiaobainet","github"]
  }, {
    "name": "百度",
    "url": "https://www.baidu.com",
    "tags": ["百度", "搜索引擎","中国"]
  },{
    "name": "谷歌",
    "url": "https://www.google.com",
    "tags": ["谷歌", "搜索引擎","美国"]
  },{
	"name":"F搜",
	"url":"https://fsoufsou.com",
	"tags":["F搜","搜索引擎"]
  },{
    "name": "导航网站",
    "url": "http://wulongkj.github.io",
    "tags": ["导航", "导航网站","中国"]
  },
  //网盘
  {
	"name":"MediaFire",
	"url":"https://mediafire.com",
	"tags":["MediaFire","网盘","美国","免费"]
  },{
	  "name":"夸克网盘",
	  "url":"https://pan.myquark.cn/",
	  "tags":["免费夸克网盘","免费在线网盘","免费网盘"]
  },{
	"name":"文叔叔",
	"url":"https://www.wenshushu.cn",
	"tags":["文叔叔","网盘","中国","免费","文件分享"]
  },{
	  "name":"百度翻译",
	  "url":"https://fanyi.baidu.com",
	  "tags":["百度翻译","翻译","中国"]
  },{
	  "name":"谷歌地图",
	  "url":"https://maps.google.com",
	  "tags":["谷歌地图","地图","谷歌","美国"]
  },
  //邮箱	
  {
	  "name":"谷歌邮箱",
	  "url":"https://accounts.google.com/b/0/AddMailService",
	  "tags":["谷歌邮箱","美国"]
  },{
	  "name":"10分钟邮箱",
	  "url":"https://10minutemail.org/",
	  "tags":["10分钟邮箱"]
  },{
	  "name":"Temp Mail",
	  "url":"https://etempmail.com/zh",
	  "tags":["临时邮箱","临时","邮箱","mail"]
  },
  //在线学习 编程
  {
	  "name":"freecodecamp",
	  "url":"https://www.freecodecamp.org/chinese",
	  "tags":["在线免费学习编程","优秀github项目"]
  },{
	  "name":"菜鸟教程",
	  "url":"https://www.runoob.com",
	  "tags":["在线免费学习编程","runoob"]
  },
	
  {
	  "name":"w3counter",
	  "url":"https://www.w3counter.com/signup",
	  "tags":["w3counter","免费网络统计和工具","免费站长统计"]
  },{
	  "name":"vivo官网",
	  "url":"https://www.vivo.com.cn/service/authenticityCheck/index",
	  "tags":["vivo官网","中国"]
  },{
	  "name":"oppo官网",
	  "url":"https://support.oppo.com/cn/check",
	  "tags":["oppo官网","中国"]
  },{
	  "name":"路人侠二级域名分发",
	  "url":"https://ilun.link/login",
	  "tags":["免费二级域名","测试域名","中国"]
  },{
	  "name":"GMO积分",
	  "url":"https://point.gmo.jp",
	  "tags":["日本问卷调查","免费赚日元"]
  },{
	  "name":"onamae",
	  "url":"https://www.onamae.com",
	  "tags":["日本域名注册商","GMO积分","注册域名"]
  },{
	  "name":"payeer",
	  "url":"https://payeer.com/cn/",
	  "tags":["多国家电子钱包","payeer钱包"]
  },{
	  "name":"faucetpay",
	  "url":"https://faucetpay.io/account/login",
	  "tags":["faucetpay(水龙头钱包)多虚拟币钱包"]
  },{
	  "name":"gemly",
	  "url":"https://gemly.gg",
	  "tags":["玩赚玩游戏赚美元"]
  },{
	  "name":"Qolle",
	  "url":"https://qolle.biz",
	  "tags":["Qolle在线看视频赚钱","卢布虚拟币"]
  },{
	  "name":"Coinfola",
	  "url":"https://coinfola.com",
	  "tags":["Coinfola在线赚钱比特币","虚拟币"]
  },{
	  "name":"影子vip",
	  "url":"http://wryxmq.com",
	  "tags":["影子vip免费解析vip视频"]
  },{
	  "name":"Punycode域名加密xn--",
	  "url":"https://www.punycoder.com",
	  "tags":["域名加密","xn--加密","汉子域名加密"]
  },{
	  "name":"回溯机",
	  "url":"https://web.archive.org",
	  "tags":["网站历史","回溯机","更新足迹"]
  },{
	  "name":"作图网",
	  "url":"http://zuotu.399q.cn",
	  "tags":["在线免费制作广告图片","在线制作广告横幅","在线制作广告店标","在线制作广告LOGO"]
  },{
	  "name":"api小白",
	  "url":"https://apixb.github.io",
	  "tags":["api小白","apixb","免费静态接口"]
  },
  //AI 人工智能
  {
	  "name":"灵鹿",
	  "url":"https://linglu.pro",
	  "tags":["免费Ai","免费","AI","灵鹿linglu"]
  },{
	  "name":"大巫",
	  "url":"https://dawu.world",
	  "tags":["免费openAi","免费","AI"]
  },
  //自动收录网
  {
	  "name":"魔司收录网",
	  "url":"https://msdhw.cn",
	  "tags":["网站免费在线收录","免费收录","魔司收录网"]
  }
  
  
  
];
