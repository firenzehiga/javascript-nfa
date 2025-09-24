import { index, store, destroy } from "./controller.js";

const main = () => {
	// TAMPILKAN DATA USER AWAL
	console.log("=== DATA USER AWAL ===");
	index();

	const userBaru1 = {
		nama: "Ahmad",
		umur: 30,
		alamat: "Jakarta",
		email: "ahmad@example.com",
	};

	const userBaru2 = {
		nama: "Siti",
		umur: 25,
		alamat: "Bogor",
		email: "siti@example.com",
	};

	// TAMBAH 2 USER BARU
	console.log("\n=== TAMBAH 2 USER BARU ===");
	store(userBaru1);
	store(userBaru2);

	// HAPUS USER BERDASARKAN INDEKS
	console.log("\n=== HAPUS USER BERDASARKAN INDEKS ===");
	destroy(5);

	index();
};

main();
