	var tiro_1;
	var tiro_2;
	var posiciones = [0,-160,-320,-481,-642,-803];
	var dado1,dado2,boton_tirar;
	var suma = 0;
	var puntos = 0;
	var turno = 0;


	window.onload = init;

	function init(){
		boton_tirar = document.getElementById("boton_tirar");
		boton_tirar.addEventListener("click",jugar);

		dado1 = document.getElementById("dado1");
		dado2 = document.getElementById("dado2");
	}

	function tirardado(){
		return Math.floor(Math.random() * 6) + 1 ;
	}

	function actualizarDado(ref,cara){
		ref.style.backgroundPosition = posiciones[cara-1]+"px";
	}

	function jugar(){
		tiro_1 = tirardado();//Retorna un numero entre 1 y 6
		tiro_2 = tirardado();
		actualizarDado(dado1,tiro_1);
		actualizarDado(dado2,tiro_2);


		suma = tiro_1 + tiro_2;

		if (suma == 7 || suma == 11) 
		{

			alert("bien");
		}else
		 if (suma == 2 || suma == 3 || suma== 12) 
		{

		}else 
		{
			if (turno==1) 
			{
				puntos = suma;
			}
			if (suma == puntos && turno>1) 
			{
				//gano
			}else
			{
				if (suma == 7) 
				{
					//perdiste
				}else
				{
					
				}
			}
		}

		if (suma == 4 || suma == 5 || suma == 6 || suma == 8 || suma == 9 || suma == 10) 
		{
			puntos= suma;

		}else 
		if ( puntos == 0 && suma == 7) 
		{
			alert("Game Over");
			window.location.reload();
		}
	}