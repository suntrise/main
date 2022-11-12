ranggc()
var arr=[]
var i=0
var str=""
	function ranggc() {
		arr = ["<h1>Start me up.</h1><h3>—— Windows 95 广告语</h3>",
		"<h1>Yes you can.</h1><h3>—— Windows XP 广告语</h3>",
    "<h1>Do more with less.</h1><h3>—— Windows Server 2003 广告语</h3>",
		"<h1>The Wow Starts Now.</h1><h3>—— Windows Vista 广告语</h3>",
		"<h1>Your PC, Simplified.（电脑，就这么简单）</h1><h3>—— Windows 7 广告语</h3>",
		"<h1>Everything at once.（一切精彩尽此时）</h1><h3>—— Windows 8 广告语）</h3>",
		"<h1>Your World On the Go.（你的世界，随你走）</h1><h3>—— Windows 8 广告语</h3>",
		"<h1>Work. Play. Together.</h1><h3>—— Windows 8 广告语</h3>",
		"<h1>Life without walls.</h1><h3>—— Windows 8 广告语</h3>",
    "<h1>创新，从云开始</h1><h3>—— Windows Server 2012 广告语</h3>",
		"<h1>Put people first.（以人为本）</h1><h3>—— Windows Phone 7.5 广告语</h3>",
		"<h1>Reinvented around you.（为你重新设计）</h1><h3>—— Windows Phone 8 广告语）</h3>",
    "<h1>坐和放宽</h1><h3>—— Windows 10</h3>",
		"<h1>Do great things.</h1><h3>—— Windows 10 广告语</h3>",
		"<h1>Bring closer what you love.（与你所爱，更进一步）</h1><h3>—— Windows 11 广告语</h3>",
		"<h1>Your potential. Our passion.（您的潜力，我们的动力）</h1><h3>—— 微软 2002-2011 年宣传口号</h3>",
		"<h1>Be what's next.（智在未来）</h1><h3>—— 微软 2011 年宣传口号</h3>",
    	"<h1>Think different.</h1><h3>—— Apple</h3>"]
		i = Math.round(Math.random()*(arr.length-1))
		str = arr[i]
		ggc.innerHTML = str;

	}
