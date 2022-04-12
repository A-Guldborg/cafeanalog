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

function addMoney() {
    bal += 50;
    loadBalance();
}