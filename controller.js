import users from "./data.js";

const index = () => {
	console.table(users);
	return users;
};

const store = (user) => {
	users.push(user);
	console.table(users);
	return users;
};

const destroy = (index) => {
	if (index >= 0 && index < users.length) {
		users.splice(index, 1);
		console.table(users);
	} else {
		console.log(`\nIndeks ${index} tidak ditemukan!`);
	}
	return users;
};

export { index, store, destroy };
