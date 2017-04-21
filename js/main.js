var index = 0;

var giphyArray = [ 
	{
		url: "pasta.gif",
		delay: 2000
	},
	{
		url: "spice.gif",
		delay: 2000
	},
	{
		url: "toma.gif",
		delay: 1600
	},
	{
		url: "vodka.gif",
		delay: 1000
	},
	{
		url: "",
		delay: 0
	}
];

function gifAnimation() {
	$('.animationClass').css('background-image', 'url("./gifs/'+ giphyArray[index].url + '")');
	if(index < giphyArray.length -1) {
		var delay = giphyArray[index].delay;
		index++;
		setTimeout(gifAnimation, delay);
	}
}
gifAnimation();


