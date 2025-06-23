document.addEventListener('DOMContentLoaded', function() {
  let audios = document.querySelectorAll('.js-audio');

  audios.forEach((audioPlayer) => {
    let audio = audioPlayer.querySelector('audio');
    let total = audioPlayer.querySelector(".audio__total");

    audio.addEventListener("loadeddata", () => {
        total.textContent = getTimeCodeFromNum(
          audio.duration
        );
      },
      false
    );

    let timeline = audioPlayer.querySelector(".audio__timeline");
    timeline.addEventListener("click", e => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
      audio.currentTime = timeToSeek;
    }, false);

    setInterval(() => {
      let progressBar = audioPlayer.querySelector(".audio__progress");
      progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
      audioPlayer.querySelector(".audio__current").textContent = getTimeCodeFromNum(
        audio.currentTime
      );
    }, 500);

    let playBtn = audioPlayer.querySelector(".audio__play-pause");
    playBtn.addEventListener("click", () => {
        if (audio.paused) {
          playBtn.classList.remove("play");
          playBtn.classList.add("pause");
          audio.play();
        } else {
          playBtn.classList.remove("pause");
          playBtn.classList.add("play");
          audio.pause();
        }
      },
      false
    );

    let muteButton = audioPlayer.querySelector(".audio__mute");

    muteButton.addEventListener("click", () => {
      audio.muted = !audio.muted;
      if (audio.muted) {
        muteButton.classList.remove("unmute");
        muteButton.classList.add("mute");
      } else {
        muteButton.classList.add("unmute");
        muteButton.classList.remove("mute");
      }
    });
  });
});

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}
