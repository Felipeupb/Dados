	var tiro_1;
	var tiro_2;
	var posiciones = [0,-160,-320,-481,-642,-803];
	var dado1,dado2,boton_tirar;
	var suma = 0;
	var puntos = 0;
	var turno = 1;
	var punts;
	var tir;


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
  				text:'Quieres volver a empezar ?',
  				width: 600,
  				padding: '3em',
  				background: '#fff url(/images/trees.png)',
  				backdrop: `
   				rgba(0,0,123,0.4)
    			url("https://media.giphy.com/media/3o72FeJnjfZZ31WjBu/source.gif")
    			left top
    			no-repeat
  				`,
			});
			turno = 1;
			tir = document.getElementById("turnos").innerHTML = turno;
		}else
		 if (turno == 1 && suma == 2 || suma == 3 || suma== 12) 
		{
			//mostrarMensaje("Ganaste");
			Swal.fire({
  				icon: 'error',
				title: 'Perdiste',
				text: 'Quieres volver a empezar ?',
  				width: 600,
  				padding: '3em',
  				background: '#fff url(/images/trees.png)',
  				backdrop: `
   				rgba(0,0,123,0.4)
    			url("https://media.giphy.com/media/5C2n81n1djZ14KfL5h/source.gif")
    			left top
    			no-repeat
  				`,
  				
			});
			turno = 1;
			tir = document.getElementById("turnos").innerHTML = turno;
		}else 
		{
			if (turno == 1) 
			{
				puntos = suma;
				punts = document.getElementById("Puntos").innerHTML= puntos;
			}
			if (suma == puntos && turno>1) 
			{
				//mostrarMensaje("Ganaste");
				Swal.fire({
  				icon:'success',
  				title:'Ganaste',
  				text:'Quieres volver a empezar ?',
  				width: 600,
  				padding: '3em',
  				background: '#fff url(/images/trees.png)',
  				backdrop: `
   				rgba(0,0,123,0.4)
    			url("https://media.giphy.com/media/3o72FeJnjfZZ31WjBu/source.gif")
    			left top
    			no-repeat
  				`,
  				
			});

				turno = 1;
				tir = document.getElementById("turnos").innerHTML = turno;
				puntos = 0;
				punts = document.getElementById("Puntos").innerHTML= puntos;
			}else
			{
				if (suma == 7) 
				{
					//mostrarMensaje("perdiste");
				Swal.fire({
				  icon: 'error',
				  title: 'Perdiste',
				  text: 'Quieres volver a empezar ?',
				  width: 600,
  				padding: '3em',
  				background: '#fff url(/images/trees.png)',
  				backdrop: `
   				rgba(0,0,123,0.4)
    			url("https://media.giphy.com/media/5C2n81n1djZ14KfL5h/source.gif")
    			left top
    			no-repeat
  				`,
				});
					turno = 1;
					tir = document.getElementById("turnos").innerHTML = turno;
					puntos = 0;
					punts = document.getElementById("Puntos").innerHTML= puntos;
				}else
				{
					turno +=1;
					tir = document.getElementById("turnos").innerHTML = turno;
				}
			}
		}
	
	}

	
	
	

