var app = angular.module('online801', ["chart.js"]);
	app.controller('controller801', function($scope, $http) {
		$http.get("https://pxumarsb5ewzt3a.000webhostapp.com/data.json").then(function (response) {
		var processData = response.data;
		var deadmaze = [];
		var fortoresse = [];
		var bouboum = [];
		var nekodancer = [];
		var a801 = [];

		for (var dataIndex in processData) {
			for (gameData in processData[dataIndex]) {
				if (gameData = "deadmaze") {
					deadmaze.push(processData[dataIndex][gameData]);
					break;
				};
			};
			for (gameData in processData[dataIndex]) {
				if (gameData = "fortoresse") {
					fortoresse.push(processData[dataIndex][gameData]);
					break;
				};
			};
			for (gameData in processData[dataIndex]) {
				if (gameData = "bouboum") {
					bouboum.push(processData[dataIndex][gameData]);
					break;
				};
			};
			for (gameData in processData[dataIndex]) {
				if (gameData = "nekodancer") {
					nekodancer.push(processData[dataIndex][gameData]);
					break;
				};
			};
			for (gameData in processData[dataIndex]) {
				if (gameData = "a801") {
					a801.push(processData[dataIndex][gameData]);
					break;
				};
			};
			
		};
		
		$scope.labels = ['23:30','23:00','22:30','22:00','21:30','21:00','20:30','20:00','19:30','19:00','18:30','18:00','17:30','17:00','16:30','16:00','15:30','15:00','14:30','14:00','13:30','13:00','12:30','12:00','11:30','11:00','10:30','10:00','9:30','9:00','8:30','8:00','7:30','7:00','6:30','6:00','5:30','5:00','4:30','4:00','3:30','3:00','2:30','2:00','1:30','1:00','0:30','0:00'];
		$scope.series = ['Atelier801', 'Dead Maze', 'Fortoresse', 'Bouboum', 'Nekodancer'];
		$scope.data = [a801, deadmaze, fortoresse, bouboum, nekodancer];
		$scope.options = {
			scales: {
				xAxes: [{
					ticks: {
						fontColor: '#c2c2da',
						fontSize: 12,
						fontFamily: 'Verdana'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: '#c2c2da',
						fontSize: 12,
						fontFamily: 'Verdana'
					}
				}]
			},
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					fontColor: '#0e9d9d',
					fontSize: 15,
					fontFamily: 'Verdana'
				}
			}
		}
	});
});