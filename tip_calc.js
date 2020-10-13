// let billAmount = document.getElementById("bill-num").value;
// let billShare = document.getElementById("bill-shr").value;
// let totalAmount =  document.getElementById("amount").value;
// const customerRating = document.querySelector('.btn');
// const calc = document.getElementById('cal').value;
// billAmount = parseFloat(billAmount);
// customerRating.addEventListener('click', select);

// const selected = 0;
// function select(e) {
//     const selectRating = e.target;
//     selected = selectRating.classList;
// }

// calc.addEventListener('click', calcTip)

function calcTip(rating) {
    event.preventDefault();

    let billAmount = document.getElementById("bill-num").value;
    let billShare = document.getElementById("bill-shr").value;
    let totalAmount =  document.getElementById("amount").value;
    billAmount = parseFloat(billAmount);

    if(billAmount === " " || billShare <= 1) {
        alert('Please enter the values');
    }


    let total = (rating * billAmount) / billShare;
    let totalPay = (total * billShare) + billAmount;
    console.log(total);
    document.getElementById('amount').innerHTML = ` $ ${total.toFixed(2)}`;
    document.getElementById('total').innerHTML = ` $ ${totalPay.toFixed(2)}`;

}
