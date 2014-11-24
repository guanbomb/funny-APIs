<?php
header("Content-Type: text/html;charset=utf-8");
/* 网易借接口，没有调试出来，悲剧
$context = array(
  'http' => array(
    'method' => 'POST',
    'header' => "Content-type: application/x-www-form-urlencoded\r\n".
    "Referer: http://music.163.com\r\n".
    "Cookie: appver=2.0.2\r\n",
    'content' => 's=玫瑰色的你&limit=1&type=1&offset=0'
    )
  );
$context = stream_context_create($context);
$data = file_get_contents('http://music.163.com/api/search/get/',FALSE,$context);
echo $data;
*/
if(!$_POST['name']) {
  echo json_encode(array('status' => 'error'));
  return;
}

// 获取歌曲列表
// $context = array(
//   'http' => array(
//     'method' => 'GET',
//     )
//   );
// $context = stream_context_create($context);
// echo file_get_contents('http://tingapi.ting.baidu.com/v1/restserver/ting?from=webapp_music&method=baidu.ting.search.catalogSug&format=json&callback=&query='.urlencode($_POST['name']).'&page_size=1&_='.time(),FALSE,$context);
// getMusicContent();
// 获取百度音乐(xml)
// function getMusicContent()
//   {        
//     $ret="<xml><ToUserName><![CDATA[%s]]></ToUserName><FromUserName><![CDATA[%s]]></FromUserName><CreateTime>%s</CreateTime><MsgType><![CDATA[music]]></MsgType><Music><Title><![CDATA[%s]]></Title><Description><![CDATA[]]></Description><MusicUrl><![CDATA[%s]]></MusicUrl><HQMusicUrl><![CDATA[%s]]></HQMusicUrl><FuncFlag><![CDATA[1]]></FuncFlag></Music></xml>";
//     $musicapi =  "http://box.zhangmen.baidu.com/x?op=12&count=1&title=".urlencode($_POST['name'])."\$\$";  
//     $simstr=file_get_contents($musicapi);
//     $musicobj=simplexml_load_string($simstr);
//     $i=0;
//     $musicurl;
//     foreach($musicobj->url as $itemobj)
//     {
//       $encode = $itemobj->encode;
//       $decode = $itemobj->decode;   
//       $removedecode = end(explode('&', $decode));
//       if($removedecode <> "")
//       {
//         $removedecode="&".$removedecode;    
//       }
//       $decode = str_replace($removedecode,"", $decode);
//       $musicurl = str_replace(end(explode('/', $encode)),$decode,$encode);
//       break;
//     }
//     echo json_encode(
//       array(
//         'status' => 'ok',
//         'data' => array(
//           'url' => $musicurl
//           )
//         )
//       );
// }
// 获取百度音乐链接
//$data = file_get_contents('http://ting.baidu.com/data/music/links?songIds=38233821');
// $context = array(
//   'http' => array(
//     'method' => 'POST',
//     'header' => "Content-type: application/x-www-form-urlencoded\r\n".
//     "Referer: http://music.163.com\r\n".
//     "Cookie: appver=2.0.2\r\n",
//     'content' => 's=玫瑰色的你&limit=1&type=1&offset=0'
//     )
//   );
$data = file_get_contents("http://s.music.163.com/search/get/?type=1&s=".urlencode($_POST['name'])."&limit=1&offset=0");
$data = (array) json_decode($data);
$data = (array) $data['result'];
$data = (array) $data['songs'];
$data = (array) $data[0];
$data = $data['audio'];
echo json_encode(array(
  'status' => 'ok',
  'url' => $data
  )
);

?>