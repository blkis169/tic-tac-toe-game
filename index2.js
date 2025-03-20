let button = document.querySelector("button");
let first_div = document.querySelector(".par");
let second_div = document.querySelector(".par_the_s")
let arrow = document.querySelector(".arrow");
let td = document.querySelectorAll("td")
let xoArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]





//التحويل بين الصفحتين 
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
            console.log(count)
            let first = new Promise((rev, reg) => {
                if (count >= 5) {
                    rev("won")
                }
                else {
                    reg("lose");
                }

            }
            )
            first.then(
                (final) => console.log(`you${final}`),
                (yy) => console.log(`you${yy}`)
            )
        })



    }
})












