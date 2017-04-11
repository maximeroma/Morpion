
$(document).ready(function()
{

	var	count = 0;

	var array = [ 	[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],	];


	var player;

	// fonction pour connaitre le player

	$('td').click(function()
	{
		count++;
		count % 2 === 0 ?	player = 'X' : player = 'O'; 		
	});

	// fonction pour remplir le morpion au click
	// stocke les choix dans le tableau array

	$('td').on('click', function()
	{

		var row = $(this).parent().attr('value');
		var cell = $(this).attr('value');

		if  (array[row][cell] === 1)
		{
			array[row][cell] = player;
			$(this).html(player);
		}
		
	});

	// fonction pour analyser les conditions de victoire en ligne 

	$('td').on('click', function()
	{
		for  (var i = 0; i <= 2; i++)
		{
			var checkWin = "";
			for  (var j = 0; j <= 2; j++)
			{
				checkWin += array[i][j];
				if  (checkWin.includes('XXX'))
				{
					$('#alert').append('<h1>Player 2 Win!</h1>');
					break;
				}
				else if  (checkWin.includes('OOO'))
				{
					$('#alert').append('<h1>Player 1 Win!</h1>');
					break;
				}
			}
		}
	});

	// fonction pour analyser les conditions de victoire en colonne

	$('td').on('click', function()
	{
		for  (var i = 0; i <= 2; i++ )
		{
			var checkWin = "";
			for  (var j = 0; j <= 2; j++)
			{
				checkWin += array[j][i];
				if  (checkWin.includes('XXX'))
				{
					$('#alert').append('<h1>Player 2 Win!</h1>');
					return;
				}
				else if  (checkWin.includes('OOO'))
				{
					$('#alert').append('<h1>Player 1 Win!</h1>');
					return;
				}
			}
		}

	});

	// fonction pour analyser les conditions de victoire en diagonale

	 $('td').on('click', function()
	 {
	 	var diagonale1 = [array[0][0], array[1][1], array[2][2]].join("");
	 	var diagonale2 = [array[2][0], array[1][1], array[0][2]].join("");
	 	
	 	if  (diagonale1.includes('XXX') || diagonale2.includes('XXX'))
	 	{
	 		$('#alert').append('<h1>Player 2 Win!</h1>');
	 		return;
	 	}
	 	else if  (diagonale1.includes('OOO') || diagonale2.includes('OOO'))
	 	{
	 		$('#alert').append('<h1>Player 1 Win!</h1>');
	 		return;
	 	}
	 });

	

});