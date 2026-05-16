let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits(){
    localStorage.setItem("habits", JSON.stringify(habits));
}

function renderHabits(){
    const habitList = document.getElementById("habitList");
    habitList.innerHTML = "";

    habits.forEach((habit, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${habit.completed ? 'completed' : ''}">
                ${habit.name}
            </span>

            <div>
                <button onclick="toggleHabit(${index})">✔</button>
                <button onclick="deleteHabit(${index})">🗑</button>
            </div>
        `;

        habitList.appendChild(li);
    });
}

function addHabit(){

    const input = document.getElementById("habitInput");

    if(input.value.trim() === ""){
        return;
    }

    habits.push({
        name: input.value,
        completed: false
    });

    input.value = "";

    saveHabits();
    renderHabits();
}

function toggleHabit(index){

    habits[index].completed = !habits[index].completed;

    saveHabits();
    renderHabits();
}

function deleteHabit(index){

    habits.splice(index, 1);

    saveHabits();
    renderHabits();
}

renderHabits();