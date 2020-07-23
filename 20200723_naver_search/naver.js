const search = document.querySelector(".search");

search.addEventListener("keypress", function(e){
    if(e.key ==="Enter") 
        if(!e.target.value) {
            alert("검색어를 입력해주세요!!");
            return;
        }
        else{
            window.open(`https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=${e.target.value}`,"blank");
        }
});
