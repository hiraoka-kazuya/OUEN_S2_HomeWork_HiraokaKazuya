const cartInfo = JSON.parse(localStorage.getItem(CART_KEY))
console.log(cartInfo)
const pliceList = []
for (let item of cartInfo) {
  pliceList.push(Number(item.price))
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
          <div id="numberOfSelections">${item.quantityStr}</div>
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

  // item情報削除
  function deleteButton(id) {
    const result = cartInfo.filter((cart) => cart.id !== String(id))

    // 更新された配列を再びローカルストレージに保存
    localStorage.setItem(CART_KEY, JSON.stringify(result))
    
    reloadPage()
  }
  totalPlice()
function totalPlice() {
  const sum = pliceList.reduce(function(sum, num){
    return sum + num;
  }, 0);
  document.querySelector('#totalAmount').textContent=`¥${sum}`  
}


// 「入力内容を確認」ボタンのクリック時のアクション
function infoCheck() {
  // お客様情報を読み込む定数を定義
  const inputName = document.querySelector('#nameInput').value  // 名前入力内容読み込み
  console.log(inputName)
  const inputEmail = document.querySelector('#emailInput').value  // メールアドレス入力内容読み込み
  console.log(inputEmail)
  const inputPostCode = document.querySelector('#postCode').value // 郵便番号読み込み
  console.log(inputPostCode)
  const inputPrefectures = document.querySelector('#prefectures').value  // 都道府県読み込み
  console.log(inputPrefectures)
  const inputCityNum = document.querySelector('#cityNumber').value  // 市区町村番号読み込み
  console.log(inputCityNum)
  // 選択した支払い方法を取得
}

document.querySelector('#confirmInputContents')
  .addEventListener('click', infoCheck)



