  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.hitokoto.cn/?c=b&c=c&c=d&c=e&c=f&c=h&c=i&c=j&c=k&c=l');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var hitolink = document.getElementById('hitokoto');
      hitolink.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      if(data.from_who == null){
        data.from_who = "";
      }
      hitokoto.innerText = "『 " +data.hitokoto +" 』";
      hitokoto_from.innerText = "—— " +data.from_who +"「" +data.from +"」";
    }
  }
  xhr.send();
