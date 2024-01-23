// 页面加载后判断选中的coupon的类型，如果是折扣类型的话便替换文字
document.addEventListener("DOMContentLoaded", function () {
  change();
});

let useLimit = document.getElementsByClassName("useLimit");

let couponAmount1 = document.getElementsByClassName("couponAmount1");

// 根据用户选择的coupon的种类来控制当前页面显示的内容，根据coupon的种类是定额还是割引判断
function change() {
  if (true) {
    couponAmount1[0].innerText = "割引";
    useLimit[0].style.display = "block";
  } else {
    useLimit[0].style.display = "none";
  }
}
