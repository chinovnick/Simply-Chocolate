const overlay = document.getElementById("overlay");

function openTab(tabId) {
    const tab = document.getElementById(tabId);
    if (tab) {
        tab.style.display = "flex";
        overlay.style.display = "block";
    }
}

function closeTab(tabId) {
    const tab = document.getElementById(tabId);
    if (tab) {
        tab.style.display = "none";
        overlay.style.display = "none";
    }
}

overlay.addEventListener("click", () => {
    const openTabs = document.querySelectorAll(".myTab");
    openTabs.forEach(tab => tab.style.display = "none");
    overlay.style.display = "none";
});

function switchTab(button) {
    const tabsContainer = button.parentElement;
    const buttons = tabsContainer.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}


// section 6

function openBuy() {
  document.getElementById("myBuy").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
}

function closeBuy() {
  document.getElementById("myBuy").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}


// section 7

function openReview() {
  document.getElementById("myReview").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
}

function closeReview() {
  document.getElementById("myReview").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

//sectrion 8

function openSubscribe() {
  document.getElementById("mySubscribe").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
}

function closeSubscribe() {
  document.getElementById("mySubscribe").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}  


function bob() {
    window.location.href = window.location.href;
}
