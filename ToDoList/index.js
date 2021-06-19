const btnAdd = document.querySelector(".btn");

function addList(list, itemText) {
  var listItem = document.getElementById("li");
  listItem.innerText = itemText;
  list.appendChild(listItem);
}

//버튼 클릭으로 추가
btnAdd.onClick = function () {
  const listItem = document.getElementById("li");
  listItem.innerText = itemText;
  list.appendChild(listItem);
};
