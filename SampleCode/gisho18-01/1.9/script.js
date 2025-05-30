const apiUrl = "https://localhost:3000/users/1";
const userList = document.getElementById("userList");

document.addEventListener("DOMContentLoaded", function () {
  console.log("ページが読み込まれました!");
  document.getElementById("myButton").addEventListener("click", function () {
    alert("ボタンがクリックされました!");
  });
  document.getElementById("greenButton").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
  });
  document.getElementById("redButton").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
  });
  document.getElementById("addButton").addEventListener("click", function () {
    const list = document.getElementById("myList");
    const newItem = document.createElement("li");
    newItem.textContent = "新しいアイテム";
    list.appendChild(newItem);
  });
  document.getElementById("getData").addEventListener("click", function () {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${data.name} (${data.email})`;
        userList.appendChild(listItem);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
