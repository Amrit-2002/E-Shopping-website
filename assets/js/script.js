// Special Countdown 
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");


let countDown = () => {
    // Get the current date and time
    let currentDate = new Date();

    // Calculate the end of the current day (midnight)
    let endOfDay = new Date(currentDate);
    endOfDay.setHours(24, 0, 0, 0);

    // Calculate the remaining time until the end of the day
    let myDate = endOfDay - currentDate;

    // Calculate the time components
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    // Update the HTML elements with the calculated time
    daysItem.innerHTML = 0; // Always 0 since we are only counting within a day
    hoursItem.innerHTML = hours < 10 ? '0' + hours : hours;
    minItem.innerHTML = min < 10 ? '0' + min : min;
    secItem.innerHTML = sec < 10 ? '0' + sec : sec;
}

// Call the countDown function every second
setInterval(countDown, 1000);

// nav hide  
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
});

// // Scroll Back To Top 
$('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

        scrollTop: $($(this).attr('href')).offset().top,

    },
        500,
        'linear'
    );

});


