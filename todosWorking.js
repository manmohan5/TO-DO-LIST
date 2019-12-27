
const taskItem = document.getElementById('add-item');

let itemContainer = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

refreshLocal();

var button = document.getElementById('btn').addEventListener('click', newItem);



function setInLocal() {
    localStorage.setItem('tasks', JSON.stringify(itemContainer));
    refreshLocal(itemContainer);
}

function refreshLocal() {

    const taskList = JSON.parse(localStorage.getItem('tasks'));
    while (taskItem.hasChildNodes()) {
        taskItem.removeChild(taskItem.lastChild);
    }
    let index = 0;

    for (let item of taskList) {

        var li = document.createElement("li");
        li.setAttribute('position', index++);
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "checkbox";
        checkBox.checked = item.status;


        li.appendChild(checkBox);

        checkBox.addEventListener('click', completeItem);

        const text = document.createElement('div');
        text.innerText = item.text;
        if (item.status) {
            text.style.textDecoration = 'line-through';
        }

        li.appendChild(text);


        var removeButton = document.createElement("button");
        removeButton.innerText = "\u2716";
        removeButton.className = "remove";
        removeButton.setAttribute("id", "delete");
        li.appendChild(removeButton);
        removeButton.addEventListener('click', removeItem);


        taskItem.appendChild(li);


        // if (item.status) {
        //     item.status = true;
        // }

    }
}

function newItem() {
    var item = document.getElementById("input").value;
    if (item.length === 0) {
        alert("Empty Item");
    }
    else {

        itemContainer.push({
            text: item,
            status: false,
        });

        document.getElementById("input").value = "";
        setInLocal();
    }
}

document.body.onkeyup = function (e) {
    if (e.keyCode === 13) {
        newItem();
    }
};

function removeItem() {

    const index = event.srcElement.parentElement.getAttribute('position');
    itemContainer.splice(index, 1);

    setInLocal();
}

function completeItem(list) {
    const index = list.target.parentNode.getAttribute('position');
    itemContainer[index].status = list.srcElement.checked;
    setInLocal();
}