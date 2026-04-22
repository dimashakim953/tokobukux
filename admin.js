/* ================= AMBIL DATA ================= */
let books = JSON.parse(localStorage.getItem("books")) || [];

/* ================= TAMPILKAN DATA ================= */
function loadAdminBooks() {
    const container = document.getElementById("adminBookList");
    container.innerHTML = "";

    books.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <span>${book.title} - Rp ${book.price}</span>
            <button onclick="deleteBook(${index})">Hapus</button>
        `;

        container.appendChild(card);
    });
}

/* ================= TAMBAH BUKU ================= */
function addBook() {
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;

    if (title === "" || price === "" || image === "") {
        alert("Semua data harus diisi!");
        return;
    }

    books.push({ title, price, image });

    localStorage.setItem("books", JSON.stringify(books));

    // Reset input
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";

    loadAdminBooks();
}

/* ================= HAPUS ================= */
function deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    loadAdminBooks();
}

/* ================= INIT ================= */
loadAdminBooks();