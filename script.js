/* ================= DATA BUKU =================
   Ambil dari localStorage (jika ada),
   jika tidak → pakai data default
*/
let books = JSON.parse(localStorage.getItem("books")) || [
    {
        title: "Laut Bercerita",
        price: 89000,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREVzCF2rOGKb2emwjoFs9JtyEKNK9uX-fDjTpu3FAl0b0fmng7XwzVELJ6soBzle_YLibolIwiagkJx83p3Zkb1qSCdk7G3rsqRhKPD6tE60T9cECySynh"
    },
    {
        title: "Bumi",
        price: 79000,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRiO-yAEjNSE7rh3-2_FKDGSt4xIlb3Lj0swnr4WO3TMNZYxb71JRu39lPYKCQrCQEoO1Eerb60hP68kXpdr3vHRjSPIaF4MtEkTsEJlmg_i7e-xvmEBY8Xs1Y"
    },
    {
        title: "Sepotong Hati",
        price: 85000,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTOovs7d8zV-vpGRxNrRucLKOT7g0O6jpUX6aLSElYOgNp86-KwnfDQSLshzzGzgVDTG-h6r1QGVb-qckDchTM7Yr0TnGDaq4xvYKjV1eUaqdLgHqadm89U"
    },
    {
        title: "Atomic Habits",
        price: 99000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-8224y-mi8duala5ukgd8"
    }
];

/* ================= LOAD BUKU =================
   Fungsi untuk menampilkan buku ke halaman
*/
function loadBooks(data = books) {
    const container = document.getElementById("bookList");

    if (!container) return; // keamanan biar tidak error

    container.innerHTML = "";

    data.forEach(book => {
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
const searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener("keyup", function() {
        const keyword = this.value.toLowerCase();

        const result = books.filter(book =>
            book.title.toLowerCase().includes(keyword)
        );

        loadBooks(result);
    });
}

/* ================= INIT ================= */
loadBooks();