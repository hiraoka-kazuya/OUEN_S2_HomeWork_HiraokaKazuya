for (let item of __item_data) {
  const listItem = document.createElement('div')
  listItem.innerHTML = `
    <div class="itemList-container">
      <img src="${item.image}" />
      <div>${item.itemName}</div>
      <span>¥${item.price}</span>
    </div>
  `
  document.querySelector('#itemList').appendChild(listItem)
}