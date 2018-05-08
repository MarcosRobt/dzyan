$(document).ready(function() {
	var cursos = [];
	
	
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
        {data: "idCurso", 		title: 'Id', "visible": true},
        {data: "siglaCurso", 	title: 'Sigla', "visible": true },
        {data: "nomeCurso", 	title: 'Curso', "visible": true },
        {data: "periodoCurso", 	title: 'Periodo', "visible": true },
        {data: 'consultar',		title: "", "visible": true }
    ];
	
	$.ajax({
	    url: 'http://localhost:8080/curso/findAll',
	    async: true,
		type: 'GET',
		contentType: "application/json",
		success:function(data){
			$('#example').DataTable( {
		        data:			data,
		        language:		idioma,
		        columns:		colunas,
		        responsive: true,
				columnDefs: [
					{
		                  "targets": 4,
		                  "data": null,
		                  "defaultContent": "<span onClick='openModal(this)' id='editModal' class='fa fa-pencil-square-o fa-3'></span>"
		              }
				]
		    } );
		},
		error: function(data){			
			cursos = [];
		}
    });
	
	$("#btnCadCurso").click(function() {
		if(validaForm()){
		
			var curso = '{'
		        +'"siglaCurso": "'+ $("#sigla").val()+'",'
		        +'"nomeCurso": "'+ $("#nome").val()+'",'
		        +'"periodoCurso": '+ parseInt($("#periodo").val())
		        +'}';
			
			$.ajax({
	    	    url: 'http://localhost:8080/curso/create',
	    	    async: true,
	    		type: 'POST',
	    		data: curso,
	    		contentType: "application/json",
	    		success:function(response){
	    			$.notify({
	    				// options
	    				message: 'Curso cadastrado com sucesso!' 
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
		
		var curso = '{'
			+'"idCurso": '+ parseInt($("#idModal").val())+','
	        +'"siglaCurso": "'+ $("#siglaModal").val()+'",'
	        +'"nomeCurso": "'+ $("#nomeModal").val()+'",'
	        +'"periodoCurso": '+ parseInt($("#periodoModal	").val())
	        +'}';
		
		$.ajax({
    	    url: 'http://localhost:8080/curso/updateById',
    	    async: true,
    		type: 'POST',
    		data: curso,
    		contentType: "application/json",
    		success:function(response){
    			$.notify({
    				// options
    				message: 'Curso alterado!' 
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
	
	$("#delete").click(function() {
		
		var curso = '{'
			+'"idCurso": '+ parseInt($("#idModal").val())+','
	        +'"siglaCurso": "'+ $("#siglaModal").val()+'",'
	        +'"nomeCurso": "'+ $("#nomeModal").val()+'",'
	        +'"periodoCurso": '+ parseInt($("#periodoModal	").val())
	        +'}';
		
		$.ajax({
    	    url: 'http://localhost:8080/curso/deleteDyId/'+parseInt($("#idModal").val()),
    	    async: true,
    		type: 'DELETE',
    		contentType: "application/json",
    		success:function(response){
    			$.notify({
    				// options
    				message: 'Curso excluido!' 
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
	var linha = $($(obj).parents('tr')).children()
	$("#nomeModal").val(linha[2].innerText);
	$("#idModal").val(linha[0].innerText);
	$("#siglaModal").val(linha[1].innerText);
	$("#periodoModal").val(linha[3].innerText);
	
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


