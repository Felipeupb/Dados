	var tiro_1;
	var tiro_2;
	var posiciones = [0,-160,-320,-481,-642,-803];
	var dado1,dado2,boton_tirar;
	var suma = 0;
	var puntos = 0;
	var turno = 1;


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


		if (turno == 1 && suma == 7 || suma == 11) 
		{
			
			//mostrarMensaje("Ganaste");
			Swal.fire({
  				icon:'success',
  				title:'Ganaste',
  				text:'You clicked the button!',
  				
			});
			turno = 1;
		}else
		 if (suma == 2 || suma == 3 || suma== 12) 
		{
			//mostrarMensaje("Ganaste");
			Swal.fire({
  				icon:'success',
  				title:'Ganaste',
  				text:'You clicked the button!',
  				
			});
		}else 
		{
			if (turno==1) 
			{
				puntos = suma;
			}
			if (suma == puntos && turno>1) 
			{
				//mostrarMensaje("Ganaste");
				Swal.fire({
  				icon:'success',
  				title:'Ganaste',
  				text:'You clicked the button!',
  				
			});
			}else
			{
				if (suma == 7) 
				{
					//mostrarMensaje("perdiste");
				Swal.fire({
				  icon: 'error',
				  title: 'Perdiste',
				  text: 'Something went wrong!',
				});
					turno = 1;
					puntos = 0;
				}else
				{
					turno +=1;
				}
			}
		}

		/*if (suma == 4 || suma == 5 || suma == 6 || suma == 8 || suma == 9 || suma == 10) 
		{
			puntos= suma;

		}else 
		if ( puntos == 0 && suma == 7) 
		{
			alert("Game Over");
			window.location.reload();
		}*/
	
	}


