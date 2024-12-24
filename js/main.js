// 장바구니
const basketStaterEl = document.querySelector("header .basket-starter");
const basketEl = basketStaterEl.querySelector(".basket");

basketStaterEl.addEventListener("click", function (event) {
  event.stopPropagation();
  if (basketEl.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});
basketEl.addEventListener("click", function (event) {
  event.stopPropagation();
});

window.addEventListener("click", function () {
  hideBasket();
});

function showBasket() {
  basketEl.classList.add("show");
}

function hideBasket() {
  basketEl.classList.remove("show");
}

// 검색
const headerEl = document.querySelector("header");
const headerMenuEls = [...headerEl.querySelectorAll("ul.menu > li")];
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchShadowEl = searchWrapEl.querySelector(".shadow");
const searchInputEl = searchWrapEl.querySelector("input");
const autocompleteItems = [
  ...searchWrapEl.querySelectorAll(".autocompletes ul li"),
];

let hideSearchTimeout;

// 검색창 열기 함수
function showSearch(event) {
  event.stopPropagation(); // 이벤트 버블링 방지
  headerEl.classList.add("searching");

  // 리스트 항목 순차적으로 나타나기
  autocompleteItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });
  setTimeout(function () {
    searchInputEl.focus();
  }, 400);
}

// 검색창 닫기 함수
function hideSearch() {
  headerEl.classList.remove("searching");

  // 리스트 항목 애니메이션 초기화
  autocompleteItems.forEach((item) => {
    item.style.transitionDelay = "0s";
  });
  searchInputEl.value = "";
}

// 검색 버튼 클릭 시
function handleSearchStarterClick(event) {
  showSearch(event);
}

// 검색창 외부로 마우스가 나갈 때
function handleSearchMouseLeave() {
  hideSearchTimeout = setTimeout(() => {
    hideSearch();
  }, 500);
}

// 검색창 내부로 마우스가 들어올 때
function handleSearchMouseEnter() {
  clearTimeout(hideSearchTimeout);
}

// 검색창 외부 클릭 시
function handleWindowClick(event) {
  if (
    !searchWrapEl.contains(event.target) &&
    !searchShadowEl.contains(event.target)
  ) {
    hideSearch();
  }
}

// 이벤트 리스너 등록
searchStarterEl.addEventListener("click", handleSearchStarterClick);
searchWrapEl.addEventListener("mouseleave", handleSearchMouseLeave);
searchWrapEl.addEventListener("mouseenter", handleSearchMouseEnter);
window.addEventListener("click", handleWindowClick);
