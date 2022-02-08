let form = document.querySelector("#registrar");
let input = form.querySelector("input");
let invitedList = document.querySelector("#invitedList");
let invitees = document.querySelector("#invitees");

form.addEventListener('submit',function(e){
    e.preventDefault();
    let value = input.value;
    let li = document.createElement('li');
    li.innerHTML = `
    <span>${value}</span>
    <label>confirmed
    <input type="checkbox"/>
    </label>
    <button>Edit</button>
    <button>Remove</button>
    `
    invitedList.append(li);

    input.value = "";
});

//visual cue for confirmed user
invitedList.addEventListener('change',function(e){
    let checkbox = e.target;
    let label = checkbox.parentNode;
    let li = label.parentNode;
    // console.log(label);
    // console.log(li);
    if(checkbox.checked){
        li.classList.add("responded");
    }
    else{
        li.classList.remove("responded");
    }
});

//edit and delete functionalities
invitedList.addEventListener('click', function(e){
    if(e.target.nodeName === "BUTTON"){
        let button = e.target;
        if(button.textContent === "Remove"){
            button.parentNode.remove();
        }
        else if(button.textContent === "Edit"){
            let span = button.parentNode.firstElementChild;
            let input = document.createElement("input");
            input.type = "text";
            input.value = span.textContent;
            button.parentNode.prepend(input);
            button.textContent  =  "Save";
            span.remove();
        }
        else if(button.textContent === "Save"){
            let input = button.parentNode.firstElementChild;
            let span  = document.createElement("span");
            span.textContent  = input.value;
            button.parentNode.prepend(span);
            button.textContent  = "Edit";
            input.remove();
        }
    }
})

invitees.addEventListener('click', function(e){
    let checkbox = e.target;
    let ul = document.getElementById('invitedList');
    let li = ul.querySelectorAll("li");
    if(checkbox.checked){
        for(let checkedItem of li){
            if(checkedItem.classList.contains("responded")){
                checkedItem.style.display = "block";
            }else{
                checkedItem.style.display = "none";
            }
        }

        // console.log("checked");
    }
    else if(checkbox.checked == false){
        for(let checkedItem of li){
            checkedItem.style.display = "block";
        }
        // console.log("unchecked");
    }
    
})