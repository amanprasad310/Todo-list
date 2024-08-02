var todo_list = [];

function add_on_div(){
    var add_div = '';
    for(let i = 0 ; i<todo_list.length;i++){
        const todolist = todo_list[i];
        const {name,dueDate} = todolist;
        const temp = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button 
                onclick = "
                    todo_list.splice(${i}, 1);
                    add_on_div();
                " class="delete_button">
                    delete
                </button>
            `;
        add_div += temp;
    }
    document.querySelector(".view").innerHTML = add_div;
}


function add_to_list(){
    const str = document.querySelector(".user_input");
    const strDate = document.querySelector(".user_date");
    const name = str.value;
    const dueDate = strDate.value;
    if(str.value !== ''){
    todo_list.push({name,dueDate});
    }
    str.value='';
    add_on_div();
}
add_on_div();