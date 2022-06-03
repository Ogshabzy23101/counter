let count = 0;

const btns = document.querySelectorAll(`.btn`);
const value = document.getElementById(`value`);


btns.forEach(function (btn) {
    btn.addEventListener(`click`, function (e) {
        const getNumber = e.currentTarget.classList;
        if (getNumber.contains("increase")) {
            count++;

        } else if (getNumber.contains("decrease")) {
            count--;
        }
        else {
            count = 0
        }
        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
        value.textContent = count;
    });

})
