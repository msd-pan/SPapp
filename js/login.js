document.addEventListener("DOMContentLoaded", function () {
  // 页面加载后调用函数
  checkInput();

  // 在邮件和密码输入框上加上oninput事件，达成在输入时时刻调用checkInput()方法
  document.getElementById("mail").oninput = function () {
    checkInput();
  };

  document.getElementById("password").oninput = function () {
    checkInput();
  };
});

window.onload = function () {
  document.getElementById("form").onsubmit = function () {
    return checkFormat();
  };
};

let loginBtn = document.getElementsByClassName("loginBtn")[0];

let msg = {
  0: "ログイン成功",
  1: "パスワードに誤りがあります",
  2: "ご入力いただいたログインメールアドレスはご利用になれません",
  3: "メールアドレスとパスワードを入力してください",
  4: "8～30桁数のパスワードを入力してください",
  5: "メールの形式が間違っていますので、再度入力してください",
};

// 设置按钮禁用状态
function disableButton() {
  loginBtn.disabled = true;
  loginBtn.classList.add("disabled"); // 添加禁用状态下的样式
  loginBtn.classList.remove("active");
}

function enableButton() {
  loginBtn.disabled = false;
  loginBtn.classList.remove("disabled"); // 添加禁用状态下的样式
  loginBtn.classList.add("active");
}

function checkInput() {
  // 获取最新的输入框的值
  let trimmedMail = document.getElementById("mail").value.trim();
  let trimmedPassword = document.getElementById("password").value.trim();

  // 判断是否为空
  if (trimmedMail === "" || trimmedPassword === "") {
    disableButton();
  } else {
    enableButton();
  }
}

// ヒントの表示
function showHint() {
  document.getElementById("hint").style.display = "block";
}

// ヒントの消失
function hideHint() {
  document.getElementById("hint").style.display = "none";
}

let elements = document.getElementsByClassName("sign");
// hover hignlight regist link
function highlightHint() {
  if (elements.length > 0) {
    elements[0].style.color = "#0d3c47";
    elements[0].style.fontWeight = "800";
  }
}
// login button hignlight regist link
function highlightLink() {
  if (elements.length > 0) {
    elements[0].style.color = "red";
  }
}

// dishignlight register link
function dishighlightHint() {
  if (elements.length > 0) {
    elements[0].style.color = "#666";
    elements[0].style.fontWeight = "400";
  }
}

// 重置按钮的功能实现，点击后将邮箱框和密码框清空
function reset() {
  // 通过属性选择器选择邮箱输入框
  let emailInput = document.querySelector('.inputBox input[type="text"]');
  // 通过属性选择器选择密码输入框
  let passwordInput = document.querySelector(
    '.inputBox input[type="password"]'
  );
  emailInput.value = "";
  passwordInput.value = "";
}

function jump() {
  setTimeout(function () {
    window.location.href = "MyPage";
  }, 500);
}

// 通过正则表达式检查邮箱和密码格式
function checkFormat() {
  let mail = document.getElementById("mail").value;
  let password = document.getElementById("password").value;
  let errorMsg = document.getElementById("errorMsg");
  let reg_mail = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
  let reg_password = /^\w{8,30}$/;
  let mail_flag = reg_mail.test(mail);
  let password_flag = reg_password.test(password);

  if (mail_flag && password_flag) {
    errorMsg.innerText = msg[0];
    console.log(errorMsg.innerText);
  } else if (mail_flag) {
    errorMsg.innerText = msg[4];
    console.log(errorMsg.innerText);
  } else if (password_flag) {
    errorMsg.innerText = msg[5];
    console.log(errorMsg.innerText);
  } else {
    errorMsg.innerHTML = "<p>" + msg[5] + "</br>" + msg[4] + "</p>";
    console.log(errorMsg.innerText);
  }

  return mail_flag && password_flag;
}

// 设置popup信息的盒子的显示与否
let loginPopup = document.getElementsByClassName("loginPopup")[0];
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  loginPopup.style.display = "flex";
  setTimeout(function () {
    loginPopup.style.display = "none";
    // window.location.href = 'MyPage';
  }, 4000);
});
