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
        {data: "idEmprestimo",	title: 'Codigo Emprestimo', "visible": true},
        {data: "idAluno", 		title: 'Aluno', "visible": true },
        {data: "idLivro", 		title: 'Livro', "visible": true },
        {data: "dataEmprestimo",title: 'Data Empréstimo', "visible": true },
        {data: "dataDevolucao", title: 'Data Devolução Prevista', "visible": true }
    ];
	
	$.ajax({
	    url: 'http://localhost:8080/emprestimo/findAllActives',
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
				],
		        rowCallback: function(row,data,index){
		        	$.ajax({
	            	    url: 'http://localhost:8080/aluno/findById/'+data.idAluno,
	            	    async: true,
	            		type: 'GET',
	            		contentType: "application/json",
	            		success:function(response){
	            			$($(row).children()[1]).text(response.nomeAluno)
	            		},error:	function(response){			
	            			console.log('nok');
	            		}
	                });
		        	
		        	$.ajax({
	            	    url: 'http://localhost:8080/livro/findById/'+data.idLivro,
	            	    async: true,
	            		type: 'GET',
	            		contentType: "application/json",
	            		success:function(response){
	            			$($(row).children()[2]).text(response.tituloLivro)
	            		},error:	function(response){			
	            			console.log('nok');
	            		}
	                });
		        	
		        	$($(row).children()[3]).text(new Date(data.dataEmprestimo).toLocaleDateString());
		        	
		        	$($(row).children()[4]).text(new Date(data.dataDevolucao).toLocaleDateString());
	    		}
		    } );
		},
		error: function(data){			
			alunos = [];
		}
    });
	
	$("#login").click(function() {
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
	
//	var substringMatcher = function(strs) {
//		  return function findMatches(q, cb) {
//		    var matches, substringRegex;
//
//		    // an array that will be populated with substring matches
//		    matches = [];
//
//		    // regex used to determine if a string contains the substring `q`
//		    substrRegex = new RegExp(q, 'i');
//
//		    // iterate through the pool of strings and for any string that
//		    // contains the substring `q`, add it to the `matches` array
//		    $.each(strs, function(i, str) {
//		      if (substrRegex.test(str)) {
//		        matches.push(str);
//		      }
//		    });
//
//		    cb(matches);
//		  };
//		};
//
//		var aCurso = new Array();
//		$.ajax({
//			    url: 'http://localhost:8080/curso/findAll',
//			    async: true,
//				type: 'GET',
//				contentType: "application/json",
//				success:function(data){
//					
//		            for( var i in data){
//		                aCurso.push(data[i].nomeCurso);
//		            }
//				},
//				error: function(data){			
//					alunos = [];
//				}
//		    });
//
//		$('#cursos .typeahead').typeahead({
//		  hint: true,
//		  highlight: true,
//		  minLength: 1
//		},
//		{
//		  name: 'Cursos',
//		  source: substringMatcher(aCurso)
//		});
	
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