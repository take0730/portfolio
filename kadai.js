
  const image01src = 'url("img/image_1-01.png")';
  const image02src = 'url("img/image_2.png")';
  const image03src = 'url("img/image_03.png")';
  const image04src = 'url("img/image_04.png")';
function nextImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
    // 今1枚め
    header.style.backgroundImage = image02src;
  } else if (nowBg == image02src) {
    // 今2枚め
    header.style.backgroundImage = image03src;
  }else if (nowBg == image03src) {
    // 今2枚め
    header.style.backgroundImage = image04src;
  } else {
    // 今4枚め
    header.style.backgroundImage = image01src;
  }
}

function prevImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
    // 今1枚め TODO:
    header.style.backgroundImage = image04src;
  } else if (nowBg == image02src) {
    // 今2枚め TODO:
    header.style.backgroundImage = image01src;
  }else if (nowBg == image03src) {
    // 今3枚め TODO:
    header.style.backgroundImage = image02src;
  } else {
    // 今4枚め TODO:
    header.style.backgroundImage = image03src;
  }
}

// ページが表示されたタイミングで実行したい処理を書く
document.getElementById('top').style.backgroundImage = image01src;
document.getElementById('sc-to-left').addEventListener('click', prevImage);
document.getElementById('sc-to-right').addEventListener('click', nextImage);

// タイマーセット
setInterval(nextImage, 5000);

  
