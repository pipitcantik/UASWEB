// Mengambil elemen dari DOM
const shippingForm = document.getElementById('shippingForm');
const shippingList = document.getElementById('shippingList');

// Fungsi untuk menyimpan pengiriman ke Local Storage
function saveShippingData(data) {
    let shippingData = JSON.parse(localStorage.getItem('shippingData')) || [];
    shippingData.push(data);
    localStorage.setItem('shippingData', JSON.stringify(shippingData));
}

// Fungsi untuk menampilkan pengiriman dari Local Storage
function displayShippingData() {
    const shippingData = JSON.parse(localStorage.getItem('shippingData')) || [];
    shippingData.forEach(data => {
        const li = document.createElement('li');
        li.textContent = `Nama: ${data.recipientName}, Alamat: ${data.address}, Detail Paket: ${data.packageDetails}`;
        shippingList.appendChild(li);
    });
}

// Event listener untuk form submission
shippingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari input
    const recipientName = document.getElementById('recipientName').value;
    const address = document.getElementById('address').value;
    const packageDetails = document.getElementById('packageDetails').value;

    // Membuat objek pengiriman
    const shippingData = {
        recipientName,
        address,
        packageDetails
    };

    // Menyimpan data pengiriman
    saveShippingData(shippingData);

    // Menampilkan data pengiriman
    const li = document.createElement('li');
    li.textContent = `Nama: ${recipientName}, Alamat: ${address}, Detail Paket: ${packageDetails}`;
    shippingList.appendChild(li);

    // Mengosongkan form setelah pengiriman
    shippingForm.reset();
});

// Menampilkan data pengiriman saat halaman dimuat
document.addEventListener('DOMContentLoaded', displayShippingData);