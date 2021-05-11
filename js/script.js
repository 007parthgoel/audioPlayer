$(document).ready(function () {

  const equalizer = [50, 40, 30, 40, 50, 60, 80, 50, 40, 30, 40, 50, 60, 80,
    50, 40, 30, 40, 50, 60, 80, 50, 40, 30, 40, 50, 60, 80, 50, 40, 30, 40, 50, 60,
    80, 50, 40, 30, 40, 50, 60, 80, 50, 40, 30, 40, 50, 60, 80, 40];       // to define height of equalizer bar

  for (let i = 0; i < equalizer.length; i++) {
    let div = document.createElement('div');
    div.style.width = `${10}px`;
    div.style.height = `${2 * equalizer[i]}px`;
    // div.style.backgroundColor = "green";
    div.style.marginRight = '2px';
    div.style.borderRadius = '5px';
    div.classList.add(`audio_bar_${i}`);
    div.onclick = function () {
      setAudioTime(i);
    }
    $('.container')[0].appendChild(div);
  }

  function setAudioTime(i) {
    const length = $('.audio_player')[0].duration;
    $('div.completed').removeClass('completed');
    for (let j = 0; j <= i; j++) {
      $(`div.audio_bar_${j}`).addClass('completed');
    }
    $('.audio_player')[0].currentTime = length * i / 50;
    $('.audio_player')[0].play();
  }

  $('.pause').hide();

  $('img.play').click(function () {
    $('img.pause').show();
    $('img.play').hide();
    $('.audio_player')[0].play();
  });

  $('img.pause').click(function () {
    $('.play').show();
    $('.pause').hide();
    $('.audio_player')[0].pause();
    $('.audio_player')[0].currentTime = 0;
    $('div.completed').removeClass('completed');
  });

})