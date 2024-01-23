document.addEventListener("DOMContentLoaded", function () {
  ouboBtnControl();
});

// let errorMessages = {
//     0: "ログイン成功",
//     1: "新規登録成功",
//     2: "金額登録成功",
//     3: "個新しいクーポン獲得しました、クーポン画面でご覧ください",
//     4: "キャンペーンに応募しました！",
//     5: "パスワードに誤りがあります。",
//     6: "「パスワード」は ８～３０ 桁数の数字（半角）、アルファベット（半角）、または記号を入力してください。",
//     7: "ご入力いただいたログインメールアドレスは利用になれません。",
//     8: "必須な項目が不足しています、ご確認ください。",
//     9: "メールアドレスの形式が不正です",
//     10: "このメールアドレスはすでに別のIDで使われているため、登録できません。",
//     11: "パスワードとパスワード（確認用）が一致していません。",
//     12: "「郵便番号」は「７」桁数の数字を入力してください、例：１２３４５６７",
//     13: "「携帯番号」は「１１」桁数の数字を入力してください、例：０８０１２３４５６７８",
//     14: "この携帯番号はすでに別のIDで使われているため、登録できません。",
//     15: "「８」桁以下の正当な金額を入力してください。",
// };

let ouboMsgContainer = document.getElementsByClassName("ouboMsgContainer")[0];
let ouboBtn = document.getElementsByClassName("ouboBtn")[0];

// 控制応募成功时的信息提示弹出
ouboBtn.addEventListener("click", function () {
  ouboMsgContainer.style.display = "block";
  setTimeout(function () {
    ouboMsgContainer.style.display = "none";
  }, 3000);
  ouboBtnControl();
});

// function ouboMsg(){
//     ouboMsgContainer.style.display = 'block';
//     setTimeout(function(){
//         ouboMsgContainer.style.display = 'none';
//     }, 3000)
// }

// 根据用户的消费金额设置応募按钮是活性还是非活性
// function ouboBtnControl() {
//     if(true){
//         ouboBtn.disabled = 'false';
//         ouboBtn.classList.add('ouboBtnActive');
//     } else{
//         ouboBtn.disabled = 'true';
//         ouboBtn.classList.remove('ouboBtnActive');
//         ouboBtn.classList.add('ouboBtnDisabled');
//     }
// }
