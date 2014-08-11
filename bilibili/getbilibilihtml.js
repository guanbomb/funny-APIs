function val(obj){return document.getElementsByName(obj)};
var obj = val("bilibili_card");
if(obj.length>0){
	var j = 0;	
	//ajax请求是跨域的，不可行！
	// var XMLHttpReq;  
	// function createXMLHttpRequest() {  
	//     try {  
	//         XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");//	IE高版本创建XMLHTTP  
	//     }  
	//     catch(E) {  
	//         try {  
	//             XMLHttpReq = new ActiveXObject("MicrosoftXMLHTTP");//		IE低版本创建XMLHTTP  
	//         }  
	//         catch(E) {  
	//             XMLHttpReq = new XMLHttpRequest();//	兼容非IE浏览器，直接创建XMLHTTP对象  
	//         }  
	//     }  
	  
	// }  
	// function sendAjaxRequest(url,data) {  
	//     createXMLHttpRequest();//创建XMLHttpRequest对象  
	//     XMLHttpReq.open('post', url, true); 
	//     XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8")
	//     XMLHttpReq.send('uid='+data);   
	//     XMLHttpReq.onreadystatechange = processResponse; //指定响应函数  
	// }
	// function processResponse(){
	// 	if (XMLHttpReq.readyState == 4&&XMLHttpReq.status == 200){
	// 			var str = XMLHttpReq.responseText;
	// 			eval(str);
	// 	}
	// }
	// sendAjaxRequest("http://uquweb.com/api/bilibili/getbilibilihtml.php",obj.getAttribute('uid'))
	for(var i = 0;i < obj.length;i ++){
		url = obj[i].getAttribute('uid')
		document.write("<script src=\"http://uquweb.com/api/bilibili/getbilibilihtml.php?uid="+obj[i].getAttribute('uid')+"\"></script>");
	}
}
else{
	alert("哔哩哔哩模块出错！请检查代码");
}
function ShowCard(json){
	var name="<div class=\"bilibili-card user-card\"><div class=\"header\"><a class=\"avatar\" href=\"http://space.bilibili.tv/"+json.mid+"/info.html\" target=\"_top\"><img src=\""+json.face+"\"><strong>"+json.name+"</strong><span>"+json.place+"</span></a><a class=\"button\" href=\"http://space.bilibili.tv/"+json.mid+"\" target=\"_top\">进入Ta的空间</a></div><ul class=\"status\"><li><a href=\"http://space.bilibili.com/"+json.mid+"/fans.html\" target=\"_top\"><strong>"+json.fans+"</strong>粉丝</a></li><li><a href=\"http://space.bilibili.com/"+json.mid+"/follow.html\" target=\"_top\"><strong>"+json.attention+"</strong>关注</a></li><li><a href=\"http://space.bilibili.com/"+json.mid+"\" target=\"_top\"><strong>"+json.article+"</strong>投稿</a></li></ul><div class=\"footer\"><a href=\"http://www.bilibili.tv\" target=\"_top\">Move to BiliBili.</a>&nbsp;&nbsp;&nbsp;Powered By <a href=\"http://uquweb.com\">Younger</a></div></div>";
	obj[j].innerHTML=name;
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://uquweb.com/api/bilibili/bilibilicard.css\">");
	if(j < obj.length)j++;
}