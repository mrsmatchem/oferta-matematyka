document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementsByClassName("marketing__video")[0];
  const iconToTop = document.querySelector(".footer-icon-to-top");
  const header = document.querySelector(".header");

  // console.log(header);

  window.addEventListener("scroll", () => {
    const scrollTopLine = window.scrollY;
    const scrollBottomLine = window.scrollY + window.innerHeight;
    const videoCenterLine = video.offsetTop + video.offsetHeight / 2;

    if (scrollTopLine > header.clientHeight) {
      iconToTop.classList.remove("invisible");
    } else {
      iconToTop.classList.add("invisible");
    }

    if (scrollBottomLine > videoCenterLine && scrollTopLine < videoCenterLine) {
      video.play();
    } else video.pause();
  });
});
