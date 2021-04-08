const form = document.getElementById('newHabit')
form.addEventListener('submit', sendHabitInfo)


// fetch request for when user creates a habit

function sendHabitInfo(e){
    e.preventDefault()
    const habitData = {
        habit_name: e.target.habitName.value,
        frequency: e.target.habitFreq.value,
        user_id: 12345,
        // user_id: window.location.hash?
    }

    const options = { 
        method: 'POST',
        body: JSON.stringify(habitData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/habits', options)
        .then(r => r.json())
        .then(data => renderHabit(data)) // and close form
        .then(() => e.target.reset())
        .catch(console.warn)

    
}


//Displays all posts on page load for a specific user on pageload

window.addEventListener('load', getAllHabitsForUser)

function getAllHabitsForUser(){

const user_id = 12345 // static for now until can get from local storage

fetch(`http://localhost:3000/habits/user/${user_id}`)
.then(r => r.json())
.then(data => renderHabits(data))
.catch(console.warn)
}


// Request for when completed button is clicked

async function updateCompleted(id){
    const options = { 
        method: 'PATCH'
    };
    try{
    const res = await fetch(`http://localhost:3000/habits/${id}`, options)
    
    const resData = await res.json(); 
    console.log(resData)
    // location.reload()
    window.alert('Completed')
    }

    catch(err)
    {console.log(err)
    }

}

