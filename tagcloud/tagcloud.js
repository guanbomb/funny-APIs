document.write('<link rel="stylesheet" type="text/css" href="http://timehub.cn/api/tagcloud/tagcloud.css">');
document.write('<script type="text/javascript" src="http://timehub.cn/tags/"></script>');
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
function val(obj){
	return document.getElementById(obj);
}
function getRandon(num){
	//var rand = Math.round(Math.random()*7);
	return num % 7 + 1;
}