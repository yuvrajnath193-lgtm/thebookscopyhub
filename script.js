function order(item) {
  var phone = "917319759306"; // Yaha apna number daalo
  var text = "Hello, I want to order: " + item;
  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(text));
}

function searchProduct() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    let name = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

    if (name.includes(input)) {
      products[i].style.display = "";
    } else {
      products[i].style.display = "none";
    }
  }
}