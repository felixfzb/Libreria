$(function() {
	var id, isbn, title, authorId, libros=$("#libros"),firstName, lastName, autores=$("#autores");
	// Declaração de Variáveis Globais
	function mostrar_autores() {
		// Função para exibir os autores na seção correspondente
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var myArr = JSON.parse(this.responseText);
				autores.html("<th>Autor ID</th><th>Nombre</th><th>Apellido</th>")
				for(var i = 0; i < myArr.length ; i++) {
					autores.append("<tr>");
					autores.append("<td>" + myArr[i].id + "</td><td>" + myArr[i].firstName + "</td><td>" + myArr[i].lastName + "</td>");
					autores.append("</tr>");
				}
			}
		};
		xmlhttp.open("GET", "https://bibliapp.herokuapp.com/api/authors", true);
		xmlhttp.send();
	};
	function mostrar_libros() {
		// Função para exibir os livros na seção correspondente
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
    			var myArr = JSON.parse(this.responseText);
				libros.html("<th>Autor ID</th><th>Título</th><th>ISBN</th><th>Libro ID</th>")
				for(var i = 0; i < myArr.length ; i++) {
					libros.append("<tr>");
					libros.append("<td>" + myArr[i].authorId + "</td><td>" + myArr[i].title + "</td><td>" + myArr[i].isbn + "</td><td>" + myArr[i].id + "</td>");
					libros.append("</tr>");
				}
			}
		};
		xmlhttp.open("GET", "https://bibliapp.herokuapp.com/api/books", true);
		xmlhttp.send();
	};
	function acciones() {
		alert("Procedimiento en construccion");
	}
	// Execução dos vários módulos
	$("#mostrar_autores").on('click', mostrar_autores);
	$("#mostrar_libros").on('click', mostrar_libros);
	$("#continuar").on('click', acciones);
});
