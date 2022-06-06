const button = document.querySelector("button");
const amount = document.querySelector("#totalBill");
const user = document.querySelector("#divideBill");
const select = document.querySelector("select");

let tip = 0;
let total = 0;
button.addEventListener("click", () => {
  amountAlert();
  userAlert();
  selectAlert();
  setTimeout(() => {
    document.querySelector("#alertArea").classList.replace("show", "hidden");
  }, 3000);
});

//functions

function selectAlert() {
  if (select.options[select.selectedIndex].value == "Choose...") {
    document.querySelector("#alertArea").classList.replace("hidden", "show");
    document
      .querySelector("#alertArea")
      .children[2].classList.replace("hidden", "show");
  }
}

function userAlert() {
  if (user.value == "") {
    document.querySelector("#alertArea").classList.replace("hidden", "show");
    document
      .querySelector("#alertArea")
      .children[1].classList.replace("hidden", "show");
  }
}

function amountAlert() {
  if (amount.value == "") {
    document.querySelector("#alertArea").classList.replace("hidden", "show");
    document
      .querySelector("#alertArea")
      .firstElementChild.classList.replace("hidden", "show");
  }
}

function controller(item) {
  if (item.value.trim() == "") {
  }
}
console.log(select.options[select.selectedIndex].value);
function giveResult() {
  tip =
    (Number(amount.value) * select.options[select.selectedIndex].value) / 100;
  total = (Number(amount.value) + Number(more)) / Number(user.value);
}
