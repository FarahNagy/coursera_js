function groceryTracker() {
    const amount1 = parseFloat(document.getElementById('1').value);
    const amount2 = parseFloat(document.getElementById('2').value);
    const amount3 = parseFloat(document.getElementById('3').value);

    const total = amount1 + amount2 + amount3;
    document.getElementById('result').innerText = `The total amount of all groceries is : ${total}`;
}