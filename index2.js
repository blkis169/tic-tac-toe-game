let button = document.querySelector(".first-button");
let first_div = document.querySelector(".par");
let second_div = document.querySelector(".par_the_s")
let arrow = document.querySelector(".arrow");
let td = document.querySelectorAll("td")
let xoArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
let endgame = document.querySelector(".the-end");
let finalbut = document.querySelector(".final-button")




//التحويل بين الصفحتين 
finalbut.addEventListener('click', function () {
    window.location.reload(true)
})
button.addEventListener('click', function () {
    first_div.style.display = "none"
    second_div.style.display = "grid"
})

arrow.addEventListener('click', function () {
    first_div.style.display = "flex"
    second_div.style.display = "none"
    window.location.reload(true)
})

// كتابة x o عند الضفط




td.forEach(function (tl) {
    tl.classList.add("can_write")
    tl.addEventListener('click', function () {
        if (tl.classList.contains("can_write")) {
            let after = xoArray.shift()
            tl.textContent = after
            if (tl.innerText === "X") {
                tl.classList.add("for-X")
            } else if (tl.innerText === "O") {
                tl.classList.add("for-o")
            }

            if (tl.innerText === "X") {
                tl.classList.add("for-X")
            } else if (tl.innerText === "O") {
                tl.classList.add("for-o")
            }
        }
        tl.classList.remove("can_write")


    })
})

// function check() {
//     if (td[0].classList.contains("for-X") || td[0].classList.contains("for-o")) {
//         console.log("true")

//     } else {
//         console.log("no")
//     }

// }
// check()

let count = 0



td.forEach(function (el) {
    if (el.classList.contains("can_write")) {
        el.addEventListener('click', function () {
            if (el.classList.contains("for-X") || el.classList.contains("for-o")) {
                count++
            }


            let first = new Promise((rev, reg) => {
                if (count >= 5 && td[0].classList.contains("for-X") && td[1].classList.contains("for-X") && td[2].classList.contains("for-X") || count >= 5 && td[0].classList.contains("for-o") && td[1].classList.contains("for-o") && td[2].classList.contains("for-o")
                    || count >= 5 && td[0].classList.contains("for-X") && td[4].classList.contains("for-X") && td[8].classList.contains("for-X") || count >= 5 && td[0].classList.contains("for-o") && td[4].classList.contains("for-o") && td[8].classList.contains("for-o")
                    || count >= 5 && td[0].classList.contains("for-X") && td[3].classList.contains("for-X") && td[6].classList.contains("for-X") || count >= 5 && td[0].classList.contains("for-o") && td[3].classList.contains("for-o") && td[6].classList.contains("for-o")
                    || count >= 5 && td[3].classList.contains("for-X") && td[4].classList.contains("for-X") && td[5].classList.contains("for-X") || count >= 5 && td[3].classList.contains("for-o") && td[4].classList.contains("for-o") && td[5].classList.contains("for-o")
                    || count >= 5 && td[6].classList.contains("for-X") && td[7].classList.contains("for-X") && td[8].classList.contains("for-X") || count >= 5 && td[6].classList.contains("for-o") && td[7].classList.contains("for-o") && td[8].classList.contains("for-o")
                    || count >= 5 && td[1].classList.contains("for-X") && td[4].classList.contains("for-X") && td[7].classList.contains("for-X") || count >= 5 && td[1].classList.contains("for-o") && td[4].classList.contains("for-o") && td[7].classList.contains("for-o")
                    || count >= 5 && td[2].classList.contains("for-X") && td[5].classList.contains("for-X") && td[8].classList.contains("for-X") || count >= 5 && td[2].classList.contains("for-o") && td[5].classList.contains("for-o") && td[8].classList.contains("for-o")
                    || count >= 5 && td[2].classList.contains("for-X") && td[4].classList.contains("for-X") && td[6].classList.contains("for-X") || count >= 5 && td[2].classList.contains("for-o") && td[4].classList.contains("for-o") && td[6].classList.contains("for-o")


                ) {

                    rev(
                        endgame.style.display = "flex",
                        td.forEach(function (el) {
                            el.classList.remove("can_write")
                        })
                    )

                }
                else {
                    reg("rev")
                }

            }
            )
            first.then(
                (final) => (final),
                (yy) => console.log(`you${yy}`)
            )
        })



    }
})












