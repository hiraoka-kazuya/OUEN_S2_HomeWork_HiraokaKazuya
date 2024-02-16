const searchParams = new URLSearchParams(window.location.search)
const image = searchParams.get('image')
const itemName =searchParams.get('itemName')
const price =searchParams.get('price')

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
        <select name="size" id="selectSize">
          <option value="size-emptiness" selected></option>
          <option value="size90">90</option>
          <option value="size100">100</option>
          <option value="size110">110</option>
        </select>
      </div>
      <div class="productQuantity-container">
        <label for="selectQuantity">quantity:</label>
        <select name="quantity" id="selectQuantity">
          <option value="product-0" selected></option>
          <option value="product-1">1</option>
          <option value="product-2">2</option>
          <option value="product-3">3</option>
        </select>
      </div>
    </div>
    <div>¥ ${price}（税込）</div>
    <button type="button" id="addToCartButton" disabled="true">カートに入れる</button>
  </div>
`
document.querySelector('.itemDetail-container').appendChild(detailName)

// アイテムsize & アイテムquantity 入力後のボタンの活性化
function activityStatus() {
  const sizeElement = document.getElementById('selectSize').value
  console.log(sizeElement, typeof sizeElement)
  const quantityElement = document.getElementById('selectQuantity').value
  console.log(quantityElement, typeof quantityElement)
  if (quantityElement !== 'product-0' && sizeElement !== 'size-emptiness') {
    console.log('サイズと個数選択')
    document.querySelector('#addToCartButton').disabled = false
  }
// quantityElement.onchange = function(){
//   console.log(this.value);
//   if (this.value > 0) {
//     console.log('true')
//   }
// }

// sizeElement.onchange = function(){
//   console.log(this.value);
// }
}

document.querySelector('#selectSize')
.addEventListener('change', activityStatus)

document.querySelector('#selectQuantity')
.addEventListener('change', activityStatus)

