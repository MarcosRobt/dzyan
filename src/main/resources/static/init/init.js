$(document)
		.ready(
				function() {
					$.ajax({
						url : 'http://localhost:8080/livro/findAll',
						async : false,
						type : 'GET',
						contentType : "application/json",
						success : function(response) {
							console.log(response.length);
							setTimeout(function() {
								livros.innerHTML = response.length;
							}, 1000);
						},
						error : function(response) {
							console.log(response);
						}
					});

					$.ajax({
						url : 'http://localhost:8080/emprestimo/findActives',
						async : false,
						type : 'GET',
						contentType : "application/json",
						success : function(response) {
							console.log(response);
							setTimeout(function() {
								emprestimos.innerHTML = response;
							}, 1000);
						},
						error : function(response) {
							console.log(response);
						}
					});

					var diaAtual = new Date();
					var data = diaAtual.toLocaleDateString().split("/");
					data = data[2] + "-" + data[1] + "-" + data[0];
					$.ajax({
						url : 'http://localhost:8080/emprestimo/countByDataDevolucaoBefore/'+ data,
						async : false,
						type : 'GET',
						contentType : "application/json",
						success : function(response) {
							console.log(response);
							setTimeout(function() {
								atraso.innerHTML = response;
							}, 1000);
						},
						error : function(response) {
							console.log(response);
						}
					});
					
					$.ajax({
						url : 'http://localhost:8080/emprestimo/countByDataDevolucaoAfter/'+ data,
						async : false,
						type : 'GET',
						contentType : "application/json",
						success : function(response) {
							console.log(response);
							setTimeout(function() {
								noPrazo.innerHTML = response;
							}, 1000);
						},
						error : function(response) {
							console.log(response);
						}
					});
					
					var meses = 12;
					var qtdPorMeses = [];
					for(var i = 1;i <= 12; i++){
						
						$.ajax({
							url : 'http://localhost:8080/emprestimo/countByMonth/'+ i,
							async : false,
							type : 'GET',
							contentType : "application/json",
							success : function(response) {
								qtdPorMeses.push(response);
							},
							error : function(response) {
								console.log(response);
							}
						});
						
					}

					var ctx = document.getElementById("line-chart").getContext(
							"2d");
					var myChart = new Chart(ctx, {
						type : 'line',
						data : {
							labels : [ "Janeiro", "Fevereiro", "Março",
									"Abril", "Maio", "Junho", "Julho",
									"Agosto", "Setembro", "Outubro",
									"Novembro", "Dezembro" ],
							datasets : [ {
								label : 'Mês',
								data :qtdPorMeses,

								backgroundColor : [ 'rgba(142, 0, 0, 0.5)'

								],
								lineTension : 0.2,
								borderColor : [ 'rgba(142, 0, 0, 1)' ],
								borderWidth : 1
							} ]
						}
					});

				});
