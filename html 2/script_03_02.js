// Szymon Więzowski

const productPrices = 
{
    "PROD_01": 12.00,
    "PROD_02": 2.00,
    "PROD_03": null,
    "PROD_04": 99.00
};

function calculateOrder() 
{
    const productSelect = document.getElementById("productSelect");
    const quantityInput = document.getElementById("quantityInput");
    const totalAmount = document.getElementById("totalAmount");

    const selectedProduct = productSelect.value;
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) 
    {
        alert("Podaj ilość niezerową");
        return;
    }

    const totalPrice = quantity * productPrices[selectedProduct];
    totalAmount.innerText = `Suma PLN: ${totalPrice.toFixed(2)}`;
}

function placeOrder() 
{
    const productSelect = document.getElementById("productSelect");
    const quantityInput = document.getElementById("quantityInput");
    const totalAmount = document.getElementById("orderSummary");

    const selectedProduct = productSelect.value;
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) 
    {
        alert("Podaj ilość niezerową");
        return;
    }

    const orderSummary = `Wybrałeś ${quantity}x${selectedProduct} koszt to ${(quantity * productPrices[selectedProduct]).toFixed(2)}zł`;
    totalAmount.innerText = orderSummary;
}
