if (!stock) {
  setStock()
}

const newStock = JSON.parse(localStorage.getItem(STOCK_KEY))
console.log(newStock)
for (let item of newStock) {
  const listItem = document.createElement('div')
  listItem.innerHTML = `
    <div key="${item.id}" class="itemList-container"
      onclick="pageTransition(${item.id})">
        <img src="${item.image}" />
        <div>${item.itemName}</div>
        <div>${item.priceString}</div>
    </div>
  `
  document.querySelector('#itemList').appendChild(listItem)
}


// 検索後の#itemList内の挙動
function search() {
  const itemColumn = document.querySelector('#itemList')
  const list = newStock
  const inputElement = document.querySelector('#searchTitleInput')
  const inputValue = inputElement.value
  const notApplicable = document.createElement('div')
    // 検索条件に該当が無ければ下記のコメントを表示
    notApplicable.innerHTML = `
      <div id="searchResults">
        検索条件に該当する商品がありません
      </div>
    `
  const itemList = []

// 検索時のロジック
  list.map((list) => {
    if (list.itemName.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
      itemList.push(list)
    }
  })


  if (itemList.length > 0) {
    // 検索該当数が１個以上あった場合の処理
    searchTitleInput.placeholder = 'Search ...'
    document.querySelector('#itemList').innerHTML = ''
    for (let item of itemList) {
      const listItem = document.createElement('div')
      listItem.innerHTML = `
        <div key="${item.id}" class="itemList-container"
          onclick="pageTransition(${item.id})">
            <img src="${item.image}" />
            <div>${item.itemName}</div>
            <div>${item.priceString}</div>
        </div>
      `
      itemColumn.appendChild(listItem)
    } 
  } else if (itemList.length <= 0) {
    // 英語以外で検索された時の処理
    itemColumn.innerHTML = ''
    itemColumn.appendChild(notApplicable)
  } else if (16 > itemList > 0 || inputValue === '') {
    for (let item of itemList) {
      const listItem = document.createElement('div')
      listItem.innerHTML = `
        <div key="${item.id}" class="itemList-container"
          onclick="pageTransition(${item.id})">
            <img src="${item.image}" />
            <div>${item.itemName}</div>
            <div>${item.priceString}</div>
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
  location.href = `http://127.0.0.1:5500/detail/detail.html?itemName=${itemDetail.itemName}&image=${itemDetail.image}&price=${itemDetail.price}&stock=${itemDetail.stock}&id=${itemDetail.id}&priceString=${itemDetail.priceString}`
}

