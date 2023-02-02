// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
// Select table
const table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    table.innerHTML = "";
    widthVal = parseInt(inputWidth.value);
    heightVal = parseInt(inputHeight.value);
    for(i = 0; i < heightVal; i++) {
        const trEl = document.createElement('tr');
        for(j = 0; j < widthVal; j++) {
            const tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
        }
        table.appendChild(trEl);
    }
}

//calling the makeGrid method when user submit table size
document.querySelector('input[type=submit]').addEventListener('click', function(e){
    e.preventDefault();
    makeGrid();
});

//adding the color to td when user click on the table
table.addEventListener('click', function(e){
    if(e.target.tagName === 'TD') {
        const td = e.target;
        let tdColor = td.style.backgroundColor;
        if(tdColor == ""){
            td.style.backgroundColor = colorPicker.value;
        } else {
            td.style.backgroundColor = "";
        }
    }
 });
