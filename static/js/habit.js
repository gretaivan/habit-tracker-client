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
    // if (habitData.frequency == 7) {
    //     streakDays.textContent = `${habitData.streak} WEEKS`
    // } else {
    //     streakDays.textContent = `${habitData.streak} DAYS`
    // }
    streakBubble.appendChild(streakDays);
    habit.appendChild(streakBubble);
}


function renderCompleted(data){
    console.log("render completed")
    let habitDiv = document.getElementById(data.id)

    // habitDiv.addEventListener('click', completedTick(id))
    let div = document.createElement('div')
    let divId =  'completed-' + data.id;
    div.setAttribute("id", divId);
    habitDiv.appendChild(div);

    //fetch 
    console.log("habit id")
    console.log(data.id)
    updateCompletedStatus(data.id); 
    // console.log(response)

    //get the status of habit ? 
    if(data.completed === true){
        // loadCompleted(data.id); 
    } 
}

// function loadCompleted(id){
//     console.log("loading tick")
//     let img = document.createElement('img');
//     img.setAttribute("class", "completed-tick-img")
//     let div = document.getElementById(`completed-${id}`)
//     img.src = 'static/images/checkmark.png'
//     div.appendChild(img)


    // completed.innerHTML = 'Completed <span class="completeTick">&#10004;</span>';
    // console.log(id)
    // updateCompleted(id)
// }


function completedTick(e){
    
    let id = e.target.parentNode.id
    let img = document.createElement('img');
    img.setAttribute("class", "completed-tick-img")
    let div = document.getElementById(`completed-${id}`)
    

    if (div.childElementCount < 1){
        img.src = 'static/images/checkmark.png'
        div.appendChild(img)
       
        updateCompleted(id)
        // generateStreak(e.target.parentNode)
    }

  location.reload();
    //  } else {
    //     console.log("ATTEMPT TO REMOVE")
    //     div.removeChild(div.lastChild)
    //     // updateCompleted(id)
    //  }
}

 
function test(){
//PEARL



      let lastCompletedDate = habitData.last_comp_date
        //   let today = new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now())
            let today = "2021-04-09"  // later add funciton for today

        console.log(lastCompletedDate)
        console.log(today)

    // btn logic 
    // requires:  last completed date, today, frequency 
    // to find if it is compliant with frequency
    //e.g. frequency: week 
        // frequency = 7; last completed_date = 07/04/2021; today 09/04/2021
        //isCompliant = (last_completed_date + frequency) === today  --> false
        // if()
        

    if (lastCompletedDate != null){
        var slicedastCompletedDate = lastCompletedDate.slice(0,10)
        console.log(slicedastCompletedDate)
        console.log(today)
        if (slicedastCompletedDate === today){
        var message = document.createElement('h4')
        message.textContent = "Already Completed Today"
        habitName.append(message)

        console.log(message)
 
        }

        else {
            console.log('has not been done today')
            let completeButton = document.createElement('button')
            habitName.append(completeButton)
            completeButton.style.backgroundColor = "green"
        
            if (habitData.frequency === 1){
            
                completeButton.textContent = "Completed Today"
        
                }
            
                else if(habitData.frequency === 2){
                    completeButton.textContent = "Completed in the last two days"}
            
                else{
                    completeButton.textContent = "Completed in the last week"
                }
                
            }     
      
       }

       else {
        console.log('has not been done today')
        let completeButton = document.createElement('button')
        habitName.append(completeButton)
        completeButton.style.backgroundColor = "green"
    
        if (habitData.frequency === 1){
        
            completeButton.textContent = "Completed Today"
    
            }
        
            else if(habitData.frequency === 2){
                completeButton.textContent = "Completed in the last two days"}
        
            else{
                completeButton.textContent = "Completed in the last week"
            }
            
            completeButton.onclick = () => updateCompleted(habitData.id)
    }

}

// }



//renders all habits on page
function renderHabits(data){
    data.forEach(habit => renderHabit(habit))
}



module.exports = {renderHabit, generateStreak, renderCompleted, completedTick, test, renderHabits}