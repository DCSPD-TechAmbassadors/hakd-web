document.querySelectorAll("#stars .star").forEach((e) => {
    let points = [];
    for (let i = 0; i < 300; i++) {
        let x = Math.random() * 3000;
        let y = Math.random() * 5000;
        points.push(`${x}px ${y}px #FFF`);
    }
    e.style.boxShadow = points.join(",");
});

let rootNode = document.querySelector("html");
document.addEventListener("scroll", (e) => {
    rootNode.style.setProperty("--scroll-distance", -pageYOffset + "px");
})
