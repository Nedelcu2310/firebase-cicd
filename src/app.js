const dayOfTheWeek = (date = new  {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wdnday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}


try {
    document.getElementById('day').innerText = dayOfTheWeek();
} catch(err) {}


exports.dayOfTheWeek = dayOfTheWeek;