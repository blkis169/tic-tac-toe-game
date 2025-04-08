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
let choose_mood_alert = document.querySelector(".choose_mood_alert")


//عند الضغط على فريند مود 
const friend_mood = function (el) {
    withfriend.style.backgroundColor = "aliceblue";
    withcomp.style.backgroundColor = "rgba(240, 248, 255, 0)";

    withcomp.classList.remove("mood-on")
    withfriend.classList.add("mood-on")

}

withfriend.addEventListener('click', friend_mood)
//*******************************************************************************//



//عند الضغط على كمبيوتر مود
const computer_mood = function (el) {
    withcomp.style.backgroundColor = "aliceblue";
    withfriend.style.backgroundColor = "rgba(240, 248, 255, 0)";

    withfriend.classList.remove("mood-on")
    withcomp.classList.add("mood-on")
}

withcomp.addEventListener('click', computer_mood)

//*******************************************************************************//




//عند الانتهاء من الجولة 
finalbut.addEventListener('click', function () {
    window.location.reload(true)

})
//*******************************************************************************//

//زر البداية 
button.addEventListener('click', function () {
    first_div.style.display = "none"
    second_div.style.display = "grid"
})

//*******************************************************************************//


//للرجوع لصفحة البداية 
arrow.addEventListener('click', function () {
    first_div.style.display = "flex"
    second_div.style.display = "none"
    window.location.reload(true)
})

// للسماح بالكتابة بعد التأكد من وضع المود
 function alow_writing(){
    td.forEach(function (tl) {
                tl.classList.add("can_write")
                //اذا كان عنصر الطاولة يحتوي على كلاس يمكن الكتابة 
                tl.addEventListener('click', function () {
                    if (tl.classList.contains("can_write")) {
                        let after = xoArray.shift()
                        tl.textContent = after
                        //شرط لتعين لون وشكل كل من الاكس والاو
                        if (tl.innerText === "X") {
                            tl.classList.add("for-X")
                        } else if (tl.innerText === "O") {
                            tl.classList.add("for-o")
                        }
}
                    tl.classList.remove("can_write")
                }
            )
            }
        )} 
//***********************************************//

function winning_or_losing(){
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
}

//*******************************************************************************//

let count = 0

//والبدء باللعب عند الضغط على ال فريند مود
withfriend.addEventListener('click', function () {
    const mood_promise = new Promise((rev, rej) => {

       //شرط للتأكد ان فريند مود هو المختار
        if (withfriend.classList.contains("mood-on")) {
            withcomp.removeEventListener('click', computer_mood)
            //في حال كان التأكد صح يمكن الكتابة في الطاولة
            rev(alow_writing())
            winning_or_losing()
        } else {
            rej("No")
        }
    })
    mood_promise.then(
        (rev) => (rev),
        (rej) => console.log(rej)
    )
})

//*******************************************************************************//

function conctbar(){
    if (!withcomp.classList.contains("mood-on")&& !withfriend.classList.contains("mood-on")){
      choose_mood_alert.textContent = "choose mood first"
    }
}

conctbar()