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
        {data: "autorLivro", 	title: 'Autor', "visible": true },
        {data: "anoLivro", 		title: 'Ano', "visible": true },
        {data: "generoLivro",	title: 'Gênero', "visible": true },
        {data: "editoraLivro",	title: 'Editora', "visible": true },
        {data: "edicaoLivro", 	title: 'Edição', "visible": true },
        {data: "isbnLivro", 	title: 'ISBN', "visible": true },
        {data: 'consultar',		title: "", "visible": true }
    ];
	
	$.ajax({
	    url: 'http://localhost:8080/livro/findAll',
	    async: true,
		type: 'GET',
		contentType: "application/json",
		success:function(data){
			$('#example').DataTable( {
				responsive: 	true,
		        data:			data,
		        language:		idioma,
		        columns:		colunas,
		        columnDefs: [
					{
		                  "targets": 8,
		                  "data": null,
		                  "defaultContent": "<a href='#'><span onClick='openModal(this)' id='editModal' class='fa fa-pencil-square-o fa-3'></span></a>"
		              }
				],
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
	
	$("#udpate").click(function() {
		var obj;
		
		$.ajax({
    	    url: 'http://localhost:8080/livro/findById/'+parseInt($("#idModal").val()),
    	    async: true,
    		type: 'GET',
    		contentType: "application/json",
    		success:function(response){
    			
    		},error:	function(response){			
    			$.notify({
    				// options
    				message: 'Erro na operação, contato um administrador.' 
    			},{
    				// settings
    				type: 'danger',
    				placement: {
    					from: "top",
    					align: "center"
    				}
    			});
    		},complete:function(data){
    			
    			var response = data.responseJSON;
    			var livro = '{'
    				+'"idLivro": '+parseInt($("#idModal").val())+','
    		        +'"tituloLivro": "'+ $("#tituloLivro").val()+'",'
    		        +'"subtituloLivro":" '+$("#subtituloLivro").val()+'",'
    		        +'"autorLivro": "'+ $("#autorLivro").val()+'",'
    		        +'"anoLivro": "'+$("#anoLivro").val()+'",'
    		        +'"generoLivro": "'+ $("#generoLivro").val()+'",'
    		        +'"editoraLivro": "'+ $("#editoraLivro").val()+'",'
    		        +'"edicaoLivro": "'+ $("#edicaoLivro").val()+'",'
    		        +'"isbnLivro": "'+ $("#isbnLivro").val()+'",'
    		        +'"paginasLivro": '+ parseInt($("#paginasLivro").val())+'}';
    			
    			$.ajax({
    	    	    url: 'http://localhost:8080/livro/updateById',
    	    	    async: false ,
    	    		type: 'POST',
    	    		data: livro,
    	    		contentType: "application/json",
    	    		success:function(response){
    	    			$.notify({
    	    				// options
    	    				message: 'Livro alterado!' 
    	    			},{
    	    				// settings
    	    				type: 'info',
    	    				placement: {
    	    					from: "top",
    	    					align: "center"
    	    				}
    	    			});
    	    			$("#cancel").click();
//    	    			location.reload();
    	    		},error:	function(response){			
    	    			$.notify({
    	    				// options
    	    				message: 'Erro na operação, contato um administrador.' 
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
    		}
        });
		
	});
	
	$("#delete").click(function() {
		var livro = '{'
			+'"idLivro": '+parseInt($("#idModal").val())+','
	        +'"tituloLivro": "'+ $("#tituloLivro").val()+'",'
	        +'"subtituloLivro": '+$("#subtituloLivro").val()+','
	        +'"autorLivro": "'+ $("#autorLivro").val()+'",'
	        +'"anoLivro": "'+$("#anoLivro").val()+'",'
	        +'"generoLivro": "'+ $("#generoLivro").val()+'",'
	        +'"editoraLivro": "'+ $("#editoraLivro").val()+'",'
	        +'"edicaoLivro": "'+ $("#edicaoLivro").val()+'",'
	        +'"isbnLivro": "'+ $("#isbnLivro").val()+'",'
	        +'"paginasLivro": "'+ parseInt($("#paginasLivro").val())+'"'
	        +'}';
		
		$.ajax({
    	    url: 'http://localhost:8080/livro/deleteById/'+parseInt($("#idModal").val()),
    	    async: true,
    		type: 'DELETE',
    		contentType: "application/json",
    		success:function(response){
    			$.notify({
    				// options
    				message: 'Livro excluido!' 
    			},{
    				// settings
    				type: 'info',
    				placement: {
    					from: "top",
    					align: "center"
    				}
    			});
    			location.reload();
    		},error:	function(response){			
    			$.notify({
    				// options
    				message: 'Erro na operação, contato um administrador.' 
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
	
	
});

function openModal(obj){
	
	var linha = $($(obj).parents('tr')).children();
	
	$.ajax({
	    url: 'http://localhost:8080/livro/findById/'+parseInt(linha[0].innerText),
	    async: true,
		type: 'GET',
		contentType: "application/json",
		success:function(response){
			$("#idModal").val(response.idLivro);
			$("#tituloLivro").val(response.tituloLivro);
			$("#subtituloLivro").val(response.subtituloLivro);
			$("#autorLivro").val(response.autorLivro);
			$("#anoLivro").val(response.anoLivro);
			$("#generoLivro").val(response.generoLivro);
			$("#editoraLivro").val(response.editoraLivro);
			$("#edicaoLivro").val(response.edicaoLivro);
			$("#isbnLivro").val(response.isbnLivro);
			$("#paginasLivro").val(response.paginasLivro);	
		},error:	function(response){			
			$.notify({
				// options
				message: 'Erro na operação, contato um administrador.' 
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
	
	$('#modaltst').modal('show');
}

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