var powerrangers = {
	speak: function song(line) {
		console.log("PowerRangers " + this.song + " to the rescue, " + line);
	}

};
var spd = Object.create(powerrangers);
spd.song = "SPD";
spd.speak("space patrol delta");




function Spacecraft(name, life){
	this.name = "spaceRacer";
	this.life = 10;
};

var Alpha = new Spacecraft();
var Bravo = new Spacecraft();
var Delta = new Spacecraft();
var Charlie = new Spacecraft();


Spacecraft.prototype.fly = function() {
	return this.speed = 5;
};

Spacecraft.prototype.excelerate = function(speed) {
	return this.speed += 1;
};

Spacecraft.prototype.shoot = function(life) {
	return this.life += -1;
};

Alpha.name = "Optimus";
console.log(Alpha.name);

var addSpeed = [Alpha,Bravo,Delta,Charlie];

for (var i = 0; i < addSpeed.length; i++) {
	addSpeed[i].fly();
	addSpeed[i].excelerate();
}

Charlie.shoot();






/*

hann gerir function teacher og getur gert person.call sem segir að þú getur kallað í function annarstaðar, en í sama context. 
og ef þú vilt að teacher tekur sama parametra og person þá notaru call()

*/


/*

Til að byrja með gerir hann basic css og html með h1 og canvas. 
í javascript byrjar hann að gera var canvas, ctx, width og height 
ctx er basic blað sem boltarnir verða á í 2D.
hann finnur max width og height af browser og set það sem width og height

hann gerir function random sem tekur 2 parametra og gefur út eina random tölu til baka á milla þessara 2 

hann býr til function ball sem er parent það hefur x og y fyrir staðsetningu, velx og vely fyrir hraða á átt sem það fer, color og size

hann gerir prototype draw sem erfir frá ball 
í því er function sem startar ctx svo það er hægt að teikna á það, það segir hvaða lit á að nota, hvar á að byrja og hversu stór hringurinn á að vera.
og endar með fill() sem segir að það á að klara að teikninguna

svo er prufað að gera testball með gildum og svo er kallað á function draw()

síðan er farið út í það að update á ball 

það er gert með að gera prototype update sem það erfir frá ball.
fer í gengnum 4 if færslur til að tékka hvort að x og y gildi eru komin á brúnina hjá widht og height ef það á það að breyta velx eða vely í andstæðu 
tölu sem þíðir að það hefur snúið við

svo er gert array fyrir balls og svo forlykkja sem gefur 25 balls gildi eftir það kemur önnur forlykkja sem teiknar bolta og update

svo gerir hann collision detection prototype út frá balls sem hefur forlykkju sem rennur í gengum boltana og tékkar hvort einhver bolta hafa sama
x eða y gildi ef svo breytast þeir um til 

hann notar líka ! til að segja að það má ekki vera sami botli, semsagt segjum bolti 3 er með sama og bolti 8 það breytist litur og heldur áfram að 
tékka rest, þegar það kemur á bolta 8 kemur fram að það er tengt 3... þetta kemur í veg fyrir það

*/














