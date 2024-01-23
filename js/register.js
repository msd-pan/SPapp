// 获取所有的warnningMsg元素
let warnningMsgElements = document.querySelectorAll(".warnningMsg");
let inputElements = document.querySelectorAll(
  'input[name="username"], input[name="email"], input[name="password"], input[name="passwordConfirm"], input[name="postCode"], input[name="address"], input[name="birthday"], input[name="phone"]'
);
document.addEventListener("DOMContentLoaded", function () {
  inputElements.forEach(function (inputElement) {
    inputElement.addEventListener("blur", function () {
      readValue(inputElement);
    });
  });
  // inputWarnning();
  // inputElements.forEach(function(inputElement){
  //     inputElement.addEventListener('input', function(){
  //         inputWarnning();
  //     })
  // })
});

// 定义提示信息的字符串数组
let warnningMsg = {
  0: "ユーザー名を入力してください",
  1: "メールアドレスを入力してください",
  2: "パスワードを入力してください",
  3: "パスワード(確認用)を入力してください",
  4: "郵便番号を入力してください",
  5: "住所を入力してください",
  6: "生年月日を選択してください",
  7: "携帯番号を入力してください",
};

// 此方法通过对页面中的输入框绑定blur时间来调用函数，该函数作用是读取当前选中的输入框中的值并使用trim函数去掉前后的空格
function readValue(inputElement) {
  // 获取当前选中输入框的index
  let index = Array.from(inputElements).indexOf(inputElement);

  // 根据index获取对应输入框的去除空字符串后的值
  switch (index) {
    case 0:
      inputValue0 = inputElement.value.trim();
      break;
    case 1:
      inputValue1 = inputElement.value.trim();
      break;
    case 2:
      inputValue2 = inputElement.value.trim();
      break;
    case 3:
      inputValue3 = inputElement.value.trim();
      break;
    case 4:
      inputValue4 = inputElement.value.trim();
      break;
    case 5:
      inputValue5 = inputElement.value.trim();
      break;
    case 6:
      inputValue6 = inputElement.value.trim();
      break;
    case 7:
      inputValue7 = inputElement.value.trim();
      break;
    default:
      break;
  }

  // 调用提示msg函数
  inputWarnning(index);
}

// 该函数作用是判断处理过的输入框中的值是否为空，空则将字符串数组中对应的错误信息赋予当前输入框下面的盒子
function inputWarnning(index) {
  // warnningMsgElements.forEach(function (element) {
  //     element.innerText = "";
  //     element.classList.remove("activeMsg");
  // });

  warnningMsgElements[index].innerText = "";
  warnningMsgElements[index].classList.remove("activeMsg");
  // 检查选中输入框是否为空，空则提示，非空则不提示
  if (index === 0 && inputValue0 === "") {
    warnningMsgElements[0].innerText = warnningMsg[0];
    warnningMsgElements[0].classList.add("activeMsg");
  } else if (index === 1 && inputValue1 === "") {
    warnningMsgElements[1].innerText = warnningMsg[1];
    warnningMsgElements[1].classList.add("activeMsg");
  } else if (index === 2 && inputValue2 === "") {
    warnningMsgElements[2].innerText = warnningMsg[2];
    warnningMsgElements[2].classList.add("activeMsg");
  } else if (index === 3 && inputValue3 === "") {
    warnningMsgElements[3].innerText = warnningMsg[3];
    warnningMsgElements[3].classList.add("activeMsg");
  } else if (index === 7 && inputValue7 === "") {
    warnningMsgElements[7].innerText = warnningMsg[7];
    warnningMsgElements[7].classList.add("activeMsg");
  }

  // 更新登录按钮的状态
  updateButtonState();
}

// 当必填的项目都填了时，则更新登录按钮为活性，否则为非活性。通过调用disableButton函数和enableButton函数
function updateButtonState() {
  if (
    inputValue0.trim() === "" ||
    inputValue1.trim() === "" ||
    inputValue2.trim() === "" ||
    inputValue3.trim() === "" ||
    inputValue7.trim() === ""
  ) {
    disableButton();
  } else {
    enableButton();
  }
}

let element_address = document.getElementById("address");
let postBtn = document.getElementById("postBtn");

// 对「探し」按钮加上点击事件的监听器，当点击后执行该函数通过api查询对应邮编号的地址
postBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";

  let postalCode = inputElements[4].value.trim();
  url += postalCode;

  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      let text_json = JSON.parse(text);

      let address = "";

      if (text_json.results !== null && text_json.results.length > 0) {
        let result = text_json.results[0];
        address = `${result.address1}${result.address2}${result.address3}`;
      } else {
        address = "";
      }

      element_address.value = address;
    });
});
let btn_sub = document.getElementById("btn_sub");
// 设置按钮为禁用状态
function disableButton() {
  btn_sub.disabled = true;
  btn_sub.classList.add("disabled"); // 添加禁用状态下的样式
  btn_sub.classList.remove("active");
}
// 解除按钮禁用状态
function enableButton() {
  btn_sub.disabled = false;
  btn_sub.classList.remove("disabled"); // 添加禁用状态下的样式
  btn_sub.classList.add("active");
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

var dateInput = document.getElementById("myDateInput");

// 添加点击事件
dateInput.addEventListener("click", function () {
  dateInput.blur(); // 让输入框失去焦点，关闭键盘
  dateInput.removeAttribute("readonly"); // 移除 readonly 属性
});
dateInput.addEventListener("change", function () {
  dateInput.setAttribute("type", "text");
});
