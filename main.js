let bal = 100;

function loadMenu() {
    document.getElementById("menubox").innerHTML = "<ul>\n" +
        "            <a href=\"shop.html\"><li>Shop</li></a>\n" +
        "            <a href=\"receipts.html\"><li>Receipts</li></a>\n" +
        "            <li onclick=\"addMoney()\">Add money</li>\n" +
        "            <li>Scoreboard</li>\n" +
        "            <li>Add friends</li>\n" +
        "            <li>Logout</li>\n" +
        "        </ul>\n" +
        "        <p onload=\"loadBalance()\">\n" +
        "            Balance: <span id=\"bal\"></span>\n" +
        "        </p>";

    loadBalance();
}

function loadShopItems() {
    const shopList = document.getElementById("allcoffee");
    const origReceipt = document.getElementById("originalCoffee");

    const items = getShopItems();

    if (items.length === 0) {
        shopList.innerHTML = "<p>Could not find any purchasable items</p>";
    } else {
        for (let i = 0; i < items.length; i++) {
            let clone = origReceipt.cloneNode(true);
            clone.setAttribute("id", "coffee" + i);
            clone.setAttribute("onclick", "buyItem('" + items[i].name + "', " + items[i].price + ")");
            clone.querySelector(".name").innerHTML = items[i].name;
            clone.querySelector(".price").innerHTML = items[i].price + ",-";
            shopList.appendChild(clone);
        }
    }
}

function getShopItems() {
    return [
        {
            price: 32,
            name: "Latte"
        },
        {
            price: 30,
            name: "Cocoa"
        },
        {
            price: 22,
            name: "Espresso"
        },
        {
            price: 35,
            name: "Flat white"
        },
        {
            price: 33,
            name: "Cappuccino"
        },
        {
            price: 27,
            name: "Mocha"
        },
        {
            price: 24,
            name: "Americano"
        },
        {
            price: 26,
            name: "Macchiato"
        }
    ];
}

function buyItem(name, price) {
    if (bal >= price) {
        deductMoney(price);
        // Todo: Add to list of receipts (DB required)
        console.log("Purchased: " + name + " for " + price + ",-");
    } else {
        console.log("Not enough money");
    }
}

function loadReceipts() {
    const receiptList = document.getElementById("receiptList");
    const origReceipt = document.getElementById("originalReceipt");

    const receipts = getReceipts();

    if (receipts.length === 0) {
        receiptList.innerHTML = "<p>Could not find any receipts</p>";
    } else {
        for (let i = 0; i < receipts.length; i++) {
            let clone = origReceipt.cloneNode(true);
            clone.removeAttribute("id");
            clone.querySelector(".name").innerHTML = receipts[i].name;
            clone.querySelector(".price").innerHTML = receipts[i].price + ",-";
            receiptList.appendChild(clone);
        }
    }
}

function getReceipts() {
    return [
        {
            price: 32,
            name: "Latte"
        },
        {
            price: 27,
            name: "Macchiato"
        }
    ];
}

function loadBalance() {
    document.getElementById("bal").innerText = bal + ",-";
}

function deductMoney(value) {
    bal -= value;
    loadBalance();
}

function addMoney() {
    bal += 50;
    loadBalance();
}