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