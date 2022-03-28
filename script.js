const star = [...document.getElementsByClassName("star")];
const thankYou = document.getElementsByClassName("thankyou");
const rating = document.getElementsByClassName("rating");
const button = document.getElementsByTagName("button")[0];
const rating_count = document.getElementsByClassName("rating_count")[0];
const h4 = document.getElementsByTagName("h4")[0];

let select = 0;
star.forEach((ele) => {
    ele.addEventListener("mouseover", (e) => {
        removeActive();

        let index = star.indexOf(ele);

        for (i = -0; i <= index; i++) {
            star[i].classList.add("active");
        }
        select = index + 1;
    });
});

function removeActive() {
    star.forEach((e) => {
        e.classList.remove("active");
    });
}

rating[0].addEventListener("mouseleave", (e) => {
    if (select == 1) {
        removeActive();
        select = 0;
    }
});

button.addEventListener("click", (e) => {
    rating[0].style.display = "none";
    thankYou[0].style.display = "flex";
    h4.style.display = "block";

    rating_count.innerHTML = select;
});

h4.addEventListener("click", (e) => {
    rating[0].style.display = "flex";
    thankYou[0].style.display = "none";
    h4.style.display = "none";
    select = 0;
});
