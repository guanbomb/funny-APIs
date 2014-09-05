document.write('<link rel="stylesheet" type="text/css" href="http://timehub.cn/api/tagcloud/tagcloud.css">');
document.write('<script type="text/javascript" src="http://timehub.cn/tagcloud/"></script>');
function parseTo(json) {
	var str;
	for(var i =0; i < json.length; i ++) {
		if(i % 3 == 0) {
			str = '<div class="tag-part">' + json[i].replace('<a','<a class="color'+getRandon(i)+'"');
		} else if(i % 3 == 2) {
			str += (json[i].replace('<a','<a class="color'+getRandon(i)+'"') + '</div>');
			val('tagcloud').innerHTML += str;
		} else {
			str += json[i].replace('<a','<a class="color'+getRandon(i)+'"');
		}

	}
}
// val('tagcloud').onmouseover = function() {
// 	var obj = event.srcElement ? event.srcElement : event.target;
// 	if(obj.title !== '' && obj.className.indexOf('tag-part-hover') === -1) {
// 		obj.className += ' tag-part-hover';
// 		if(obj.onmouseout === null) {
// 			obj.onmouseout = function() {
// 				obj.className = obj.className.replace(' tag-part-hover','');
// 			};
// 		}
// 	}
// }

function val(obj){
	return document.getElementById(obj);
}
function getRandon(num){
	//var rand = Math.round(Math.random()*7);
	return num % 7 + 1;
}
