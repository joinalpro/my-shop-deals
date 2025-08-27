function getElement(id) {
  const getId = document.getElementById(id);
  return getId;
}

getElement("products-container").addEventListener("click", function (e) {
  if (e.target.className.includes("cart-btn")) {
    const cartButton = e.target;

    const productImg =
      cartButton.parentNode.parentNode.children[0].children[0].src;
    const productTitle =
      cartButton.parentNode.children[0].children[0].innerText;

    const productPrice =
      cartButton.parentNode.children[0].children[2].children[0].innerText;
    // add total price
    const totalPrice = getElement("total-price").innerText;
    const currentTotal = Number(productPrice) + Number(totalPrice);
    getElement("total-price").innerText = currentTotal;
    // adding cart container
    const cartContainer = getElement("cart-container");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
        <div class="bg-gray-200 rounded-xl flex justify-between p-4 mt-2">
                <img src="${productImg}" alt="" class="w-10" />
                <div>
                  <h2 class="font-bold">${productTitle}</h2>
                  <h2>${productPrice}</h2>
                </div>
              </div>
    `;
    cartContainer.append(newCart);

    const quantity = getElement("total-quantity").innerText;
    const currentQuantity = Number(quantity) + 1;
    getElement("total-quantity").innerText = currentQuantity;
  }
});

getElement("clear-btn").addEventListener("click", function () {
  const cartContainer = getElement("cart-container");
  cartContainer.innerHTML = "";
  getElement("total-quantity").innerText = 0;
  getElement("total-price").innerText = 0;
});
