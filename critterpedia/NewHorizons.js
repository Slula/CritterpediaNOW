var today = new Date();
var month = today.getMonth()+1;
var time = today.getHours();
var northern = true;
var list = "bug";

var Bitterling = {no:0, name:'Bitterling', smonth:11, emonth:3, stime:0, etime:23, loc:"River", size:0, bells:900, desc:"Bitterlings hide their eggs inside large bivalves-like clams-where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?", chk:0};
var PaleChub = {no:1, name:"Pale Chub", smonth:1, emonth:12, stime:9, etime:16, loc:"River", size:0, bells:160, desc:"The pale chub is a river fish with simple black-and-silver coloring. Interestingly, the male's coloring becomes more vibrant when he's trying to attract a mate! Though normally plain, these fellows really known how to look stylish when they want to. Perhaps I could learn a thing or two from the pale chub... ", chk:0};
var CrucianCarp = {no:2, name:"Crucian Carp", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:1, bells:160, desc:"I wonder... Do you know how to tell the difference between a crucian carp and a standard-issue carp? It's quite easy to tell the two apart... One must simply locate the barbels. Or, rather, the lack of them! And just what is a barbel, you ask? Well, a barbel looks a little something like a mustache. A run-of-the-mill carp will sport this unsightly \"facial hair,\" while a crucian carp is considerably better groomed! I tried to grow a mustache when I was younger. It never did fill in quite right... All for the best in the end, as mustaches go so much better with noses than with beaks!", chk:0};
var Dace = {no:3, name:"Dace", smonth:1, emonth:12, stime:16, etime:9, loc:"River", size:2, bells:240, desc:"Dace are shiny little fish that enjoy freshwater streams with gravelly bottoms and plenty of sunlight. What a fishy paradise...until the larger fish move in and begin eating the dace! Sadly, the shiny dace are easy for other fish to spot, which makes them a popular snack. However, this particular specimen has no need to worry. There's a strict \"No Eating Your Neighbor\" policy at this institution.", chk:0};
var Carp = {no:4, name:"Carp", smonth:1, emonth:12, stime:0, etime:23, loc:"River/Pond", size:3, bells:300, desc:"Oh, the carp...have you ever seen their teeth? For your sake, I hope you have not! Carp have teeth in their throat strong enough to crunch on hard things like shells and fingers! A good rule of thumb when dealing with other species is to keep your fingers out of their mouths. Although, having neither thumbs nor fingers, I am quite safe from this little fellow!", chk:0};
var Koi = {no:5, name:"Koi", smonth:1, emonth:12, stime:16, etime:9, loc:"River", size:3, bells:4000, desc:"Koi are a variety of carp bred for their color mutations...starting more than a thousand years ago! Well, one glance at their impressive coloring tells you that the centuries of effort were worth it. And even today people still selectively breed koi in search of new color combinations! One marvels at the thought of what the koi may look like in another thousand years.", chk:0};
var Goldfish = {no:6, name:"Goldfish", smonth:1, emonth:12, stime:0, etime:23, loc:"Pond", size:0, bells:1300, desc:"Goldfish are so cute and delicate... but do you know how big they can get? Why, they can grow up to... a foot in length! Well, sometimes. The size of the tank they're kept in tends to restrict their growth. And just how big will this goldfish get in our large museum tank? I look forward to finding out!", chk:0};
var PopEyedGoldfish = {no:7, name:"Pop-Eyed Goldfish", smonth:1, emonth:12, stime:9, etime:16, bells:1300, loc:"Pond", size:0, desc:"Pop-eyed goldfish have, as the name suggests, huge round eyes. But as babies they look like other goldfish! As they grow, their eyes begin to pop out and they gain their, hoo, distinct appearance... Imagine the poor fish fancier who unknowingly bought one! Their eyes might well pop out just as far!", chk:0};
var RanchuGoldfish = {no:8, name:"Ranchu Goldfish", smonth:1, emonth:12, stime:9, etime:16, loc:"Pond", bells:4500, size:1, desc:"The ranchu goldfish is a charming relative of the goldfish with a bumpy head and stout, round body. They have ordinary heads when born, but develop impressive rectangular heads after about three years. Supposedly their head shape changes depending on factors like the size of their tank... So ranchu goldfish enthusiasts aim to raise perfectly shaped specimens and work hard to achieve this. Of course, no one asks the ranchu goldfish themselves what shape they want their heads to be...", chk:0};
var Killifish = {no:9, name:"Killifish", smonth:4, emonth:8, stime:0, etime:23, loc:"Pond", size:0, bells:300, desc:"Killifish are small, travel in schools, and are known for having eyes higher up on their faces than others. They swim in shallow areas in rivers and mostly eat bugs that float on the surface of the water. This is why they have mouths as high up their faces as their eyes, making them effective hunters. Being the same temperature as the water they inhabit, getting grabbed by warm hands can shock them.", chk:0};
var Crawfish = {no:10, name: "Crawfish", smonth:4, emonth:9, stime:0, etime:23, loc:"Pond", size:1, bells:200, desc:"These shrimp relatives are usually found in ponds and rivers, typically making them easy to catch. The reason for this strange habitat is that crawfish are plentiful and will eat just about anything. Eating plant material makes their bodies red, but only eating fish and meat will turn their bodies blue. A red color indicates they are eating a healthy and balanced diet, so red is the ideal for the species.", chk:0};
var SoftTurt = {no:11, name:"Soft-Shelled Turtle", smonth:8, emonth:9, stime:16, etime:9, loc:"River", size:3, bells:3750, desc:"The soft-shelled turtle is not one to shy away from biting when provoked. In addition to its powerful bite, this little critter has the ability to breathe both above and below water! It has an unusually long neck which it uses for both breathing and biting. Come to think of it, how did you manage to avoid being bitten? Well, it's a fearsome critter, but just look at that face! Rather silly, wot?", chk:0};
var SnapTurt = {no:12, name:"Snapping Turtle", smonth:4, emonth:10, stime:21, etime:4, loc:"River", size:4, bells:5000, desc:"The snapping turtle is a large turtle known for it's crocodile-like body and long claws. No, wait-- it is better known for it's ferocious bite, which it can deliver with shocking speed for a turtle. NO, WAIT-- it is BEST known for that time one chased me across a parking lot and I had to climb on top of a car.", chk:0};
var Tadpole = {no:13, name:"Tadpole", smonth:3, emonth:7, stime:0, etime:23, loc:"Pond", size:0, bells:100, desc:"Undoubtedly you know that tadpoles eventually turn into frogs. I must say, I find them impossibly adorable with their squiggly little tails. But even cuter... when they sprout legs! Why, we can witness accelerated evolution in these squirmy little ones. Hoo, it makes me so emotional!", chk:0};
var Frog = {no:14, name:"Frog", smonth:5, emonth:8, stime:0, etime:23, loc: "Pond", size:1, bells:120, desc:"These former tadpoles prefer to live near ponds and other damp and swampy places. They dwell on land, so they have lungs and skin as opposed to a set of gills. They like to stick close to water because they require a nice, moist lifestyle. Frogs are moist because they emit a liquid to protect their skin from dryness. If too much moisture evaporates from their thin skins, they could have trouble breathing. It's better not to handle frogs, as some species are poisonous, even to the touch!", chk:0};
var FreshGoby = {no:15, name:"Freshwater Goby", smonth:1, emonth:12, stime:16, etime:9, loc:"River", size:1, bells:400, desc:"These short and stocky river-dwelling fish have a lot of slender teeth for tearing apart other fish. Freshwater gobies dig holes under rocks in riverbeds to make nests for eggs, which the males guard. Other fish breeds take advantage of this protective quality and often lay eggs in goby nests.", chk:0};
var Loach = {no:16, name:"Loach", smonth:3, emonth:5, stime:0, etime:23, loc:"River", size:1, bells:400, desc:"Loaches are a large group of bottom-feeding freshwater fish. Because there are so many species, it is difficult to generalize about them all. The one thing they all have in common is perhaps their most unappealing trait; the name 'loach.' Repellent, isn't it? They should have just called it the 'cockloach' and been done with it, eh wot! Loach...loach... It just tastes terrible in the beak.", chk:0};
var Catfish = {no:17, name:"Catfish", smonth:5, emonth:10, stime:16, etime:9, loc:"Pond", size:3, bells:800, desc:"Catfish are known for their long whiskers, wide bodies, and large mouths, but they don't have fur. Despite having large eyes, they have rather poor eyesight. They make up for this with sensory whiskers. Catfish have small horizontal and vertical lines in their bodies, almost like perforated lines. These holes are for detecting weak electric currents of other fish, making them adept hunters. Catfish are artful carnivores as they swim around lazily but then strike quickly when prey is found.", chk:0};
var GiantSnake = {no:18, name:"Giant Snakehead", smonth:6, emonth:8, stime:9, etime:16, loc:"Pond", size:4, bells:5500, desc:"Giant snakeheads get their name from the fact that their heads look like those of snakes. Their scales and patterns also look like snakes', really bringing the resemblance to a high degree. They have sharp teeth, so don't poke your finger anywhere near their mouths! Both males and females are well known for protecting their eggs and offspring. They will scare off any other fish that approach by frantically waving their tails.", chk:0};
var Bluegill = {no:19, name:"Bluegill", smonth:1, emonth:12, stime:9, etime:16, loc:"River", size:1, bells:180, desc:"The bluegill is incredibly common. A bit too common, depending upon where you are. They eat anything that fits in their mouths and are highly adaptable. The bane of fishermen in some areas, bluegill is often the only fish to be caught! But looking in its wee beady eyes, I must say I see no ill will in it...", chk:0};
var YellowPerch = {no:20, name:"Yellow Perch", smonth:10, emonth:3, stime:0, etime:23, loc:"River", size:2, bells:300, desc:"The yellow perch is certainly worth squawking about. I find it a sight to behold! That jagged dorsal find! Those brilliant stripes! Those glorious colours! Hoo, truly it is quite the specimen. I would be thrilled to witness it firsthand in its natural environment... But the yellow perch's peak season is winter, I'm afraid. (So very afraid... of winter's biting chill...)", chk:0};
var BlackBass = {no:21, name:"Black Bass", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:3, bells:400, desc:"The black bass is a formidably strong fish and, as such, is a common target for sport anglers. In some areas, there are even those who professionally catch just black bass! Yet in other areas where they are NOT native, they are considered an ecological nuisance. Invasive, even. One cannot help but wonder who is to blame for their invasion, hoo.", chk:0};
var Tilapia = {no:22, name:"Tilapia", smonth:6, emonth:10, stime:0, etime:23, loc:"River", size:2, bells:800, desc:"Wherever the waters are warm, the tilapia can be found. It is a highly adaptable river fish. They mainly feed on algae, but they will also eat larvae and dead fish— or whatever fits in their mouths. I will confess that, as a growing owlet, I similarly defined food as 'anything that fits in my beak.'", chk:0};
var Pike = {no:23, name:"Pike", smonth:9, emonth:12, stime:0, etime:23, loc:"River", size:4, bells:1800, desc:"Pikes are only found in cold water, so they cannot live in warmer parts of the world. They can grow over three feet long and as such are a very popular fish with anglers. Pike have a slightly protruding jaw and large mouths with sharp teeth, making them powerful predators. They use these teeth for tearing apart not only other fish but also birds and other aquatic creatures.", chk:0};
var PondSmelt = {no:24, name:"Pond Smelt", smonth:12, emonth:2, stime:0, etime:23, loc:"River", size:1, bells:500, desc:"Pond smelt are small but vigorous fish that can survive in water of relatively poor quality. Pond smelt are related to salmon and as such have a lot of the same migratory tendencies. Most of them swim from rivers to the ocean and then return to rivers and lakes. However, some of them actually live in lakes that have no connection to the ocean, so they don't migrate. They have small fins and are perfect for eating whole as tempura or grilled on barbecues.", chk:0};
var Sweetfish = {no:25, name:"Sweetfish", smonth:7, emonth:9, stime:0, etime:23, loc:"River", size:2, bells:900, desc:"Sweetfish are migratory fish born upstream that travel to the ocean and then return to rivers to spawn. This migratory mind-set is what emphasizes their similarity to salmon. Adult sweetfish have a watermelon-like mossy smell when caught, since they eat moss on riverbed rocks. Sweetfish are very territorial and will attack rivals that encroach on their territory. Anglers use this combative nature against them by using lures made of other sweetfish.", chk:0};
var CherrySalmon = {no:26, name:"Cherry Salmon", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:0, etime:23, loc:"River", size:2, bells:1000, desc:"The cherry salmon is related to the salmon, and is known for its distinctive pattern of \"polka dots\". There polka dots disappear as they mature, but ONLY in the first of certain geographic regions. Pity the poor researchers that must make sense of the cherry salmon's fickle fashion sense.", chk:0};
var Char = {no:27, name:"Char", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:16, etime:9, loc:"River/Pond", size:2, bells:3800, desc:"The char is one of the bigger first around the world, and, in the world of fish, that's quite an accomplishment! They are territorial predators, and therefore must constantly defend their 'turf' from others. So when you see a large char like this one, it is likely a skilled fighter and veteran of many battles. My feathers! I hope it never has cause to go into battle with me!", chk:0};
var GoldenTrout = {no:28, name:"Golden Trout", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:16, etime:9, loc:"River (Clifftop)", size:3, bells:15000, desc:"The golden trouts is a beautifully colored fish that can only live in very clean waters. They are difficult to come across since they are found only in high mountain streams. As a side note, I find it much easier to appreciate fish that aren't such prima donnas about everything.", chk:0};
var Stringfish = {no:29, name:"Stringfish", smonth:12, emonth:3, stime:16, etime:9, loc:"River (Clifftop)", size:5, bells:15000, desc:"The stringfish grows slowly, but also lives quite a long time for a fish, with up to 15 years being typical. Consequently, while it takes a while, they can get quite large-perhaps even up to six feet long! The stringfish is perhaps the best embodiment in the fish world of 'slow and steady wins the race.'", chk:0};
var Salmon = {no:30, name:"Salmon", smonth:9, emonth:9, stime:0, etime:23, loc:"River (Mouth)", size:1, bells:700, desc:"Salmon are popular migratory fish that are born in rivers, migrate to oceans, and return in four years. In Japan, flavored salmon eggs are a very popular dish called ikura, but it hasn't caught on in the US. In rare cases, salmon will only stay in the ocean for one or two years before coming back. These fish are known as \"phantom salmon\" since they're so hard to find in the wild. Their characteristic pink color comes from the shrimp and krill they get in their diet. If they ate differently, their flesh would be white. Salmon only spawn at the bottom of the waterfall where the lake meets the ocean.", chk:0};
var KingSalmon = {no:31, name:"King Salmon", smonth:9, emonth:9, stime:0, etime:23, loc:"River (Mouth)", size:0, bells:1800, desc:"King salmon grow to about twice the size of regular salmon, which really helps them embody the name. This size essentially makes them the actual kings of salmon, though they are also called chinook salmon. In some regions, they return to the river in spring or summer and live there until spawning in the fall. In rare cases, king salmons' meat will be white, but these are not as popular since pink is the standard.", chk:0};
var MittenCrab = {no:32, name:"Mitten Crab", smonth:9, emonth:11, stime:16, etime:9, loc:"River", size:1, bells:2000, desc:"Officially known as the mitten crab, they also go by the name \"shanghai crab.\" They are commonly used in Chinese dishes, which is how most people become familiar with them. Their breeding habits are the complete opposite of salmon in that they hatch in the ocean first. They then move up rivers when they reach adult size, returning to the ocean in order to spawn.", chk:0};
var Guppy = {no:33, name:"Guppy", smonth:4, emonth:11, stime:9, etime:16, loc:"River", size:0, bells:1300, desc:"Oh my! Would you look at that! Auch a beautiful, snazzy little fellow that guppy is! The shape and coloration of guppy fins are all unique. Quite eye-catching, I must say. Do you imagine they host contests for \"most snazzy\"? And...do you suppose I might receive an invite?", chk:0};
var NibbleFish = {no:34, name:"Nibble Fish", smonth:5, emonth:9, stime:9, etime:16, loc:"River", size:1, bells:1500, desc:"The official name given to this warm-water-dwelling species of fish is \"Garra rufa.\" They are omnivorous, as they both eat algae and scrape the skin off other fish. All you'd have to do to feed them is stick your hand in the tank; they would live off your dead skin. That's why they're called nibble fish. They exfoliate but don't have any teeth, so it doesn't hurt at all!", chk:0};
var Angelfish = {no:35, name:"Angelfish", smonth:5, emonth:10, stime:16, etime:9, loc:"River", size:1, bells:3000, desc:"These tropical fish move very gracefully because of long fins on their backs and underbellies. Males and females are almost impossible to tell apart, making identification tricky. They lay eggs among water plants. Both genders look after the babies while they cling to weeds. The young look like any other fish, but they gain their angelfish looks once they leave the weeds.", chk:0};
var Betta = {no:36, name:"Betta", smonth:5, emonth:10, stime:9, etime:16, loc:"River", size:1, bells:2500, desc:"i dont know what blathers says about the betta...", chk:0};
var NeonTetra = {no:37, name:"Neon Tetra", smonth:4, emonth:11, stime:9, etime:16, loc:"River", size:0, bells:500, desc:"Neon tetras get their names from the beautiful blue metallic line on their bodies. Although their shy, gentle fish, surprisingly they're related to piranha, though very distantly. They have very sharp and narrow teeth, an odd contrast to their beauty. They are delicate fish who tend to be very sensitive to the cleanliness and temperature of water.", chk:0};
var Rainbowfish = {no:38, name:"Rainbowfish", smonth:5, emonth:10, stime:9, etime:16, loc:"River", size:1, bells:800, desc:"The rainbowfish is a tropical fish known for its metallic colors and beautiful fins. There are over 50 different species, each unique and pleasing color. I must say, it does make me wish for feathers of a more exciting hue than \"underbaked brownie.\"", chk:0};
var Piranha = {no:39, name:"Piranha", smonth:6, emonth:9, stime:9, etime:16, stime2:21, etime2:4, loc:"River", size:1, bells:2500, desc:"They have terrifyingly sharp teeth, which contributes to their ferocious reputation. Oddly enough, they are actually quite timid, though they are still very dangerous fish. If they can't find food, they will resort to cannibalism or tear apart any animal they can grab hold of. Take care when catching them so they don't end up biting your hand with their sharp teeth!", chk:0};
var Arowana = {no:40, name:"Arowana", smonth:6, emonth:9, stime:16, etime:9, loc:"River", size:3, bells:10000, desc:"Arowanas are ancient fish that have remained basically unchanged for 100 million years. They are known for their large scales and the hair that sticks out from their lower lips. They have a remarkable jumping ability and can leap over a yard above the surface of the water. Males protect their babies by keeping them in their mouths and releasing them once they reach a certain size.", chk:0};
var Dorado = {no:41, name:"Dorado", smonth:6, emonth:9, stime:4, etime:21, loc:"River", size:4, bells:15000, desc:"Dorado means \"golden\" in Spanish. As the name would indicate, these fish are gold and have black dots. They look like salmon but are very toothy, carnivorous, and related to piranha. They're such ferocious fish that other fish regularly flee from them, fearful of becoming a snack. Their ferocious natures and power make them a prize catch among anglers.", chk:0};
var Gar = {no:42, name:"Gar", smonth:6, emonth:10, stime:16, etime:9, loc:"Pond", size:5, bells:6000, desc:"Their long faces and large mouths make them look like alligators. Some can grow up to three yards. They are ancient fish that haven't changed since they first appeared millions of years ago. They breathe not only through gills, but also by sticking their mouths above the surface of the water. Gar eggs are poisonous, so people all over the world are advised not to eat them -- no exceptions.", chk:0};
var Arapaima = {no:43, name:"Arapaima", smonth:6, emonth:9, stime:16, etime:9, loc:"River", size:5, bells:10000, desc:"Arapaima, at over two yards long, are one of the largest freshwater-fish breeds in the world. They've been around for over 100 million years, making them rather ancient fish as well. They breathe through gills but also with an air bladder used by poking their mouths above water. They have hard, coarse tongues that are used to break down the smaller fish they eat.", chk:0};
var SaddledB = {no:44, name:"Saddled Bichir", smonth:6, emonth:9, stime:21, etime:4, loc:"River", size:3, bells:4000, desc:"What an elegant specimen you've found. The saddled bichir has a look entirely its own. They have poor eyesight, so they use their fine-tuned sniffers to seek out prey. Can you imagine relying solely on your sense of smell to find food? And if one nostril became clogged, would you be unable to tell how far away the scent was?", chk:0};
var Sturgeon = {no:45, name:"Sturgeon", smonth:9, emonth:3, stime:0, etime:23, loc:"River (Mouth)", size:5, bells:10000, desc:"The sturgeon is a large and long-lived fish which has changed little in the last 300 million years. One curious behavior of theirs is leaping high out of the water and falling back in on their sides. The smacking sounds of their re-entry can be heard for up to half a mile away, likely more underwater! No one knows why they do it, but I like to think it's their impression of bread popping out of toaster!", chk:0};
var SeaButterfly = {no:46, name:"Sea Butterfly", smonth:12, emonth:3, stime:0, etime:23, loc:"Ocean", size:0, bells:1000, desc:"Such mystery! Such grace! Did you know that the sea butterfly's scientific name is Thecosomata? A very rough translation of that is 'shell body.' Indeed, this illustrious creature is related to snails! However, it reminds me much more of an elegant feathered friend, the way it flies through the water. With such grace in flying, one shouldn't wonder if it's related to the owl, hoo hoo!", chk:0};
var SeaHorse = {no:47, name:"Sea Horse", smonth:4, emonth:11, stime:0, etime:23, loc:"Ocean", size:0, bells:1100, desc:"Sea horses don't look like fish, but they still share a lot of distant connections. They use their small dorsal fins and tail fins to swim, but in actuality they're pretty bad swimmers. They wrap their tail fins around seaweed or coral so they won't float away with the current. Once attached, they feed on plankton and small shrimp that float by. The female deposits eggs in the male's pouch, putting the burden of child care on the male.", chk:0};
var ClownFish = {no:48, name:"Clown Fish", smonth:4, emonth:9, stime:0, etime:23, loc:"Ocean", size:0, bells:650, desc:"Clown fish spend their lives hiding among the feelers of sea anemones, a place that only they can live. Their homes may be dangerous, but they produce a special coating that protects them from the poison. In exchange for the anemone's protection, the clown fish chases off any parasitic bugs and enemies. Curiously, all clown fish are males when they're young but change into females if necessity demands.", chk:0};
var Surgeonfish = {no:49, name:"Surgeonfish", smonth:4, emonth:9, stime:0, etime:23, loc:"Ocean", size:1, bells:1000, desc:"These tropical fish sport beautiful, yellow, triangular tails and elegant black lines on dazzling blue bodies. Personalitywise, the surgeonfish is actually rather laid back and timid. They seek out gaps in coral or between rocks for the greatest amount of protection while sleeping.", chk:0};
var ButterflyFish = {no:50, name:"Butterfly Fish", smonth:4, emonth:9, stime:0, etime:23, loc:"Ocean", size:1, bells:1000, desc:"Butterfly fish are considered very cute pets, popular because of their beautiful nature. They glide through the warm seas by flapping their yellow bodies as if they were butterflies. Their diets are surprisingly hardy, as they gobble coral and poisonous anemones using narrow mouths. Butterfly-fish couples have been known to live together for 10 years or more. Often they can be seen swimming around in pairs. You'll likely never find a better underwater romance.", chk:0};
var Napoleonfish = {no:51, name:"Napoleonfish", smonth:7, emonth:8, stime:4, etime:21, loc:"Ocean", size:5, bells:10000, desc:"Called Napoleonfish, these fish also have the more accurate name of humphead wrasse. The true name comes from the distinctive humps on their heads. But \"Napoleonfish\" is more popular. When small, all Napoleonfish are females, but some become males as they age and their humps grow. Their bodies also turn a bluer shade as they mature and become males, making identification simple. Their bulky bodies, which can get to about six feet long, still glide easily through warm tropical seas. Finding these fish is a real treat for divers, as they're stunning to see - and it's a great story to tell.", chk:0};
var ZebraTurkey = {no:52, name:"Zebra Turkeyfish", smonth:4, emonth:11, stime:0, etime:23, loc:"Ocean", size:2, bells:500, desc:"Zebra turkeyfish have long, beautiful fins that flow like gowns as they swim through the sea. However, these aquatic beauties pack a punch, as their fins are filled with poisonous spikes. Aside from protection against predators, this poison comes in handy for turn wars between males. The losing male succumbs to the poison in a matter of days, making these battles life and death.", chk:0};
var Blowfish = {no:53, name:"Blowfish", smonth:11, emonth:2, stime:18, etime:4, loc:"Ocean", size:2, bells:5000, desc:"Blowfish are considered a delicacy, famous for their tempting taste despite being highly poisonous. Blowfish are not poisonous at birth, though, which makes young ones relatively safe for consumption. It's only once they have ingested enough microbes from seawater and food that they become poisonous. When they feel threatened, they suck in air and water to blow themselves up like balloons. This makes them too big to eat without predators being horsed to chomp down on their poison quills.", chk:0};
var PufferFish = {no:54, name:"Puffer Fish", smonth:7, emonth:9, stime:0, etime:23, loc:"Ocean", size:2, bells:250, desc:"As expected, all puffer fish are covered in spines. While related to the blowfish, they are not poisonous. Exaggerated claims about the fish say they have 1,000 spines; the true number is between 300 and 400. When threatened, they suck in water and air to puff themselves up in order to intimidate enemies.", chk:0};
var Anchovy = {no:55, name:"Anchovy", smonth:1, emonth:12, stime:4, etime:21, loc:"Ocean", size:1, bells:200, desc:"There are more than 140 species of anchovy, but they do all have some things in common. They are small and feed by simply swimming with their mouths open to filter food particles from the sea. (In my sleepier moments, I sometimes wish I could do that...)", chk:0};
var HorseMack = {no:56, name:"Horse Mackerel", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:1, bells:150, desc:"Supposedly the horse mackerel derives its name from a-false-myth about its strength as a swimmer. The gist of it is that these fish are so powerful underwater that smaller fish can ride them as steeds! It's absurd, of course. Where would these alleged fish jockeys attach a saddle, much less horseshoes? One does wish that people would construct their legends with a BIT more scientific plausibility! ", chk:0};
var BarredKnife = {no:57, name:"Barred Knifejaw", smonth:3, emonth:11, stime:0, etime:23, loc:"Ocean", size:2, bells:5000, desc:"Wonderful! I would love nothing more! The barred knifejaw, also called the striped beakfish, is a lovely fish with a distinctive striped pattern. It is reportedly also a very curious fish in that it has been known to approach swimmers to \"greet\" them. They also tend to be good at avoiding fishing hooks, so well done on outwitting this one!", chk:0};
var SeaBass = {no:58, name:"Sea Bass", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:4, bells:400, desc:"Sea bass is a name given to a variety of different species of saltwater fish. They are a varied bunch with some as small as four inches and some as staggeringly ginormous as eight feet! 'Sea bass' is a bit pedestrian though. Many species have better names, such as 'redbanded perch.' Or the delightfully whimsical dusky grouper! Or the potato cod! WILL NO ONE THINK OF THE PINK MAOMAO?!", chk:0};
var RedSnap = {no:59, name:"Red Snapper", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:3, bells:3000, desc:"'Red snapper' is the common name of dozens of fish species, and I wonder why it is so popular. Are there so many types of fish that are both a shade of red and have a tendency to snap? Were there no other names? What about 'burgundy biter'? 'Garnet grasper'? 'Puce pincher'?", chk:0};
var Dab = {no:60, name:"Dab", smonth:10, emonth:4, stime:0, etime:23, loc:"Ocean", size:2, bells:300, desc:"The dab is a flatfish that bears some resemblance to the olive flounder, though their mouths are different. Personally, I am morbidly fascinated by each fish's eye placement. The dab's eyes are both on its right side, while the olive flounder's are on the left. These fish spend lots of time lying on their sides in the sand, so the odd eye placement makes some sense... But it's — how can I put this? Creepy? Viscerally disturbing? Profoundly upsetting to fans of symmetry?", chk:0};
var OliveFlounder = {no:61, name:"Olive Flounder", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:3, bells:800, desc:"Did you know that the olive flounder is the same shape as other fish when it hatches? But as it grows, it gets both wider and flatter, and can reach some three feet long. These flat fish spend much of their lives buried under the sandy ocean floor, waiting for prey to happen by. Imagine the surprise for said prey when they strike. It would be as if your kitchen floor were to bite you!", chk:0};
var Squid = {no:62, name:"Squid", smonth:12, emonth:8, stime:0, etime:23, loc:"Ocean", size:2, bells:500, desc:"Well, first off, squids are members of the mollusk family, just like the octopus. Many mollusks like snails and clams have shells, but the squid's body is almost completely soft. The exception is a long, narrow bit of hard material going through its main body - the last remnant of its shell. Of course, having your shell INSIDE is not a best practice. Perhaps they lost the owner's manual!", chk:0};
var MorayEel = {no:63, name:"Moray Eel", smonth:8, emonth:10, stime:0, etime:23, loc:"Ocean", size:4, bells:2000, desc:"Moray eels can often be seen sticking just their heads out from between two rocks. When unsuspecting prey approaches, the dart out to snatch it up into their sharp-toothed mouths. Once moray eels have their teeth in you, it's hard to get away, making moray-eel bites no trifling matter. Their long, finless bodies are covered in tough, snakelike skin that often gets used as leather.", chk:0};
var RibbonEel = {no:64, name:"Ribbon Eel", smonth:6, emonth:10, stime:0, etime:23, loc:"Ocean", size:7, bells:600, desc:"Ribbon eels have long, ribbonlike bodies and look as if they have flowers sprouting from their noses. They get their name from their bright, vivid color, in addition to the length of their bodies. Ribbon eels hatch sexless before first becoming males, then females as they age. Their tendency to stick their heads out from holes in the sand and open their mouths is not a sign of anger. In actuality, they're merely taking a breath. Oddly, they're surprisingly peaceful creatures, despite the look.", chk:0};
var Tuna = {no:65, name:"Tuna", smonth:11, emonth:4, stime:0, etime:23, loc:"Pier", size:4, bells:7000, desc:"The tuna is a large ocean fish that can reach upwards of nine feet long. Besides its great size, it's notable for continuing to swim even when it's sleeping! Well, to be fair, if it doesn't keep swimming, it won't be able to breathe and will of course die... But sleep should be restful, eh wot! If I were the tuna I would feel very hard done by!", chk:0};
var BlueMarlin = {no:66, name:"Blue Marlin", smonth:7, emonth:9, smonth2:11, emonth2:4, stime:0, etime:23, loc:"Pier", size:4, bells:10000, desc:"The blue marlin has a distinctive angular shape and no scales. It is an unusual relative of the tuna. These mighty fish can exceed 13 feet from bill to tail. Some accounts even have it fighting with whales! No wonder it's a popular target for sport fishing: unlike most fish, it seems like a worthy opponent.", chk:0};
var GiantTrevally = {no:67, name:"Giant Trevally", smonth:5, emonth:10, stime:0, etime:23, loc:"Pier", size:3, bells:4500, desc:"Though you wouldn't guess it because of their size, giant trevallys are actually a type of mackerel. Unlike normally slim and sleek mackerels, giant trevallys have wide, sliver bodies. Surprisingly, though, these fish cannot tolerate the cold, so they tend to live in warmer places. Their jaw strength is great enough to bite off a person's finger, so be very careful when fishing for them!", chk:0};
var Mahi = {no:68, name:"Mahi-Mahi", smonth:5, emonth:10, stime:0, etime:23, loc:"Ocean", size:3, bells:6000, desc:"The mahi-mahi is an ocean fish known for its wide, somewhat-cute face. It can reach over six feet long. It is known by different names including \"dolphinfish,\" even though it has no relation to dolphins. They live in only in warm, tropical waters...which perhaps explains the relaxed, happy look on their faces.", chk:0};
var Sunfish = {no:69, name:"Ocean Sunfish", smonth:7, emonth:9, stime:4, etime:21, loc:"Ocean", size:6, bells:4000, desc:"Ocean sunfish are a relative of blowfish that can reach up to two tons in weight. Lacking a tail fin, they cannot swim particularly quickly, which is an odd bit of anatomical detriment. The number of eggs they can lay is the most in the world at over 300 million. However, out of that 300 million, only one or two fish will ultimately survive. Ocean sunfish sometimes like to bob up and down on the surface of the ocean. This gives them the appearance they're sunbathing, which helps to make them a popular breed of fish.", chk:0};
var Ray = {no:70, name:"Ray", smonth:8, emonth:11, stime:04, etime:21, loc:"Ocean", size:4, bells:3000, desc:"Beating their large fins up and down to move through the water gives the rays the impression of flying. If viewed from below, rays appear to have their mouths curled up into a sort of smile. Some varieties have poisonous spikes at the base of their long tail fins that can be fatal to humans. This, combined with the ability to hide in sand at the bottom of the sea, can make them very dangerous.", chk:0};
var SawShark = {no:71, name:"Saw Shark", smonth:6, emonth:9, stime:16, etime:9, loc:"Ocean", size:6, bells:12000, desc:"As you might expect from the name, the saw shark is a shark with a head that resembles a saw. This unusual appendage is used both to dig potential prey out of the sand and as a weapon against said prey. Given that, it seems like a more appropriate name would have been \"shovel-sword shark,\" eh wot?", chk:0};
var HammerShark = {no:72, name:"Hammerhead Shark", smonth:6, emonth:9, stime:16, etime:9, loc:"Ocean", size:6, bells:8000, desc:"The hammerhead shark is a shark with a head like a hammer, which is what you'd expect. However, despite being sharks, they are actually fairly laid back, which is not what you'd expect. With their eyes positioned on the two ends of their \"hammer,\" they can see in almost all directions. Oddly, their nose holes are located right next to their eyes on their hammer section. They have a number of small holes on the front and lower portions of their heads as well. These holes allow them to detect prey, even fish hiding below them and out of sight. While they eat a nice array of fish, it seems that rays are their favorite source of food. Rays, beware!", chk:0};
var GWhiteShark = {no:73, name:"Great White Shark", smonth:6, emonth:9, stime:16, etime:9, loc:"Ocean", size:6, bells:15000, desc:"Great white sharks are obviously known first and foremost for their biting. They are masters of the craft! They do lose teeth regularly through biting-related activities, but, luckily, those teeth grow back quickly. In fact, their missing teeth can be regrown in a single day. Just imagine their tooth-fairy-related income!", chk:0};
var WhaleShark = {no:74, name:"Whale Shark", smonth:6, emonth:9, stime:0, etime:23, loc:"Ocean", size:6, bells:13000, desc:"The mighty whale shark is the largest species of fish in the world with specimens up to 60 feet long! Unlike many of their kin in the shark family, whale sharks are nonviolent, eating only plankton and such. They grow slowly and live long, relaxed lives of filter feeding and leisure in warm waters. So if you ever have to choose a fish as a roommate, you could do worse than the whale shark. Unless you can't swim.", chk:0};
var Suckerfish = {no:75, name:"Suckerfish", smonth:6, emonth:9, stime:0, etime:23, loc:"Ocean", size:6, bells:1500, desc:"I don't know what Blathers says about the suckerfish...", chk:0};
var FootballFish = {no:76, name:"Football Fish", smonth:11, emonth:3, stime:16, etime:9, loc:"Ocean", size:3, bells:2500, desc:"The football fish is a strange and grotesque deep-sea fish with a lantern-like light on its forehead. Its light is apparently powered by luminous bacteria and other glowing microorganisms. One theory says it can spray these luminescent sidekicks when prey approaches in order to dazzle them... The deep contains many mysteries... as well as some things that are just sort of odd and off-putting.", chk:0};
var Oarfish = {no:77, name:"Oarfish", smonth:12, emonth:5, stime:0, etime:23, loc:"Ocean", size:5, bells:9000, desc:"The oarfish is a long, eel-like fish that can supposedly reach up to 36 feet in length. They appear in various legends as things like messengers of the gods. It seems to me a creature like that could explain the myth of massive, ship-crushing sea serpents. It is, of course, well documented that people tend to exaggerate the size of 'the one that got away.'", chk:0};
var Barreleye = {no:78, name:"Barreleye", smonth:1, emonth:12, stime:21, etime:4, loc:"Ocean", size:1, bells:15000, desc:"The barreleye is a deep-sea fish with protuberant eyes and a clear head, so some of its organs are... visible. At first blush, a transparent head seems absurd, but there is a reason: so it can see things directly above! But I must confess--the more I learn about deep-sea fish, the happier I am to live on dry land, wot.", chk:0};
var Coelacanth = {no:79, name:"Coelacanth", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean (Rain)", size:5, bells:15000, desc:"The coelacanth is a deep-sea fish that has been around since the age of the dinosaurs. They were long thought extinct, so when living specimens were discovered, it was quite a shock! Now I'll just have to figure out where in the museum to display it- fish or fossils!", chk:0};

var CommonButterfly = {no:0, name:"Common Butterfly", smonth:9, emonth:6, stime:4, etime:19, loc:"Flying", bells:160, desc:"The common butterfly would have you believe it is but a beautiful friend flitting prettily about the flowers. Bah, I say! They may seem innocent things with their pretty white wings, but they hide a dark side! The common butterfly caterpillar is called a cabbage worm, you see, and it's a most voracious pest. The ravenous beasts chew through cabbage, broccoli, kale and the like with a devastating gusto. And my feathers! Their green coloring is truly GROSS! A hoo-rrific hue, I say.", chk:0};
var YellowButterfly = {no:1, name:"Yellow Butterfly", smonth:3, emonth:6, smonth2:9, emonth2:10, stime:4, etime:19, loc:"Flying", bells:160, desc:"Allow me to enlighten you... The yellow butterfly is named for its yellow wings. Need I say more? If I must, then allow me to note that the female yellow butterfly can lay up to 600 eggs at a time! Bleech! And their creepy crawly caterpillars just love to chomp on clover plants. A recipe for disaster, I say. Just imagine reaching for a four-leaf clover, only to touch a larva instead! Yuck! The worst of luck!", chk:0};
var TigerButterfly = {no:2, name:"Tiger Butterfly", smonth:3, emonth:9, stime:4, etime:19, loc:"Flying", bells:240, desc:"Tiger butterflies are known for their majestic wings, which many consider quite beautiful. Truth be told, I find them monstrous! Those strange striped patterns... They give this owl the goose bumps! And while you may imagine young tiger butterfly larvae to look like lovely green caterpillars... it's not so! Why, when tiger butterflies are but babes, they're covered in unsightly white, brown, and black spots. In this way, they camouflage themselves as...as...bird droppings! Putrid pests, indeed!", chk:0};
var PeacockButterfly = {no:3, name:"Peacock Butterfly", smonth:3, emonth:6, stime:4, etime:19, loc:"Flying", bells:2500, desc:"Pretty as a peacock? Bah, I say! The wings of the peacock butterfly may have a pattern similar to that of the beautiful bird... But its forewings are also covered in a dark, velvety hair! You heard right! HAIRY wings! A hair-raising revelation indeed!", chk:0};
var CommonBluebottle = {no:4, name:"Common Bluebottle", smonth:4, emonth:8, stime:4, etime:19, loc:"Flying", bells:300, desc:"The common bluebottle is a type of swallowtail butterfly with a bright blue line running down its wings. They fly quite nimbly, it seems, and are thus quite difficult to catch. But seeing as how they've been known to slurp nutrients from MUD puddles... I simply CAN'T imagine wanting to catch one myself. What awful breath!", chk:0};
var PaperKiteButterfly = {no:5, name:"Paper Kite Butterfly", smonth:1, emonth:12, stime:8, etime:19, loc:"Flying", bells:1000, desc:"With its black-and-white-striped wing pattern, the paper kite butterfly is both elegant and pretty... PRETTY POISONOUS I MEAN! Hoo dear! Where was I? Oh yes... Even this butterfly's black-and-white-striped larva and little golden pupae are toxic to predators. Indeed, the paper kite butterfly's foul flavor is famous, and thus birds, in particular, steer clear of the fiends. THIS bird most of all!", chk:0};
var GreatPurpleEmperor = {no:6, name: "Great Purple Emperor", smonth:5, emonth:8, stime:8, etime:19, loc:"Flying", bells:3000, desc:"The great purple emperor lives high in the treetops and is renowned for its pretty purple-hues wings. It’s impressive bird-like wingspan and elusive nature have made it a favorite amount butterfly aficionados. But truth be told, the so-called great purple emperor has some not-so-great personal peculiarities. For one...it has two horrid HORNS upon its head when it is in its caterpillar form. For two...it has been known to dine on feces and animal carcasses! Hoo! That’s why I call it the Emperor of EWWW!", chk:0};
var MonarchButterfly = {no:7,name:"Monarch Butterfly", smonth:9, emonth:11, stime:4, etime:17, loc:"Flying", bells:140, desc:"Monarch butterflies are quite colorful, aren't they? ... As it happens, the colors indicate they're poisonous! I certainly start to feel queasy when I look at one. Though that happens with all bugs.", chk:0};
var EmperorButterfly = {no:8, name:"Emperor Butterfly", smonth:6, emonth:9, smonth2:12, emonth2:3, stime:17, etime:8, loc:"Flying", bells:4000, desc:"The emperor butterfly is called the jewel of the forest. But its vivid blue hue... Ewww, let me tell you! The color does not come from a dye, but rather from light reflecting off layers of translucent scales. Yes, butterfly wings are covered in tiny scales! SCALES! Butterfly? Bah! More like snake of the sky!", chk:0};
var AgriasButterfly = {no:9, name:"Agrias Butterfly", smonth:4, emonth:9, stime:8, etime:17, loc:"Flying", bells:3000, desc:"Some say the agrias butterfly is one of the most beautiful butterflies in the world. Bah, I say! BAH! They may have brightly colored wings, but the way they flutter and flitter...SO FOUL! In fact, the agrias butterfly flies so fast, it is quite a feat to catch one. I suppose I should congratulate you on your good fortune... But catching any bug seems a misfortune to me.", chk:0};
var RajaBrooke = {no:10, name:"Raja Brooke's Birdwing", smonth:4, emonth:9, smonth2:12, emonth2:2, stime:8, etime:17, loc:"Flying", desc:"...I must say, I'm quite impressed with your ability to catch such an impressive butterfly... The Raja Brooke butterfly, I must tell you, is one of the larger tiger butterflies. Naturally, its antennae and proboscis also rank as some of the largest around. Be not proud, vile beast! Your cute red collar and fancy name do not fool Blathers!", chk:0};
var QueenAlexandria = {no:11, name:"Queen Alexandria's Birdwing", smonth:5, emonth:9, stime:8, etime:16, loc:"Flying", bells:2500, desc:"Hoo! The horror! This behemoth butterfly may be a Queen Alexandra’s birdwing... But I call it Queen of My Nightmares! It is huge! Indeed, the world’s hugest. No butterfly can beat its foot-long wingspan. The larvae alone grow to more than 4 inches. As if it weren’t appalling enough...they’re poisonous! Murderous monsters, indeed!", chk:0};
var Moth = {no:12, name:"Moth", smonth:1, emonth:12, stime:19, etime:4, loc:"Flying (Light)", bells:130, desc:"Many think the moth is strictly a nocturnal creature. Alas, no! These frightful fluttering beasts have been known to haunt the daylight and twilight hours too. Thus, there is no time of day one might escape the moth trait I dislike most of all—those feathery antennae! The mere thought of them gives my feathers goosebumps. And I'm no goose.", chk:0};
var AtlasMoth = {no:13, name:"Atlas Moth", smonth:4, emonth:9, stime:19, etime:4, loc:"Tree Trunks", bells:3000, desc:"The Atlas moth is a monstrous thing! Not only is it one of the largest moths in the world... The tips of its wings look rather like the heads of venomous snakes! Despite its largeness and loathsome looks, the adult Atlas moth lives only for a few days. It emerges from its cocoon without a mouth, you see...and so cannot eat. I feel for the poor thing...but it is still foul!", chk:0};
var MadagascanSunsetMoth = {no:14, name:"Madagascan Sunset Moth", smonth:4, emonth:9, stime:8, etime:16, loc:"Flying", bells:2500, desc:"Description is not available at this time...", chk:0};
var LongLocust = {no:15, name:"Long Locust", smonth:4, emonth:11, stime:8, etime:19, loc:"Ground", bells:200, desc:"As if the average locust weren't large enough...we must suffer the long locust too! The wretched beasts are known for their unusually long hind legs as well as their elongated heads. But that is hardly the long locusts' worst trait... I tell you, they spit brown goo when they're scared! Revolting behavior indeed! Ugh and ewww!", chk:0};
var MigratoryLocust = {no:16, name:"Migratory Locust", smonth:8, emonth:11, stime:8, etime:19, loc:"Ground", bells:600, desc:"Ah, hoo, migratory locusts. As their name suggests, they fly far...quite far, in point of fact. These insects will fly as a group into fields, devour all the crops, and completely devastate the land. Just one of these beasts is sufficiently horrifying, so imagine how abominable a swarm would be... Blech!", chk:0};
var RiceGrasshopper = {no:17, name:"Rice Grasshopper", smonth:8, emonth:11, stime:8, etime:19, loc:"Ground", bells:160, desc:"Rice grasshoppers are typically known as pests that eat farmers' crop, making them undesirable. But they're also edible, and boiling them in soy sauce is a typical way to prepare them in certain regions. While they are generally green, their shells will turn a darker color when heavily crowded in groups.", chk:0};
var Grasshopper = {no:18, name:"Grasshopper", smonth:7, emonth:9, stime:8, etime:17, loc:"Ground", bells:160, desc:"Have you ever noticed that these little fellows have a tendency to easily lose or break a leg? Hoo, yes, you catch one in your net, but in doing so you pop off a leg. Then you grow sad and nauseated. And then the broken-off leg keeps kicking despite being no longer attached! And then you flee in terror!", chk:0};
var Cricket = {no:19, name:"Cricket", smonth:9, emonth:11, stime:17, etime:8, loc:"Underground", bells:130, desc:"Ah, hoo...indeed. Crickets do have a lovely chirp, I must grudgingly admit. Still, that black body, those long feelers... How do people love these when they resemble...THOSE? I bet one couldn't even tell the difference between a cricket and a cockroach in the dark of night...", chk:0};
var BellCricket = {no:20, name:"Bell Cricket", smonth:9, emonth:10, stime:17, etime:5, loc:"Ground", bells:430, desc:"Bell crickets top my list of insects one should never look at directly... Such a vision of horror! A slick black body, long antennae, and foul wings that shake when it chirps! Blech! How can one be expected to abide such an odious monster?!", chk:0};
var Mantis = {no:21, name:"Mantis", smonth:3, emonth:11, stime:8, etime:17, loc:"Flowers", bells:430, desc:"Hoo! Don't let the mantis's angelic pose fool you...for it is truly monstrous. The mantis is known for its large size and tremendous strength...and for sickle-like arms that pack a punch. And though they tend to eat bugs and spiders...mantises have been known to dine on small animals too! And those eerie eyes! Oh my! Did you know it has five of them! Two big ones and three small! I shall faint if I think on it further... ", chk:0};
var OrchidMantis = {no:22, name:"Orchid Mantis", smonth:3, emonth:11, stime:8, etime:17, loc:"Flowers (White)", bell:2400, desc:"The orchid mantis is a bug whose brilliant colors and petal-shaped limbs give it the look of a flower. This masterful mimicry allows it to hide from predators in among the orchids. But oh this fraudulent flower! It lures other insects in to drink its nectar... And makes a meal of them instead! Imagine! To behold a beautiful bud... only to discover it's a bug instead! A repulsive revelation indeed!", chk:0};
var Honeybee = {no:23, name:"Honeybee", smonth:3, emonth:7, stime:8, etime:17, loc:"Flying", bells:200, desc:"Did you know it takes a team of honeybees working together to transform flower nectar into honey? Indeed, forager bees suck nectar from flowers into their \"honey stomachs\" and then fly it to the hive. Hive bees then chew the substance and spit it into the honeycomb, fluttering their wings to dry it out. Yes, you could say honey is a tasty tribute to the hard work of the humble honeybee. Oh! Oh my! You mustn't confuse my lengthy description for admiration! At the end of the day, honeybees are still insects, and thus still ghastly! A wee bit less ghastly than most, I admit.", chk:0};
var Wasp = {no:24, name:"Wasp", smonth:1, emonth:12, stime:0, etime:23, loc:"Shaken Trees", bells:2500, desc:"Hoo! Allow me to share a fact with you! Wasps are sometimes called \"meat bees\" because... They. Eat. MEAT! MEAT! Of almost any sort! Surely you've seen what a menace they make of themselves at picnics. 'Tis hardly the worst of it, wot wot! Aggressive predators with venomous stingers, wasps not only hunt and eat other insects...they paralyze their prey, then drag their victims home ALIVE, leaving them for their larva to feed upon. Suddenly a simple sting seems quite tolerable.", chk:0};
var BrownCicada = {no:25, name:"Brown Cicada", smonth:7, emonth:8, stime:8, etime:17, loc:"Tree Trunks", bells:200, desc:"Ah, hoo, the brown cicada. The call of this creature is said to sound like hot oil sputtering, eh wot? I'm rather not sure that hearing the sound of deep-frying on a hot summer night is a pleasant thing...", chk:0};
var RobustCicada = {no:26, name:"Robust Cicada", smonth:7, emonth:8, stime:8, etime:17, loc:"Tree Trunks", bells:300, desc:"Fittingly enough, the robust cicada can issue a robust, loud chirp...and it does so quite often. I've heard this beastie's impertinent cry so often that I've grown rather good at imitating it. Listen! Chiiirp! CHIIIRP! CHIIir...", chk:0};
var GiantCicada = {no:27, name:"Giant Cicada", smonth:7, emonth:8, stime:8, etime:17, loc:"Tree Trunks", bells:500, desc:"As the name might indicate, giant cicadas are one of the largest species of cicada in the world. They used to live mostly in warmer western Japan, but they've now also moved to urban eastern Japan. Though they're now common in these areas, they aren't well known in other parts of the world.", chk:0};
var WalkerCicada = {no:28, name:"Walker Cicada", smonth:8, emonth:9, stime:8, etime:17, loc:"Tree Trunks", bells:400, desc:"Apparently, walker cicadas cry out in an attempt to obscure the calls of other, similar cicadas. I should think that to the average fellow, it just sounds like the cicadas are merely singing together. In any case, I don't suggest looking for them. Their voices may fascinate, but their faces nauseate!", chk:0};
var EveningCicada = {no:29, name:"Evening Cicada", smonth:7, emonth:8, stime:4, etime:8, stime2:16, etime2:19, loc:"Tree Trunks", bells:550, desc:"Evening cicadas got their name from their tendency to start crying once it starts getting dark out. Interestingly enough, these creatures apparently will also cry on an overcast day if it gets dark enough. Don't be fooled by their lovely voices, however. They are quite disgusting to gaze upon...", chk:0};
var CicadaShell = {no:30, name:"Cicada Shell", smonth:7, emonth:8, stime:0, etime:23, loc:"Tree Trunks", bells:100, desc:"Cicada larvae emerge from the ground in the evening and molt on trees, leaving behind empty shells. It's possible to find out the species of cicadas just be looking at these shells. Collecting the shells will tell you how many and what kind of cicadas inhabit a certain area.", chk:0};
var RedDragonfly = {no:31, name:"Red Dragonfly", smonth:9, emonth:10, stime:8, etime:19, loc:"Flying", bells:180, desc:"Since red dragonflies can't regulate their body temperatures, they only come out in the fall. They actually perish when the heat climbs over 86 degrees Fahrenheit. No summer fun for them, wot?", chk:0};
var DarnerDragonfly = {no:32, name:"Darner Dragonfly", smonth:4, emonth:10, stime:8, etime:17, loc:"Flying", bells:230, desc:"At first glance, the darner dragonfly, like all dragonflies, appears to be quite a sleek bug, wot? But in its larval stage, this bug is a beastly little carnivore... I suppose if one were being eaten, one wouldn't care if whoever was doing the devouring looked sleek...", chk:0};
var BandedDragonfly = {no:33, name:"Banded Dragonfly", smonth:5, emonth:10, stime:8, etime:17, loc:"Flying", bells:4500, desc:"Banded dragonflies are rather flashy... Just look at those piercing green eyes. The black and yellow body! Not to mention their sheer size and--OH, HORRORS! The beast is looking right at me! Look away, fiend!", chk:0};
var Damselfly = {no:34, name:"Damselfly", smonth:11, emonth:2, stime:0, etime:23, loc:"Flying", bells:500, desc:"Not Available at this time...",chk:0};
var Firefly = {no:35, name:"Firefly", smonth:6, emonth:6, stime:19, etime:4, loc:"Flying", bells:300, desc:"Many theories exist as to why fireflies can glow, but we've yet to find a clear answer, eh wot? The answer is not nearly so relevant as the fact they are bugs, and therefore wretched.", chk:0};
var MoleCricket = {no:36, name:"Mole Cricket", smonth:11, emonth:5, stime:0, etime:23, loc:"Underground", bells:500, desc:"Be warned, there is nowhere one might hide from the mole cricket. This plump pest has powerful front claws made for digging holes, and oh how it loves to burrow underground! A cousin to the grasshopper, it also has wings and can easily take to the air. And I swear this on my pinfeathers... Some have even been seen walking on water! Oh mercy, I may need a moment. This is making me feel rather woozy...", chk:0};
var Pondskater = {no:37, name:"Pondskater", smonth:5, emonth:9, stime:8, etime:19, loc:"Pond", bells:130, desc:"Do you know how pondskaters keep themselves above water, wot? The oil on the hairs of their feet repel water! Thusly they stay afloat. Which begs the question, if one were to shave their feet, would they sink? I daresay, I cannot think of a worse job than being the shaver of insect feet.", chk:0};
var DivingBeetle = {no:38, name:"Diving Beetle", smonth:5, emonth:9, stime:8, etime:19, loc:"Pond/River", bells:800, desc:"While they're marginally less odious as adults...dive beetles are horrific in their larval stage! These wretched youths are twice the size of the adults and wield a large poison barb. Foul villainy! Then again, I suppose the adults aren't much better. They're both completely objectionable, really...", chk:0};
var GiantWaterBug = {no:39, name:"Giant Water Bug", smonth:4, emonth:9, stime:19, etime:8, loc:"Pond/River", bells:2000, desc:"How to put this gently? Ah yes... BEWARE the giant water bug. I tell you, this vicious predator has been known to attack fish, bugs, frogs, and even snakes! SNAKES! Truth be told, no one is safe! Its nickname is \"the toe-biter,\" for goodness sakes! Now, one final fact before I faint... The gruesome bug uses its nose...to inject its prey...with digestive juices.", chk:0};
var Stinkbug = {no:40, name:"Stinkbug", smonth:3, emonth:11, stime:0, etime:23, loc:"Flowers", bells:120, desc:"I daresay the name says it all... Stinkbugs are known for their stench. Hoo! Peeyew! As it happens, these crop-eating pests use straw-like mouths to pierce plants and drink the juices. And when threatened, they use a smelly chemical in their belly to release their odious odor! Hoo! How DO they live with themselves? ", chk:0};
var ManFacedStinkBug = {no:41, name:"Man-Faced Stink Bug", smonth:3, emonth:11, stime:19, etime:8, loc:"Flowers", bells:1000, desc:"Never mind this stink bug's smell. What you have here is a bug...with a FACE...on its BACK!! Wot-wot! Simply put, the man-faced stink bug has markings on its shell that resemble a human face. Once you notice this face, you cannot UN-notice it. Indeed, this face might haunt you forever. At least the face will distract you from the stink.", chk:0};
var Ladybug = {no:42, name:"Ladybug", smonth:3, emonth:6, smonth2:10, emonth2:10, stime:8, etime:17, loc:"Flowers", bells:200, desc:"Ladybugs are one insect I thought might appeal to me. Then I made the grievous error of tosisterlyng one. This vile fluid appeared from someplace and.. Oh, it was everywhere! Blech! Utterly appalling!", chk:0};
var TigerBeetle = {no:43, name:"Tiger Beetle", smonth:2, emonth:11, stime:0, etime:23, loc:"Ground", bells:1500, desc:"The tiger beetle is extremely fleet of foot, though it runs in a rather peculiar way. That is, it sprints, then stops, then sprints again...using these speedy maneuvers to run down its prey. You see, the tiger beetle―like a real tiger―is a powerful predator. The mere thought of it giving chase gives me the willies. Tigers are terrifying at any size.", chk:0};
var JewelBeetle = {no:44, name:"Jewel Beetle", smonth:4, emonth:8, stime:0, etime:23, loc:"Tree Stumps", bells:2400, desc:"The Japanese name for the jewel beetle inspired their word for iridescence. Makes sense, I suppose... Since the beetles keep their color after death, it's said their bodies were worn as jewelry long ago. Do you suppose they left the legs and antennae on the bodies when they wore them? ...Blech.", chk:0};
var ViolinBeetle = {no:45, name:"Violin Beetle", smooth:5, emonth:6, smonth2:9, emonth2:11, stime:0, etime:23, loc:"Tree Stumps", bells:450, desc:"I've heard this bug got its name because its body resembles a violin... I'm not so sure though. All slick and black and shiny... If you were to ask me, it looks rather more like an awful locust...", chk:0};
var CitrusLongHornedBeetle = {no:46, name:"Citrus Long-Horned Beetle", smonth:1, emonth:12, stime:0, etime:23, loc:"Tree Stumps", bells:350, desc:"The citrus long-horned beetle is a putrid pest and a grave threat to trees. Hoo! It's true! Adults possess powerful jaws and use them to chomp through hardwood and plant fibers with ease. The little larvae are no better, boring bullet-like holes into innocent trees with gusto—citrus trees especially. Voracious and vile, indeed! ", chk:0};
var RosaliaBatesiBeetle = {no:47, name:"Rosalia Batesi Beetle", smonth:5, emonth:9, stime:0, etime:23, loc:"Tree Stumps", bells:3000, desc:"Insert Blathers Quote", chk:0};
var BlueWeevilBeetle = {no:48, name:"Blue Weevil Beetle", smonth:7, emonth:8, stime:0, etime:23, loc:"Tree Trunks", bells:"unknown", desc:"Insert Blathers Quote", chk:0};
var DungBeetle = {no:49, name:"Dung Beetle", smonth:12, emonth:2, stime:17, etime:8, loc:"Snowballs", bells:800, desc:"Dung beetles are famous for the exact thing you'd assume they're famous for. In fact, they use their namesake both as a source of food and a place to lay their eggs. Dung beetles are very strong and can roll things 10 times the weight of their bodies. One species can even pull objects 1,141 times its weight, which is like a human pulling 6 packed buses!", chk:0};
var EarthBoringDungBeetle = {no:50, name:"Earth-Boring Dung Beetle", smonth:7, emonth:9, stime:0, etime:23, loc:"Ground", bells:300, desc:"Insert Blathers Quote", chk:0};
var ScarabBeetle = {no:51, name:"Scarab Beetle", smonth:7, emonth:8, stime:23, etime:8, loc:"Tree Trunks", bells:6000, desc:"Scarab beetles have elegant, metallic-looking bodies and are shinier even than fruit beetles. They're so shiny that they're said to gleam like gold. They're very rare and can be sold for high prices. Like all beetles in the scarab family, the outer shell provides a very thick layer of protection from predators. The high value and golden shell do make them more vulnerable when it comes to Bell hunters, though.", chk:0};
var DroneBeetle = {no:52, name:"Drone Beetle", smonth:6, emonth:8, stime:0, etime:23, loc:"Tree Trunks", bells:80, desc:"They're called beetles, wot? The lugs of the insect world. Insects with armor plating on their backs, you know. Their armor, it...opens up, revealing wings, which they use to fly. It's really quite unnatural. Then, there's that thin membrane-like covering where their heads connect to their bodies. Most foul!", chk:0};
var GoliathBeetle = {no:53, name:"Goliath Beetle", smonth:6, emonth:9, stime:17, etime:8, loc:"Palm Tree Trunks", bells:6000, desc:"Goliath beetles are a variety of fruit beetle with a very long scientific name. As stands to reason, given their name, these beetles are incredibly strong. Beyond that morsel of knowledge, I know little, because they utterly REPULSE me...", chk:0};
var SawStag = {no:54, name:"Saw Stag", smonth:7, emonth:8, stime:0, etime:23, loc:"Tree Trunks", bells:2000, desc:"The saw stag beetle's most distinguishing feature is its large, curved jaw, wot? The larger the specimen, the more teeth in its jaw. Among collectors, the teeth settle a specimen's worth. I don't suppose bugs have dentists... Hoo, I'm quite sure that would be the worst job of all time.", chk:0};
var MiyamaStag = {no:55, name:"Miyama Stag", smonth:7, emonth:8, stime:0, etime:23, loc:"Tree Trunks", bells:1000, desc:"Miyama stags look strong, with their thick, bumpy exoskeletons and yellow hair covering their bodies. They're active during the day but really don't prefer the heat during the summer. Contrary to their appearance, they are rather delicate insects, so be sure to handle with care.", chk:0};
var GiantStag = {no:56, name:"Giant Stag", smonth:7, emonth:8, stime:23, etime:8, loc:"Tree Trunks", bells:10000, desc:"The giant beetle boasts a massive horn, and yet it's said this bug is actually something of a milquetoast. Apparently this bug would prefer to stay inside where other creatures won't bother it. How precious. Even I could handle being near such a shy insect! I shan't be tosisterlyng it, though...", chk:0};
var RainbowStag = {no:57, name:"Rainbow Stag", smonth:6, emonth:9, stime:17, etime:8, loc:"Tree Trunks", bells:10000, desc:"Rainbow stags are called the most beautiful of stag beetles because of their metallic-rainbow color.  Not only are their wings a pretty rainbow color, but their bellies are as well.  They are quite laid back, but they can be seen every now and then fighting to protect their territories.", chk:0};
var CyclommatusStag = {no:58, name:"Cyclommatus Stag", smonth:7, emonth:8, stime:17, etime:8, loc:"Palm Tree Trunks", bells:8000, desc:"Cyclommatus stags are identified by their long pairs of mandibles, which can be as long as their bodies. Their large mandibles are actually already formed when they're in the pupal stage of life. Although these beetles are mostly easygoing, those living in mountains really can't stand the heat.", chk:0};
var GoldenStag = {no:59, name:"Golden Stag", smonth:7, emonth:8, stime:17, etime:8, loc:"Palm Tree Trunks", bells:12000, desc:"Cyclommatus stags are identified by their long pairs of mandibles, which can be as long as their bodies. Their large mandibles are actually already formed when they're in the pupal stage of life. Although these beetles are mostly easygoing, those living in mountains really can't stand the heat.", chk:0};
var GiraffeStag = {no:60, name:"Giraffe Stag", smonth:7, emonth:8, stime:17, etime:8, loc:"Palm Tree Trunks", bells:"unknown", desc:"Insert Blathers Quote", chk:0};
var HornedDynastid = {no:61, name:"Horned Dynastid", smonth:7, emonth:8, stime:17, etime:8, loc:"Tree Trunks", bells:1350, desc:"Horned dynastids are part of the scarab family. Their horns are actually part of their exoskeleton. Horned dynastids don't have a nose or ears, but they can sense smells with their antennae. They are also able to feel the minor vibrations of sounds traveling in the air using thin hair on their bodies. They are fairly loud when flying, plus they emit a rather sour odor, so they are hard not to notice.", chk:0};
var HornedAtlas = {no:62, name:"Horned Atlas", smonth:7, emonth:8, stime:17, etime:8, loc:"Palm Tree Trunks", bells:8000, desc:"Crowned with three horns, the atlas beetle is known as the strongest of the dynastid beetles. Blech, I wonder if it had three horns when it was in its larval form... I simply loathe larvae. All squishy and squirmy... Nightmarish, really.", chk:0};
var HornedElephant = {no:63, name:"Horned Elephant", smonth:7, emonth:8, stime:17, etime:8, loc:"Palm Tree Trunks", bells:8000, desc:"True to its namesake, the elephant beetle is among the heaviest of all the dynastid beetles. As you might imagine, with parents that big, the babies are also accordingly huge. About the size of your fist! Such foulness! Just think of those monstrous larvae! The horror of it all!", chk:0};
var HornedHercules = {no:64, name:"Horned Hercules", smonth:7, emonth:8, stime:17, etime:8, loc:"Palm Tree Trunks", bells:12000, desc:"Hoo now... The largest dynastid beetle around! I must say, those horns are simply magnificent! Dynastid beetles move fairly slowly, so you're free to view them at your own pace, eh wot? I must heartily endorse any insect that has the decency to move slowly and predictably. Well done!", chk:0};
var WalkingStick = {no:65, name:"Walking Stick", smonth:7, emonth:11, stime:4, etime:8, stime2:17, etime2:20, loc:"Shaken Trees", bells:600, desc:"Walkingsticks can skillfully disguise themselves as twigs or thin branches. What deceptive wretches! Just imagine going to grab what you thought was a twig and having it go SQUISH in your hand... Such epic foulness! Just thinking about that dark day gives me owl bumps!", chk:0};
var WalkingLeaf = {no:66, name:"Walking Leaf", smonth:7, emonth:9, stime:0, etime:23, loc:"Ground", bells:600, desc:"As you can see, walking leafs are extremely proficient at mimicking the appearance of leaves. What torments me is this: they also EAT leaves... Do they look at one another and think, \"mmmmmmmm\"?", chk:0}
var Bagworm = {no:67, name:"Bagworm", smonth:1, emonth:12, stime:0, etime:23, loc:"Shaken Trees", bells:600, desc:"The bagworm is, in fact, not a worm at all, but a caterpillar instead. The filthy fraud uses silk and leaves to spin a cozy bag for it to hide inside - hence the name. Some find it cute the way bagworms dangle from trees. But the truth is they're gluttonous monsters. These beasts love to stuff their bug-gullets full of leaves, devouring the very trees they hang upon. (Wretched villains is what they are.)", chk:0};
var Ant = {no:68, name:"Ant", smonth:1, emonth:12, stime:0, etime:23, loc:"Rotten Food", bells:80, desc:"Most people seem to regard ants as peaceful creatures, but the truth is that they're quite savage insects, wot? Indeed, when I was but a fledgling, I once sat on an ant nest by accident. The wretched things set upon me within moments. My poor tail feathers took forever to grow back.", chk:0};
var HermitCrab = {no:69, name:"Hermit Crab", smonth:1, emonth:12, stime:19, etime:8, loc:"Beach", bells:1000, desc:"The hermit crab is not an insect... Though it most certainly resembles one. Blech! It looks much like a spider- what with its creepy eyes and crawly legs- but is, in fact, a crustacean. As such, the hermit crab has 10 legs and also wears a shell. But it doesn't grow this shell itself. It slips its soft body into shells left behind by snails, you see, and moves into ever-larger ones as it grows. (Talk about a strange way to make a home.)", chk:0};
var WharfRoach = {no:70, name:"Wharf Roach", smonth:1, emonth:12, stime:0, etime:23, loc:"Beach (Rocks)", bells:200, desc:"The wharf roach is an omnivore, which is merely a polite way of saying it will eat almost anything. This skittering scavenger and its uncouth appetite help keep beaches clean, it's said. But I dare say, their long antenna and bulging eyes turn MY stomach. Unappetizing indeed... ", chk:0};
var Fly = {no:71, name:"Fly", smonth:1, emonth:12, stime:0, etime:23, loc:"Trash", bells:80, desc:"The foul fly is quite the disquieting creature. I tell you, it tastes its food with its feet! Yeep! In fact, when flies rub their legs together, they do so to get rid of debris blocking their taste receptors. And did you know, their hairy toes release a sticky goo so they can walk on any surface? Even your ceiling! This gross goo gets on your food too!", chk:0};
var Mosquito = {no:72, name:"Mosquito", smonth:6, emonth:9, stime:17, etime:4, loc:"Flying", bells:130, desc:"Mosquitoes can easily be found flying around on warm summer nights looking for targets. Only the females feed on blood, and when they do so, they also inject saliva. The saliva is actually what causes the annoying itchy feeling, rather than the bite itself. Mosquitoes detect body heat, sweat, and carbon dioxide, so they are drawn to exercising humans.", chk:0};
var Flea = {no:73, name:"Flea", smonth:4, emonth:11, stime:0, etime:23, loc:"Villagers", bells:70, desc:"Fleas are tiny insects that feed on blood from humans and animals, which then results in an itchy rash. They use their piercing mouths to suck blood while injecting saliva into their host at the same time. Unlike mosquitoes, both males and females suck blood. The females are larger than the males.", chk:0};
var Snail = {no:74, name:"Snail", smonth:1, emonth:12, stime:0, etime:23, loc:"Rocks (Rain)", bells:250, desc:"Snails are not insects, I'll admit. But they're just as revolting to me. Snails are mollusks, you see, and are born wearing shells they cannot remove. Instead, their shells get bigger and bigger as they grow. Hoo! They must get heavy, don't you know! I suppose that's why they need a trail of mucus to move about. A truly foul form of transportation.", chk:0};
var PillBug = {no:75, name:"Pill Bug", smonth:9, emonth:6, stime:23, etime:16, loc:"Under Rocks", bells:250, desc:"Blech, the pill bug! Children delight at the way these beasts roll into balls when poked... But the appeal is utterly lost on me. One look at their leggy undersides... Hoo! Ewww! How they wriggle! Young pill bugs shed their exoskeletons as they grow, and in doing so, sprout another pair of legs. As if 12 appendages weren't alarming enough! Yuck, I say. Yuck!", chk:0};
var Centipede = {no:76, name:"Centipede", smonth:9, emonth:6, stime:23, etime:16, loc:"Under Rocks", bells:300, desc:"The centipede's name means '100 legs.' But I tell you now, that's a lie! These ugly bugs can have as few as 15 pair of legs...or as many as 171. But because of how their bodies are segmented, they never have exactly 100! Hoo! It's true! You know what else is true? Centipedes are carnivorous, aggressive, and venomous! And their bite is quite painful too! HOO-rrible things I say.", chk:0};
var Spider = {no:77, name:"Spider", smonth:1, emonth:12, stime:19, etime:8, loc:"Shaken Trees", bells:480, desc:"The spider is renowned for having eight eyes and eight legs... WHICH IS SIX TOO MANY, I SAY! Oh dear. I do apologize. Now where was I? Most spiders are carnivorous. In fact, some will eat creatures several times larger than themselves. To catch their prey, many of these ruthless predators spin sticky webs of surprising strength. Worse yet, they've also been known to ambush their victims, and some even chase down their meals! All this talk about the feeding habits of spiders... I'm feeling quite queasy. Hoot! The horror!", chk:0};
var Tarantula = {no:78, name:"Tarantula", smonth:11, emonth:4, stime:19, etime:4, loc:"Ground", bells:8000, desc:"As giant spiders go, the tarantula is said to be quite docile. But have you ever seen such foul fuzziness?! It is a fact, tarantulas have barbed belly hair! I say again... BARBED. BELLY. HAIR! These awful arachnids let loose their spiky, itchy hairs to protect themselves from predators. But seeing how tarantulas also prey on frogs, mice, and even birds, one must ask... Who needs protecting from whom?! Hoo! Who indeed!", chk:0};
var Scorpion = {no:79, name:"Scorpion", smonth:5, emonth:10, stime:19, etime:4, loc:"Ground", bells:8000, desc:"...Scorpions are assuredly attention getters. They've got those colors that say, \"Stay back! I'm poisonous!\" However, it seems only a tiny group of scorpions have venom lethal enough to off you with one sting. Mischievous scorpions that look like highly poisonous ones probably fooled folks into thinking otherwise.", chk:0};


var fishList = [
    Bitterling, PaleChub, CrucianCarp, Dace, Carp, Koi, Goldfish, PopEyedGoldfish, RanchuGoldfish, Killifish, 
    Crawfish, SoftTurt, SnapTurt, Tadpole, Frog, FreshGoby, Loach, Catfish, GiantSnake, Bluegill,
    YellowPerch, BlackBass,Tilapia,Pike,PondSmelt, Sweetfish, CherrySalmon,Char, GoldenTrout, Stringfish,
    Salmon, KingSalmon, MittenCrab, Guppy, NibbleFish, Angelfish, Betta, NeonTetra, Rainbowfish, Piranha,
    Arowana, Dorado, Gar, Arapaima, SaddledB, Sturgeon, SeaButterfly, SeaHorse, ClownFish, Surgeonfish,
    ButterflyFish, Napoleonfish, ZebraTurkey, Blowfish, PufferFish, Anchovy, HorseMack, BarredKnife, SeaBass, RedSnap,
    Dab, OliveFlounder, Squid, MorayEel, RibbonEel, Tuna, BlueMarlin, GiantTrevally, Mahi, Sunfish,
    Ray, SawShark, HammerShark, GWhiteShark, WhaleShark, Suckerfish, FootballFish, Oarfish, Barreleye, Coelacanth
];

var bugList = [
    CommonButterfly, YellowButterfly, TigerButterfly, PeacockButterfly, CommonBluebottle, PaperKiteButterfly, GreatPurpleEmperor, MonarchButterfly, EmperorButterfly, AgriasButterfly,
    RajaBrooke, QueenAlexandria, Moth, AtlasMoth, MadagascanSunsetMoth, LongLocust, MigratoryLocust, RiceGrasshopper, Grasshopper, Cricket,
    BellCricket, Mantis, OrchidMantis, Honeybee, Wasp, BrownCicada, RobustCicada, GiantCicada, WalkerCicada, EveningCicada, 
    CicadaShell, RedDragonfly, DarnerDragonfly, BandedDragonfly, Damselfly, Firefly, MoleCricket, Pondskater, DivingBeetle, GiantWaterBug,
    Stinkbug, ManFacedStinkBug, Ladybug, TigerBeetle, JewelBeetle, ViolinBeetle, CitrusLongHornedBeetle, RosaliaBatesiBeetle, BlueWeevilBeetle, DungBeetle, 
    EarthBoringDungBeetle, ScarabBeetle, DroneBeetle, GoliathBeetle, SawStag, MiyamaStag, GiantStag, RainbowStag, CyclommatusStag, GoldenStag,
    GiraffeStag, HornedDynastid, HornedAtlas, HornedElephant, HornedHercules, WalkingStick, WalkingLeaf, Bagworm, Ant, HermitCrab, 
    WharfRoach, Fly, Mosquito, Flea, Snail, PillBug, Centipede, Spider, Tarantula, Scorpion
];

function createlocalcache()
{
    if(localStorage.getItem("Bitterlingchk") == null)
    {
        fishList.forEach(function(fish){
            localStorage.setItem(fish.name + "chk", fish.chk);
        }) 
    }
    if(localStorage.getItem("Common Butterflychk") == null)
    {
        bugList.forEach(function(bug){
            localStorage.setItem(bug.name + "chk", bug.chk);
        }) 
    }
    if(localStorage.getItem("list") == null)
    {
        localStorage.setItem("northern", true);
        localStorage.setItem("list", list);
    }

}


function ShowAvail()
{
    document.body.style.backgroundColor = "#fef5df";
    if(list == "fish")
        fishList.forEach(CheckAvail)
    else
        bugList.forEach(CheckAvail)
}

function CheckAvail(item)
{
    document.getElementById(item.no).style.backgroundColor = "darkred";
    if(item.smonth > item.emonth)
    {
        if((month <= item.emonth || month >= item.smonth))
        {
            document.getElementById(item.no).style.backgroundColor = "orange";
            if(item.stime > item.etime)
            {
                if((time <= item.etime || time >= item.stime))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime && time >= item.stime))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            if(item.stime2 > item.etime2)
            {
                if((time <= item.etime2 || time >= item.stime2))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime2 && time >= item.stime2))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
        }
    }
    else
    {
        if((month <= item.emonth && month >= item.smonth))
        {
            document.getElementById(item.no).style.backgroundColor = "orange";
            if(item.stime > item.etime)
            {
                if((time <= item.etime || time >= item.stime))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime && time >= item.stime))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            if(item.stime2 > item.etime2)
            {
                if((time <= item.etime2 || time >= item.stime2))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime2 && time >= item.stime2))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
        }
    }
    if(item.smonth2 > item.emonth2)
    {
        if((month <= item.emonth2 || month >= item.smonth2))
        {
            document.getElementById(item.no).style.backgroundColor = "orange";
            if(item.stime > item.etime)
            {
                if((time <= item.etime || time >= item.stime))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime && time >= item.stime))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            if(item.stime2 > item.etime2)
            {
                if((time <= item.etime2 || time >= item.stime2))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime2 && time >= item.stime2))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
        }
    }
    else
    {
        if((month <= item.emonth2 && month >= item.smonth2))
        {
            document.getElementById(item.no).style.backgroundColor = "orange";
            if(item.stime > item.etime)
            {
                if((time <= item.etime || time >= item.stime))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime && time >= item.stime))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            if(item.stime2 > item.etime2)
            {
                if((time <= item.etime2 || time >= item.stime2))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
            else
            {
                if((time <= item.etime2 && time >= item.stime2))
                {
                    document.getElementById(item.no).style.backgroundColor = "green";
                }
            }
        }
    }  
    var critterimage = "img/newhorizons/" + list + "/" + item.name + ".png";
    if(list == "fish")
    []
    document.getElementById(item.no + " image").src = critterimage;

    if(screen.width < 800 || window.innerWidth < 800)
    {
        document.getElementById(item.no + " image").height = 48;
        document.getElementById(item.no + " image").width = 48;
    }
    else
    {
        document.getElementById(item.no + " image").height = 96;
        document.getElementById(item.no + " image").width = 96;
    }
    item.chk = localStorage.getItem(item.name + "chk");
    if(item.chk == 0)
    {
        document.getElementById("chk" + item.no).src = "img/uncheck.png";
        if(screen.width < 800 || window.innerWidth < 800)
        {
        document.getElementById("chk" + item.no).height =24;
        document.getElementById("chk" + item.no).width = 24;
        }
    }
    else
    {
        if(list == "fish")
            document.getElementById("chk" + item.no).src = "img/check.png";
        else
            document.getElementById("chk" + item.no).src = "img/checkb.png";
        if(screen.width < 800 || window.innerWidth < 800)
        {
        document.getElementById("chk" + item.no).height = 24;
        document.getElementById("chk" + item.no).width = 24;
        }
    }
}

