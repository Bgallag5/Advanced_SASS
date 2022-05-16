let heroTextMain = document.querySelector(".heading-primary--main");
let heroTextSub = document.querySelector(".heading-primary--sub");
let heroBtn = document.querySelector(".hero--button");

//only play animations on first time visit
function checkReturningUser() {
  let prevVisit = JSON.parse(sessionStorage.getItem("prevUser"));
  console.log(prevVisit);
  // if user has visited page
  if (prevVisit) {
    //clear animations
    heroTextMain.classList.remove("animate__animated");
    heroTextSub.classList.remove("sub--animate");
    heroBtn.classList.remove("animate__animated");
  }
  // if first time visit
  else if (!prevVisit) {
    //set session var
    sessionStorage.setItem("prevUser", true);
  }
}


let aboutImgs = document.querySelectorAll(".about-img");
//replace image sources when being observed
const handleObserved = (entries, observer) => {
  const [entry] = entries;
  //if section is intersecting, remove class "hidden"
  if (!entry.isIntersecting) return;

  aboutImgs.forEach((img, i) => {
    console.log(img);
    img.src = `./img/nat-${i + 1}.jpg`;
  });
};

//build observer
const observer = new IntersectionObserver(handleObserved, {
  root: null,
  rootMargin: "0px",
  threshold: 0,
});

aboutImgs.forEach((img) => observer.observe(img));

// on load check session storage var
window.addEventListener("load", checkReturningUser);
