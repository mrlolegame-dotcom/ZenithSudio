let cart = [];


function addToCart(
    name,
    price
) {

    cart.push({

        name: name,

        price: price

    });


    updateCart();

    openCart();

}


function updateCart() {

    const count =
        document.getElementById(
            "cartCount"
        );


    const items =
        document.getElementById(
            "cartItems"
        );


    const total =
        document.getElementById(
            "cartTotal"
        );


    count.textContent =
        cart.length;


    if (
        cart.length === 0
    ) {

        items.innerHTML = `

            <p class="empty">
                Ton panier est vide.
            </p>

        `;

        total.textContent =
            "0.00";

        return;

    }


    let sum = 0;


    items.innerHTML =
        cart.map(
            (
                item,
                index
            ) => {

                sum +=
                    item.price;


                return `

                    <div
                        style="
                        padding:15px 0;
                        border-bottom:1px solid #242438;
                        display:flex;
                        justify-content:space-between;
                        "
                    >

                        <div>

                            <strong>
                                ${item.name}
                            </strong>

                            <br>

                            <small>
                                ${item.price.toFixed(2)} $
                            </small>

                        </div>

                        <button
                            onclick="removeItem(${index})"
                            style="
                            background:#ef4444;
                            color:white;
                            border:none;
                            border-radius:6px;
                            padding:7px;
                            "
                        >
                            ✕
                        </button>

                    </div>

                `;

            }
        )
        .join("");


    total.textContent =
        sum.toFixed(2);

}


function removeItem(
    index
) {

    cart.splice(
        index,
        1
    );

    updateCart();

}


function openCart() {

    document
        .getElementById(
            "cart"
        )
        .classList.add(
            "open"
        );


    document
        .getElementById(
            "overlay"
        )
        .classList.add(
            "active"
        );

}


function closeCart() {

    document
        .getElementById(
            "cart"
        )
        .classList.remove(
            "open"
        );


    document
        .getElementById(
            "overlay"
        )
        .classList.remove(
            "active"
        );

}


function focusSearch() {

    document
        .getElementById(
            "search"
        )
        .focus();


    document
        .getElementById(
            "boutique"
        )
        .scrollIntoView({

            behavior:
                "smooth"

        });

}


function searchProducts() {

    const search =
        document
            .getElementById(
                "search"
            )
            .value
            .toLowerCase();


    document
        .querySelectorAll(
            ".product"
        )
        .forEach(
            product => {

                const name =
                    product
                        .dataset
                        .name
                        .toLowerCase();


                if (
                    name.includes(
                        search
                    )
                ) {

                    product.style.display =
                        "block";

                } else {

                    product.style.display =
                        "none";

                }

            }
        );

}


function filterCategory(
    category
) {

    document
        .querySelectorAll(
            ".category"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );


    event
        .currentTarget
        .classList.add(
            "active"
        );


    document
        .querySelectorAll(
            ".product"
        )
        .forEach(
            product => {

                if (
                    category ===
                    "all" ||
                    product.dataset.category ===
                    category
                ) {

                    product.style.display =
                        "block";

                } else {

                    product.style.display =
                        "none";

                }

            }
        );

}


function checkout() {

    if (
        cart.length === 0
    ) {

        alert(
            "Ton panier est vide."
        );

        return;

    }


    alert(
        "Le système de paiement sera connecté à Stripe / PayPal dans la prochaine étape."
    );

}