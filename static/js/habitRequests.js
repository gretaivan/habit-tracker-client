const form = document.getElementById('newHabit')

form.addEventListener('submit', sendHabitInfo)


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
        .then(data => renderHabit(data))
        .then(() => e.target.reset())
        .catch(console.warn)

    
}