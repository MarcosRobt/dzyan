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
        {data: "idEmprestimo",	title: 'Código Emprestimo', "visible": true},
        {data: "dataDevolucao", title: 'Data Devolução', "visible": true },
    ];
	
	$.ajax({
	    url: 'http://localhost:8080/devolucao/findAll',
	    async: true,
		type: 'GET',
		contentType: "application/json",
		success:function(data){
			$('#example').DataTable( {
				data:			data,
		        language:		idioma,
		        columns:		colunas,
		        responsive: true,
				columnDefs: [],
		        rowCallback: function(row,data,index){
		        	$($(row).children()[1]).text(new Date(data.dataDevolucao).toLocaleDateString());
	    		}
		    } );
		},
		error: function(data){			
			alunos = [];
		}
    });
	
});

