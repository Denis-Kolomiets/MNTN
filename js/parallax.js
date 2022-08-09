
// function parallax(even) {
//    this.querySelectorAll('.layer').forEach(layer => {
//       let speed = layer.getAttribute('data-speed');
//       layer.style.transform = `translateY(${event.clientY * speed/1000}px)`;
//    });
// }

// document.addEventListener('mousemove', parallax)

const parallax1 = document.getElementById("parallax1");

window.addEventListener("scroll", function() {
   let offset = window.pageYOffset;
   parallax1.style.backgroundPositionY = offset * 0.1 + "px";
})

const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function() {
   let offset = window.pageYOffset;
   parallax2.style.backgroundPositionY = offset * 0.02 + "px";
})

