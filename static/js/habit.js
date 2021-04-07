const modal = document.getElementById("modal");
const modalOpen = document.getElementById("newHabitButton");
const span = document.getElementsByClassName("close")[0];

modalOpen.addEventListener('click', () => modal.style.display = "block");
span.addEventListener('click', () => modal.style.display = "none");

function renderHabit(habitData) {
    let habit = document.createElement('div');
    habit.setAttribute('class', 'habit');
    let completed = document.createElement('h4');
    completed.setAttribute('class', 'completed');
    if (habitData.completed) {
        completed.innerHTML = 'Completed <span class="completeTick">&#10004;</span>';
    } else {
        completed.innerHTML = "Double click icon if completed";
    }
    habit.appendChild(completed);
    let streakMessage = document.createElement('h4');
    streakMessage.setAttribute('class', 'streakMessage');
    streakMessage.innerHTML = 'Congratulations<br /> you have reached';
    habit.appendChild(streakMessage);
    let habitImg = document.createElement('img');
    habitImg.setAttribute('class', 'habitImg');
    let Imgsrc;
    if (habitData.habitType == "coding") {
        Imgsrc = "static/images/laptop.png";
    } else if (habitData.habitType == "water") {
        Imgsrc = "static/images/water.png";
    } else {
        Imgsrc = "static/images/sleep.png";
    }
    habitImg.setAttribute('src', Imgsrc);
    habit.appendChild(habitImg);
    let streakBubble = document.createElement('div');
    streakBubble.setAttribute('class', 'streak');
    let streakDays = document.createElement('h2');
    streakDays.setAttribute('class', 'streakDays');
    if (habitData.frequency == 7) {
        streakDays.textContent = `${habitData.streak} WEEKS`
    } else {
        streakDays.textContent = `${habitData.streak} DAYS`
    }
    streakBubble.appendChild(streakDays);
    habit.appendChild(streakBubble);
    let body = document.querySelector('body');
    body.appendChild(habit);


    //add info from the form 

    let habitName = document.createElement('h1')
    habitName.textContent = habitData.habit_name
    habit.append(habitName)
    let frequency = document.createElement('h5')
    frequency.textContent = `You want to track this ${habitData.frequency}`
    habitName.append(frequency)
}