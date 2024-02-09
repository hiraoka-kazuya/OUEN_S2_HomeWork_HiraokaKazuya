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
        size:
        <select name="size">
          <option value="size-emptiness"></option>
          <option value="size90">90</option>
          <option value="size100">100</option>
          <option value="size110">110</option>
        </select>
      </div>
      <div class="productQuantity-container">
        quantity:
        <select name="quantity">
          <option value="product-0"></option>
          <option value="product-1">1</option>
          <option value="product-2">2</option>
          <option value="product-3">3</option>
        </select>
      </div>
    </div>
    <div>¥ ${price}（税込）</div>
    <button type="button" id="addToCartButton">カートに入れる</button>    
  </div>
`
document.querySelector('.itemDetail-container').appendChild(detailName)

// アイテム金額