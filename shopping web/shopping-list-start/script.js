const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const itemFilter = document.getElementById('filter')
const clearBtn = document.getElementById('clear');



function addItem(e){
    e.preventDefault();

    //validate Input

    const newItem = itemInput.value;

    if(newItem === ''){
        alert('please enter the something');
        return;

    }
    //creatign the list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));


    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);

    //add li to the dom
    checkUI();

    itemList.appendChild(li)
    itemInput.value = '';

}
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon  = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
 function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
 }


 function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        if(confirm('are you sure')){
             e.target.parentElement.parentElement.remove();

        }
       
    }
 }

//adding event listener


//adding clearing button funcionality 
function clearItems(){
    itemList.innerHTML = '';
    checkUI()
    

    
}

//filter function
function filterItems(e){
    const items = itemList.querySelectorAll('li');
    const text  = e.target.value.toLowerCase();
 
    
    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLocaleLowerCase();

        if(itemName.indexOf((text)) != -1){
            item.style.display = 'flex';


        }else{
            item.style.display = 'none';

        }

    })

}
//checking the state of application
function checkUI(){
    const items = itemList.querySelectorAll('li');
    if(items.length === 0){
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';

    }else{
        clearBtn.style.display = 'block';
        itemFilter.style.display ='block';

    }

}

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click',clearItems);
itemFilter.addEventListener('input',filterItems);

checkUI();

 