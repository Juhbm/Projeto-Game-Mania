/*criar variável e puxar o input que o usuário digitar*/

let inputs = document.getElementsByClassName('inserir');
console.log("hello") /*testando no console*/
		for (let input of inputs) {
			input.addEventListener("blur", function() {
				if(input.value.trim() != ""){
					input.classList.add();
				} else {
					input.classList.remove();
				}
                console.log("world") /*testando no console*/
			});
		}

