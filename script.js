/* ================= DATA BUKU =================
   Simulasi database sederhana (array object)
*/
const books = [
    {
        title: "Laut Bercerita",
        price: 89000,
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Bumi",
        price: 79000,
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Sepotong Hati",
        price: 85000,
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Atomic Habits",
        price: 99000,
        image: "https://via.placeholder.com/150"
    }
];

/* ================= LOAD BUKU =================
   Fungsi untuk menampilkan buku ke halaman
*/
function loadBooks() {
    const container = document.getElementById("bookList");

    books.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${book.image}">
            <h4>${book.title}</h4>
            <p>Rp ${book.price}</p>
            <button onclick="addToCart('${book.title}')">Beli</button>
        `;

        container.appendChild(card);
    });
}

/* ================= ADD TO CART =================
   Simulasi tambah ke keranjang
*/
function addToCart(title) {
    alert(title + " ditambahkan ke keranjang");
}

/* ================= SEARCH =================
   Filter buku berdasarkan input user
*/
document.getElementById("search").addEventListener("keyup", function() {
    const keyword = this.value.toLowerCase();
    const container = document.getElementById("bookList");

    container.innerHTML = "";

    books
        .filter(book => book.title.toLowerCase().includes(keyword))
        .forEach(book => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${book.image}">
                <h4>${book.title}</h4>
                <p>Rp ${book.price}</p>
                <button onclick="addToCart('${book.title}')">Beli</button>
            `;

            container.appendChild(card);
        });
});

/* ================= INIT ================= */
loadBooks();