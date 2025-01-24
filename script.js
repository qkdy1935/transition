// 오디오 요소와 아이콘들 선택
const play = document.getElementById("play"); // 오디오 요소
const audioIcon = document.getElementById("audio-icon");
const high = audioIcon.querySelector(".fa-volume-high");
const xmark = audioIcon.querySelector(".fa-volume-xmark");

// 아이콘 클릭 시 음소거 상태 토글
audioIcon.addEventListener("click", () => {
  console.log("click");
  if (play.muted) {
    // 음소거 해제
    play.muted = false;
    xmark.style.display = "none"; // 볼륨 켜짐 아이콘 표시
    high.style.display = "block"; // 음소거 아이콘 숨김
  } else {
    // 음소거
    play.muted = true;
    xmark.style.display = "block"; // 볼륨 켜짐 아이콘 숨김
    high.style.display = "none"; // 음소거 아이콘 표시
  }
});

const circle = document.querySelector("#circle");
const articles = circle.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
