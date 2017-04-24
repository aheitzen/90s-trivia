var index = 0;

var giphyArray = [ 
	{
		url: "pasta.gif",
		delay: 2000,
		chanel: "CH 01"
	},
	{
		url: "spice.gif",
		delay: 2000,
		chanel: "CH 02"
	},
	{
		url: "toma.gif",
		delay: 1600,
		chanel: "CH 03"
	},
	{
		url: "vodka.gif",
		delay: 900,
		chanel: "CH 04"
	},
	{
		url: "90sBackground.png",
		delay: 0,
		chanel: ""
	}
];

function gifAnimation() {
	$('.animationClass').css('background-image', 'url("./gifs/'+ giphyArray[index].url + '")');
	$('.chanelClass').text(giphyArray[index].chanel);
	if(index < giphyArray.length -1) {
		var delay = giphyArray[index].delay;
		index++;
		setTimeout(gifAnimation, delay);
	} else {
		$('.noiseClass').css('display', 'none');
		$('#letsPlayButton').css('display', 'inline');
		$('#asIfLogo').css('display', 'inline');

	}
}
gifAnimation();


