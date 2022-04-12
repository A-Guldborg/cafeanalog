function loadReceipts() {
    const receipts = document.getElementById("receiptList");
    const origReceipt = document.getElementById("originalReceipt");

    if (getReceipts().length === 0) {
        receipts.innerHTML = "<p>Could not find any receipts</p>";
    } else {
        for (let i = 0; i < getReceipts().length; i++) {

        }
    }
}


function getReceipts() {
    return [];
}