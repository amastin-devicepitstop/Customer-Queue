let queue;
let modal;
let form;
let login;
let nextCustomer;
let nextCustomerTitle;

window.onload = function(){
  queue = document.getElementById("queue");
  modal = document.getElementById("modal");
  login = document.getElementById("login-container");
  form = document.getElementById("login-form");
  nextCustomer = document.getElementById("next-customer-name");
  nextCustomerTitle = document.getElementById("next-customer-title");	
}

function updateNextCustomer() {
  if (queue.childNodes.length > 1){
    nextCustomerTitle.innerText = "Next Customer:";
    nextCustomer.innerText = queue.childNodes[1].innerText;
  }
  else{
    nextCustomerTitle.innerText = "No customers in queue.";
    nextCustomer.innerText = "";
  }
}

function getNextCustomer() {
  if (queue.childNodes.length >= 1){
    queue.removeChild(queue.childNodes[1]);
    updateNextCustomer();
  }
}

function showModal() {
  // Show the modal
  modal.style.display = "block";
  login.style.display = "flex";
}

function hideModal() {
  // Hide the modal
  modal.style.display = "none";
	
  // Reset the form
  form.reset();
}

function addCustomer(){ 
  let firstname = document.getElementById("fn-input").value;
  let lastname = document.getElementById("ln-input").value;
  let customer = document.createElement("div");
	  
  hideModal();
  
  // Create a customer div
  customer.classList.add("customer");
  customer.innerHTML = firstname + " " + lastname;
  
  // Add customer to the queue
  queue.appendChild(customer);
  
  // Update next customer in line
  updateNextCustomer();
  
  
}
