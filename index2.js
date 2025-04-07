let button = document.querySelector(".first-button");
let first_div = document.querySelector(".par");
let second_div = document.querySelector(".par_the_s")
let arrow = document.querySelector(".arrow");
let td = document.querySelectorAll("td")
let xoArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
let endgame = document.querySelector(".the-end");
let finalbut = document.querySelector(".final-button")
let endgamediv = document.querySelector(".the-end div");
let withfriend = document.querySelector(".with-friend");
let withcomp = document.querySelector(".with-computer");


const friend_mood = function (el) {
    withfriend.style.backgroundColor = "aliceblue";
    withcomp.style.backgroundColor = "rgba(240, 248, 255, 0)";

    withcomp.classList.remove("mood-on")
    withfriend.classList.add("mood-on")

}

withfriend.addEventListener('click', friend_mood)


const computer_mood = function (el) {
    withcomp.style.backgroundColor = "aliceblue";
    withfriend.style.backgroundColor = "rgba(240, 248, 255, 0)";

    withfriend.classList.remove("mood-on")
    withcomp.classList.add("mood-on")
}

withcomp.addEventListener('click', computer_mood)




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




// عند الضفط
let count = 0
withfriend.addEventListener('click', function () {
    const mood_promise = new Promise((rev, rej) => {


        if (withfriend.classList.contains("mood-on")) {
            withcomp.removeEventListener('click', computer_mood)
            rev(td.forEach(function (tl) {
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
            )


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
                                    endgamediv.textContent = "you won :)",
                                    td.forEach(function (el) {
                                        el.classList.remove("can_write")
                                    })
                                )

                            }
                            else if ([...td].every(el => !el.classList.contains("can_write"))) {
                                reg(endgame.style.display = "flex",
                                    endgamediv.textContent = "try agin :("
                                ); // تعادل لأن جميع الخلايا ممتلئة
                            }

                        }
                        )
                        first.then(
                            (final) => (final),
                            (yy) => console.log(yy)
                        )
                    })





                }
            })
        } else {
            rej("No")
        }
    })




    mood_promise.then(
        (rev) => (rev),
        (rej) => console.log(rej)
    )

})