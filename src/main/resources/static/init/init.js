$(document).ready(
		function() {
			$.ajax({
				url : 'http://localhost:8080/livro/findAll',
				async : true,
				type : 'GET',
				contentType : "application/json",
				success : function(response) {
					console.log(response.length);
					 setTimeout(function() {
					 odometer.innerHTML = response.length;
					 }, 1000);
				},
				error : function(response) {
					console.log(response);
				}
			});

			var ctx = document.getElementById("line-chart").getContext("2d");
			var myChart = new Chart(ctx, {
				type : 'line',
				data : {
					labels : [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
					datasets : [ {
						label : 'Mês',
						data : [ 65, 80, 81, 78, 89, 78, 98, 80, 0, 0, 0, 0 ],

						backgroundColor : [ 'rgba(142, 0, 0, 0.5)'

						],
						lineTension : 0.2,
						borderColor : [ 'rgba(142, 0, 0, 1)' ],
						borderWidth : 1
					} ]
				}
			}); 

		});
