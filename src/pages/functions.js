    const btnHaypique = document.getElementById('btn-haypique')
	const btnVaplomo = document.getElementById('btn-vaplomo')
	const btnCardumen = document.getElementById('btn-cardumen')
	const btnAnclas = document.getElementById('btn-anclas')
	const btnClasicos = document.getElementById('btn-clasicos')
	const btnSabores = document.getElementById('btn-sabores')

	function cerrarTodo(){
		document.getElementById("haypique").style.display = "none";
		document.getElementById("vaplomo").style.display = "none";
		document.getElementById("cardumen").style.display = "none";
		document.getElementById("anclas").style.display = "none";
		document.getElementById("clasicos").style.display = "none";
		document.getElementById("sabores").style.display = "none";
	}
	
	btnHaypique.addEventListener('click',()=>{
		cerrarTodo()
		document.getElementById("haypique").style.display = "block";
	})
	btnVaplomo.addEventListener('click',()=>{
		cerrarTodo()
		document.getElementById("vaplomo").style.display = "block";
	})
	btnCardumen.addEventListener('click',()=>{
		cerrarTodo()
		document.getElementById("cardumen").style.display = "block";
	})
	btnAnclas.addEventListener('click',()=>{
		cerrarTodo()
		document.getElementById("anclas").style.display = "block";
	})
	btnClasicos.addEventListener('click',()=>{
		cerrarTodo()
		document.getElementById("clasicos").style.display = "block";
	})
	btnSabores.addEventListener('click',()=>{
		cerrarTodo()
		document.getElementById("sabores").style.display = "block";
	})