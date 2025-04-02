function submitForm(form, event) {
	event.preventDefault();
	console.log(form.name.value);
	const userdata = {
		name: form.name.value,
		email: form.email.value,
		msg: form.msg.value,
		url: form.url.value,
	};
	if (localStorage.userdata === undefined) localStorage.setItem("userdata", JSON.stringify(userdata));
	else localStorage.setItem("userdata", localStorage.userdata + "," + JSON.stringify(userdata));

	printData(true);
}

printData(false);

/**
 * Imprime datos de usuario si están guardados
 */
function printData(append) {
	let userdata = localStorage.userdata;
	if (userdata === undefined) return;
	userdata = JSON.parse("[" + userdata + "]");
	if (append) userdata = userdata.slice(-1);
	let dataDiv = document.getElementById("datos");
	for (let i = 0; i < userdata.length; i++) {
		let userdiv = document.createElement("div");
		userdiv.className = "user";

		let name = document.createElement("p");
		let email = document.createElement("p");
		let msg = document.createElement("p");
		let url = document.createElement("p");
		name.textContent = `Nombre: ${userdata[i].name}`;
		email.textContent = `Email: ${userdata[i].email}`;
		msg.textContent = `Mensaje: ${userdata[i].msg}`;
		url.textContent = `Imagen: `;
		let img = document.createElement("img");
		img.src = userdata[i].url;
		url.append(img);
		userdiv.append(name);
		userdiv.append(email);
		userdiv.append(msg);
		userdiv.append(url);
		dataDiv.append(userdiv);
	}
}

function deleteData() {
	localStorage.removeItem("userdata");
	document.getElementById("datos").innerHTML = "";
}
