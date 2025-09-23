// DATA PRODUK AWAL
let produkList = [
	{ id: 1, nama: "Laptop", harga: 7500000 },
	{ id: 2, nama: "Smartphone", harga: 5000000 },
	{ id: 3, nama: "Tablet", harga: 3000000 },
	{ id: 4, nama: "Earphone", harga: 200000 },
	{ id: 5, nama: "Smartwatch", harga: 2000000 },
];

// BUAT OBJECT UNTUK HANDLE EVENT
const eventHandler = {
	tambah: tambahProduk,
	hapus: hapusProduk,
	tampilkan: tampilkanProduk,
};

// MENAMBAH PRODUK DENGAN SPREAD OPERATOR
function tambahProduk(id, nama, harga) {
	const newProduk = { id, nama, harga };
	// spread operator untuk membuat array baru dengan produk baru di akhir
	produkList = [...produkList, newProduk];
	console.log(`Produk ditambahkan:`, newProduk);
	renderTable();
}

// MENGHAPUS PRODUK DENGAN SPREAD OPERATOR
function hapusProduk(...ids) {
	produkList = produkList.filter((p) => !ids.includes(p.id)); // jadi produkList baru tanpa produk dengan id yang ada di ids
	console.log(`ID Produk yang dihapus: ${ids.join(", ")}`);
	renderTable();
}

// MENAMPILKAN PRODUK DENGAN DESTRUCTURING
function tampilkanProduk() {
	console.log("=== Daftar Produk ===");
	produkList.forEach((prod) => {
		// destructuring object
		const { id, nama, harga } = prod;
		console.log(
			`ID: ${id} | Nama: ${nama} | Harga: Rp ${harga.toLocaleString("id-ID")}`
		);
	});
	console.log("=====================");
	// dan render di tabel HTML
	renderTable();
}

console.log("== Contoh pemanggilan function langsung ==");
tampilkanProduk();
tambahProduk(6, "Tablet", 7000000); // contoh penambahan
tampilkanProduk();
hapusProduk(2, 3); // karena pake rest parameter, bisa hapus banyak sekaligus
tampilkanProduk();

// Render produk ke tabel HTML untuk DOM
function renderTable() {
	const tbody = document.getElementById("tabelProdukBody");
	if (!tbody) return; // halaman tanpa tabel
	// bersihkan body
	tbody.innerHTML = ""; // hapus isi awal dari tbody-nya
	produkList.forEach((prod) => {
		const { id, nama, harga } = prod; // destructuring
		const tr = document.createElement("tr");

		const tdId = document.createElement("td");
		tdId.textContent = id;

		const tdNama = document.createElement("td");
		tdNama.textContent = nama;

		const tdHarga = document.createElement("td");
		tdHarga.textContent = `Rp ${harga.toLocaleString("id-ID")}`;

		const tdAksi = document.createElement("td");
		const btnHapus = document.createElement("button");
		btnHapus.textContent = "Hapus";
		btnHapus.addEventListener("click", () => {
			hapusProduk(id);
		});
		tdAksi.appendChild(btnHapus);

		tr.appendChild(tdId);
		tr.appendChild(tdNama);
		tr.appendChild(tdHarga);
		tr.appendChild(tdAksi);

		tbody.appendChild(tr);
	});
}
