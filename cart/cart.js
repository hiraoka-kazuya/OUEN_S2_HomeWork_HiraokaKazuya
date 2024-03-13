const cartInfo = JSON.parse(localStorage.getItem(CART_KEY))
console.log(cartInfo)
const pliceList = []

for (let item of cartInfo) {
  const itemAmount = Number(item.price) * Number(item.quantityStr)  // 各itemの合計金額
  const amountDisplay = itemAmount.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })  // 各itemの合計金額を日本円表示に変換
  pliceList.push(itemAmount)
  const listItem = document.createElement('div')
  listItem.innerHTML = `
  <div class="checkCartInformation-container">
    <img src="${item.image}">
    <div class="selectionDetails-eraseButton-container">
      <div class="selectionDetails-container">
        <div class="productName-size-container">
          <div id="productName">${item.itemName}</div>
          <div id="productSize">size ${item.sizeStr}</div>
        </div>
        <div class="purchaseAmount-container">
          <div id="numberOfSelections">${item.quantityStr}点</div>
          <div id="purchaseAmount">${amountDisplay}</div>
        </div>  
      </div>
      <div class="eraseButton-container">
        <button type="button" id="eraseButton" onclick="deleteButton(${item.id})">消去</button>
      </div>
    </div>
  </div>
  `
  document.querySelector('#itemContents').appendChild(listItem)
}
console.log(pliceList)


// item情報削除
function deleteButton(id) {
  const result = cartInfo.filter((cart) => cart.id !== String(id))
  // 更新された配列を再びローカルストレージに保存
  localStorage.setItem(CART_KEY, JSON.stringify(result))
  // ページを再読み込み
  reloadPage()
}


// 合計金額表示関数
totalPlice()
function totalPlice() {
  const sum = pliceList.reduce(function(sum, num){
    return sum + num
  }, 0).toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })
  document.querySelector('#totalAmount').textContent=`${sum}`  
}

// inputイベントを監視し、入力フィールドの値が変更されたときに新しい値を読み込むコード
const inputFieldsContainer = document.getElementById('inputFields')

// inputFieldsContainer 内の全ての inputField 要素に対して input イベントリスナーを追加
inputFieldsContainer.addEventListener('input', function(event) {
  // クリックされた要素が input 要素である場合のみ処理を続行
  if (event.target.classList.contains('inputField')) {
      // inputField の値を取得
      const value = event.target.value;
      console.log('入力フィールドの値:', value);
  }
});

// お客様情報を読み込む定数を定義
const inputName = document.querySelector('#nameInput').value  // 名前入力内容読み込み
console.log(inputName, typeof inputName, 'inputName')
const inputEmail = document.querySelector('#emailInput').value  // メールアドレス入力内容読み込み
console.log(inputEmail)
const inputPostCode = document.querySelector('#postCode').value // 郵便番号読み込み
console.log(inputPostCode)
const inputPrefectures = document.querySelector('#prefectures').value  // 都道府県読み込み
console.log(inputPrefectures)
const inputCityNum = document.querySelector('#cityNumber').value  // 市区町村番号読み込み
console.log(inputCityNum)
// 選択した支払い方法を取得
const radioButtons = document.querySelectorAll('input[name="payment"]')
console.log(radioButtons)
radioButtons.forEach(function(radioButton) {
  if (radioButton.checked) {
      selectedValue = radioButton.value
  }
})

if (!inputName && !inputEmail && !inputPostCode && !inputPrefectures && inputCityNum && selectedValue > 0) {
  document.querySelector('#confirmInputContents').disabled = false
}

// 「入力内容を確認」ボタンのクリック時のアクション
function infoCheck() {
}

document.querySelector('#confirmInputContents')
  .addEventListener('click', infoCheck)


// トップページ遷移アクション
function pageTransition() {
  location.href = `http://127.0.0.1:5500`
}

document.querySelector('#continuePurchasing')
  .addEventListener('click', pageTransition)