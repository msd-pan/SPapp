const list = document.querySelectorAll(".list");

// 此函数通过控制tab栏中的每个项目的active类的有与否来控制样式
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}

// 给tab栏中的每个项目都加上监听器绑定click事件，事件发生时调用activeLink函数
list.forEach((item) => {
  item.addEventListener("click", activeLink);
});

// 下面几个以jump开头的函数都是tab栏中实现页面跳转的函数，为了实现页面的流畅跳转，tab的动画能够播放完加了延迟
function jumpHomePage(event) {
  setTimeout(function () {
    window.location.href = "HomePage.html";
  }, 500);
  event.preventDefault();
}

function jumpMyPage(event) {
  setTimeout(function () {
    window.location.href = "MyPage.html";
  }, 500);
  event.preventDefault();
}

function jumpCampaignPage(event) {
  setTimeout(function () {
    window.location.href = "Campaign.html";
  }, 500);
  event.preventDefault();
}

function jumpCouponPage(event) {
  setTimeout(function () {
    window.location.href = "Coupon.html";
  }, 500);
  event.preventDefault();
}
