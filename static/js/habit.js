const modal = document.getElementById("modal");
const modalOpen = document.getElementById("newHabitButton");
const span = document.getElementsByClassName("close")[0];

modalOpen.addEventListener('click', () => modal.style.display = "block");
span.addEventListener('click', () => modal.style.display = "none");


function renderHabit(habitData) {

    document.getElementById('logout').addEventListener('click', logout)

    const username = localStorage.getItem('username');
    document.getElementById('username-display').textContent = username;

    let habit = document.createElement('div');
    habit.setAttribute('class', 'habit');

    let completed = document.createElement('h4');
    completed.setAttribute('class', 'completed');

    if (habitData.completed) {
        completed.innerHTML = 'Completed <span class="completeTick">&#10004;</span>';
    } else {
        completed.innerHTML = "Click icon if completed";
    }
    
    habit.appendChild(completed);

    habit.setAttribute("id", habitData.id);
    
    let main = document.querySelector('section')
    main.append(habit)

    generateStreak(habitData);

    let habitName = document.createElement('h1')

    let str = 'I will '; 

    if (habitData.habit_name == "code") {
        habitName.textContent = "Code"
        str += 'code 4 - 8 hours ';
    } else if (habitData.habit_name == "water") {
        habitName.textContent = "Drink"
        str += 'drink at least 8 glasses of water ';
    } else {
        habitName.textContent = "Sleep"
        str += ' sleep at least 8 hours ';
    }

    habit.append(habitName)
    let frequency = document.createElement('h6')
  
    if (habitData.frequency === 1){
        str += 'daily'
    }

    else if(habitData.frequency === 2){
        str += 'every other day';
    }
    else{
        str += 'weekly';
    }
    
    frequency.textContent = str;
    habitName.append(frequency)


    renderCompleted(habitData)
    
    main.addEventListener('click', completedTick)

}

function generateStreak(habitData) {
    console.log("generate streak")
    console.log(habitData.id)

    let habit = document.getElementById(habitData.id)

    let streakMessage = document.createElement('h4');
    streakMessage.setAttribute('class', 'streakMessage');

    habit.appendChild(streakMessage);
    let habitImg = document.createElement('img');
    habitImg.setAttribute('class', 'habitImg');
    let Imgsrc;
    if (habitData.habit_name == "code") {
        Imgsrc = "static/images/laptop.png";

    } else if (habitData.habit_name == "water") {
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

    streakDays.textContent = `Streak: ${habitData.streak}`
    streakBubble.appendChild(streakDays);
    habit.appendChild(streakBubble);
}


function renderCompleted(data){
    console.log("render completed")
    let habitDiv = document.getElementById(data.id)

    let div = document.createElement('div')
    let divId =  'completed-' + data.id;
    div.setAttribute("id", divId);
    habitDiv.appendChild(div);

    updateCompletedStatus(data.id); 

    if(data.completed === true){
        // loadCompleted(data.id); 
    } 
}

function completedTick(e){
    
    let id = e.target.parentNode.id
    let img = document.createElement('img');
    img.setAttribute("class", "completed-tick-img")
    let div = document.getElementById(`completed-${id}`)
    

    if (div.childElementCount < 1){
        img.src = 'static/images/checkmark.png'
        div.appendChild(img)
       
        updateCompleted(id)
  
    }

  location.reload();
}

function renderHabits(data){
    data.forEach(habit => renderHabit(habit))
}



