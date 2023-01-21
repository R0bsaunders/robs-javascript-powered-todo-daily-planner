const currentDay = $('#currentDay');
const schedule = $('.container')
var startHour = 8
var endHour = 17
var currentHour = moment().format("H");
// Handle displaying date
displayTime()

function displayTime() {

    let today = moment().format('ddd, MMM Do');
    currentDay.text(today);
}

// Loop to create all timeblocks. div holds: Label to show time slot, textarea for text entry and button to save

for (let i = startHour; i <= endHour; i++) {
    // Create containing DIV element
    let timeblockWrapper = $('<div>')
    .attr("data-hour", i)
    .addClass("row");

    // Create time slot label
    let timeblockHour = moment(`2023-01-01T${i < 10 ? "0" + i : i}:00:00`).format("ha");
    let timeblockLabel = $('<label>')
    .addClass("hour")
    .text(timeblockHour);

    // Create text entry area
    let textEntry = $('<textarea>')
    .addClass("textarea")
    .attr("id", i)
    .val(localStorage.getItem(i))

    // Set future, past or present class based on current time

    if(i < currentHour) {
        textEntry.addClass("past")
        //textEntry.attr('readonly', 'true');

    } else if (i == currentHour) {
        textEntry.addClass("present");

    } else {
        textEntry.addClass("future");

    };

    // Create save button
    let saveButton = $('<button>')
    .attr("data-hour", i)
    .addClass("saveBtn")
    .on("click", btnEventListener);

    // Create icon to hold floppy disk from FontAwesome
    let buttonIcon = $('<i>')
    .addClass("fas fa-save");

    // Append all elements to HTML
    timeblockWrapper.append(timeblockLabel);
    timeblockWrapper.append(textEntry);
    saveButton.append(buttonIcon);
    timeblockWrapper.append(saveButton);
    schedule.append(timeblockWrapper);
};




function btnEventListener(event) {

    let onClick = $(event.currentTarget);
    let elementId = onClick.attr("data-hour");
    let description = $(`#${elementId}`);
    
    if (description.val() === "") {
        localStorage.removeItem(elementId);

    } else {
        localStorage.setItem(elementId, description.val());
    };




}