const taskItem = document.getElementById('add-item');

[{text: "something", status: false}, {}]

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
        li.setAttribute("draggable", "true");
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
            // console.log('check');
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

 
function dragStart(e) {
    console.log('start');
  this.style.opacity = '0.4';
  dragSrcEl = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
};
 
function dragEnter(e) {
    console.log('enter');

  this.classList.add('over');
}
 
function dragLeave(e) {
    console.log('leave');

  e.stopPropagation();
  this.classList.remove('over');
}
 
function dragOver(e) {
    console.log('over');

  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}
 
function dragDrop(e) {
    console.log('drop');
console.log(dragSrcEl.innerHTML + " = "+ this.innerHTML+" "+e.dataTransfer.getData('text/html'));
  if (dragSrcEl.innerHTML != this.innerHTML) {
      let newList = dragSrcEl.innerHTML;
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = newList;
  }
  return false;
}
 
function dragEnd(e) {
    console.log('end');

  var listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}



  function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    // el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    // el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
  }
   
  var listItems = document.querySelectorAll('li');
  
  [].forEach.call(listItems, function(item) {
    addEventsDragAndDrop(item);
  });

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
    const text = removeTask.replace( '','');

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



// var item = null;

// document.addEventListener('dragstart', function(e)
// {
//   item = e.target;
	
//   e.dataTransfer.setData('text', '');

// }, false);  


  setInLocal();