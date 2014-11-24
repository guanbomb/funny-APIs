
var Link = {};

Link.playlist = [];

Link.val = function(obj){
  return document.getElementById(obj);
};

Link.ajax = function(url, method, data, func){
  if(!url  || !method || !data || !func){
    console.log('error:arguments are undefined');
    return;
  }
  var XMLHttpReq = null;
  function createXMLHttpRequest() {
    try {
      XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");//IE高版本创建XMLHTTP
    }
    catch(e) {
     try {
        XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");//IE低版本创建XMLHTTP
      }  
      catch(e) {
        XMLHttpReq = new XMLHttpRequest();//兼容非IE浏览器，直接创建XMLHTTP对象
      }
    }
  }

  if(XMLHttpReq === null) createXMLHttpRequest();//创建XMLHttpRequest对象
  XMLHttpReq.open(method, url, true);
  if(method === 'post') XMLHttpReq.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  XMLHttpReq.onreadystatechange = function(){
    if (XMLHttpReq.readyState == 4) {
      if (XMLHttpReq.status == 200) {
        func(JSON.parse(XMLHttpReq.responseText));
      }
    }
  }; //指定响应函数
  XMLHttpReq.send(data);
};

Link.playlist = Link.val('musicbox').innerHTML.split(",");
//change ui
(function() {

  Link.ajax('http://apis.net/musiclink/getmusic.php', 'post', 'name='+Link.playlist[0], function(data){
    if(data.status === 'error') return alert('音乐error!快去通知younger维修~');
    if(data.data === '')return alert('啊嘞没有数据!api又抽风了= =');
    document.querySelector('#mplayer').src = data.url;
    //Link.val('musicbox').innerHTML = '<audio id="mplayer" controls autoplay><source id="msource" src="'+data.url+'" type="audio/mpeg"></source></audio>';
  });
})();





