$(document).ready(function() {
	var alunos = [];
	
	
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
        {data: "idAluno", 		title: 'Id', "visible": true},
        {data: "nomeAluno", 	title: 'Nome', "visible": true },
        {data: "idCurso", 		title: 'Curso', "visible": true },
        {data: "emailAluno", 	title: 'Email', "visible": true },
        {data: "dtAluno", 		title: 'Data Nascimento', "visible": true },
        {data: "cpfAluno", 		title: 'CPF', "visible": true },
        {data: "rgAluno", 		title: 'RG', "visible": true },
        {data: "raAluno", 		title: 'RA', "visible": true },
        {data: 'consultar',		title: "", "visible": true }
    ];
	
	$.ajax({
	    url: 'http://localhost:8080/aluno/findAll',
	    async: false,
		type: 'GET',
		contentType: "application/json",
		success:function(data){
			$('#example').DataTable( {
		        data:			data,
		        language:		idioma,
		        columns:		colunas,
		        rowReorder: {
		            selector: 'td:nth-child(2)'
		        },
		        responsive: true,
				columnDefs: [
					{
		                  "targets": 8,
		                  "data": null,
		                  "defaultContent": "<a href='#'><span onClick='openModal(this)' id='editModal' class='fa fa-pencil-square-o fa-3'></span></a>"
		              }
				],
				
		        rowCallback: function(row,data,index){
		        	$.ajax({
	            	    url: 'http://localhost:8080/curso/findById/'+data.idCurso,
	            	    async: true,
	            		type: 'GET',
	            		contentType: "application/json",
	            		success:function(response){
	            			$($(row).children()[2]).text(response.siglaCurso)
	            		},error:	function(response){			
	            			console.log('nok');
	            		}
	                });
	    		}
		    } );
		},
		error: function(data){			
			alunos = [];
		}
    });
	
	$("#btnCadAluno").click(function() {
		if(validaForm()){
			var aluno = '{'
		        +'"nomeAluno": "'+ $("#name").val()+'",'
		        +'"idCurso": '+parseInt($("#curso").val())+','
		        +'"emailAluno": "'+ $("#email").val()+'",'
		        +'"dtAluno": "'+ $("#dtNasc").val()+'",'
		        +'"cpfAluno": "'+ $("#cpf").val()+'",'
		        +'"rgAluno": "'+ $("#rg").val()+'",'
		        +'"raAluno": "'+ $("#ra").val()+'",'
		        +'"sexoAluno": "'+ $("#sexo").val()+'",'
		        +'"foneAluno": "'+ $("#tel").val()+'"'
		        +'}';
			
			$.ajax({
	    	    url: 'http://localhost:8080/aluno/create',
	    	    async: true,
	    		type: 'POST',
	    		data: aluno,
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
	
	$.ajax({
    url: 'http://localhost:8080/curso/findAll',
    async: true,
	type: 'GET',
	contentType: "application/json",
	success:function(data){
		
        console.log(data)
			
		$.each(data, function (i, item) {
            $('#curso').append($('<option>', { 
                value: item.idCurso,
                text : item.nomeCurso 
            }));
        });
	},
	error: function(data){			
		alunos = [];
	}
});
	
	$("#udpate").click(function() {
		var obj;
		
		$.ajax({
    	    url: 'http://localhost:8080/aluno/findById/'+parseInt($("#idModal").val()),
    	    async: true,
    		type: 'GET',
    		contentType: "application/json",
    		success:function(response){
    			obj = response;
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
		
		
		var aluno = '{'
			+'"idAluno": '+parseInt(obj.idModal)+','
	        +'"nomeAluno": "'+ obj.nameModal+'",'
	        +'"idCurso": '+parseInt(obj.cursoModal)+','
	        +'"emailAluno": "'+ obj.emailModal+'",'
	        +'"dtAluno": "'+obj.dtNascModal+'",'
	        +'"cpfAluno": "'+ obj.cpfModal+'",'
	        +'"rgAluno": "'+ obj.rgModal+'",'
	        +'"raAluno": "'+ obj.raModal+'",'
	        +'"sexoAluno": "'+ obj.sexoModal+'",'
	        +'"foneAluno": "'+ obj.telModal+'"'
	        +'}';
		
		$.ajax({
    	    url: 'http://localhost:8080/aluno/updateById',
    	    async: true,
    		type: 'POST',
    		data: aluno,
    		contentType: "application/json",
    		success:function(response){
    			$.notify({
    				// options
    				message: 'Aluno alterado!' 
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
		
		var aluno = '{'
			+'"idAluno": '+parseInt($("#idModal").val())+','
	        +'"nomeAluno": "'+ $("#nameModal").val()+'",'
	        +'"idCurso": '+parseInt($("#cursoModal").val())+','
	        +'"emailAluno": "'+ $("#emailModal").val()+'",'
	        +'"dtAluno": "'+ $("#dtNascModal").val()+'",'
	        +'"cpfAluno": "'+ $("#cpfModal").val()+'",'
	        +'"rgAluno": "'+ $("#rgModal").val()+'",'
	        +'"raAluno": "'+ $("#raModal").val()+'",'
	        +'"sexoAluno": "'+ $("#sexoModal").val()+'",'
	        +'"foneAluno": "'+ $("#telModal").val()+'"'
	        +'}';
		
		$.ajax({
    	    url: 'http://localhost:8080/aluno/deleteDyId/'+parseInt($("#idModal").val()),
    	    async: true,
    		type: 'DELETE',
    		contentType: "application/json",
    		success:function(response){
    			$.notify({
    				// options
    				message: 'Aluno excluido!' 
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
	$("#idModal").val(linha[0].innerText);
	$("#nameModal").val(linha[1].innerText);
	$("#cursoModal").val(	);
	$("#emailModal").val(linha[3].innerText);
	$("#dtNascModal").val(linha[4].innerText);
	$("#cpfModal").val();
	$("#rgModal").val();
	$("#raModal").val();
	$("#sexoModal").val();
	$("#telModal").val();
	
	$('#modaltst').modal('show');
}

function validaForm(){
	
	var campos = $("#cadAluno").find(".form-control");
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
	
	var campos = $("#cadAluno").find(".form-control");
	
	for(var i in campos){
		$(campos[i]).val("");
	}
	
}