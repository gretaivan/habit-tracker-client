const modal = document.getElementById("modal");
const modalOpen = document.getElementById("newHabitButton");
const span = document.getElementsByClassName("close")[0];

modalOpen.addEventListener('click', () => modal.style.display = "block");
span.addEventListener('click', () => modal.style.display = "none");

//renders an individual habit

function renderHabit(habitData) {

    // //if last completed date and todays date are the same, I don't want to show button

    // let today = new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now())
    // // let today = "2021-04-09"

    // // let lastCompletedDate = "2021-04-09T00:00:00.000Z"
    // let lastCompletedDate = habitData.last_comp_date
    // console.log(lastCompletedDate)


    let habit = document.createElement('div');
    habit.setAttribute('class', 'habit');
    let completed = document.createElement('h4');
    completed.setAttribute('class', 'completed');
    // if (habitData.completed) {
    //     completed.innerHTML = 'Completed <span class="completeTick">&#10004;</span>';
    // } else {
    //     completed.innerHTML = "Double click icon if completed";
    // }
    habit.appendChild(completed);
    let streakMessage = document.createElement('h4');
    streakMessage.setAttribute('class', 'streakMessage');
    streakMessage.innerHTML = 'Congratulations<br /> you have reached';
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
    habitName.textContent = `Habit: ${habitData.habit_name}`
    habit.append(habitName)
    let frequency = document.createElement('h6')
  
    if (habitData.frequency === 1){
    
    frequency.textContent = `You are tracking this habit: Daily`
    }

    else if(habitData.frequency === 2){
        frequency.textContent = `You are tracking this habit every other day`}

    else{
        frequency.textContent = `You are tracking this habit: Weekly`
    }
    
    habitName.append(frequency)


     //if last completed date and todays date are the same, I don't want to show button

    // let completeButton = document.createElement('button')
    //         habitName.append(completeButton)
    //         completeButton.style.backgroundColor = "green"

      let lastCompletedDate = habitData.last_comp_date
        //   let today = new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now())
              let today = "2021-04-09"

          console.log(lastCompletedDate)
          console.log(today)


        

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



