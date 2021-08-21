//function for memory
function MemoryCost(memoryMoney) {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseInt(bestPriceText);


    //8Gb memory cost
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = memoryMoney;
    const memoryText = memoryCost.innerText;
    const memoryAmount = parseInt(memoryText);


    //256GB storage cost
    const extraStorage = document.getElementById('extra-storage-cost');
    const extraStorageText = extraStorage.innerText;
    const extraStorageAmount = parseInt(extraStorageText);

    //total cost
    const totalAmount = memoryAmount + bestPriceAmount + extraStorageAmount;
    console.log(totalAmount);

    //total price
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalAmount;
}

//function for storage
function storageCost(storageMoney) {
    //best price
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseInt(bestPriceText);


    //256GB storage
    const extraStorage = document.getElementById('extra-storage-cost');
    extraStorage.innerText = storageMoney;
    const extraStorageText = extraStorage.innerText;
    const extraStorageAmount = parseInt(extraStorageText);

    const memoryCost = document.getElementById('memory-cost');
    // memoryCost.innerText = memoryMoney;
    const memoryText = memoryCost.innerText;
    const memoryAmount = parseInt(memoryText);


    //total cost
    const totalAmount = bestPriceAmount + extraStorageAmount + memoryAmount;

    ////total price
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalAmount;
}

//function for delivery

function deliveryCost(deliveryMoney) {
    const delivery = document.getElementById('delivery-cost');
    delivery.innerText = deliveryMoney;
    const deliveryText = delivery.innerText
    const deliveryAmount = parseInt(deliveryText);
    console.log(deliveryAmount);


    //bestPrice amount
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseInt(bestPriceText);

    //8Gb memory cost
    const memoryCost = document.getElementById('memory-cost');
    const memoryText = memoryCost.innerText;
    const memoryAmount = parseInt(memoryText);


    //256GB storage cost
    const extraStorage = document.getElementById('extra-storage-cost');
    const extraStorageText = extraStorage.innerText;
    const extraStorageAmount = parseInt(extraStorageText);

    //total cost
    const totalAmount = memoryAmount + bestPriceAmount + extraStorageAmount + deliveryAmount;
    console.log(totalAmount);

    //total price
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalAmount;
}


//memory cost
document.getElementById('8GB-memory').addEventListener('click', function () {
    MemoryCost(0);
});
document.getElementById('16GB-memory').addEventListener('click', function () {
    MemoryCost(180);
});



//storageCost
document.getElementById('256GB-storage').addEventListener('click', function () {
    storageCost(0);
});

document.getElementById('512GB-storage').addEventListener('click', function () {
    storageCost(100);
});
document.getElementById('1TB-storage').addEventListener('click', function () {
    storageCost(180);
});
//delivery option
document.getElementById('delivery-free').addEventListener('click', function () {

    deliveryCost(0);
})
document.getElementById('delivery-charge').addEventListener('click', function () {

    deliveryCost(20);
});


//bonous part

document.getElementById('apply-promo').addEventListener('click', function () {
    const total = document.getElementById('total-price');
    const totalText = total.innerText;
    const totalAmount = parseFloat(totalText);

    const promo = document.getElementById('promo-code');
    const promoCode = promo.value;
    promo.value = '';

    if (promoCode == "stevekaku") {
        const discount = (totalAmount * 20) / 100;
        console.log(discount);

        const discountPrice = totalAmount - discount;

        const discountTotal = document.getElementById('discount-total');
        discountTotal.innerText = discountPrice;
    }

})
