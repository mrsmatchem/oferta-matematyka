document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementsByClassName("marketing__video")[0];
  const testimonialsContainer = document.querySelector(".testimonials");
  const testimonials = document.querySelectorAll(".testimonial");

  console.log(testimonials);

  const testimonialsInColumn = Math.ceil(testimonials.length / 2);

  let maxHeightTestimonialParent = 0;

  for (let i = 0; i < testimonialsInColumn; i++) {
    maxHeightTestimonialParent += testimonials[i].offsetHeight;
  }

  // testimonialsContainer.style = `height: ${maxHeightTestimonialParent + 200}px`;

  console.log(maxHeightTestimonialParent);

  console.log(testimonialsInColumn);

  window.addEventListener("scroll", () => {
    const scrollTopLine = window.scrollY;
    const scrollBottomLine = window.scrollY + window.innerHeight;
    const videoCenterLine = video.offsetTop + video.offsetHeight / 2;

    if (scrollBottomLine > videoCenterLine && scrollTopLine < videoCenterLine) {
      video.play();
    } else video.pause();
  });
});
