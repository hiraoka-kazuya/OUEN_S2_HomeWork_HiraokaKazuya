if (!stock) {
  setStock()
}
const newStock = JSON.parse(localStorage.getItem(STOCK_KEY))

for (let item of newStock) {
  const listItem = document.createElement('div')
  listItem.innerHTML = `
    <div key="${item.id}" class="itemList-container"
      onclick="pageTransition(${item.id})">
        <img src="${item.image}" />
        <div>${item.itemName}</div>
        <span>¥${item.price}</span>
    </div>
  `
  document.querySelector('#itemList').appendChild(listItem)
}
console.log(newStock)
console.log(stock)
// 検索後の#itemList内の挙動

function search() {
  console.log('search関数内')
  let applicableNum = ''// 検索該当数保存用
  const itemColumn = document.querySelector('#itemList')
  const list = __item_data
  const inputElement = document.querySelector('#searchTitleInput')
  const inputValue = inputElement.value
  const notApplicable = document.createElement('div')
    // 検索条件に該当が無ければ下記のコメントを表示
    notApplicable.innerHTML = `
      <div id="searchResults">
        検索条件に該当する商品がありません
      </div>
    `
  const alphabet = /[^a-z]/
  const itemList = []

// 検索時のロジック
  list.map((list) => {
    if (list.itemName.toLowerCase().indexOf(inputValue) !== -1) {
      itemList.push(list)
    }
  })

  if (itemList.length > 0) {
    searchTitleInput.placeholder = 'Search ...'
    applicableNum += itemList.length
    document.querySelector('#itemList').innerHTML = ''
    for (let item of itemList) {
      const listItem = document.createElement('div')
      listItem.innerHTML = `
        <div key="${item.id}" class="itemList-container" onclick="pageTransition()">
          <img src="${item.image}" />
          <div>${item.itemName}</div>
          <span>¥${item.price}</span>
        </div>
      `
      itemColumn.appendChild(listItem)
    } 
  } else if (itemList.length <= 0) {
    itemColumn.innerHTML = ''
    itemColumn.appendChild(notApplicable)
  } else if (16 > applicableNum > 0 || inputValue === '') {
    console.log(applicableNum)
    for (let item of __item_data) {
      const listItem = document.createElement('div')
      listItem.innerHTML = `
        <div key="${item.id}" class="itemList-container"
          onclick="pageTransition(${item.id})">
            <img src="${item.image}" />
            <div>${item.itemName}</div>
            <span>¥${item.price}</span>
        </div>
      `
      document.querySelector('#itemList').appendChild(listItem)
    }
  }
}
document.querySelector('#searchbutton')
    .addEventListener('click', search)


// 詳細ページへの遷移処理
function pageTransition(item) {
  const itemDetail = newStock.find((element) => Number(element.id) === item)
  location.href = `http://127.0.0.1:5500/detail/detail.html?itemName=${itemDetail.itemName}&image=${itemDetail.image}&price=${itemDetail.price}&stock=${itemDetail.stock}`
}

