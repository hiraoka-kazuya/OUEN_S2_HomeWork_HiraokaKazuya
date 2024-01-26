// 検索後の#itemList内の挙動
function search() {
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


  const tt = []
  list.map((data) => {
    if (data.itemName.indexOf(inputValue) !== -1) {
      tt.push(data)
    }
  })
  if (tt.length > 0) {
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
      document.querySelector('#itemList').appendChild(listItem)
    } 
  } else if (tt.length < 0) {
    document.querySelector('#itemList').innerHTML = ''
    document.querySelector('#itemList').appendChild(notApplicable)
  }
  

  }
document.querySelector('#searchbutton')
    .addEventListener('click', search)



// 詳細ページへの遷移処理
// let itemValue = Object.values(__createData)
const item = document.querySelector('.itemList-container').innerHTML
// const itemData = document.getElement(__item_data)
function pageTransition() {
  
  // location.href = 'http://127.0.0.1:5500/detail/?detail.html'
  console.log(item)
  console.log(itemData)
  console.log(itemValue)
}

item.addEventListener('click', pageTransition)
