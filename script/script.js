window.onload = function() {


	function resultadoCep(dadosCep){

		for( let campo in dadosCep ) {

			if(document.querySelector(`#${campo}`)){
			   document.querySelector(`#${campo}`).value= dadosCep[campo];
			}

		}

	}


	let dadosCep = async function(cep){

		let url = `https://viacep.com.br/ws/${cep}/json/`;
		try {

			let dadosFetch = await fetch(url);

		 	let dadosJson = await dadosFetch.json();
		 	resultadoCep(dadosJson)
		} catch(error){

			alert(error);
		}		

	}

	//dadosCep(`87140000`);
	const btnBuscar = document.querySelector("#btn-enviar");
	const CEP = document.querySelector("#cep")

	btnBuscar.addEventListener('click',function(){

		dadosCep(CEP.value);

	})

}

//870053660