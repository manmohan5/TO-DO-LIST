
const taskItem = document.getElementById('add-item');

let itemContainer = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : {}

refreshLocal();

var button = document.getElementById('btn').addEventListener('click', newItem);

function setInLocal() {
    localStorage.setItem('tasks', JSON.stringify(itemContainer));
    refreshLocal(itemContainer);
}

function refreshLocal(){
    
}

function newItem() {
    var item = document.getElementById("input").value;

    if (item.length === 0) {
        alert("Empty Item");
    }
    else {

        var ul = document.getElementById("add-item");
        var li = document.createElement("li");
        li.setAttribute("id", "check");
        var removeButton = document.createElement("button");
        removeButton.innerText = "\u2716";
        removeButton.className = "remove";
        removeButton.setAttribute("id", "delete");

        removeButton.onclick = function () {
            removeItem(li);
        }

        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "checkbox";

        checkBox.onclick = function () {
            completeItem(li);
        }

        li.appendChild(checkBox);
        li.appendChild(document.createTextNode(item));
        li.appendChild(removeButton);

        ul.appendChild(li);

        document.getElementById("input").value = "";

        itemContainer[item] = false;
        // displayLocaltasks();
        setInLocal();

    }
}

document.body.onkeyup = function (e) {
    if (e.keyCode === 13) {
        newItem();
    }
};



function removeItem(list) {
    let removeTask = event.target.parentElement;
    taskItem.removeChild(removeTask);

    let change = removeTask.innerText;
    removeTask=change.slice(0,change.length-1);
    // 
    const text = removeTask.replace( 'delete','');

    delete itemContainer[text];
    setInLocal();
}

function completeItem(list) {
    element = document.querySelector('#check');
    if (event.srcElement.checked) {
        // console.log("yes");
        list.style.setProperty('text-decoration', 'line-through')
    }
    else {
        // console.log("No");
        list.style.setProperty('text-decoration', 'none')
    }
}

// function displayLocaltasks() {
//     Object.keys(itemContainer).forEach((task) => {
//       const li = document.createElement('li');
  
//       // eslint-disable-next-line no-restricted-syntax
  
//       if (itemContainer[task] === true) {
//         const strike = document.createElement('s');
//         strike.appendChild(document.createTextNode(task));
//         li.appendChild(strike);
//       } else {
//         li.appendChild(document.createTextNode(task));
//       }
//       const delBtn = createDeleteButton();
//       li.appendChild(delBtn);
//       taskList.appendChild(li);
//     });
//   }

// displayLocaltasks();
setInLocal();