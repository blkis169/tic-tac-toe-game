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
})

//كتابة x o عند الضفط

td.forEach(function (td) {
    td.classList.add("can_write")
    td.addEventListener('click', function () {
        if (xoArray.length > 0) {
            if (td.classList.contains("can_write")) {
                let after = xoArray.shift()
                td.textContent = after
                td.classList.remove("can_write")
            }


        }
    })
})