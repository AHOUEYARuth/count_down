function count() {
    const date = new Date("2024-10-08T03:01:01").getTime();
    const nowTime = new Date().getTime();
    const restantTime = date - nowTime;

    const days = Math.floor(restantTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((restantTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((restantTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((restantTime % (1000 * 60)) / 1000);

    const formattedDays = String(days).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    document.querySelector('#days').innerHTML = formattedDays;
    document.querySelector('#hours').innerHTML = formattedHours;
    document.querySelector('#minutes').innerHTML = formattedMinutes;
    document.querySelector('#seconds').innerHTML = formattedSeconds;

    if (restantTime < 0) {
        clearInterval(timerInterval);
        document.querySelector('.container').innerHTML = "Le temps est écoulé !!!!";
    }
}

const timerInterval = setInterval(count, 1000);

