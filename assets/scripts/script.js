const currentDay = $('#currentDay');
const schedule = $('#container')
var startHour = 8
var endHour = 18

// Handle displaying date
displayTime()
function displayTime() {

    let today = moment().format('ddd, MMM Do');
    currentDay.text(today);
}

for (let i = 0; i < startHour; i++) {

    let timeSlotWrapper = $('<div>')
    .addClass("time-slot-Wrapper");

    let labelHour = moment(`2023-01-01T${i < 10 ? "0" + i : i}:00:00`).format("ha");
    let timeLabel = $('<label>')
    .text(labelHour);

    let textEntry = $('<textarea>')
    .attr("id", i);

    let saveButton = $('<button>')
    .attr("data-hour", i)
    .text()
    
}


