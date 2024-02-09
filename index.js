// 検索後の#itemList内の挙動
function search() {
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
  const tt = []

  list.map((list) => {
    if (list.itemName.toLowerCase().indexOf(inputValue) !== -1) {
      tt.push(list)
    }
  })

  if (tt.length > 0) {
    searchTitleInput.placeholder = 'Search ...'
    applicableNum += tt.length
    document.querySelector('#itemList').innerHTML = ''
    for (let item of tt) {
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
  } else if (tt.length <= 0) {
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
  const itemDetail = __item_data.find((element) => Number(element.id) === item)
  location.href = `http://127.0.0.1:5500/detail/detail.html?itemName=${itemDetail.itemName}&image=${itemDetail.image}&price=${itemDetail.price}`
}

