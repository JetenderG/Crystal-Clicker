//////////////////////////////////////////////////

var blueCrystal;
var greenCrystal;
var yellowCrystal;
var redCrytsal;
var userScore = 0;
var spscore = 0;
var win = 0;
var loss = 0;
var max = 0;
var min = 0;


var crystalgame = {


    ///////////////////
    "rndnumcrystal": 0,
    ///////////////////

    "max": 120,
    "min": 19,

    "rndCrystaknum": function () {
        blueCrystal = Math.floor((Math.random() * 12) + 1);
        greenCrystal = Math.floor((Math.random() * 12) + 1);
        yellowCrystal = Math.floor((Math.random() * 12) + 1);
        redCrytsal = Math.floor((Math.random() * 12) + 1);
        return blueCrystal, greenCrystal, yellowCrystal, redCrytsal;
    },

    "rndCpScore": function (max, min) {
        max = 120;
        min = 19;
        spscore = Math.floor(Math.random() * (max - min) + min);
        return spscore;
    },
    "winloss": function () {



        if (spscore === userScore) {
            $(".winlose").html("You Win!!");
            win++;
            this.startover();

        } else if (userScore > spscore) {
            $(".winlose").html("You Lose!!");
            loss++;
            this.startover();

        }
    },

    "startover": function () {
        rndCpScore = crystalgame.rndCrystaknum();
        $(".userscore").html("0");
        $(".win").html(win);
        $(".loses").html(loss);
        $(".score").html(this.rndCpScore());
        userScore = 0;

    }


};
crystalgame.rndCrystaknum();
crystalgame.rndCpScore();

$(".userscore").html(userScore);
$(".score").html(spscore);
$(".win").append(+win);
$(".loses").append(+loss);



$("#bluecrystal").on("click", function () {
    userScore += blueCrystal;
    $(".userscore").html(userScore);
    crystalgame.winloss();
    return userScore;
})
$("#greencrystal").on("click", function () {
    userScore += greenCrystal;
    $(".userscore").html(userScore);
    crystalgame.winloss();
    return userScore;
})
$("#redcrystal").on("click", function () {
    userScore += redCrytsal;
    $(".userscore").html(userScore);
    crystalgame.winloss();
    return userScore;


})
$("#yellowcrystal").on("click", function () {

    userScore += yellowCrystal;
    $(".userscore").html(userScore);
    crystalgame.winloss();

    return userScore;

})

if (userScore >= spscore) {

    crystalgame.winloss();


}





crystalgame.rndCrystaknum();

console.log(blueCrystal);
console.log(yellowCrystal);
console.log(greenCrystal);
console.log(redCrytsal);
console.log(userScore);