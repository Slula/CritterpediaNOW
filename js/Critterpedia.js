var today = new Date();
var month = today.getMonth()+1;
var time = today.getHours();
var northern = true;

var Bitterling = {name:'Bitterling', smonth:11, emonth:3, stime:0, etime:23};
var PaleChub = {name:"Pale Chub", smonth:1, emonth:12, stime:9, etime:16};
var CrucianCarp = {name:"Crucian Carp", smonth:1, emonth:12, stime:0, etime:23};
var Dace = {name:"Dace", smonth:1, emonth:12, stime:16, etime:9};
var Carp = {name:"Carp", smonth:1, emonth:12, stime:0, etime:23};
var Koi = {name:"Koi", smonth:1, emonth:12, stime:16, etime:9};
var Goldfish = {name:"Goldfish", smonth:1, emonth:12, stime:0, etime:23};
var PopEyedGoldfish = {name:"Pop-Eyed Goldfish", smonth:1, emonth:12, stime:9, etime:16};
var RanchuGoldfish = {name:"Ranchu Goldfish", smonth:1, emonth:12, stime:9, etime:16};
var Killifish = {name:"Killifish", smonth:4, emonth:8, stime:0, etime:23};
var Crawfish = {name: "Crawfish", smonth:4, emonth:9, stime:0, etime:23};
var SoftTurt = {name:"Soft-Shelled Turtle", smonth:8, emonth:9, stime:16, etime:9};
var SnapTurt = {name:"Snapping Turtle", smonth:4, emonth:10, stime:9, etime:16};
var Tadpole = {name:"Tadpole", smonth:3, emonth:7, stime:0, etime:23};
var Frog = {name:"Frog", smonth:5, emonth:8, stime:0, etime:23};
var FreshGoby = {name:"Freshwater Goby", smonth:1, emonth:12, stime:16, etime:9};
var Loach = {name:"Loach", smonth:3, emonth:5, stime:0, etime:23};
var Catfish = {name:"Catfish", smonth:5, emonth:10, stime:16, etime:9};
var GiantSnake = {name:"Giant Snakehead", smonth:6, emonth:8};
var Bluegill = {name:"Bluegill", smonth:1, emonth:12, stime:9, etime:16};
var YellowPerch = {name:"Yellow Perch", smonth:10, emonth:3, stime:0, etime:23};
var BlackBass = {name:"Black Bass", smonth:1, emonth:12, stime:0, etime:23};
var Tilapia = {name:"Tilapia", smonth:6, emonth:10, stime:0, etime:23};
var Pike = {name:"Pike", smonth:9, emonth:12, stime:0, etime:23};
var PondSmelt = {name:"Pond Smelt", smonth:12, emonth:2, stime:0, etime:23};
var Sweetfish = {name:"Sweetfish", smonth:7, emonth:9, stime:0, etime:23};
var CherrySalmon = {name:"Cherry Salmon", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:0, etime:23};
var Char = {name:"Char", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:16, etime:9};
var GoldenTrout = {name:"Golden Trout", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:16, etime:9};
var Stringfish = {name:"Stringfish", smonth:12, emonth:3, stime:16, etime:9};
var Salmon = {name:"Salmon", smonth:9, emonth:9, stime:0, etime:23};
var KingSalmon = {name:"King Salmon", smonth:9, emonth:9, stime:0, etime:23};
var MittenCrab = {name:"Mitten Crab", smonth:9, emonth:11, stime:16, etime:9};
var Guppy = {name:"Guppy", smonth:4, emonth:11, stime:9, etime:16};
var NibbleFish = {name:"Nibble Fish", smonth:5, emonth:9, stime:9, etime:16};
var Angelfish = {name:"Angelfish", smonth:5, emonth:10, stime:16, etime:9};
var Betta = {name:"Betta", smonth:5, emonth:10, stime:9, etime:16};
var NeonTetra = {name:"Neon Tetra", smonth:4, emonth:11, stime:9, etime:16};
var Rainbowfish = {name:"Rainbowfish", smonth:5, emonth:10, stime:9, etime:16};
var Piranha = {name:"Piranha", smonth:6, emonth:8, stime:9, etime:16, stime2:21, etime2:4};
var Arowana = {name:"Arowana", smonth:6, emonth:9, stime:16, etime:9};
var Dorado = {name:"Dorado", smonth:6, emonth:9, stime:4, etime:21};
var Gar = {name:"Gar", smonth:6, emonth:10, stime:16, etime:9};
var Arapaima = {name:"Arapaima", smonth:6, emonth:9, stime:16, etime:9};
var SaddledB = {name:"Saddled Bichir", smonth:12, emonth:3, stime:21, etime:4};
var Sturgeon = {name:"Sturgeon", smonth:9, emonth:3, stime:0, etime:23};
var SeaButterfly = {name:"Sea Butterfly", smonth:12, emonth:3, stime:0, etime:23};
var SeaHorse = {name:"Sea Horse", smonth:4, emonth:11, stime:0, etime:23};
var ClownFish = {name:"Clown Fish", smonth:4, emonth:9, stime:0, etime:23};
var Surgeonfish = {name:"Surgeonfish", smonth:4, emonth:9, stime:0, etime:23};
var ButterflyFish = {name:"Butterfly Fish", smonth:4, emonth:9, stime:0, etime:23};
var Napoleonfish = {name:"Napoleonfish", smonth:7, emonth:8, stime:4, etime:21};
var ZebraTurkey = {name:"Zebra Turkeyfish", smonth:4, emonth:11, stime:0, etime:23};
var Blowfish = {name:"Blowfish", smonth:11, emonth:2, stime:18, etime:4};
var PufferFish = {name:"Puffer Fish", smonth:7, emonth:9, stime:0, etime:23};
var Anchovy = {name:"Anchovy", smonth:1, emonth:12, stime:4, etime:21};
var HorseMack = {name:"Horse Mackerel", smonth:1, emonth:12, stime:0, etime:23};
var BarredKnife = {name:"Barred Knifejaw", smonth:3, emonth:11, stime:0, etime:23};
var SeaBass = {name:"Sea Bass", smonth:1, emonth:12, stime:0, etime:23};
var RedSnap = {name:"Red Snapper", smonth:1, emonth:12, stime:0, etime:23};
var Dab = {name:"Dab", smonth:10, emonth:4, stime:0, etime:23};
var OliveFlounder = {name:"Olive Flounder", smonth:1, emonth:12, stime:0, etime:23};
var Squid = {name:"Squid", smonth:12, emonth:8, stime:0, etime:23};
var MorayEel = {name:"Moray Eel", smonth:8, emonth:10, stime:0, etime:23};
var RibbonEel = {name:"Ribbon Eel", smonth:6, emonth:10, stime:0, etime:23};
var Tuna = {name:"Tuna", smonth:11, emonth:4, stime:0, etime:23};
var BlueMarlin = {name:"Blue Marlin", smonth:7, emonth:9, smonth2:11, emonth2:4, stime:0, etime:23};
var GiantTrevally = {name:"Giant Trevally", smonth:5, emonth:10, stime:0, etime:23};
var Mahi = {name:"Mahi-Mahi", smonth:5, emonth:10, stime:0, etime:23};
var Sunfish = {name:"Ocean Sunfish", smonth:7, emonth:9, stime:4, etime:21};
var Ray = {name:"Ray", smonth:8, emonth:11, stime:04, etime:21};
var SawShark = {name:"Saw Shark", smonth:6, emonth:9, stime:16, etime:9};
var HammerShark = {name:"Hammerhead Shark", smonth:6, emonth:9, stime:16, etime:9};
var GWhiteShark = {name:"Great White Shark", smonth:6, emonth:9, stime:16, etime:9};
var WhaleShark = {name:"Whale Shark", smonth:6, emonth:9, stime:0, etime:23};
var Suckerfish = {name:"Suckerfish", smonth:6, emonth:9, stime:0, etime:23};
var FootballFish = {name:"Football Fish", smonth:11, emonth:3, stime:16, etime:9};
var Oarfish = {name:"Oarfish", smonth:12, emonth:5, stime:0, etime:23};
var Barreleye = {name:"Barreleye", smonth:1, emonth:12, stime:21, etime:4};
var Coelacanth = {name:"Coelacanth", smonth:1, emonth:12, stime:0, etime:23};

