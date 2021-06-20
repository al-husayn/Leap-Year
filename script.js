let button = document.getElementById("btn");

button.addEventListener("click", () => {
	let input = document.getElementById("input").value;
	if (input % 4 === 0) {
		if (input % 100 === 0) {
			if (input % 400 === 0) {
				document.getElementById("result").innerHTML = `${input}  is a leap year`;
			} else {
				document.getElementById("result").innerHTML = `${input} is not a leap year`;
			}

		} else {
			document.getElementById("result").innerHTML = `${input} is a leap year`;
		}

	} else {
		document.getElementById("result").innerHTML = `${input} is not leap year`;

	}

}, false);