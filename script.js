//select tthe elements
const leaveAnotherReminderBtn = document.querySelector('#leaveAnotherReminderBtn');
const viewRemindersSection = document.querySelector('#viewRemindersSection');
const here = document.querySelector('#here')
const yourRemindersSection = document.querySelector('#yourRemindersSection');
const leaveReminderSection = document.querySelector('#leaveRemindersSection');
const newReminderButtons = document.querySelector('#newRemindersButtons');
const leaveAnotherReminderButtons = document.querySelector('#leaveAnotherReminderButtons');
const input = document.querySelector('#input')
const sendNewReminderBtn = document.querySelector('#sendNewReminderBtn');
const leaveReminderButtons = document.querySelector('#leaveReminderButtons');
const viewRemindersList = document.querySelector('ol')
const deleteRemindersBtn = document.querySelector('deleteReminders')

let reminders = [];
//loop array+ list on page
const listReminders = (array) => {
    reminders = [];
    console.log(reminders)
    for (let item of array) {
        let li = document.createElement('LI')
        viewRemindersList.appendChild(li);
        //innerHTML += `<li> $(item) </li>`
        li.textContent = item;
    }
};
//to delete array
const deleteReminders = () => {
    const listItems = document.querySelectorAll('li')
    for (let item of listItems) {
        viewRemindersList.removeChild(item);
    }
};

deleteRemindersBtn.addEventlistener('click', () => {
    deleteReminders();
});

// when we click Leave New Rem do this
leaveRemindersBtn.addEventlistener('click', () => {
    input.style.display = 'none';
    viewRemindersSection.style.display = 'block';
    leaveAnotherReminderBtn.style.display = 'block';
    leaveReminderBtn.style.display = 'none';
    leaveReminderSection.style.display = 'none';
    reminders.push(input.value);
//    console.log(reminders);
    input.value = '';
});
//when we click leave reminder does this
here.addEventListener('click', () => {
    yourRemindersSection.display = 'block';
    newReminderSection.display = 'block';
    leaveReminderSection = 'none';
    leaveReminderButtons = 'none';
    viewRemindersSection = 'none';
    listReminders(reminders);
}];
//when click NR do this
sendNewReminderBtn.addEventListener('click', () => {
    leaveReminderSection.style.display = 'block';
    leaveReminderButtons.style.display = 'block';
    input.style.display = 'none';
    yourRemindersSection.style.display = 'none';
    newRemindersSection.style.display = 'none';
    leaveAnotherReminderBtn.style.display = 'block';
    leaveAnotherReminderSection.style.display = 'block';
    leaveReminderBtn.style.display = 'block';
});
leaveReminderSection.style.display = 'none';
});