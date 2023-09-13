console.group("二开作者、优化及运营");
	console.log("wryxmq(马猩猿)");
	console.log("http://wryxmq.com");
	console.log("http://wulongkj.github.io");
console.groupEnd();

// 每六小时进行一次弹窗弹出
// 获取指定名称的cookie
function getCookie(name){
    var strcookie = document.cookie;//获取cookie字符串
    var arrcookie = strcookie.split("; ");//分割
    //遍历匹配
    for ( var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name){
            return arr[1];
        }
    }
    return "";
}

var date=new Date().getTime();
var newD=new Date(date+6*60*60*1000);

var Ifvip1 = document.cookie.indexOf("vip=");
if(Ifvip1==-1){
    document.cookie="vip=1; expires="+newD.toUTCString();
    //swal("公告(20230407-1)", "删除失效链接,替换新链接.感谢你的支持.");
	swal({
	  title: "公告(20230913-01)",
	  text: "很高兴你能访问本导航网站,\n本网站主要是方便本人个人使用如果你喜欢欢迎下载.\n但由于个人能力问题并没有完全达到本人的想法,\n如果你有此方面技术欢迎与本人沟通\n mail: wryxmq@gmail.com",
	  buttons: "直接使用",
	  //buttons: ["直接使用","联系站长"],
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
		//window.open("#");
	  }
	});
}

if(Ifvip1!=-1){
    var Ifvip=getCookie("vip");
}
