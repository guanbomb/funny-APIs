function val(name) {
	return document.getElementById(name);
}
var oldPoint = 0;
// 获取窗口高度
if (window.innerHeight)
winHeight = window.innerHeight-50;
else if ((document.body) && (document.body.clientHeight))
var winHeight = document.body.clientHeight-50;
val('teach-page').style.height = winHeight + 'px';
val('slider').style.height = winHeight*0.7 + 'px';
var topHeight = val('head-page').offsetHeight;
window.onscroll = function() {
	if (document.documentElement.scrollTop + document.body.scrollTop > topHeight) {
		val('top-tips').className = 'top-tips top-fixed';
		val('top-block').className = 'top-block';
	} else {
		val('top-tips').className = 'top-tips';
		val('top-block').className = '';
	}
}
window.onresize = function(){
	topHeight = val('head-page').offsetHeight;
}
window.imgSwipe = Swipe(val('slider'),{
	callback: function(index, elem) {
		val('swipe-point').childNodes[oldPoint*2+1].removeAttribute("class");
		val('swipe-point').childNodes[index*2+1].setAttribute('class','point-focus');
		oldPoint = index;
		descSwipe.slide(index);
		switch(index) {
			case 0:
				titleSwipe.slide(0);
				break;
			case 2:
				titleSwipe.slide(1);
				break;
			case 4:
				titleSwipe.slide(2);
				break;
			case 5:
				titleSwipe.slide(3);
				break;
			case 6:
				titleSwipe.slide(4);
				break;
			case 7:
				titleSwipe.slide(5);
				break;
		}
	}
});
window.titleSwipe = Swipe(val('slider-title'),{
	stopPropagation: true,
});
window.descSwipe = Swipe(val('slider-desc'),{
	stopPropagation: true,
});
function last(){
	imgSwipe.prev();
}
function next(){
	imgSwipe.next();
}