var fishList = [
    Bitterling, PaleChub, CrucianCarp, Dace, Carp, Koi, Goldfish, PopEyedGoldfish, RanchuGoldfish, Killifish, 
    Crawfish, SnapTurt, SoftTurt, Tadpole, Frog, FreshGoby, Loach, Catfish, GiantSnake, Bluegill,
    YellowPerch, BlackBass,Tilapia,Pike,PondSmelt, Sweetfish,CherrySalmon,Char, GoldenTrout, Stringfish,
    Salmon, KingSalmon, MittenCrab, Guppy, NibbleFish, Angelfish, Betta, NeonTetra, Rainbowfish, Piranha,
    Arowana, Dorado, Gar, Arapaima, SaddledB, Sturgeon, SeaButterfly, SeaHorse, ClownFish, Surgeonfish,
    ButterflyFish, Napoleonfish, ZebraTurkey, Blowfish, PufferFish, Anchovy, HorseMack, BarredKnife, SeaBass, RedSnap,
    Dab, OliveFlounder, Squid, MorayEel, RibbonEel, Tuna, BlueMarlin, GiantTrevally, Mahi, Sunfish,
    Ray, SawShark, HammerShark, GWhiteShark, WhaleShark, Suckerfish, FootballFish, Oarfish, Barreleye, Coelacanth
];




