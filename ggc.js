ranggc()
var arr=[]
var i=0
var str=""
	function ranggc() {
		arr = ["<h1>Start me up.</h1><h3>（Windows 95 广告语）</h3>",
		"<h1>Yes you can.</h1><h3>（Windows XP 广告语）</h3>",
		"<h1>The Wow Starts Now.</h1><h3>（Windows Vista 广告语）</h3>",
		"<h1>Your PC, Simplified.（电脑，就这么简单）</h1><h3>（Windows 7 广告语）</h3>",
		"<h1>Everything at once.（一切精彩尽此时）</h1><h3>（Windows 8 广告语）</h3>",
		"<h1>Your World On The Go.（你的世界，随你走）</h1><h3>（Windows 8 广告语）</h3>",
    	"<h1>坐和放宽</h1>"]
		i = Math.round(Math.random()*(arr.length-1))
		str = arr[i]
		ggc.innerHTML = str;

	}
