// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
//getBoundingClientRect() 빠르다, 하드코딩이 아니다. 
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// 스크롤 위치 0에서 시작
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

//네비게이션바 반응형 햄버거 메뉴 구현 
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // toggle 편하지만 아름답지 않다. 
    // css에서 height -> 0;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
    } else {
      linksContainer.style.height = 0;
    }
  });


// ********** fixed navbar ************
//네비게이션바 자체를 변수에
const navbar = document.getElementById("nav");
// const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    //window.pageYoffset , 유용한 변수 기억합시다.
    const scrollHeight = window.pageYOffset;
    //navHeight 네비게이션바의 높이
    const navHeight = navbar.getBoundingClientRect().height;
    
    // toggle함수 쓰면 스크롤을 내릴때마다 연산함
    // if(scrollHeight > navHeight){
    //     navbar.classList.toggle("fixed-nav");
    // }

    //add와 remove로 처리필요
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
  // setup back to top link
  //topLinks 아직 생각 없음
//   if (scrollHeight > 500) {
//     console.log("helo");

//     topLink.classList.add("show-link");
//   } else {
//     topLink.classList.remove("show-link");
//   }
});

// ********** smooth scroll ************
// select links
// 앵커 위치 조정
const scrollLinks = document.querySelectorAll(".scroll-links");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();

    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }


    window.scrollTo({
      left: 0,
      top: position,
    });
    // 축소 close
    linksContainer.style.height = 0;
  });
});
// calculate heights

//about 페이지
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
