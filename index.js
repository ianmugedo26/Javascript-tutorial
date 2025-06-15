let countDisplay = document.getElementById("count");
let incrementId = document.getElementById("incrementId");
let resetBtn = document.getElementById("resetBtn");
let decrementBtn = document.getElementById("decrementBtn")

let count = 0;

incrementId.addEventListener("click", function () {

    count++;
    countDisplay.innerText = count;

});

resetBtn.addEventListener("click", function () {

    count = 0;
    countDisplay.innerText = count;
});

decrementBtn.addEventListener("click", function() {

    count--;
    countDisplay.innerText = count;
})