function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Wudk6i5BJi":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgsong')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

