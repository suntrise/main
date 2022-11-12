  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.hitokoto.cn');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var hitokoto = document.getElementById('hitokoto_text');
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      if(data.from_who == null){
        data.from_who = "";
      }
      hitokoto.innerText = data.hitokoto;
      hitokoto_from.innerText = "—— " +data.from_who +"「" +data.from +"」";
    }
  }
  xhr.send();
