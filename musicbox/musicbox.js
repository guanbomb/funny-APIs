var playList = [];
var lNumNow = 0, sNumNow = 0;
var interval;
var img0 = "url(http://timehub.cn/api/musicbox/button.png) 0px 0px";
var img1 = "url(http://timehub.cn/api/musicbox/button.png) 62px 0px";
(function() {
	function val(obj) {return document.getElementsByName(obj)};
	var listobj = val("musicbox");
	if(listobj.length>0) {
		for(var i = 0;i < listobj.length;i ++) {
			listobj[i].className = "musicbox";
			playList[i] = [];
			var songlist = listobj[i].getElementsByTagName("span");
			var listhtml = "";
			for(var j = 0;j < songlist.length;j ++){
				playList[i][j] = songlist[j].innerHTML.split(",");
				listhtml = "<a onclick=\"play(" + i + "," + j + ")\">" + playList[i][j][0] + "-" + playList[i][j][2] + "</a>" + listhtml;
			}
			//change dom
			listobj[i].innerHTML = "<div class=\"player_inc\"><div class=\"player_inner\"><span class=\"song_name\" id=\"song_name"+i+"\">"+playList[i][0][0]+" "+ playList[i][0][2] + "</span><span class=\"thisTime\" id=\"currentTime"+i+"\">00:00</span><span>/</span><span class=\"thisTime\" id=\"allTime"+i+"\">--:--</span><span onclick=\"play("+i+",-1)\" id=\"play"+i+"\" class=\"play_btn\"></span><span onclick=\"showlist("+i+")\" class=\"list_btn\"></span></div><div class=\"playlist\" id=\"playlist"+i+"\">" + listhtml + "</div></div>";
		}
	}
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://timehub.cn/api/musicbox/musicbox.css\">");
})();

//creat a audio dom
var mplayer = new Audio();

function val(obj) {return document.getElementById(obj)};

function play(lNum, sNum) {
	//如果是点击了列表中的歌曲
	if(sNum!==-1) {
		//不是同一首歌的情况下切歌
		if((lNumNow !== lNum || sNumNow !== sNum) && mplayer.src){
			changeSong(lNum, sNum);
		}
	} else {
		//完全没开始放歌的时候初始化并且播放第一首
		if(!mplayer.src) {
			mplayer.src = playList[lNum][0][1];
			mplayer.play();
			val("play"+lNum).style.background = img0;
			lNumNow = lNum;
			//播放下一首
			mplayer.onended = function() {
				if(sNumNow < playList[lNumNow].length-1)sNumNow++;
				else sNumNow = 0;
				this.src = playList[lNumNow][sNumNow][1];
				this.play();
				val("song_name"+lNumNow).innerHTML = playList[lNumNow][sNumNow][0]+ " " + playList[lNumNow][sNumNow][2];
			}
			mplayer.loadeddata = timeListener();
		} else if(lNumNow != lNum) {
			changeSong(lNum, sNum);
		} else {
			if(mplayer.paused) {
				val("play"+lNumNow).style.background = img0;
				mplayer.play();
			}
			else {
				val("play"+lNumNow).style.background = img1;
				mplayer.pause();
			}
		}
	}
}

function showlist(num) {
	val("playlist" + num).style.display === "block" ? val("playlist" + num).style.display = "none" : val("playlist" + num).style.display = "block"
}

function changeSong(lNum, sNum) {
	if(sNum === -1) sNum = 0;
	mplayer.src = playList[lNum][sNum][1];
	mplayer.play();
	val("song_name"+lNum).innerHTML = playList[lNum][sNum][0]+ " " + playList[lNum][sNum][2];
	val("play"+lNumNow).style.background = img1;
	val("play"+lNum).style.background = img0;
	lNumNow = lNum;
	sNumNow = sNum;
}

//播放时间
function timeChange(time, timePlace) {//默认获取的时间是时间戳改成我们常见的时间格式
    var timePlace = val(timePlace);
    //分钟
    var minute = time / 60;
    var minutes = parseInt(minute);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //秒
    var second = time % 60;
    seconds = parseInt(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var allTime = "" + minutes + "" + ":" + "" + seconds + ""
    timePlace.innerHTML = allTime;
}

//播放时间变化
function timeListener() {
	clearInterval(interval);
    interval = setInterval(function() {
    	var currentTime = mplayer.currentTime;
    	timeChange(currentTime, "currentTime"+lNumNow);
    	if(typeof mplayer.duration === "number"){
    		timeChange(mplayer.duration, "allTime"+lNumNow);
    	}
    }, 1000);
}