function ShowAvail()
{
    document.body.style.backgroundColor = "#fef5df";

    fishList.forEach(CheckAvail) 
}

function CheckAvail(item)
{
    document.getElementById(item.name).style.backgroundColor = "darkred";
    if(item.smonth > item.emonth)
    {
        if((month <= item.emonth || month >= item.smonth)||(month <= item.emonth2 || month >= item.smonth2))
        {
            document.getElementById(item.name).style.backgroundColor = "yellow";
            if(item.stime > item.etime)
            {
                if((time <= item.etime || time >= item.stime)||(time <= item.etime2 || time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime && time >= item.stime)||(time <= item.etime2 && time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
        }
    }
    else
    {
        if((month <= item.emonth && month >= item.smonth)||(month <= item.emonth2 && month >= item.smonth2))
        {
            document.getElementById(item.name).style.backgroundColor = "yellow";
            if(item.stime > item.etime)
            {
                if((time <= item.etime || time >= item.stime)||(time <= item.etime2 || time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime && time >= item.stime)||(time <= item.etime2 && time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
        }
    }
    var fishimage = "img/fish/" + item.name + ".png";
    document.getElementById(item.name + " image").src = fishimage;
    document.getElementById(item.name + " image").height = 96;
    document.getElementById(item.name + " image").width = 96;
}

function SwapHemi()
{
    var hemi = document.getElementById('hemi');
    if(northern)
    {
        northern = false;
        hemi.src = "img/SouthernHemisphere.png";
        fishList.forEach(function(item)
        {
            item.smonth += 6;
            if(item.smonth > 12)
            {item.smonth-=12;}

            item.emonth += 6;
            if(item.emonth > 12)
            {item.emonth-=12;}

            if(!item.smonth2 == null)
            {
            item.smonth2 += 6;
            if(item.smonth2 > 12)
            {item.smonth2 -=12;}

            item.emonth2 += 6;
            if(item.emonth2 > 12)
            {item.emonth2-=12;}
            }
        })
    }
    else
    {
        northern = true;
        hemi.src = "img/NorthernHemisphere.png";
        fishList.forEach(function(item)
        {
            item.smonth -= 6;
            if(item.smonth < 0)
            {item.smonth+=12;}

            item.emonth -= 6;
            if(item.emonth < 0)
            {item.emonth+=12;}

            if(!item.smonth2 == null)
            {
            item.smonth2 -= 6;
            if(item.smonth2 < 0)
            {item.smonth2 +=12;}

            item.emonth2 -= 6;
            if(item.emonth2 < 0)
            {item.emonth2+=12;}
            }
        })
    }
    hemi.style.width = 100;
    hemi.style.height = 100;
    hemi.style.border = 5;
    ShowAvail();
}
