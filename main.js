function addStar() {
    const star = document.createElement("div")
    star.style.width = `1px`
    star.style.height = `1px`
    star.style.position = `fixed`

    star.style.zIndex = `-100`
    star.style.backgroundColor = `#efefef`

    const xScale = Math.random()
    star.style.left = `${xScale * 100}vw`
    const yScale = Math.random()
    star.style.top = `${yScale * 100}vh`

    document.body.appendChild(star)
}

const totalStarCount = 1000
for (let i = 0; i < totalStarCount; i++) {
    addStar()
}