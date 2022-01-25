const countdown = () => {
    // We added getTime method in order to get the time in numbers so we could play around with it //

    // Kindly note by assigning a new date it should be in the future //

    const countDate = new Date ("May 17,2023 00:00:00").getTime();

    // with gap variable we find the difference between now and the date given //

    const now = new Date().getTime();
    const gap = countDate - now

    // with these variables we could get timer work
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate the time
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
// We add the results to our relevant places of our HTML 
    document.querySelector(".day").innerText = textDay
    document.querySelector(".hour").innerText = textHour
    document.querySelector(".mins").innerText = textMinute
    document.querySelector(".second").innerText = textSecond

    // with an if statement we could run aother fuction if the countdown is near to zero
    // if ( gap < 10000){
    //     function(); }

}

// with setInterval function we set a page refresher in given millisecond // 
setInterval(countdown, 1000)
