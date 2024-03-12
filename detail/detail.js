const id = searchParams.get('id')
const image = searchParams.get('image')
const itemName = searchParams.get('itemName')
const price = searchParams.get('price')
const priceString = searchParams.get('priceString')
const nowStock = searchParams.get('stock')

console.log(itemName)
console.log(id)
console.log(image)
console.log(price)
console.log(priceString)
console.log(nowStock)


// アイテム写真エリア
const itemImage = document.createElement('div')
itemImage.innerHTML = `
      <img class="img-style" src="${image}" />
`
document.querySelector('.item-image').appendChild(itemImage)

// アイテム情報
const detailName = document.createElement('div')
detailName.innerHTML = `
  <div class="productInformation-container">
    <div class="detail-itemName">${itemName}</div>
    <div class="detailedSelection-container">
      <div class="productSize-container">
        <label for="selectSize">size:</label>
        <form name="formS">
          <select name="size" id="selectSize">
            <option value="0" ></option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="110">110</option>
          </select>
        </form>
      </div>

      <div class="productQuantity-container">
        <label for="selectQuantity">quantity:</label>
        <form name="formQ">
          <select name="quantity" id="selectQuantity">
            <option value="0" ></option>
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
          </select>
        </form>
      </div>
    </div>
    <div>${priceString}（税込）</div>
    <button type="button" id="addToCartButton" disabled="true">カートに入れる</button>
  </div>
`
document.querySelector('.itemDetail-container').appendChild(detailName)

// アイテムsize & アイテムquantity 入力後のボタンの活性化
  function activityStatus() {
    // フォームのname「formS」とセレクトボックスのname「size」で対象を特定
    const sizeElement = document.formS.size 
    // selectedIndexで選択されている項目(数値)を取得
    const sizeNum = sizeElement.selectedIndex

    // フォームのname「formQ」とセレクトボックスのname「quantity」で対象を特定
    const quantityElement = document.formQ.quantity 
      // selectedIndexで選択されている項目(数値)を取得
    const quantityNum = quantityElement.selectedIndex

    // 「size」と「quantity」のセレクトボックスがそれぞれ「初期値0（''）」以外の条件でボタン活性化
    if (sizeNum > 0 && quantityNum > 0) {
      document.querySelector('#addToCartButton').disabled = false
      return {
        sizeElement,
        quantityElement
      }
    }
  }

document.querySelector('#selectSize')
  .addEventListener('change', activityStatus)

document.querySelector('#selectQuantity')
  .addEventListener('change', activityStatus)


// 「カートに入れる」ボタン活性化後、ボタンクリック時のアクション
  function sendDetails() {
    // セレクトした各内容を読み込み
      // activityStatus()関数からセレクトボックス「size」を対象とした定数を取得
      const sizeEl = activityStatus().sizeElement
      // セレクトボックス「size」で選択中の項目の数値（選択肢の何番目か）を取得
      const sNum = sizeEl.selectedIndex
      // 取得したsizeの項目(数値)をoptionsに指定しvalue値(1,2,3)を取得
      const sizeStr = sizeEl.options[sNum].value
      // activityStatus()関数からセレクトボックス「quantity」を対象とした定数を取得
      const quantityEl = activityStatus().quantityElement
      // セレクトボックス「quantity」で選択中の項目の数値（選択肢の何番目か）を取得
      const qNum = quantityEl.selectedIndex
      // 取得したquantityの項目(数値)をoptionsに指定しvalue値(1,2,3)を取得
      const quantityStr = quantityEl.options[qNum].value

      const selectItem = {id, image, itemName, price, priceString, sizeStr, quantityStr}
    // 選択した内容をローカルストレージに保存する
    setCart(selectItem) 
    // その後そのプロパティをカートページに送りカートページに遷移する機能を追加
    // const cartInformation = JSON.parse(localStorage.getItem(CART_KEY))
    // const cartDetail = cartInformation.find((element) => Number(element.id) === selectItem)
    location.href = `http://127.0.0.1:5500/cart/cart.html?id=${id}&image=${image}&itemName=${itemName}&price=${price}&priceString=${priceString}&size=${sizeStr}&quantity=${quantityStr}`
  }

  document.querySelector('#addToCartButton')
  .addEventListener('click', sendDetails)
