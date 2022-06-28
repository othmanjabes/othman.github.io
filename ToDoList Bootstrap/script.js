document.getElementById('form-Task').addEventListener('submit',saveTask);
// Save new To-Do
function saveTask(){
    let title = document.getElementById('title').value;
    let discription = document.getElementById('discription').value;
    let task ={
        title,discription
    };
    if(localStorage.getItem('tasks') === null){
        let = task = [];
    }
}

// Delete To-Do
function deleteTask(){

}

// Show To-Do List
function getTasks(){

}

getTasks();