var today = new Date();
var month = today.getMonth()+1;
var time = today.getHours();
var northern = true;

var Bitterling = {name:'Bitterling', smonth:11, emonth:3, stime:0, etime:23, loc:"River", size:0, bells:900, desc:"Bitterlings hide their eggs inside large bivalves-like clams-where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?", chk:0};
var PaleChub = {name:"Pale Chub", smonth:1, emonth:12, stime:9, etime:16, loc:"River", size:0, bells:160, desc:"The pale chub is a river fish with simple black-and-silver coloring. Interestingly, the male's coloring becomes more vibrant when he's trying to attract a mate! Though normally plain, these fellows really known how to look stylish when they want to. Perhaps I could learn a thing or two from the pale chub... ", chk:0};
var CrucianCarp = {name:"Crucian Carp", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:1, bells:160, desc:"I wonder... Do you know how to tell the difference between a crucian carp and a standard-issue carp? It's quite easy to tell the two apart... One must simply locate the barbels. Or, rather, the lack of them! And just what is a barbel, you ask? Well, a barbel looks a little something like a mustache. A run-of-the-mill carp will sport this unsightly \"facial hair,\" while a crucian carp is considerably better groomed! I tried to grow a mustache when I was younger. It never did fill in quite right... All for the best in the end, as mustaches go so much better with noses than with beaks!", chk:0};
var Dace = {name:"Dace", smonth:1, emonth:12, stime:16, etime:9, loc:"River", size:2, bells:240, desc:"Dace are shiny little fish that enjoy freshwater streams with gravelly bottoms and plenty of sunlight. What a fishy paradise...until the larger fish move in and begin eating the dace! Sadly, the shiny dace are easy for other fish to spot, which makes them a popular snack. However, this particular specimen has no need to worry. There's a strict \"No Eating Your Neighbor\" policy at this institution.", chk:0};
var Carp = {name:"Carp", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:3, bells:300, desc:"Oh, the carp...have you ever seen their teeth? For your sake, I hope you have not! Carp have teeth in their throat strong enough to crunch on hard things like shells and fingers! A good rule of thumb when dealing with other species is to keep your fingers out of their mouths. Although, having neither thumbs nor fingers, I am quite safe from this little fellow!", chk:0};
var Koi = {name:"Koi", smonth:1, emonth:12, stime:16, etime:9, loc:"River", size:3, bells:4000, desc:"Koi are a variety of carp bred for their color mutations...starting more than a thousand years ago! Well, one glance at their impressive coloring tells you that the centuries of effort were worth it. And even today people still selectively breed koi in search of new color combinations! One marvels at the thought of what the koi may look like in another thousand years.", chk:0};
var Goldfish = {name:"Goldfish", smonth:1, emonth:12, stime:0, etime:23, loc:"Pond", size:0, bells:1300, desc:"Goldfish are so cute and delicate... but do you know how big they can get? Why, they can grow up to... a foot in length! Well, sometimes. The size of the tank they're kept in tends to restrict their growth. And just how big will this goldfish get in our large museum tank? I look forward to finding out!", chk:0};
var PopEyedGoldfish = {name:"Pop-Eyed Goldfish", smonth:1, emonth:12, stime:9, etime:16, bells:1300, loc:"Pond", size:0, desc:"Pop-eyed goldfish have, as the name suggests, huge round eyes. But as babies they look like other goldfish! As they grow, their eyes begin to pop out and they gain their, hoo, distinct appearance... Imagine the poor fish fancier who unknowingly bought one! Their eyes might well pop out just as far!", chk:0};
var RanchuGoldfish = {name:"Ranchu Goldfish", smonth:1, emonth:12, stime:9, etime:16, loc:"Pond", bells:4500, size:1, desc:"The ranchu goldfish is a charming relative of the goldfish with a bumpy head and stout, round body. They have ordinary heads when born, but develop impressive rectangular heads after about three years. Supposedly their head shape changes depending on factors like the size of their tank... So ranchu goldfish enthusiasts aim to raise perfectly shaped specimens and work hard to achieve this. Of course, no one asks the ranchu goldfish themselves what shape they want their heads to be...", chk:0};
var Killifish = {name:"Killifish", smonth:4, emonth:8, stime:0, etime:23, loc:"Pond", size:0, bells:300, desc:"Killifish are small, travel in schools, and are known for having eyes higher up on their faces than others. They swim in shallow areas in rivers and mostly eat bugs that float on the surface of the water. This is why they have mouths as high up their faces as their eyes, making them effective hunters. Being the same temperature as the water they inhabit, getting grabbed by warm hands can shock them.", chk:0};
var Crawfish = {name: "Crawfish", smonth:4, emonth:9, stime:0, etime:23, loc:"Pond", size:1, bells:200, desc:"These shrimp relatives are usually found in ponds and rivers, typically making them easy to catch. The reason for this strange habitat is that crawfish are plentiful and will eat just about anything. Eating plant material makes their bodies red, but only eating fish and meat will turn their bodies blue. A red color indicates they are eating a healthy and balanced diet, so red is the ideal for the species.", chk:0};
var SoftTurt = {name:"Soft-Shelled Turtle", smonth:8, emonth:9, stime:16, etime:9, loc:"River", size:3, bells:3750, desc:"The soft-shelled turtle is not one to shy away from biting when provoked. In addition to its powerful bite, this little critter has the ability to breathe both above and below water! It has an unusually long neck which it uses for both breathing and biting. Come to think of it, how did you manage to avoid being bitten? Well, it's a fearsome critter, but just look at that face! Rather silly, wot?", chk:0};
var SnapTurt = {name:"Snapping Turtle", smonth:4, emonth:10, stime:9, etime:16, loc:"River", size:4, bells:5000, desc:"The snapping turtle is a large turtle known for it's crocodile-like body and long claws. No, wait-- it is better known for it's ferocious bite, which it can deliver with shocking speed for a turtle. NO, WAIT-- it is BEST known for that time one chased me across a parking lot and I had to climb on top of a car.", chk:0};
var Tadpole = {name:"Tadpole", smonth:3, emonth:7, stime:0, etime:23, loc:"Pond", size:0, bells:100, desc:"Undoubtedly you know that tadpoles eventually turn into frogs. I must say, I find them impossibly adorable with their squiggly little tails. But even cuter... when they sprout legs! Why, we can witness accelerated evolution in these squirmy little ones. Hoo, it makes me so emotional!", chk:0};
var Frog = {name:"Frog", smonth:5, emonth:8, stime:0, etime:23, loc: "Pond", size:1, bells:120, desc:"These former tadpoles prefer to live near ponds and other damp and swampy places. They dwell on land, so they have lungs and skin as opposed to a set of gills. They like to stick close to water because they require a nice, moist lifestyle. Frogs are moist because they emit a liquid to protect their skin from dryness. If too much moisture evaporates from their thin skins, they could have trouble breathing. It's better not to handle frogs, as some species are poisonous, even to the touch!", chk:0};
var FreshGoby = {name:"Freshwater Goby", smonth:1, emonth:12, stime:16, etime:9, loc:"River", size:1, bells:400, desc:"These short and stocky river-dwelling fish have a lot of slender teeth for tearing apart other fish. Freshwater gobies dig holes under rocks in riverbeds to make nests for eggs, which the males guard. Other fish breeds take advantage of this protective quality and often lay eggs in goby nests.", chk:0};
var Loach = {name:"Loach", smonth:3, emonth:5, stime:0, etime:23, loc:"River", size:1, bells:400, desc:"Loaches are a large group of bottom-feeding freshwater fish. Because there are so many species, it is difficult to generalize about them all. The one thing they all have in common is perhaps their most unappealing trait; the name 'loach.' Repellent, isn't it? They should have just called it the 'cockloach' and been done with it, eh wot! Loach...loach... It just tastes terrible in the beak.", chk:0};
var Catfish = {name:"Catfish", smonth:5, emonth:10, stime:16, etime:9, loc:"Pond", size:3, bells:800, desc:"Catfish are known for their long whiskers, wide bodies, and large mouths, but they don't have fur. Despite having large eyes, they have rather poor eyesight. They make up for this with sensory whiskers. Catfish have small horizontal and vertical lines in their bodies, almost like perforated lines. These holes are for detecting weak electric currents of other fish, making them adept hunters. Catfish are artful carnivores as they swim around lazily but then strike quickly when prey is found.", chk:0};
var GiantSnake = {name:"Giant Snakehead", smonth:6, emonth:8, loc:"Pond", size:4, bells:5500, desc:"Giant snakeheads get their name from the fact that their heads look like those of snakes. Their scales and patterns also look like snakes', really bringing the resemblance to a high degree. They have sharp teeth, so don't poke your finger anywhere near their mouths! Both males and females are well known for protecting their eggs and offspring. They will scare off any other fish that approach by frantically waving their tails.", chk:0};
var Bluegill = {name:"Bluegill", smonth:1, emonth:12, stime:9, etime:16, loc:"River", size:1, bells:180, desc:"The bluegill is incredibly common. A bit too common, depending upon where you are. They eat anything that fits in their mouths and are highly adaptable. The bane of fishermen in some areas, bluegill is often the only fish to be caught! But looking in its wee beady eyes, I must say I see no ill will in it...", chk:0};
var YellowPerch = {name:"Yellow Perch", smonth:10, emonth:3, stime:0, etime:23, loc:"River", size:2, bells:300, desc:"The yellow perch is certainly worth squawking about. I find it a sight to behold! That jagged dorsal find! Those brilliant stripes! Those glorious colours! Hoo, truly it is quite the specimen. I would be thrilled to witness it firsthand in its natural environment... But the yellow perch's peak season is winter, I'm afraid. (So very afraid... of winter's biting chill...)", chk:0};
var BlackBass = {name:"Black Bass", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:3, bells:400, desc:"The black bass is a formidably strong fish and, as such, is a common target for sport anglers. In some areas, there are even those who professionally catch just black bass! Yet in other areas where they are NOT native, they are considered an ecological nuisance. Invasive, even. One cannot help but wonder who is to blame for their invasion, hoo.", chk:0};
var Tilapia = {name:"Tilapia", smonth:6, emonth:10, stime:0, etime:23, loc:"River", size:2, bells:800, desc:"Wherever the waters are warm, the tilapia can be found. It is a highly adaptable river fish. They mainly feed on algae, but they will also eat larvae and dead fish— or whatever fits in their mouths. I will confess that, as a growing owlet, I similarly defined food as 'anything that fits in my beak.'", chk:0};
var Pike = {name:"Pike", smonth:9, emonth:12, stime:0, etime:23, loc:"River", size:4, bells:1800, desc:"Pikes are only found in cold water, so they cannot live in warmer parts of the world. They can grow over three feet long and as such are a very popular fish with anglers. Pike have a slightly protruding jaw and large mouths with sharp teeth, making them powerful predators. They use these teeth for tearing apart not only other fish but also birds and other aquatic creatures.", chk:0};
var PondSmelt = {name:"Pond Smelt", smonth:12, emonth:2, stime:0, etime:23, loc:"River", size:1, bells:500, desc:"Pond smelt are small but vigorous fish that can survive in water of relatively poor quality. Pond smelt are related to salmon and as such have a lot of the same migratory tendencies. Most of them swim from rivers to the ocean and then return to rivers and lakes. However, some of them actually live in lakes that have no connection to the ocean, so they don't migrate. They have small fins and are perfect for eating whole as tempura or grilled on barbecues.", chk:0};
var Sweetfish = {name:"Sweetfish", smonth:7, emonth:9, stime:0, etime:23, loc:"River", size:2, bells:900, desc:"Sweetfish are migratory fish born upstream that travel to the ocean and then return to rivers to spawn. This migratory mind-set is what emphasizes their similarity to salmon. Adult sweetfish have a watermelon-like mossy smell when caught, since they eat moss on riverbed rocks. Sweetfish are very territorial and will attack rivals that encroach on their territory. Anglers use this combative nature against them by using lures made of other sweetfish.", chk:0};
var CherrySalmon = {name:"Cherry Salmon", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:0, etime:23, loc:"River", size:2, bells:1000, desc:"The cherry salmon is related to the salmon, and is known for its distinctive pattern of \"polka dots\". There polka dots disappear as they mature, but ONLY in the first of certain geographic regions. Pity the poor researchers that must make sense of the cherry salmon's fickle fashion sense.", chk:0};
var Char = {name:"Char", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:16, etime:9, loc:"River/Pond", size:2, bells:3800, desc:"The char is one of the bigger first around the world, and, in the world of fish, that's quite an accomplishment! They are territorial predators, and therefore must constantly defend their 'turf' from others. So when you see a large char like this one, it is likely a skilled fighter and veteran of many battles. My feathers! I hope it never has cause to go into battle with me!", chk:0};
var GoldenTrout = {name:"Golden Trout", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:16, etime:9, loc:"River (Clifftop)", size:3, bells:15000, desc:"The golden trouts is a beautifully colored fish that can only live in very clean waters. They are difficult to come across since they are found only in high mountain streams. As a side note, I find it much easier to appreciate fish that aren't such prima donnas about everything.", chk:0};
var Stringfish = {name:"Stringfish", smonth:12, emonth:3, stime:16, etime:9, loc:"River (Clifftop)", size:5, bells:15000, desc:"The stringfish grows slowly, but also lives quite a long time for a fish, with up to 15 years being typical. Consequently, while it takes a while, they can get quite large—perhaps even up to six feet long! The stringfish is perhaps the best embodiment in the fish world of 'slow and steady wins the race.'", chk:0};
var Salmon = {name:"Salmon", smonth:9, emonth:9, stime:0, etime:23, loc:"River (Mouth)", size:1, bells:700, desc:"Salmon are popular migratory fish that are born in rivers, migrate to oceans, and return in four years. In Japan, flavored salmon eggs are a very popular dish called ikura, but it hasn't caught on in the US. In rare cases, salmon will only stay in the ocean for one or two years before coming back. These fish are known as \"phantom salmon\" since they're so hard to find in the wild. Their characteristic pink color comes from the shrimp and krill they get in their diet. If they ate differently, their flesh would be white. Salmon only spawn at the bottom of the waterfall where the lake meets the ocean.", chk:0};
var KingSalmon = {name:"King Salmon", smonth:9, emonth:9, stime:0, etime:23, loc:"River (Mouth)", size:0, bells:1800, desc:"King salmon grow to about twice the size of regular salmon, which really helps them embody the name. This size essentially makes them the actual kings of salmon, though they are also called chinook salmon. In some regions, they return to the river in spring or summer and live there until spawning in the fall. In rare cases, king salmons' meat will be white, but these are not as popular since pink is the standard.", chk:0};
var MittenCrab = {name:"Mitten Crab", smonth:9, emonth:11, stime:16, etime:9, loc:"River", size:1, bells:2000, desc:"Officially known as the mitten crab, they also go by the name \"shanghai crab.\" They are commonly used in Chinese dishes, which is how most people become familiar with them. Their breeding habits are the complete opposite of salmon in that they hatch in the ocean first. They then move up rivers when they reach adult size, returning to the ocean in order to spawn.", chk:0};
var Guppy = {name:"Guppy", smonth:4, emonth:11, stime:9, etime:16, loc:"River", size:0, bells:1300, desc:"Guppies are tropical fish that are related to killifish and live in warm rivers. They are popular fish that have been bred to have beautiful flowing tail fins. Mother guppies give birth to their babies after the eggs hatch in their bellies. They give birth at a rate that's nearly constant, so their population tends to grow rather quickly.", chk:0};
var NibbleFish = {name:"Nibble Fish", smonth:5, emonth:9, stime:9, etime:16, loc:"River", size:1, bells:1500, desc:"The official name given to this warm-water-dwelling species of fish is \"Garra rufa.\" They are omnivorous, as they both eat algae and scrape the skin off other fish. All you'd have to do to feed them is stick your hand in the tank; they would live off your dead skin. That's why they're called nibble fish. They exfoliate but don't have any teeth, so it doesn't hurt at all!", chk:0};
var Angelfish = {name:"Angelfish", smonth:5, emonth:10, stime:16, etime:9, loc:"River", size:1, bells:3000, desc:"These tropical fish move very gracefully because of long fins on their backs and underbellies. Males and females are almost impossible to tell apart, making identification tricky. They lay eggs among water plants. Both genders look after the babies while they cling to weeds. The young look like any other fish, but they gain their angelfish looks once they leave the weeds.", chk:0};
var Betta = {name:"Betta", smonth:5, emonth:10, stime:9, etime:16, loc:"River", size:1, bells:2500, desc:"i dont know what blathers says about the betta...", chk:0};
var NeonTetra = {name:"Neon Tetra", smonth:4, emonth:11, stime:9, etime:16, loc:"River", size:0, bells:500, desc:"Neon tetras get their names from the beautiful blue metallic line on their bodies. Although their shy, gentle fish, surprisingly they're related to piranha, though very distantly. They have very sharp and narrow teeth, an odd contrast to their beauty. They are delicate fish who tend to be very sensitive to the cleanliness and temperature of water.", chk:0};
var Rainbowfish = {name:"Rainbowfish", smonth:5, emonth:10, stime:9, etime:16, loc:"River", size:1, bells:800, desc:"The rainbowfish is a tropical fish known for its metallic colors and beautiful fins. There are over 50 different species, each unique and pleasing color. I must say, it does make me wish for feathers of a more exciting hue than \"underbaked brownie.\"", chk:0};
var Piranha = {name:"Piranha", smonth:6, emonth:8, stime:9, etime:16, stime2:21, etime2:4, loc:"River", size:1, bells:2500, desc:"They have terrifyingly sharp teeth, which contributes to their ferocious reputation. Oddly enough, they are actually quite timid, though they are still very dangerous fish. If they can't find food, they will resort to cannibalism or tear apart any animal they can grab hold of. Take care when catching them so they don't end up biting your hand with their sharp teeth!", chk:0};
var Arowana = {name:"Arowana", smonth:6, emonth:9, stime:16, etime:9, loc:"River", size:3, bells:10000, desc:"Arowanas are ancient fish that have remained basically unchanged for 100 million years. They are known for their large scales and the hair that sticks out from their lower lips. They have a remarkable jumping ability and can leap over a yard above the surface of the water. Males protect their babies by keeping them in their mouths and releasing them once they reach a certain size.", chk:0};
var Dorado = {name:"Dorado", smonth:6, emonth:9, stime:4, etime:21, loc:"River", size:4, bells:15000, desc:"Dorado means \"golden\" in Spanish. As the name would indicate, these fish are gold and have black dots. They look like salmon but are very toothy, carnivorous, and related to piranha. They're such ferocious fish that other fish regularly flee from them, fearful of becoming a snack. Their ferocious natures and power make them a prize catch among anglers.", chk:0};
var Gar = {name:"Gar", smonth:6, emonth:10, stime:16, etime:9, loc:"Pond", size:5, bells:6000, desc:"Their long faces and large mouths make them look like alligators. Some can grow up to three yards. They are ancient fish that haven't changed since they first appeared millions of years ago. They breathe not only through gills, but also by sticking their mouths above the surface of the water. Gar eggs are poisonous, so people all over the world are advised not to eat them -- no exceptions.", chk:0};
var Arapaima = {name:"Arapaima", smonth:6, emonth:9, stime:16, etime:9, loc:"River", size:5, bells:10000, desc:"Arapaima, at over two yards long, are one of the largest freshwater-fish breeds in the world. They've been around for over 100 million years, making them rather ancient fish as well. They breathe through gills but also with an air bladder used by poking their mouths above water. They have hard, coarse tongues that are used to break down the smaller fish they eat.", chk:0};
var SaddledB = {name:"Saddled Bichir", smonth:6, emonth:9, stime:21, etime:4, loc:"River", size:3, bells:4000, desc:"What an elegant specimen you've found. The saddled bichir has a look entirely its own. They have poor eyesight, so they use their fine-tuned sniffers to seek out prey. Can you imagine relying solely on your sense of smell to find food? And if one nostril became clogged, would you be unable to tell how far away the scent was?", chk:0};
var Sturgeon = {name:"Sturgeon", smonth:9, emonth:3, stime:0, etime:23, loc:"River (Mouth)", size:5, bells:10000, desc:"The sturgeon is a large and long-lived fish which has changed little in the last 300 million years. One curious behavior of theirs is leaping high out of the water and falling back in on their sides. The smacking sounds of their re-entry can be heard for up to half a mile away, likely more underwater! No one knows why they do it, but I like to think it's their impression of bread popping out of toaster!", chk:0};
var SeaButterfly = {name:"Sea Butterfly", smonth:12, emonth:3, stime:0, etime:23, loc:"Ocean", size:0, bells:1000, desc:"Such mystery! Such grace! Did you know that the sea butterfly's scientific name is Thecosomata? A very rough translation of that is 'shell body.' Indeed, this illustrious creature is related to snails! However, it reminds me much more of an elegant feathered friend, the way it flies through the water. With such grace in flying, one shouldn't wonder if it's related to the owl, hoo hoo!", chk:0};
var SeaHorse = {name:"Sea Horse", smonth:4, emonth:11, stime:0, etime:23, loc:"Ocean", size:0, bells:1100, desc:"Sea horses don't look like fish, but they still share a lot of distant connections. They use their small dorsal fins and tail fins to swim, but in actuality they're pretty bad swimmers. They wrap their tail fins around seaweed or coral so they won't float away with the current. Once attached, they feed on plankton and small shrimp that float by. The female deposits eggs in the male's pouch, putting the burden of child care on the male.", chk:0};
var ClownFish = {name:"Clown Fish", smonth:4, emonth:9, stime:0, etime:23, loc:"Ocean", size:0, bells:650, desc:"Clown fish spend their lives hiding among the feelers of sea anemones, a place that only they can live. Their homes may be dangerous, but they produce a special coating that protects them from the poison. In exchange for the anemone's protection, the clown fish chases off any parasitic bugs and enemies. Curiously, all clown fish are males when they're young but change into females if necessity demands.", chk:0};
var Surgeonfish = {name:"Surgeonfish", smonth:4, emonth:9, stime:0, etime:23, loc:"Ocean", size:1, bells:1000, desc:"These tropical fish sport beautiful, yellow, triangular tails and elegant black lines on dazzling blue bodies. Personalitywise, the surgeonfish is actually rather laid back and timid. They seek out gaps in coral or between rocks for the greatest amount of protection while sleeping.", chk:0};
var ButterflyFish = {name:"Butterfly Fish", smonth:4, emonth:9, stime:0, etime:23, loc:"Ocean", size:1, bells:1000, desc:"Butterfly fish are considered very cute pets, popular because of their beautiful nature. They glide through the warm seas by flapping their yellow bodies as if they were butterflies. Their diets are surprisingly hardy, as they gobble coral and poisonous anemones using narrow mouths. Butterfly-fish couples have been known to live together for 10 years or more. Often they can be seen swimming around in pairs. You'll likely never find a better underwater romance.", chk:0};
var Napoleonfish = {name:"Napoleonfish", smonth:7, emonth:8, stime:4, etime:21, loc:"Ocean", size:5, bells:10000, desc:"Called Napoleonfish, these fish also have the more accurate name of humphead wrasse. The true name comes from the distinctive humps on their heads. But \"Napoleonfish\" is more popular. When small, all Napoleonfish are females, but some become males as they age and their humps grow. Their bodies also turn a bluer shade as they mature and become males, making identification simple. Their bulky bodies, which can get to about six feet long, still glide easily through warm tropical seas. Finding these fish is a real treat for divers, as they're stunning to see - and it's a great story to tell.", chk:0};
var ZebraTurkey = {name:"Zebra Turkeyfish", smonth:4, emonth:11, stime:0, etime:23, loc:"Ocean", size:2, bells:500, desc:"Zebra turkeyfish have long, beautiful fins that flow like gowns as they swim through the sea. However, these aquatic beauties pack a punch, as their fins are filled with poisonous spikes. Aside from protection against predators, this poison comes in handy for turn wars between males. The losing male succumbs to the poison in a matter of days, making these battles life and death.", chk:0};
var Blowfish = {name:"Blowfish", smonth:11, emonth:2, stime:18, etime:4, loc:"Ocean", size:2, bells:5000, desc:"Blowfish are considered a delicacy, famous for their tempting taste despite being highly poisonous. Blowfish are not poisonous at birth, though, which makes young ones relatively safe for consumption. It's only once they have ingested enough microbes from seawater and food that they become poisonous. When they feel threatened, they suck in air and water to blow themselves up like balloons. This makes them too big to eat without predators being horsed to chomp down on their poison quills.", chk:0};
var PufferFish = {name:"Puffer Fish", smonth:7, emonth:9, stime:0, etime:23, loc:"Ocean", size:2, bells:250, desc:"As expected, all puffer fish are covered in spines. While related to the blowfish, they are not poisonous. Exaggerated claims about the fish say they have 1,000 spines; the true number is between 300 and 400. When threatened, they suck in water and air to puff themselves up in order to intimidate enemies.", chk:0};
var Anchovy = {name:"Anchovy", smonth:1, emonth:12, stime:4, etime:21, loc:"Ocean", size:1, bells:200, desc:"There are more than 140 species of anchovy, but they do all have some things in common. They are small and feed by simply swimming with their mouths open to filter food particles from the sea. (In my sleepier moments, I sometimes wish I could do that...)", chk:0};
var HorseMack = {name:"Horse Mackerel", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:1, bells:150, desc:"Supposedly the horse mackerel derives its name from a-false-myth about its strength as a swimmer. The gist of it is that these fish are so powerful underwater that smaller fish can ride them as steeds! It's absurd, of course. Where would these alleged fish jockeys attach a saddle, much less horseshoes? One does wish that people would construct their legends with a BIT more scientific plausibility! ", chk:0};
var BarredKnife = {name:"Barred Knifejaw", smonth:3, emonth:11, stime:0, etime:23, loc:"Ocean", size:2, bells:5000, desc:"Wonderful! I would love nothing more! The barred knifejaw, also called the striped beakfish, is a lovely fish with a distinctive striped pattern. It is reportedly also a very curious fish in that it has been known to approach swimmers to \"greet\" them. They also tend to be good at avoiding fishing hooks, so well done on outwitting this one!", chk:0};
var SeaBass = {name:"Sea Bass", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:4, bells:400, desc:"Sea bass is a name given to a variety of different species of saltwater fish. They are a varied bunch with some as small as four inches and some as staggeringly ginormous as eight feet! 'Sea bass' is a bit pedestrian though. Many species have better names, such as 'redbanded perch.' Or the delightfully whimsical dusky grouper! Or the potato cod! WILL NO ONE THINK OF THE PINK MAOMAO?!", chk:0};
var RedSnap = {name:"Red Snapper", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:3, bells:3000, desc:"'Red snapper' is the common name of dozens of fish species, and I wonder why it is so popular. Are there so many types of fish that are both a shade of red and have a tendency to snap? Were there no other names? What about 'burgundy biter'? 'Garnet grasper'? 'Puce pincher'?", chk:0};
var Dab = {name:"Dab", smonth:10, emonth:4, stime:0, etime:23, loc:"Ocean", size:2, bells:300, desc:"The dab is a flatfish that bears some resemblance to the olive flounder, though their mouths are different. Personally, I am morbidly fascinated by each fish's eye placement. The dab's eyes are both on its right side, while the olive flounder's are on the left. These fish spend lots of time lying on their sides in the sand, so the odd eye placement makes some sense... But it's — how can I put this? Creepy? Viscerally disturbing? Profoundly upsetting to fans of symmetry?", chk:0};
var OliveFlounder = {name:"Olive Flounder", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:3, bells:800, desc:"Did you know that the olive flounder is the same shape as other fish when it hatches? But as it grows, it gets both wider and flatter, and can reach some three feet long. These flat fish spend much of their lives buried under the sandy ocean floor, waiting for prey to happen by. Imagine the surprise for said prey when they strike. It would be as if your kitchen floor were to bite you!", chk:0};
var Squid = {name:"Squid", smonth:12, emonth:8, stime:0, etime:23, loc:"Ocean", size:2, bells:500, desc:"Well, first off, squids are members of the mollusk family, just like the octopus. Many mollusks like snails and clams have shells, but the squid's body is almost completely soft. The exception is a long, narrow bit of hard material going through its main body - the last remnant of its shell. Of course, having your shell INSIDE is not a best practice. Perhaps they lost the owner's manual!", chk:0};
var MorayEel = {name:"Moray Eel", smonth:8, emonth:10, stime:0, etime:23, loc:"Ocean", size:4, bells:2000, desc:"Moray eels can often be seen sticking just their heads out from between two rocks. When unsuspecting prey approaches, the dart out to snatch it up into their sharp-toothed mouths. Once moray eels have their teeth in you, it's hard to get away, making moray-eel bites no trifling matter. Their long, finless bodies are covered in tough, snakelike skin that often gets used as leather.", chk:0};
var RibbonEel = {name:"Ribbon Eel", smonth:6, emonth:10, stime:0, etime:23, loc:"Ocean", size:7, bells:600, desc:"Ribbon eels have long, ribbonlike bodies and look as if they have flowers sprouting from their noses. They get their name from their bright, vivid color, in addition to the length of their bodies. Ribbon eels hatch sexless before first becoming males, then females as they age. Their tendency to stick their heads out from holes in the sand and open their mouths is not a sign of anger. In actuality, they're merely taking a breath. Oddly, they're surprisingly peaceful creatures, despite the look.", chk:0};
var Tuna = {name:"Tuna", smonth:11, emonth:4, stime:0, etime:23, loc:"Pier", size:4, bells:7000, desc:"The tuna is a large ocean fish that can reach upwards of nine feet long. Besides its great size, it's notable for continuing to swim even when it's sleeping! Well, to be fair, if it doesn't keep swimming, it won't be able to breathe and will of course die... But sleep should be restful, eh wot! If I were the tuna I would feel very hard done by!", chk:0};
var BlueMarlin = {name:"Blue Marlin", smonth:7, emonth:9, smonth2:11, emonth2:4, stime:0, etime:23, loc:"Pier", size:4, bells:10000, desc:"The blue marlin has a distinctive angular shape and no scales. It is an unusual relative of the tuna. These mighty fish can exceed 13 feet from bill to tail. Some accounts even have it fighting with whales! No wonder it's a popular target for sport fishing: unlike most fish, it seems like a worthy opponent.", chk:0};
var GiantTrevally = {name:"Giant Trevally", smonth:5, emonth:10, stime:0, etime:23, loc:"Pier", size:3, bells:4500, desc:"Though you wouldn't guess it because of their size, giant trevallys are actually a type of mackerel. Unlike normally slim and sleek mackerels, giant trevallys have wide, sliver bodies. Surprisingly, though, these fish cannot tolerate the cold, so they tend to live in warmer places. Their jaw strength is great enough to bite off a person's finger, so be very careful when fishing for them!", chk:0};
var Mahi = {name:"Mahi-Mahi", smonth:5, emonth:10, stime:0, etime:23, loc:"Ocean", size:3, bells:6000, desc:"The mahi-mahi is an ocean fish known for its wide, somewhat-cute face. It can reach over six feet long. It is known by different names including \"dolphinfish,\" even though it has no relation to dolphins. They live in only in warm, tropical waters...which perhaps explains the relaxed, happy look on their faces.", chk:0};
var Sunfish = {name:"Ocean Sunfish", smonth:7, emonth:9, stime:4, etime:21, loc:"Ocean", size:6, bells:4000, desc:"Ocean sunfish are a relative of blowfish that can reach up to two tons in weight. Lacking a tail fin, they cannot swim particularly quickly, which is an odd bit of anatomical detriment. The number of eggs they can lay is the most in the world at over 300 million. However, out of that 300 million, only one or two fish will ultimately survive. Ocean sunfish sometimes like to bob up and down on the surface of the ocean. This gives them the appearance they're sunbathing, which helps to make them a popular breed of fish.", chk:0};
var Ray = {name:"Ray", smonth:8, emonth:11, stime:04, etime:21, loc:"Ocean", size:4, bells:3000, desc:"Beating their large fins up and down to move through the water gives the rays the impression of flying. If viewed from below, rays appear to have their mouths curled up into a sort of smile. Some varieties have poisonous spikes at the base of their long tail fins that can be fatal to humans. This, combined with the ability to hide in sand at the bottom of the sea, can make them very dangerous.", chk:0};
var SawShark = {name:"Saw Shark", smonth:6, emonth:9, stime:16, etime:9, loc:"Ocean", size:6, bells:12000, desc:"As you might expect from the name, the saw shark is a shark with a head that resembles a saw. This unusual appendage is used both to dig potential prey out of the sand and as a weapon against said prey. Given that, it seems like a more appropriate name would have been \"shovel-sword shark,\" eh wot?", chk:0};
var HammerShark = {name:"Hammerhead Shark", smonth:6, emonth:9, stime:16, etime:9, loc:"Ocean", size:6, bells:8000, desc:"The hammerhead shark is a shark with a head like a hammer, which is what you'd expect. However, despite being sharks, they are actually fairly laid back, which is not what you'd expect. With their eyes positioned on the two ends of their \"hammer,\" they can see in almost all directions. Oddly, their nose holes are located right next to their eyes on their hammer section. They have a number of small holes on the front and lower portions of their heads as well. These holes allow them to detect prey, even fish hiding below them and out of sight. While they eat a nice array of fish, it seems that rays are their favorite source of food. Rays, beware!", chk:0};
var GWhiteShark = {name:"Great White Shark", smonth:6, emonth:9, stime:16, etime:9, loc:"Ocean", size:6, bells:15000, desc:"Great white sharks are obviously known first and foremost for their biting. They are masters of the craft! They do lose teeth regularly through biting-related activities, but, luckily, those teeth grow back quickly. In fact, their missing teeth can be regrown in a single day. Just imagine their tooth-fairy-related income!", chk:0};
var WhaleShark = {name:"Whale Shark", smonth:6, emonth:9, stime:0, etime:23, loc:"Ocean", size:6, bells:13000, desc:"The mighty whale shark is the largest species of fish in the world with specimens up to 60 feet long! Unlike many of their kin in the shark family, whale sharks are nonviolent, eating only plankton and such. They grow slowly and live long, relaxed lives of filter feeding and leisure in warm waters. So if you ever have to choose a fish as a roommate, you could do worse than the whale shark. Unless you can't swim.", chk:0};
var Suckerfish = {name:"Suckerfish", smonth:6, emonth:9, stime:0, etime:23, loc:"Ocean", size:6, bells:1500, desc:"I don't know what Blathers says about the suckerfish...", chk:0};
var FootballFish = {name:"Football Fish", smonth:11, emonth:3, stime:16, etime:9, loc:"Ocean", size:3, bells:2500, desc:"The football fish is a strange and grotesque deep-sea fish with a lantern-like light on its forehead. Its light is apparently powered by luminous bacteria and other glowing microorganisms. One theory says it can spray these luminescent sidekicks when prey approaches in order to dazzle them... The deep contains many mysteries... as well as some things that are just sort of odd and off-putting.", chk:0};
var Oarfish = {name:"Oarfish", smonth:12, emonth:5, stime:0, etime:23, loc:"Ocean", size:5, bells:9000, desc:"The oarfish is a long, eel-like fish that can supposedly reach up to 36 feet in length. They appear in various legends as things like messengers of the gods. It seems to me a creature like that could explain the myth of massive, ship-crushing sea serpents. It is, of course, well documented that people tend to exaggerate the size of 'the one that got away.'", chk:0};
var Barreleye = {name:"Barreleye", smonth:1, emonth:12, stime:21, etime:4, loc:"Ocean", size:1, bells:15000, desc:"The barreleye is a deep-sea fish with protuberant eyes and a clear head, so some of its organs are... visible. At first blush, a transparent head seems absurd, but there is a reason: so it can see things directly above! But I must confess--the more I learn about deep-sea fish, the happier I am to live on dry land, wot.", chk:0};
var Coelacanth = {name:"Coelacanth", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:5, bells:15000, desc:"The coelacanth is a deep-sea fish that has been around since the age of the dinosaurs. They were long thought extinct, so when living specimens were discovered, it was quite a shock! Now I'll just have to figure out where in the museum to display it- fish or fossils!", chk:0};

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

