document.addEventListener("DOMContentLoaded", () => {
  // 랜덤 배경 이미지 URL 목록
  const images = [
    'url("https://source.unsplash.com/random/1920x1080?nature")',
    'url("https://source.unsplash.com/random/1920x1080?water")',
    'url("https://source.unsplash.com/random/1920x1080?mountains")',
    'url("https://source.unsplash.com/random/1920x1080?forest")',
    'url("https://source.unsplash.com/random/1920x1080?city")',
  ];

  // 랜덤하게 이미지를 선택
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // 선택한 이미지를 배경으로 설정
  document.body.style.backgroundImage = randomImage;
  document.body.style.backgroundSize = "cover";
});
