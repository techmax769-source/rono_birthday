$(document).ready(function () {
  const codeEl = $("#code");
  const fullText = codeEl.html();
  codeEl.html("");
  let progress = 0;

  // 🎵 Play/Pause button
  const audio = document.getElementById("hbd-audio");
  const playButton = document.getElementById("play-button");
  let isPlaying = false;

  playButton.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playButton.textContent = "▶ Play Music";
    } else {
      audio.play();
      playButton.textContent = "⏸ Pause Music";
    }
    isPlaying = !isPlaying;
  });

  // ✍️ Typewriter animation
  const timer = setInterval(() => {
    const currentChar = fullText.substr(progress, 1);
    if (currentChar === "<") {
      progress = fullText.indexOf(">", progress) + 1;
    } else {
      progress++;
    }

    codeEl.html(fullText.substring(0, progress) + (progress & 1 ? "_" : ""));

    if (progress >= fullText.length) {
      clearInterval(timer);
      codeEl.html(fullText);

      // ✨ Show image and text after typing ends
      setTimeout(() => {
        $("#birthday-image").fadeIn(300).addClass("show");
      }, 800);

      setTimeout(() => {
        $("#hbd-text").fadeIn(500).addClass("show");
      }, 1400);
    }
  }, 40);
});