function createlocalcache()
{
    if(localStorage.getItem("Bitterlingchk") == null)
    {
        fishList.forEach(function(fish){
            localStorage.setItem(fish.name + "chk", fish.chk);
        }) 
    }

}


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
        if((month <= item.emonth || month >= item.smonth))
        {
            document.getElementById(item.name).style.backgroundColor = "orange";
            if(item.stime > item.etime)
            {
                if((time <= item.etime || time >= item.stime))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime && time >= item.stime))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            if(item.stime2 > item.etime2)
            {
                if((time <= item.etime2 || time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime2 && time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
        }
    }
    else
    {
        if((month <= item.emonth && month >= item.smonth))
        {
            document.getElementById(item.name).style.backgroundColor = "orange";
            if(item.stime > item.etime)
            {
                if((time <= item.etime || time >= item.stime))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime && time >= item.stime))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            if(item.stime2 > item.etime2)
            {
                if((time <= item.etime2 || time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime2 && time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
        }
    }
    if(item.smonth2 > item.emonth2)
    {
        if((month <= item.emonth2 || month >= item.smonth2))
        {
            document.getElementById(item.name).style.backgroundColor = "orange";
            if(item.stime > item.etime)
            {
                if((time <= item.etime || time >= item.stime))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime && time >= item.stime))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            if(item.stime2 > item.etime2)
            {
                if((time <= item.etime2 || time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime2 && time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
        }
    }
    else
    {
        if((month <= item.emonth2 && month >= item.smonth2))
        {
            document.getElementById(item.name).style.backgroundColor = "orange";
            if(item.stime > item.etime)
            {
                if((time <= item.etime || time >= item.stime))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime && time >= item.stime))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            if(item.stime2 > item.etime2)
            {
                if((time <= item.etime2 || time >= item.stime2))
                {
                    document.getElementById(item.name).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime2 && time >= item.stime2))
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
    item.chk = localStorage.getItem(item.name + "chk");
    if(item.chk == 0)
    {
        document.getElementById("chk" + item.name).src = "img/uncheck.png";
    }
    else
    {
        document.getElementById("chk" + item.name).src = "img/check.png";

    }
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

function ShowFish(fish)
{
    var fishimage = "img/fish/" + fish.name + ".png";
    document.getElementById("Info-Image").src = fishimage;
    document.getElementById("Info-Name").innerText = fish.name;
    document.getElementById("Info-locshad").innerText = "Location: " + fish.loc + "\nValue: " + fish.bells + " bells";
    document.getElementById("desc").innerText = fish.desc;
    document.getElementById("blathers").src = "img/Blathers.png";
    document.getElementById("DYK").innerText = "Did you know?";
}

function check(fish)
{
    if(fish.chk == 1)
    {
        fish.chk = 0;
        document.getElementById("chk" + fish.name).src = "img/uncheck.png";
    }
    else
    {
        fish.chk = 1;
        document.getElementById("chk" + fish.name).src = "img/check.png";
    }
    localStorage.setItem(fish.name + "chk", fish.chk);
}