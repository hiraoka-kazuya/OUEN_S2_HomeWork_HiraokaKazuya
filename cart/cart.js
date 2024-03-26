// const cartInfo = JSON.parse(localStorage.getItem(CART_KEY))
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
          <div id="purchaseAmount">${item.priceString}</div>
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



// 「入力内容を確認」ボタンの活性化function
  // 各お客様情報を保存する箱（変数）を準備
  let inputName = ''
  let inputEmail = ''
  let postCode = ''
  let prefectures = ''
  let cityNumber = ''
  const form = document.getElementById('paymentSelector');
  let selectedValue = '' // 選択されたラジオボタンの値を保持する変数

  // ラジオボタンの選択肢が変更されたときに実行される関数
  function handleRadioChange(event) {
      selectedValue = event.target.value
      buttonActivation()
  }

  // フォーム要素にchangeイベントリスナーを追加
  form.addEventListener('change', handleRadioChange);

  function buttonActivation() {
    const inputName = document.getElementById('nameInput').value
    const inputEmail = document.getElementById('emailInput').value
    const postCode = document.getElementById('postCode').value
    const prefectures = document.getElementById('prefectures').value
    const cityNumber = document.getElementById('cityNumber').value

    if (inputName !== '' && inputEmail !== '' && postCode !== '' && prefectures !== '' && cityNumber !== '' && selectedValue > 0) {
      document.querySelector('#confirmInputContents').disabled = false
    }

    const customerInformation = {inputName, inputEmail, postCode, prefectures, cityNumber, selectedValue}
    return {customerInformation}
  }
  // inputFieldsContainer 内の全ての inputField 要素に対して input イベントリスナーを追加
  document.querySelector('#nameInput')
    .addEventListener('input', buttonActivation)

  document.querySelector('#emailInput')
    .addEventListener('input', buttonActivation)

  document.querySelector('#postCode')
    .addEventListener('input', buttonActivation)

  document.querySelector('#prefectures')
    .addEventListener('input', buttonActivation)

  document.querySelector('#cityNumber')
    .addEventListener('input', buttonActivation)


// 「入力内容を確認」ボタンのクリック時のアクション
function infoCheck() {
  // buttonActivation関数の"customerInformation"を取得
  const customerObj = buttonActivation().customerInformation
  // 「お客様情報」をローカルストレージ"customer"に保存
  setCustomer(customerObj)

  // confirmationページに'cart'情報と'customerInfo'を紐付けてページ遷移
  location.href = `http://127.0.0.1:5500/confirmation/confirmation.html?`
}

document.querySelector('#confirmInputContents')
  .addEventListener('click', infoCheck)







// トップページ遷移アクション(default.jsの'pageTransition()'を使用)

document.querySelector('#continuePurchasing')
  .addEventListener('click', pageTransition)



















//       // お客様情報を読み込む定数を定義
//       const name = document.querySelector('#nameInput') // 名前入力内容読み込み
//         console.log('nameフィールドの値:', name.value, typeof name.value)
//       const email = document.querySelector('#emailInput') // メールアドレス入力内容読み込み
//         console.log('emailフィールドの値', email.value, typeof email.value)
//       const postCode = document.querySelector('#postCode') // 郵便番号読み込み
//         console.log('postCodeの値', postCode.value, typeof postCode.value)
//       const prefectures = document.querySelector('#prefectures')// 都道府県読み込み
//         console.log('prefecturesの値', prefectures.value, typeof prefectures.value)
//       const cityNumber = document.querySelector('#cityNumber') // 市区町村番号読み込み
//         console.log('cityNumberの値', cityNumber.value, typeof cityNumber.value)

//       const radioButton = document.querySelectorAll('.inputField')
//       let selectedValue = null
//       // 取得したラジオボタンの中から選択されたものを見つける
//       radioButton.forEach(function(inputField) {
//           if (inputField.checked) {
//             selectedValue = inputField.value
//             // 選択された値を出力
//             console.log('選択された値は ' + selectedValue + ' です。', typeof selectedValue)
//           }
//       })