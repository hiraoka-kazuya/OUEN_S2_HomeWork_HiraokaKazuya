const searchParams = new URLSearchParams(window.location.search)
const image = searchParams.get('image')
const itemName =searchParams.get('itemName')
const price =searchParams.get('price')
const nowStock = stock

console.log(nowStock)
console.log(image)
console.log(itemName)
console.log(price)

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
    <div>¥ ${price}（税込）</div>
    <button type="button" id="addToCartButton" disabled="true">カートに入れる</button>
  </div>
`
document.querySelector('.itemDetail-container').appendChild(detailName)

// アイテムsize & アイテムquantity 入力後のボタンの活性化
  function activityStatus() {
    // フォームのname「formS」とセレクトボックスのname「size」で対象を特定
    const sizeElement = document.formS.size 
    console.log(sizeElement, typeof sizeElement)
    // selectedIndexで選択されている項目(数値)を取得
    const sizeNum = sizeElement.selectedIndex
    console.log(sizeNum, typeof sizeNum, 'sizeNum')

    // フォームのname「formQ」とセレクトボックスのname「quantity」で対象を特定
    const quantityElement = document.formQ.quantity 
    console.log(quantityElement, typeof quantityElement)
      // selectedIndexで選択されている項目(数値)を取得
    const quantityNum = quantityElement.selectedIndex
    console.log(quantityNum, typeof quantityNum, 'quantityNum')

    // 「size」と「quantity」のセレクトボックスがそれぞれ「初期値0（''）」以外の条件でボタン活性化
    if (sizeNum > 0 && quantityNum > 0) {
      document.querySelector('#addToCartButton').disabled = false
      return {
        quantityElement
      }
    }
  }

document.querySelector('#selectSize')
  .addEventListener('change', activityStatus)

document.querySelector('#selectQuantity')
  .addEventListener('change', activityStatus)


// 「カートに入れる」ボタン活性化後、ボタンクリック時のアクション
  function addToCart() {
    
    // // activityStatus()関数からセレクトボックス「quantity」を対象とした定数を取得
    // const quantityEl = activityStatus().quantityElement
    // // セレクトボックス「quantity」で選択中の項目の数値（選択肢の何番目か）を取得
    // const num = quantityEl.selectedIndex
    // console.log(num, typeof num, 'クリック後num')
    // // 取得した項目(数値)をoptionsに指定しvalue値(1,2,3)を取得
    // const str = quantityEl.options[num].value
    // console.log(str, typeof str, 'クリック後str')
    // // 上記で作成したdivタグ'#cartInNum'にセレクトボックス「quantity」で選択中の項目の値（選択肢の何番目か）を表示
    // document.getElementById("cartNum").textContent = str 

  }

  document.querySelector('#addToCartButton')
  .addEventListener('click', addToCart)