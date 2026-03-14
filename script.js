const timeline = document.getElementById("timeline");
const progress = document.getElementById("progress");

let targetWidth = 0;
let currentWidth = 0;

timeline.addEventListener("mousemove", (e) => {

    const rect = timeline.getBoundingClientRect();
    const x = e.clientX - rect.left;

    targetWidth = (x / rect.width) * 100;

});

function animate() {

    currentWidth += (targetWidth - currentWidth) * 0.04;

    progress.style.width = currentWidth + "%";

    requestAnimationFrame(animate);
}

animate();

timeline.addEventListener("mouseleave", () => {
    targetWidth = 0;
});
