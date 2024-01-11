let count = 1;
function addSub() {
  let container = document.getElementById("input-container");
  let newContent = `
    <div class="card">
        <h3 class="subjectNumber">${++count}</h3>
        <input type="text" placeholder="Enter unit" class="unit__input">
        <input type="text" placeholder="Enter final grade" class="grade__input">
    </div>
  `;
  container.insertAdjacentHTML("beforeend", newContent);
}


function solve() {
    var unitElements = document.querySelectorAll('.unit__input');
    var gradeElements = document.querySelectorAll('.grade__input');
    var unitTotal = 0;
    var gradeTotal = 0;
    unitElements.forEach(function(unitElement, index) {
        var unit = unitElement.value;
        var floatUnit = parseFloat(unit);

        var gradeElement = gradeElements[index];
        var gradeValue = gradeElement.value;
        var floatGrade = parseFloat(gradeValue);
    
        unitTotal += floatUnit;
        gradeTotal += floatUnit * floatGrade;
    });

    var gwa = gradeTotal/unitTotal;
    console.log(Math.round(gwa * 1000) / 1000);
    let gwaOutput = document.getElementById('gwa-output');
    gwaOutput.innerHTML = "GWA: " + (Math.round(gwa * 1000) / 1000);
}