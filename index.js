for (let item of __item_data) {
  const listItem = document.createElement('div')
  // innerHTMLにて文字列でHTMLタグを生成することができます。
  // ただし多少くせがあります。
  console.log(item)
  listItem.innerHTML = `
    
      <img src="${item.image}" />
      <div>${item.itemName}</div>
      <div>¥${item.price}</div>
    
  `
  document.querySelector('#list').appendChild(listItem)
}