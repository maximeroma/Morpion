
$(document).ready(function()
{

	var	count = 0;

	var array = [ 	[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],	];

	var bool = true; // bool devient false quand il y a un vainqueur
	var player;

	// fonction pour annoncer la victoire

	var Winner = function(a)
	{
		if  (!bool)
		{
			$('#youWin').append('<div class="alert alert-success" role="alert" id="alert">');
			if  (player === 'X')
			{
				$('#alert').append('<h1>Player 2 win!</h1>');
			}
			else 
			{
				$('#alert').append('<h1>Player 1 win!</h1>');
			}
		}
	};

	// fonction pour connaitre le player

	$('td').click(function()
	{
		var check = $(this).html();
		if (bool && check === "")
		{
			count++;
			count % 2 === 0 ?	player = 'X' : player = 'O'; 		
		}
	});

	// fonction pour remplir le morpion au click
	// stocke les choix dans le tableau array

	$('td').on('click', function()
	{
		if  (bool)
		{
			var row = $(this).parent().attr('value');
			var cell = $(this).attr('value');

			if  (array[row][cell] === 1)
			{
				array[row][cell] = player;
				$(this).html(player);
			}
		}
		
	});

	// fonction pour analyser les conditions de victoire en ligne 

	$('td').on('click', function()
	{
		if (bool)
		{
			for  (var i = 0; i <= 2; i++)
			{
				var checkWin = "";
				for  (var j = 0; j <= 2; j++)
				{
					checkWin += array[i][j];
					if  (checkWin.includes('XXX'))
					{
						bool = false;
						Winner(bool);
					}
					else if  (checkWin.includes('OOO'))
					{
						bool = false;
						Winner(bool);
					}
				}
			}
		}
	});

	// fonction pour analyser les conditions de victoire en colonne

	$('td').on('click', function()
	{
		if  (bool)
		{
			for  (var i = 0; i <= 2; i++ )
			{
				var checkWin = "";
				for  (var j = 0; j <= 2; j++)
				{
					checkWin += array[j][i];
					if  (checkWin.includes('XXX'))
					{
						bool = false;
						Winner(bool);
					}
					else if  (checkWin.includes('OOO'))
					{
						bool = false;
						Winner(bool);
					}
				}
			}
		}

	});

	// fonction pour analyser les conditions de victoire en diagonale

	 $('td').on('click', function()
	 {
	 	if  (bool)
	 	{
		 	var diagonale1 = [array[0][0], array[1][1], array[2][2]].join("");
		 	var diagonale2 = [array[2][0], array[1][1], array[0][2]].join("");
		 	
		 	if  (diagonale1.includes('XXX') || diagonale2.includes('XXX'))
		 	{
		 		bool = false;
		 		Winner(bool);
		 	}
		 	else if  (diagonale1.includes('OOO') || diagonale2.includes('OOO'))
		 	{
		 		bool = false;
		 		Winner(bool);
		 	}
		 }
	 });
	 

	 $('#reset').on('click',function()
	 {
	 	count = 0;
	 	array = [ 	[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],	];
		bool = true;
	 	$("td").html("");
	 	$('#alert').remove();
	 });
	

});