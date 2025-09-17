function addStar() {
    const star = document.createElement("div")
    star.style.width = `1px`
    star.style.height = `1px`
    star.style.position = `fixed`

    star.style.zIndex = `-1`
    star.style.backgroundColor = `#efefef`

    const xPos = Math.random() * window.innerWidth;
    star.style.left = `${xPos}px`;
    const yPos = Math.random() * window.innerHeight;
    star.style.top = `${yPos}px`;

    document.body.appendChild(star)
}

const totalStarCount = 100
for (let i = 0; i < totalStarCount; i++) {
    addStar();
}