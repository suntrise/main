ranggc()
var arr=[]
var i=0
var str=""
	function ranggc() {
		arr = ["<h1>Start me up.</h1><h3>（Windows 95 广告语）</h3>",
		"<h1>Yes you can.</h1><h3>（Windows XP 广告语）</h3>",
		"<h1>The Wow Starts Now.</h1><h3>（Windows Vista 广告语）</h3>",
		"<h1>Your PC, Simplified.（电脑，就这么简单）</h1><h3>（Windows 7 广告语）</h3>",
		"<h1>Everything at once.</h1><h3>（Windows 8 广告语）</h3>",
		"<h1>Your world on the go.</h1><h3>（Windows 8 广告语）</h3>"]
		i = Math.round(Math.random()*(arr.length-1))
		str = arr[i]
		ggc.innerHTML = str;

	}
