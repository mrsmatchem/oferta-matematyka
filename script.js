document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementsByClassName("marketing__video")[0];

  window.addEventListener("scroll", () => {
    if (
      window.scrollY > video.offsetTop - video.scrollHeight / 2 &&
      window.scrollY < video.offsetTop + video.scrollHeight / 2
    ) {
      video.play();
    } else video.pause();
  });
});
