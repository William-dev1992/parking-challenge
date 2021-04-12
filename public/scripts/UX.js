//Show & hide menu

const menuBtn = document.querySelector('.menu-btn');
const checkbox = document.querySelector('#toggler');

let menuIsOpen = false;

function OpenCloseMenu(){
  if(!menuIsOpen){
    menuBtn.classList.add('open');
    checkbox.setAttribute('checked', 'checked');
    menuIsOpen = true;
  } else {
    menuBtn.classList.remove('open');
    checkbox.removeAttribute('checked');
    menuIsOpen = false;
  }
}

// Change activiti of In and out buttons

const btnIn = document.querySelector('.container main #buttons button:first-of-type');
const btnOut = document.querySelector('.container main #buttons button:nth-child(2)');

btnIn.addEventListener("click", () => {changeToActive()});
btnOut.addEventListener("click", () => {changeToActive()});

function changeToActive(){
  if(btnIn.classList.contains('active')){
    btnIn.classList.remove('active');
    btnOut.classList.add('active');

    changeInAndOut();
  } else {
    btnIn.classList.add('active');
    btnOut.classList.remove('active');

    changeInAndOut();
  }
}

// Change the usability state of the confirmation buttons.

const plateInputIn = document.querySelector('.container main .plateInfo-IN input');
const plateBtn = document.querySelector('.container main .plateInfo-IN button');

const plateInputOut = document.querySelector('.container main .plateInfo-Out input');
const plateBtnOut = document.querySelector('.container main .plateInfo-Out button:first-of-type');
const plateBtnOut2 = document.querySelector('.container main .plateInfo-Out button:last-of-type');


function verifyInput(){
  if(plateInputIn.value == ""){
    plateBtn.setAttribute('disabled', 'disabled');
  } else {
    plateBtn.removeAttribute('disabled');
  }

  if(plateInputOut.value == ""){
    plateBtnOut.setAttribute('disabled', 'disabled');
    plateBtnOut2.setAttribute('disabled', 'disabled');
  } else {
    plateBtnOut.removeAttribute('disabled');
    plateBtnOut2.removeAttribute('disabled');
  }
}

// Toggle between modals

function changeInAndOut(){
  const inModal = document.querySelector('.container main .plateInfo-IN');
  const outModal = document.querySelector('.container main .plateInfo-Out');

  if(btnIn.classList.contains('active')){
    inModal.removeAttribute('id');
    outModal.setAttribute('id', 'hide');
  } else {
    outModal.removeAttribute('id');
    inModal.setAttribute('id', 'hide');
  }

}

// Show && hide modal

const paymentModal = document.querySelector('.payment');
const liberateModal = document.querySelector('.liberate');

const plate = document.querySelectorAll('.modal-overlay .modal h2');

function showPayModal(){
  paymentModal.removeAttribute('id');
  plate[0].innerText = plateInputOut.value;
}

function showLiberateModal(){
  liberateModal.removeAttribute('id');
  plate[1].innerText = plateInputOut.value;
}

function hideModal(event){
  event.path[2].setAttribute('id', 'hide');
}