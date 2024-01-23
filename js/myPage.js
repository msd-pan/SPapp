let money = document.getElementById("money");
let bg = document.getElementById("bg");
// 1.点击"点击，弹出弹出框",弹出弹出窗口和遮盖层
// 获取按钮元素
let moneyBtn = document.getElementById("moneyBtn");

// 点击事件处理函数
moneyBtn.addEventListener("click", function (event) {
  money.style.display = "block";
  bg.style.display = "block";
  event.preventDefault(); // 阻止默认行为
});
// 2.点击"关闭",隐藏弹出窗口和遮盖层
let closeBtn = document.getElementById("closeBtn");
closeBtn.onclick = function () {
  money.style.display = "none";
  bg.style.display = "none";
  msgPopupMethod();
  return false;
};
// 3.鼠标拖拽功能
let money_title = document.getElementById("money-title");
money_title.onmousedown = function (e) {
  e = e || window.event;
  let x =
    e.pageX ||
    e.clientX +
      (document.body.scrollLeft || document.documentElement.scrollLeft);
  let y =
    e.pageY ||
    e.clientY + (document.body.scrollTop || document.documentElement.scrollTop);

  let boxX = money.offsetLeft;
  let boxY = money.offsetTop;

  let mouse_in_boxX = x - boxX;
  let mouse_in_boxY = y - boxY;

  document.onmousemove = function (e) {
    let x =
      e.pageX ||
      e.clientX +
        (document.body.scrollLeft || document.documentElement.scrollLeft);
    let y =
      e.pageY ||
      e.clientY +
        (document.body.scrollTop || document.documentElement.scrollTop);

    money.style.left = x - mouse_in_boxX + 256 + "px";
    money.style.top = y - mouse_in_boxY - 142 + "px";
  };
};

money_title.onmouseup = function () {
  document.onmousemove = null;
};

let msgPopup = document.getElementsByClassName("msgPopup")[0];
let orderInput = document.getElementsByClassName("list-input")[0];
let moneySubmit = document.getElementById("moneySubmit");

moneySubmit.addEventListener("click", function (event) {
  money.style.display = "none";
  bg.style.display = "none";
  event.preventDefault();
  msgPopupMethod();
});

function msgPopupMethod() {
  let ord_amount = document.getElementsByClassName("list-input")[0].value;
  console.log(ord_amount);
  msgPopup.style.display = "flex";
  if (ord_amount === "") {
    msgPopup.innerText = "入力がキャンセルされました";
  } else {
    order(ord_amount);
  }
  orderInput.value = "";
  setTimeout(function () {
    msgPopup.style.display = "none";
  }, 3000);
}

function order(ord_amount) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "Order", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var response = xhr.responseText;
      msgPopup.innerText = response;
    }
  };
  var data = "ord_amount=" + encodeURIComponent(ord_amount);
  // 发送数据到 Servlet
  xhr.send(data);
}

function toEntry(event) {
  event.preventDefault();
  window.location.href = "Entry";
}
