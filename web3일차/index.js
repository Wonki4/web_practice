let toggleButton = document.querySelector(".toggle-button");
let bodyBackground = document.querySelector("#body-background");
let headerNav = document.querySelector(".header-nav-list-wrapper");
let bookmarkWrapper = document.querySelector(".bookmark-wrapper");
let searchInput = document.querySelector("#search-input");

let bookmarkPlus = document.querySelector("#bookmark-plus");

// 다크모드를 구현하기
toggleButton.addEventListener("click", function() {
    let imgIconWrappers = document.querySelectorAll(".img-icon-wrapper");
    let bookmarkTexts = document.querySelectorAll(".bookmark-text");
    toggleButton.textContent = "다크 모드";
    toggleButton.classList.toggle("toggle-button-darkmode");
    headerNav.classList.toggle("text-darkmode");
    bodyBackground.classList.toggle("body-background-darkmode");

    for(let i = 0; i<imgIconWrappers.length; i++) {
        imgIconWrappers[i].classList.toggle("img-icon-wrapper-darkmode");
    }
    console.log(bookmarkTexts);
    for(let i =0; i<bookmarkTexts.length; i++) {
        bookmarkTexts[i].classList.toggle("text-darkmode");
    }
    if(toggleButton.classList.contains("toggle-button-darkmode")) {
        toggleButton.textContent = "일반모드";
    }
});

searchInput.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        if(!e.target.value) {
            alert("검색어를 입력해주세요!!");
            return;
        }
        else{
            window.open(`https://www.google.com/search?q=${e.target.value}`, "blank");
        }
    }
    // location.href = "https://www.naver.com";
});

bookmarkPlus.addEventListener('click', function() {
    const bookmarkItems = document.querySelectorAll(".bookmark-item");
    const bookmarkItem = bookmarkItems[bookmarkItems.length -1];
    console.log(bookmarkItem);
    // cloneNode false를 하면 곁에 외형만 복사가되고
    // True를 하면 내부안의 html 태그들까지 전부 복사가 됩니다.
    const clone = bookmarkItem.cloneNode(true);
    bookmarkItem.after(clone);
});