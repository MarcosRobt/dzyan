$(document).ready(function() {
	var livros = [];
	
	
	var idioma = {
		    "sEmptyTable": "Nenhum registro encontrado",
		    "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
		    "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
		    "sInfoFiltered": "(Filtrados de _MAX_ registros)",
		    "sInfoPostFix": "",
		    "sInfoThousands": ".",
		    "sLengthMenu": "_MENU_ resultados por página",
		    "sLoadingRecords": "Carregando...",
		    "sProcessing": "Processando...",
		    "sZeroRecords": "Nenhum registro encontrado",
		    "sSearch": "Pesquisar",
		    "oPaginate": {
		        "sNext": "»",
		        "sPrevious": "«",
		        "sFirst": "««",
		        "sLast": "»»"
		    },
		    "oAria": {
		        "sSortAscending": ": Ordenar colunas de forma ascendente",
		        "sSortDescending": ": Ordenar colunas de forma descendente"
		    }
		};
	
	var colunas = [
        {data: "idLivro", 		title: 'Id', "visible": true},
        {data: "tituloLivro", 	title: 'Título', "visible": true },
        {data: "subtituloLivro",title: 'SubTítulo', "visible": true },
        {data: "autorLivro", 	title: 'Autor', "visible": true },
        {data: "anoLivro", 		title: 'Ano', "visible": true },
        {data: "generoLivro",	title: 'Gênero', "visible": true },
        {data: "editoraLivro",	title: 'Editora', "visible": true },
        {data: "edicaoLivro", 	title: 'Edição', "visible": true },
        {data: "isbnLivro", 	title: 'ISBN', "visible": true },
        {data: "paginasLivro", 	title: 'Páginas', "visible": true }
    ];
	
	$.ajax({
	    url: 'http://localhost:8080/livro/findAll',
	    async: true,
		type: 'GET',
		contentType: "application/json",
		success:function(data){
			$('#example').DataTable( {
		        data:			data,
		        language:		idioma,
		        columns:		colunas
		    } );
		},
		error: function(data){			
			livros = [];
		}
    });
	
	$("#btnCadLivro").click(function() {
		if(validaForm()){
			var livro = '{'
		        +'"tituloLivro": "'+ $("#titulo").val()+'",'
		        +'"subtituloLivro": "'+ $("#subtitulo").val()+'",'
		        +'"autorLivro": "'+ $("#autor").val()+'",'
		        +'"anoLivro": "'+ $("#autor").val()+'",'
		        +'"generoLivro": "'+ $("#genero").val()+'",'
		        +'"editoraLivro": "'+ $("#editora").val()+'",'
		        +'"edicaoLivro": "'+ $("#edicao").val()+'",'
		        +'"isbnLivro": "'+ $("#isbn").val()+'",'
		        +'"paginasLivro": '+ parseInt($("#paginas").val())
		        +'}';
			
			$.ajax({
	    	    url: 'http://localhost:8080/livro/create',
	    	    async: true,
	    		type: 'POST',
	    		data: livro,
	    		contentType: "application/json",
	    		success:function(response){
	    			$.notify({
	    				// options
	    				message: 'Livro cadastrado com sucesso!' 
	    			},{
	    				// settings
	    				type: 'info',
	    				placement: {
	    					from: "top",
	    					align: "center"
	    				}
	    			});
	    			limpaForm();
	    		},error:	function(response){			
	    			$.notify({
	    				// options
	    				message: 'Erro no cadastro, contato um administrador.' 
	    			},{
	    				// settings
	    				type: 'danger',
	    				placement: {
	    					from: "top",
	    					align: "center"
	    				}
	    			});
	    		}
	        });
		}else{
			$.notify({
				// options
				message: 'Preencha os campos em vermelho.' 
			},{
				// settings
				type: 'danger',
				placement: {
					from: "top",
					align: "center"
				}
			});
		}
	});
	
	
});

function validaForm(){
	
	var campos = $("#cadLivro").find(".form-control");
	var isEmpty = false;
	
	for(var i in campos){
	    if(campos[i].value == ""){
	        isEmpty = true;
	        $(campos[i]).attr('style','border-color:red')
	    }
	
	}
	
	return !isEmpty;
}

function limpaForm(){
	
	var campos = $("#cadLivro").find(".form-control");
	
	for(var i in campos){
		$(campos[i]).val("");
	}
	
}