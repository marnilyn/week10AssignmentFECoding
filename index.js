
let btn = document.getElementById("myButton")

const addAnotherOne = (event) => {
    let newEle = document.createElement("div")
    newEle.innerHTML = "ANOTHER ONE"

    document.body.appendChild(newEle)
}

btn.addEventListener('click', addAnotherOne)

btn.addEventListener('mouseover', addAnotherOne)