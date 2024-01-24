// Order data
let order = [];

// Extra Toppings flag
let extraToppings = false;

// Calculate subtotal, tax, and total
function calculateTotal() {
    let subtotal = 0;
    order.forEach(item => {
        subtotal += item.price;
    });

    if (extraToppings) {
        let extraToppingsCount = order.filter(item => item.name === 'Extra Topping').length;
        let extraToppingsCharge = extraToppingsCount * 1.99;
        subtotal += extraToppingsCharge;
    }

    let taxRate = 0.15; // 15% tax rate
    let tax = subtotal * taxRate;
    let total = subtotal + tax;

    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}

// Show specials
function showSpecials() {
    let specialsList = document.getElementById('specials-list');
    specialsList.style.display = (specialsList.style.display === 'none') ? 'block' : 'none';
}

// Show classic pizza options
function showClassicPizza() {
    let classicPizzaList = document.getElementById('classic-pizza-list');
    classicPizzaList.style.display = (classicPizzaList.style.display === 'none') ? 'block' : 'none';
}

function showGourmentPizza() {
    let GourmentPizzaList = document.getElementById('gourment-pizza-list');
    GourmentPizzaList.style.display = (GourmentPizzaList.style.display === 'none') ? 'block' : 'none';
}
function showCreateYourOwnPizza() {
    let createYourOwnPizzaList = document.getElementById('create-your-own-pizza-list');
    createYourOwnPizzaList.style.display = (createYourOwnPizzaList.style.display === 'none') ? 'block' : 'none';
}
// Show Garlic Fingers options
function showGarlicFingers() {
    let garlicFingersList = document.getElementById('garlic-fingers-list');
    garlicFingersList.style.display = (garlicFingersList.style.display === 'none') ? 'block' : 'none';
}
// Show Fish & Chips options
function showFishAndChips() {
    let fishAndChipsList = document.getElementById('fish-and-chips-list');
    fishAndChipsList.style.display = (fishAndChipsList.style.display === 'none') ? 'block' : 'none';
}
// Show Chicken & Chips options
function showChickenAndChips() {
    let chickenAndChipsList = document.getElementById('chicken-and-chips-list');
    chickenAndChipsList.style.display = (chickenAndChipsList.style.display === 'none') ? 'block' : 'none';
}
// Show Jessy's Beef Donairs options
function showBeefDonairs() {
    let beefDonairsList = document.getElementById('beef-donairs-list');
    beefDonairsList.style.display = (beefDonairsList.style.display === 'none') ? 'block' : 'none';
}
// Show Panzarottis options
function showPanzarottis() {
    let panzarottisList = document.getElementById('panzarottis-list');
    panzarottisList.style.display = (panzarottisList.style.display === 'none') ? 'block' : 'none';
}
function showHomemadeBurgers() {
    let homemadeBurgersList = document.getElementById('homemade-burgers-list');
    homemadeBurgersList.style.display = (homemadeBurgersList.style.display === 'none') ? 'block' : 'none';
}
function showTraditionalWings() {
    let traditionalWingsList = document.getElementById('traditional-wings-list');
    traditionalWingsList.style.display = (traditionalWingsList.style.display === 'none') ? 'block' : 'none';
}
// Show Nachos options
function showNachos() {
    let nachosList = document.getElementById('nachos-list');
    nachosList.style.display = (nachosList.style.display === 'none') ? 'block' : 'none';
}
// Show Poutines options
function showPoutines() {
    let poutinesList = document.getElementById('poutines-list');
    poutinesList.style.display = (poutinesList.style.display === 'none') ? 'block' : 'none';
}
// Show Wraps options
function showWraps() {
    let wrapsList = document.getElementById('wraps-list');
    wrapsList.style.display = (wrapsList.style.display === 'none') ? 'block' : 'none';
}
function showSubs() {
    let subsList = document.getElementById('subs-list');
    subsList.style.display = (subsList.style.display === 'none') ? 'block' : 'none';
}
function showSalads() {
    let saladsList = document.getElementById('salads-list');
    saladsList.style.display = (saladsList.style.display === 'none') ? 'block' : 'none';
}
function showOtherFavourites() {
    let otherFavouritesList = document.getElementById('other-favourites-list');
    otherFavouritesList.style.display = (otherFavouritesList.style.display === 'none') ? 'block' : 'none';
}
function showDips() {
    let dipsList = document.getElementById('dips-list');
    dipsList.style.display = (dipsList.style.display === 'none') ? 'block' : 'none';
}
function showDrinks() {
    let drinksList = document.getElementById('drinks-list');
    drinksList.style.display = (drinksList.style.display === 'none') ? 'block' : 'none';
}
function toggleToppings(toppingType) {
    let toppingsList = document.getElementById(toppingType + '-toppings');
    toppingsList.style.display = toppingsList.style.display === 'none' ? 'block' : 'none';
}


// Add classic pizza to the order
function addClassicPizza(size, price) {
    order.push({ name: `Classic Pizza - ${size}`, price });
    updateOrderList();
    calculateTotal();
}

// Add extra topping
function addExtraTopping() {
    order.push({ name: 'Extra Topping', price: 1.99 });
    extraToppings = true;
    updateOrderList();
    calculateTotal();
}

// Add item to the order
function addItem(name, price) {
    order.push({ name, price });
    updateOrderList();
    calculateTotal();
}

// Update order list with remove option
function updateOrderList() {
    let orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    order.forEach((item, index) => {
        let row = orderList.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerText = item.name;
        cell2.innerText = `$${item.price.toFixed(2)}`;
        cell3.innerHTML = `<button onclick="removeItem(${index})">-</button>`; // Add remove button
    });
}

// Remove item from order
function removeItem(index) {
    order.splice(index, 1); // Remove the item at the specified index
    updateOrderList();
    calculateTotal();
}

// Finalize the order
function finalizeOrder() {
    // Assuming you have already calculated the total in the calculateTotal function
    let total = document.getElementById('total').innerText; // Get the total from the DOM
    alert('Order finalized! Your total is: $' + total);
    resetOrder();
}


// Reset the order
function resetOrder() {
    order = [];
    extraToppings = false;
    updateOrderList();
    calculateTotal();
}
