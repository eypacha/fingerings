var gomitas = '';
var combina = [];

d1 = [48,126];
d2 = [44,174];
d3 = [41,218];
d4 = [43,264];
d12 = [93,126];
d23 = [83,174];
d34 = [88,218];
d13 = [131,126];
d24 = [133,174];
d14 = [180,126];

colores = ['gold','white','lightgreen','magenta','orange'];

$(".front").on("click",function(){
	cambiarCarta();
});

$(".back").on("click",function(){
	$("#card").removeClass("flip");
});

// 0-9 > una gomita; 10-15 -> dos gomitas iguales; 16-23 dos gomitas distintas; 24-28 tres y cuatro gomitas;
combina = [[d1],[d2],[d3],[d4],[d12],[d23],[d34],[d13],[d24],[d14],
		   [d12,d34],[d1,d2],[d1,d3],[d1,d4],[d2,d4],[d3,d4],
		   [d13,d4],[d1,d24],[d1,d23],[d1,d34],[d2,d34],[d12,d3],[d12,d4],[d23,d4],
		   [d1,d2,d3],[d1,d2,d4],[d1,d3,d4],[d2,d3,d4],[d1,d2,d3,d4]];


// combinación al azar
// 1 > 9
// 2 > 15
// 3 > 23
// 4 > 28

function nivel(){
	var p = Math.floor(Math.random()*28);
	for(var i=0;i<combina[p].length;i++){

		// define en qué dedos
		gomitaWidth = combina[p][i][0];
		gomitaLeft = combina[p][i][1];
		// define el color
		gomitaColor = colores[Math.floor(Math.random()*colores.length)];

		gomitas += ""+
			"<div class='gomita' style='background-color:"+gomitaColor+
			";width:"+gomitaWidth+
			"px;top:"+gomitaTop+
			"px;left:"+gomitaLeft+
			"px'></div>";

}
}
function cambiarCarta(){
	gomitas = "";
	gomitaTop = 185;
	nivel();
	gomitaTop = 165;
	nivel();
	$("#gomitas").html(gomitas);
	$("#card").addClass("flip");
}