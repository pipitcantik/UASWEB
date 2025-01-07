// Daftar makanan
const foodItems = [
    { id: 1, name: "Nasi Goreng", price: 20000 },
    { id: 2, name: "Mie Goreng", price: 15000 },
    { id: 3, name: "Ayam Penyet", price: 25000 },
    { id: 4, name: "Sate Ayam", price: 30000 },
    { id: 5, name: "Rendang", price: 35000 },
    { id: 6, name: "Gado-Gado", price: 20000 }
];

// Menampilkan daftar makanan
function displayFoodItems() {
    const foodList = document.getElementById('foodList');
    foodItems.forEach(item => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.className = 'food-item';
        foodItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Harga: Rp ${item.price}</p>
            <button onclick="addToCart(${item.id})">Tambah ke Keranjang</button>
        `;
        foodList.appendChild(foodItemDiv);
    });
}

// Keranjang belanja
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Menambahkan makanan ke keranjang
function addToCart(id) {
    const foodItem = foodItems.find(item => item.id === id);
    cart.push(foodItem);
    updateCart();
    saveCartToLocalStorage();
}

// Memperbarui tampilan keranjang
function updateCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = ''; // Kosongkan daftar keranjang
    cart.for
}