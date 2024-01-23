// 页面加载后判断是否登录，登录的话就隐藏login按钮
document.addEventListener("DOMContentLoaded", function () {
  hideBtn();
});

let loginBtn = document.querySelector(".loginBtn");

// 根据用户是否登录设置login按钮的显示与否
// function hideBtn() {
//     if (loginBtn) {
//         loginBtn.style.display = 'none';
//     }
// }
