const demo1=document.getElementById("demo1");
const demo2=document.getElementById("demo2");
const demo3=document.getElementById("demo3");
const showDay=document.querySelector(".showDay");
const showMonth=document.querySelector(".showMonth");
const showYear=document.querySelector(".showYear");
const btn=document.querySelector(".btn");

btn.addEventListener("click", () => {
    let day = parseInt(showDay.value);
    let month = parseInt(showMonth.value) - 1;
    let year = parseInt(showYear.value);

    let today = new Date();
    let birthDate = new Date(year, month, day);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += 30;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    demo1.innerHTML = years + " years";
    demo2.innerHTML = months + " months";
    demo3.innerHTML = days + " days";
});