function SwapCritter()
{
    var critterswap = document.getElementById('critterswitch');
    if(list == "bug")
    {
        list = "fish";
        critterswap.src = "img/fish.png";
        ShowAvail();
    }
    else
    {
        list = "bug";
        critterswap.src = "img/bug.png";
        ShowAvail();
    }
    localStorage.setItem("list", list);
}
function SwapHemi()
{
    var hemi = document.getElementById('hemi');
    if(northern)
    {
        northern = false;
        localStorage.setItem("northern", false);
        hemi.src = "img/SouthernHemisphere.png";
        fishList.forEach(function(item)
        {
            item.smonth += 6;
            if(item.smonth > 12)
            {item.smonth-=12;}

            item.emonth += 6;
            if(item.emonth > 12)
            {item.emonth-=12;}

            if(item.smonth2 == null)
            {}
            else
            {
            item.smonth2 += 6;
            if(item.smonth2 > 12)
            {item.smonth2 -=12;}
            item.emonth2 += 6;
            if(item.emonth2 > 12)
            {item.emonth2-=12;}
            }
        });
        bugList.forEach(function(item)
        {
            item.smonth += 6;
            if(item.smonth > 12)
            {item.smonth-=12;}

            item.emonth += 6;
            if(item.emonth > 12)
            {item.emonth-=12;}

            if(item.smonth2 == null)
            {}
            else
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
        localStorage.setItem("northern", true);
        hemi.src = "img/NorthernHemisphere.png";
        fishList.forEach(function(item)
        {
            item.smonth -= 6;
            if(item.smonth < 0)
            {item.smonth+=12;}

            item.emonth -= 6;
            if(item.emonth < 0)
            {item.emonth+=12;}

            if(item.smonth2 == null)
            {}
            else{
            item.smonth2 -= 6;
            if(item.smonth2 < 0)
            {item.smonth2 +=12;}

            item.emonth2 -= 6;
            if(item.emonth2 < 0)
            {item.emonth2+=12;}
            }
        });
        bugList.forEach(function(item)
        {
            item.smonth -= 6;
            if(item.smonth < 0)
            {item.smonth+=12;}

            item.emonth -= 6;
            if(item.emonth < 0)
            {item.emonth+=12;}

            if(item.smonth2 == null)
            {}
            else{
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

function Show(critter)
{
    if(list == "fish")
    {
        critter = fishList[critter];
    }
    else
    {
        critter = bugList[critter];
    }
    var fishimage = "img/newhorizons/" + list + "/" + critter.name + ".png";
    document.getElementById("Info-Image").src = fishimage;
    document.getElementById("Info-Name").innerText = critter.name;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var start = months[critter.smonth - 1];
    var end = months[critter.emonth - 1];
    if(end == undefined)
    {
        end = "December";
    }
    var timespan = start + "-" + end;
    var stime1;
    var stime0;
    var etime1;
    var etime0;
    var seriess;
    var seriess2;
    var seriese;
    var seriese2;
    if(critter.stime > 12)
    {
        seriess = "PM";
        stime1 = critter.stime - 12;
    }
    else
    {
        seriess = "AM";
        if(critter.stime == 0)
            stime1 = 12;
        else
            stime1 = critter.stime;
    }
    if(critter.etime > 12)
    {
        seriese = "PM";
        etime1 = critter.etime - 12;
    }
    else
    {
        seriese = "AM";
        etime1 = critter.etime;
    }
    var timeavail = stime1 + seriess + "-" + etime1 + seriese;
    if(critter.stime2 == null)
    {}
    else
    {
        if(critter.stime2 > 12)
        {
            seriess2 = "PM";
            stime0 = critter.stime2 - 12;
        }
        else
        {
            seriess2 = "AM";
            stime0 = critter.stime2;
        }
        if(critter.etime2 > 12)
        {
            seriese2 = "PM";
            etime0 = critter.etime2 - 12;
        }
        else
        {
            seriese2 = "AM";
            etime0 = critter.etime2;
        }
        var timeavail = stime1 + seriess + "-" + etime1 + seriese + ", " + stime0 + seriess2 + "-" + etime0 + seriese2;
    }

    if(critter.smonth2 == null)
    {}
    else
    {
        var start2 = months[critter.smonth2 - 1];
        var end2 = months[critter.emonth2 - 1];
        var timespan2 = start2 + "-" + end2;
    }
    var shadows = ["X-small", "Small", "Medium", "Large", "X-large", "XX-Large", "Fin", "Thin"]

    document.getElementById("Info-locshad").innerText = "Location: " + critter.loc + "\nValue: " + critter.bells + " bells";
    if(screen.width < 800 || window.innerWidth < 800 || list =="bug")
    {
        document.getElementById("shadowimg").src = "img/shadows/NoShadow.png";
    }
    else
    {
        document.getElementById("shadowimg").src = "img/shadows/Shadow" + critter.size + ".png";
        document.getElementById("shadowimg").height = 64;
        document.getElementById("shadowimg").width = 64;
    }
    if(list == "fish")
    {
        if(critter.smonth2 == null)
            {document.getElementById("Info-Shadow").innerText = "Shadow: " + shadows[critter.size] + "\nAvailable: " + timespan + "\n" + timeavail;}
        else
            {document.getElementById("Info-Shadow").innerText = "Shadow: " + shadows[critter.size] + "\nAvailable: " + timespan + ", " + timespan2 + "\n" + timeavail;}
    }
    else
    {
        if(critter.smonth2 == null)
            document.getElementById("Info-Shadow").innerText = "Available: " + timespan + "\n" + timeavail;
        else
            document.getElementById("Info-Shadow").innerText = "Available: " + timespan + ", " + timespan2 + "\n" + timeavail;
    }

    document.getElementById("desc").innerText = critter.desc;
    document.getElementById("blathers").src = "img/Blathers.png";
    document.getElementById("DYK").innerText = "Did you know?";

}

function check(critter)
{
    if(list == "fish")
    {
        critter = fishList[critter];
    }
    else
    {
        critter = bugList[critter];
    }
    if(critter.chk == 1)
    {
        critter.chk = 0;
        document.getElementById("chk" + critter.no).src = "img/uncheck.png";
        if(screen.width < 800 || window.innerWidth < 800)
        {
        document.getElementById("chk" + critter.no).height = 24;
        document.getElementById("chk" + critter.no).width = 24;
        }
    }
    else
    {
        critter.chk = 1;
        if(list == "fish")
            document.getElementById("chk" + critter.no).src = "img/check.png";
        else
        document.getElementById("chk" + critter.no).src = "img/checkb.png";
        if(screen.width < 800 || window.innerWidth < 800)
        {
        document.getElementById("chk" + critter.no).height = 24;
        document.getElementById("chk" + critter.no).width = 24;
        }
    }
    localStorage.setItem(critter.name + "chk", critter.chk);
}

function setuppage()
{
    northern = localStorage.getItem("northern");
    var hemi = document.getElementById('hemi');
    if(!northern)
        SwapHemi();
    list = localStorage.getItem("list");
    var critterswap = document.getElementById('critterswitch');
    if(list == "fish")
        critterswap.src = "img/fish.png";
    else
        critterswap.src = "img/bug.png";

}