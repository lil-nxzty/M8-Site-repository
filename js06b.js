"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Jose Antonio Lopez Vera Livia
      Date:   3/3/2026

      Filename: js06b.js
 */



















/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */
// Check if the owner's name is entered on the card
let subButton = document.getElementById("subButton");

// Validate the payment when the submit button is clicked
subButton.addEventListener("click", validateName);
subButton.addEventListener("click", validateCard);
subButton.addEventListener("click", validateNumber);
subButton.addEventListener("click", validateMonth);
subButton.addEventListener("click", validateYear);

function validateName() {
   let cardName = document.getElementById("cardName");
   if (cardName.validity.valueMissing) {
      cardName.setCustomValidity("Enter your name as it appears on the card");
   } else {
      cardName.setCustomValidity("");
   }
}

// Check of a credit card has been selected
function validateCard() {
   let card = document.forms.payment.elements.credit[0];
   if (card.validity.valueMissing) {
      card.setCustomValidity("Select your credit card");
   } else {
      card.setCustomValidity("");
   }
}

// Check if the card number is valid
function validateNumber() {
   let cNum = document.getElementById("cardNumber");
   if (cNum.validity.valueMissing) {
      cNum.setCustomValidity("Enter your card number");
   } else if (cNum.validity.patternMismatch) {
      cNum.setCustomValidity("Enter a valid card number");
   } else {
      cNum.setCustomValidity("");
   }
}

// Check that a month is selected for the expiration date
function validateMonth() {
   let month = document.getElementById("expMonth");
   if (month.selectedIndex === 0) {
      month.setCustomValidity("Select the expiration month");
   } else {
      month.setCustomValidity("");
   }
}

function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
   
   function sumDigits(numStr) {
      let digitTotal = 0;
      for (let i = 0; i < numStr.length; i++) {
         digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
   }
}
   

