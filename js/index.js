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
  //导航网站
  {
	"name":"自媒体库-新媒体导航",
	"url":"https://hao.rzfyu.com/1/",
	"tags":["自媒体库","新媒体导航","文案版","素材版","平台版","运营版","摸鱼版","无惗","无念"]
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
  //其他
  {
	  "name":"w3counter",
	  "url":"https://www.w3counter.com/signup",
	  "tags":["w3counter","免费网络统计和工具","免费站长统计"]
  },{
	  "name":"cloudconvert",
	  "url":"https://cloudconvert.com/ttf-to-woff2",
	  "tags":["字体库在线转换","工具箱","ttf转woff2"]
  },
  //手机官网
  {
	  "name":"vivo官网",
	  "url":"https://www.vivo.com.cn/service/authenticityCheck/index",
	  "tags":["vivo官网","中国"]
  },{
	  "name":"oppo官网",
	  "url":"https://support.oppo.com/cn/check",
	  "tags":["oppo官网","中国"]
  },
  //免费二级域名	
  {
	  "name":"路人侠二级域名分发",
	  "url":"https://ilun.link/login",
	  "tags":["免费二级域名","测试域名","中国"]
  },
  //域名注册
  {
	  "name":"onamae",
	  "url":"https://www.onamae.com",
	  "tags":["日本域名注册商","GMO积分","注册域名"]
  },
  //钱包	
  {
	  "name":"payeer",
	  "url":"https://payeer.com/cn/",
	  "tags":["多国家电子钱包","payeer钱包"]
  },{
	  "name":"faucetpay",
	  "url":"https://faucetpay.io/account/login",
	  "tags":["faucetpay(水龙头钱包)多虚拟币钱包"]
  },
  //赚钱
  {
	  "name":"GMO积分",
	  "url":"https://point.gmo.jp",
	  "tags":["日本问卷调查","免费赚日元"]
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
  },
  //工具
  {
	  "name":"彩虹工具网",
	  "url":"https://tool.cccyun.cc/viewhtml",
	  "tags":["免费在线工具","网页源码查看"]
  },{
	  "name":"独特工具箱",
	  "url":"https://www.dute.org",
	  "tags":["免费在线工具"]
  },{
	  "name":"Punycode域名加密/解密xn--",
	  "url":"https://tool.ip138.com/punycode",
	  "tags":["域名加密","xn--加密","汉子域名加密"]
  },{
	  "name":"站长工具箱",
	  "url":"https://www.gongjuhao.com",
	  "tags":["免费在线工具"]
  },{
	  "name":"Base64加密/解密",
	  "url":"https://www.bt.cn/tools/encrybase.html",
	  "tags":["在线加密","在线解密","加密解密"]
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
  },{
	  "name":"docsmall",
	  "url":"https://docsmall.com",
	  "tags":["免费在线图片压缩","GIF压缩","PDF合并/分割"]
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
  //免费api
  {
	  "name":"新逸网络",
	  "url":"https://www.xinac.net",
	  "tags":["免费api","新逸网络"]
  },

  //解析下载
  {
	  "name":"全网视频解析下载",
	  "url":"http://678wk7.icu",
	  "tags":["全网视频解析下载","抖音免费解析下载","快手免费解析下载","YOUTUBE免费解析下载"]
  },{
	  "name":"易简单解析",
	  "url":"https://www.xs0574.cn",
	  "tags":["抖音免费解析下载","快手免费解析下载","YOUTUBE免费解析下载"]
  },
  //二维码美化
  {
	  "name":"96编辑器",
	  "url":"https://bj.96weixin.com/tools/meihua",
	  "tags":["免费二维码美化","在线美化二维码","个性二维码"]
  },{
	  "name":"美化码",
	  "url":"https://www.meihuama.com",
	  "tags":["免费二维码美化","在线美化二维码","个性二维码","二维码创意工坊","艺术让生活更精彩"]
  },{
	  "name":"帮小忙",
	  "url":"https://tool.browser.qq.com/prettify_qrcode.html?addressbar=hide",
	  "tags":["免费二维码美化","在线美化二维码","个性二维码","腾讯QQ浏览器工具箱","轻松办公，工具助你一臂之力"]
  },{
	  "name":"第九工厂(推荐)",
	  "url":"https://909th.com?code=A30119",
	  "tags":["免费二维码美化","在线美化二维码","个性二维码","AI二维码生成","艺术二维码模板交易","限免二维码美化"]
  }
  
  
  
];
