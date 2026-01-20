let isstatus = document.querySelector("h5");

let addfriend = document.getElementById("add");

let remove = document.getElementById("remove");

let check = 0;

addfriend.addEventListener("click", function () {
  if (check == 0) {
    isstatus.innerHTML = "freind is added";
    isstatus.style.color = "blue";
    addfriend.innerHTML = "Add friend"

    check = 1;
  } else {
    isstatus.innerHTML = "removed";
    addfriend.innerHTML = "remove";
    check = 0;
  }
});
