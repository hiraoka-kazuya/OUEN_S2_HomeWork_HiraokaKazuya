for (let item of __item_data) {
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
