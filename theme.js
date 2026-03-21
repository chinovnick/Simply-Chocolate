// let click = 0;

// function button() {
//     click++;

//     if (click % 2 === 1) {
//         document.getElementById("menu").style.color = "black";
//         document.getElementById("body").style.backgroundColor = "white";
//     } else {
//         document.getElementById("menu").style.color = "white";
//         document.getElementById("body").style.backgroundColor = "black";
//     }
// }



function button() {
    document.body.classList.toggle("dark");
}

