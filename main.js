let seatCount= 1;


function next(){
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    //show succes secreen
    const successScreen = document.getElementById('success-screen');
    successScreen.classList.remove('hidden')
};



const buttons = document.getElementsByClassName('btn-all');
for ( const button of buttons) {
    button.addEventListener('click', function(){
        button.classList.add('btnBg');

    //seat count
    const currentSeat = document.getElementById('seat-count');
    const currentSeatNumber = currentSeat.innerText;
    const seatNumber = parseInt(currentSeatNumber);
    // console.log(seatNumber);
    const newSeat = seatNumber + 1;
    currentSeat.innerText= newSeat;

    if(newSeat  === 40){
        alert('Not Available Seat')
    }
    //seat count

    const leftSeat = document.getElementById('seat-left');
    const leftSeatNumber = leftSeat.innerText;
    const leftNumber = parseInt(leftSeatNumber);
    // console.log(leftNumber);
    const newLeftSeat = leftNumber - 1;
    leftSeat.innerText= newLeftSeat;

    if(newLeftSeat === 0){
        alert('ar seat nai ')
    }

 //get the title
//  const Seattitle= button.querySelector('a').innerText;
// // console.log(Seattitle.innerText);

// let tableData= document.getElementById('ticket-list');
// let insertRow= document.createElement('tr');

// let firstSell=document.createElement('td');
// firstSell.textContent=Seattitle;

// let secondSell = document.createElement('td');
// secondSell.textContent="Economy"

// let thirdSell = document.createElement('td');
// thirdSell.textContent="550"

// insertRow.appendChild(firstSell);
// insertRow.appendChild(secondSell);
// insertRow.appendChild(thirdSell);

// tableData.appendChild(insertRow);

    //total-price


    
    });
}


function setTableData(seatNo){
    const table = document.getElementById("ticket-list");
    const newRow = document.createElement("tr");
    
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    cell1.classList.add('py-2', 'tData')
    cell3.classList.add('text-right')
    cell1.textContent = seatNo;
    cell2.textContent = "Economy";
    cell3.textContent = "550";
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    table.appendChild(newRow);
    
    }


