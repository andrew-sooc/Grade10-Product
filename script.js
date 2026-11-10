
// SHOPPING CART

let cart = [];

// ADD PRODUCTS

function addToCart(name, price) {

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    alert(name + " added to your cart! ❤️");
}

// UPDATE CART

function updateCart() {

    let count = 0;
    let total = 0;

    cart.forEach(item => {
        count += item.quantity;
        total += item.price * item.quantity;
    });

    document.getElementById("cart-count").textContent = count;

    document.getElementById("cart-total").textContent = total;

    let cartItems = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty!";
        return;
    }

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        cartItems.innerHTML += `
            <div class="cart-item">

                <span>
                    ${item.name} x ${item.quantity}
                    <br>
                    ₱${item.price * item.quantity}
                </span>

                <button class="remove-btn"
                    onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;
    });
}

// REMOVE PRODUCTS

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

// OPEN CART

function showCart() {

    document.getElementById("cart-modal").style.display = "flex";

}

// CLOSE CART

function closeCart() {

    document.getElementById("cart-modal").style.display = "none";

}

// CHECKOUT

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty! Add some delicious treats first. 🍰");

        return;
    }

    let total = 0;

    let order = "YOUR ORDER ❤️\n\n";

    cart.forEach(item => {

        order += item.name + " x " + item.quantity +
        " = ₱" + (item.price * item.quantity) + "\n";

        total += item.price * item.quantity;

    });

    order += "\nTOTAL: ₱" + total;

    alert(order +
        "\n\nThank you for choosing Sweet Cravings!");

    cart = [];

    updateCart();

    closeCart();

}
