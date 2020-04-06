// Auther: Brett Marshall
// Date: 04-04-2020

"use strict";
let delinvInfo = {};
let foodInfo = {};
let delivSummary = document.getElementById("deliverTo");
let foodSummary = document.getElementById("order")

function processDeliveryInfo() {
  let delivInfo = {};
  delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.address = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;
    delivInfo.innerHTML = '';

    for (let prop in delivInfo) {
      delivInfo.innerHTML += "<p>" + delivInfo[prop] + "</p>";
    }
}
function processFood() {
	let prop;
	let crustOpt = document.getElementsByName("crust");
	let toppings = 0;
	let toppingBoxes = document.getElementsByName("toppings");
	let instr = document.getElementById("instructions");
	if (crustOpt[0].checked) {
		foodInfo.crust = crustOpt[0].value;
	} else {
		foodInfo.crust = crustOpt[1].value;
	}
	foodInfo.size = document.getElementById("size").value;
	for (let i = 0; i < toppingBoxes.length; i++) {
		if (toppingBoxes[i].checked) {
			toppings++;
			foodInfo["topping" + toppings] = toppingBoxes[i].value;
		}
		if (!(instr.value === "")) {
			foodInfo.instructions = instr.value;
		}
	}
	foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
	foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
	foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";
	foodSummary.innerHTML += "<ul>";
	for (let i = 1; i < 6; i++) {
		if (foodInfo["topping" + i]) {
			foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
		}
	}
	foodSummary.innerHTML += "</ul>";
	foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions;
    document.getElementById("order").style.display = "block";
}

function previewOrder() {
    processDeliveryInfo();
    processFood();
    document.querySelector("section").style.display = "block";
    document.getElementById("deliverTo").style.display = "block";
}
function createEventListener() {
    let previewButton = document.getElementById("previewBtn");
    if (previewButton.addEventListener) {
        previewButton.addEventListener("click", previewOrder, false);
    } else if (previewButton.attachEvent) {
        previewButton.attachEvent("onclick", previewOrder);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}