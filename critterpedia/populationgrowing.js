var today = new Date();
var month = today.getMonth()+1;
var time = today.getHours();
var northern = false;
var list = "fish";

var CrucianCarp = {no:0, name:"Crucian Carp", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:1, bells:120, desc:"Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot! We will take excellent care of this fellow, oh yes. You can rest assured. Excellent care, indeed.", chk:0};
var BrookTrout = {no:1, name:"Brook Trout", smonth:1, emonth:12, stime:0, etime:23, loc:"River Pool", size:2, bells:300, desc:"Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot! We will take excellent care of this fellow, oh yes. You can rest assured. Excellent care, indeed.", chk:0};
var Carp = {no:2, name:"Carp", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:3, bells:300, desc:"Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot!", chk:0};
var Koi = {no:3, name:"Koi", smonth:1, emonth:12, stime:16, etime:9, loc:"River", size:3, bells:2000, desc:"Some fish bring a higher price at the market than koi, but koi are special in some indescribable way... For whatever the reason, catching a koi feels like... like catching a living fortune, somehow. Interesting, that. Well, aren't I incoherent! All rambling aside, rest easy knowing we will give this noble fish the utmost care.", chk:0};
var BarbelSteed = {no:4, name:"Barbel Steed", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:2, bells:200, desc:"Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot! We will take excellent care of this fellow, oh yes. You can rest assured. Excellent care, indeed.", chk:0};
var Dace = {no:5, name:"Dace", smonth:1, emonth:12, stime:16, etime:9, loc:"River", size:2, bells:200, desc:"This is one of those fish that seem to mysteriously disappear from time to time. Drives fishermen batty, wot! Have no fear, dear friend! You're leaving this beauty in very good wings, hmmm? Hoo! Owl humor. Hoo hoo!", chk:0};
var Catfish = {no:6, name:"Catfish", smonth:5, emonth:10, stime:16, etime:9, loc:"River", size:3, bells:200, desc:"Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot!", chk:0};
var GiantCatfish = {no:7, name:"Giant Catfish", smonth:6, emonth:9, stime:16, etime:9, loc:"River Pool", size:4, bells:3000, desc:"Hoo my! What a large fish! If I remember correctly, these beasties can only be caught in ponds, wot wot! Catfish whiskers don't actually sting, you know. The 'sting' comes from stiff pectoral barbs located below the gills. Simply ecstatic to have this fine fellow. We'll take good care of him. Hoo! I promise you that!", chk:0};
var PaleChub = {no:8, name:"Pale Chub", smonth:1, emonth:12, stime:9, etime:16, loc:"River", size:1, bells:200, desc:"Oh? Is that a fact? It's sometimes called a mountain trout? But it's not a trout! What rot! Well, regardless, I'll see that it gets the proper care. You have my word on it!", chk:0};
var Bitterling = {no:9, name:"Bitterling", smonth:12, emonth:2, stime:0, etime:23, loc:"River", size:0, bells:1300, desc:"Hoo! Indeed, WOO hoo! A bitterling, I believe. Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot! We will take excellent care of this fellow, oh yes. You can rest assured. Excellent care, indeed.", chk:0};
var Loach = {no:10, name:"Loach", smonth:3, emonth:5, stime:0, etime:23, loc:"River", size:0, bells:300, desc:"Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot!", chk:0};
var Bluegill = {no:11, name:"Bluegill", smonth:1, emonth:12, stime:9, etime:16, loc:"River", size:1, bells:120, desc:"Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot! We will take excellent care of this fellow, oh yes. You can rest assured. Excellent care, indeed.", chk:0};
var SmallBass = {no:12, name:"Small Bass", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:1, bells:200, desc:"Hoo! Indeed, WOO hoo! A small bass, I believe. Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot! We will take excellent care of this fellow, oh yes. You can rest assured. Excellent care, indeed.", chk:0};
var Bass = {no:13, name:"Bass", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:2, bells:300, desc:"This is one of those fish that seem to mysteriously disappear from time to time. Drives fishermen batty, wot! Have no fear, dear friend! You're leaving this beauty in very good wings, hmmm? Hoo! Owl humor. Hoo hoo!", chk:0};
var LargeBass = {no:14, name:"Large Bass", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:3, bells:3000, desc:"Scrum-diddly-umptious! Now THAT'S what I call a good meal, er...a good fish! Good catch, kiddo! Great! Ooh, I can hardly wait! Let's measure this beauty. Let's see... 23 inches.", chk:0};
var GiantSnakehead = {no:15, name:"Giant Snakehead", smonth:6, emonth:8, stime:9, etime:16, loc:"River Pool", size:4, bells:6500, desc:"What a stupendous beast! It must have taken great effort to land this fearsome creature, eh wot? I've heard that giant snakehead carry parasites. Be sure to thoroughly cook them before eating. Blech! Parasites! Of course, we'll accept this one. Have no worries, we'll take special of it.", chk:0};
var Eel = {no:16, name:"Eel", smonth:6, emonth:9, stime:16, etime:9, loc:"River", size:2, bells:2000, desc:"This is one of those fish that seem to mysteriously disappear from time to time. Drives fishermen batty, wot!", chk:0};
var FreshwaterGoby = {no:17, name:"Freshwater Goby", smonth:1, emonth:12, stime:16, etime:9, loc:"River", size:1, bells:300, desc:"This is one of those fish that seem to mysteriously disappear from time to time. Drives fishermen batty, wot! Have no fear, dear friend! You're leaving this beauty in very good wings, hmmm? Hoo! Owl humor. Hoo hoo!", chk:0};
var PondSmelt = {no:18, name:"Pond Smelt", smonth:12, emonth:2, stime:0, etime:23, loc:"River", size:1, bells:300, desc:"Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot!", chk:0};
var Sweetfish = {no:19, name:"Sweetfish", smonth:7, emonth:9, stime:0, etime:23, loc:"River", size:1, bells:1300, desc:"Sweetfish appear when the days grow long, you know. Some say summer can't begin until the first one is caught. Of course, the poor dear is then eaten! Hardly a fit welcome for summer's herald! I, myself, do not eat fish. This one will be quite safe with us here. Quite safe, indeed! Hoo, I say!", chk:0};
var CherrySalmon = {no:20, name:"Cherry Salmon", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:4, etime:21, loc:"River", size:1, bells:1300, desc:"This is one of those fish that seem to mysteriously disappear from time to time. Drives fishermen batty, wot!", chk:0};
var RainbowTrout = {no:21, name:"Rainbow Trout", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:4, etime:21, loc:"River", size:3, bells:650, desc:"This is one of those fish that seem to mysteriously disappear from time to time. Drives fishermen batty, wot!", chk:0};
var LargeChar = {no:22, name:"Large Char", smonth:3, emonth:6, smonth2:9, emonth2:11, stime:4, etime:21, loc:"Waterfall", size:3, bells:10000, desc:"Oh! What a large and CHAR-ming fish. That was dismal, wasn't it? Mum warned me to avoid comedy. Regardless of my shabby comedic failings, this fish will have a safe and comfortable home here.", chk:0};
var Stringfish = {no:23, name:"Stringfish", smonth:12, emonth:2, stime:16, etime:9, loc:"River", size:5, bells:15000, desc:"Hoo! Indeed, WOO hoo! This is an extremely rare fish, I'll have you know! I'm absolutely agog! If I may hazard a guess, this must have been the most difficult fish to catch yet! I almost can't believe it! To think, you're donating such a rare find to us... Allow me to commend you on your matchless generosity. We've been saving a place just for this day, wot wot! Have faith, this fish will be thoroughly treasured!", chk:0};
var Salmon = {no:24, name:"Salmon", smonth:9, emonth:9, stime:0, etime:23, loc:"River/Ocean", size:3, bells:650, desc:"Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot!", chk:0};
var Goldfish = {no:25, name:"Goldfish", smonth:1, emonth:12, stime:0, etime:23, loc:"River", size:0, bells:1300, desc:"Those adorable little fins! Those huge googly eyes! Even I am helpless in the face of their cuteness!", chk:0};
var PopeyedGoldfish = {no:26, name:"Popeyed Goldfish", smonth:1, emonth:12, stime:9, etime:16, loc:"River", size:0, bells:1300, desc:"Those adorable little fins! Those huge, googly eyes! Even I am helpless in the face of their cuteness! We will take special care of this precious fellow. Welcome to your new home, you darling little fishy!", chk:0};
var Guppy = {no:27, name:"Guppy", smonth:4, emonth:11, stime:9, etime:16, loc:"River", size:0, bells:1300, desc:"Hoo hoo! Hullo, little fishy! Aren't we a tiny little fellow! Adorable! Why, I believe it stuck its tongue out at me! Hoo-rumph! Nevertheless, we'll take care of the little blighter! I'll keep an eye on this mischief-maker myself!", chk:0};
var Angelfish = {no:28, name:"Angelfish", smonth:5, emonth:10, stime:16, etime:9, loc:"River", size:1, bells:3000, desc:"Gorgeous. Sim-ply gorgeous. Heavenly, even. We will treasure your gift. I give you my word as an honest, upstanding owl.", chk:0};
var Piranha = {no:29, name:"Piranha", smonth:6, emonth:9, stime:9, etime:16, loc:"River", size:1, bells:6500, desc:"Dear me! My mind boggles! I had no inkling that we had such frightfully dangerous fish in these waters! I suppose that would indicate they're not as lethal as they are made out to be... Or are they trying to lull us? Have no fear! We'll look after your sharp-toothed friend. For everyone's sake!", chk:0};
var Arowana = {no:30, name:"Piranha", smonth:6, emonth:9, stime:16, etime:9, loc:"River", size:2, bells:10000, desc:"Another rare fish! You, old bean, are an angler for the ages! The bards will sing your praises! Thanks to generous individuals such as yourself, player, the museum is growing by leaps and bounds. Your dragon fish has now found a home away from home. I promise, it will be very happy in its new digs!", chk:0};
var Arapaima = {no:31, name:"Arapaima", smonth:7, emonth:9, stime:16, etime:9, loc:"River", size:5, bells:10000, desc:"My word! I've never seen such a tremendous specimen! A fish such as this is found only once in a great while. A true rarity among rarities! Extraordinary! Top notch! This, we will treasure, I assure you. Cross my heart and hope to molt. Hoo!", chk:0};
var Crawfish = {no:32, name:"Crawfish", smonth:4, emonth:9, stime:0, etime:23, loc:"River", size:1, bells:250, desc:"This diminutive fellow is a relative of the lobster. Its pincers are small, but distressingly powerful, wot? Indeed, it delights in a little pinchy-pinchy, eh wot? We'll take pains to ensure our mutual safety.", chk:0};
var Frog = {no:33, name:"Frog", smonth:5, emonth:8, stime:0, etime:23, loc:"Pond", size:0, bells:120, desc:"Greeeeeee! Gree! Gree! That's my best Sonoran green toad impression, wot! We do keep frogs and toads here. Well, then, let's get our amphibious friend settled. All the damp comforts of a home. Guaranteed.", chk:0};
var Killifish = {no:34, name:"Killifish", smonth:4, emonth:8, stime:0, etime:23, loc:"Pond/River", size:0, bells:300, desc:"Hoo hoo! Hullo, little fishy! Aren't we a tiny little fellow! Adorable! Why, I believe it stuck its tongue out at me! Hoo-rumph! Nevertheless, we'll take care of the little blighter! I'll keep an eye on this mischief-maker myself!", chk:0};
var Jellyfish = {no:35, name:"Jellyfish", smonth:8, emonth:8, stime:0, etime:23, loc:"Ocean", size:1, bells:100, desc:"Jellyfish and other gelatinous creatures are some of the ocean's most beautiful animal life. Some of them do pack a painful sting, but you'll be fine if you observe them from a respectful distance. Now then, let's get this one squared away in its new home, eh wot?", chk:0};
var SeaBass = {no:36, name:"Sea Bass", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:3, bells:120, desc:"Even run-of-the-mill, common fish are valuable resources, you see. All part of the grand tapestry, wot! We will take excellent care of this fellow, oh yes. You can rest assured. Excellent care, indeed.", chk:0};
var RedSnapper = {no:37, name:"Red Snapper", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean", size:3, bells:3000, desc:"Snaptacular! Snaptastic! Sna...er, snap...That is...Oh bother! It wasn't particularly funny anyway. Please attempt to ignore my sorry lack of humor.", chk:0};
var BarredKnifejaw = {no:38, name:"Barred Knifejaw", smonth:3, emonth:11, stime:0, etime:23, loc:"Ocean", size:3, bells:5000, desc:"Hoo! Indeed, WOO hoo! A barred knifejaw, I believe. Hoo!  Hoo, I say!  Just look at this magnificent creature!  Truly, a king among edible aquatic beasts of the world! Tuna, scallops, oysters, lobsters, salmon, halibut, crabs, barnacles... Well, maybe not barnacles... One would have to be in dire straits indeed to consume a few of those jagged beasties! Now then, what say we set this chap up in his new home, eh wot?", chk:0};
var Coelacanth = {no:39, name:"Coelacanth", smonth:1, emonth:12, stime:0, etime:23, loc:"Ocean (Rain)", size:4, bells:15000, desc:"Hoo, my goodness! Glorious! Seen in this light, of course, it's quite a grotesque beast. And yet, it does have a certain peculiar allure, wot? You may rest assured that we shall treat it with much affection and respect, wot! My word as a gentleowl.",chk:0};


var CommonButterfly = {no:0, name:"Common Butterfly", smonth:3, emonth:10, stime:8, etime:17, loc:"Flying", bells:80, desc:"There's an old saying among some of my contemporaries: \"Butterflies are beautiful, yet moths are monstrous.\" Well, if you were to ask me, I'd say they were all the same! By which I mean disgusting! Truly hoo-rrific, wot wot!", chk:0};
var CloudedYellowButterfly = {no:1, name:"Clouded Yellow Butterfly", smonth:3, emonth:10, stime:8, etime:17, loc:"Flying", bells:80, desc:"There's an old saying among some of my contemporaries: \"Butterflies are beautiful, yet moths are monstrous.\" Well, if you were to ask me, I'd say they were all the same! By which I mean disgusting! Truly hoo-rrific, wot wot!", chk:0};
var TigerSwallowtailButterfly = {no:2, name:"Tiger Swallowtail Butterfly", smonth:4, emonth:9, stime:8, etime:17, loc:"Flying", bells:200, desc:"There's an old saying among some of my contemporaries: \"Butterflies are beautiful, yet moths are monstrous.\" Well, if you were to ask me, I'd say they were all the same! By which I mean disgusting! Truly hoo-rrific, wot wot!", chk:0};
var PurpleButterfly = {no:3, name:"Purple Butterfly", smonth:6, emonth:8, stime:8, etime:17, loc:"Flying", bells:2000, desc:"There's an old saying among some of my contemporaries: \"Butterflies are beautiful, yet moths are monstrous.\" Well, if you were to ask me, I'd say they were all the same! By which I mean disgusting! Truly hoo-rrific, wot wot!", chk:0};
var BrownCicada = {no:4, name:"Brown Cicada", smonth:7, emonth:8, stime:8, etime:17, loc:"Tree Trunks", bells:200, desc:"Cicadas. What can one say about these odd insects? They are certainly...noisy! Noisy enough, I should say! Their horrid caterwauling is awfully irritating, you know. About as musical as a train wreck, eh wot? I'm sure that the cicadas have quite valid reasons for such boisterous behavior, but I dare say there are limits. And they have those membranes on their abdomens, which vibrate to create those disturbing tones...Odius.", chk:0};
var RobustCicada = {no:5, name:"Robust Cicada", smonth:7, emonth:8, stime:8, etime:17, loc:"Tree Trunks", bells:300, desc:"Cicadas. What can one say about these odd insects? They are certainly...noisy! Noisy enough, I should say! Their horrid caterwauling is awfully irritating, you know. About as musical as a train wreck, eh wot? I'm sure that the cicadas have quite valid reasons for such boisterous behavior, but I dare say there are limits. And they have those membranes on their abdomens, which vibrate to create those disturbing tones...Odius.", chk:0};
var WalkerCicada = {no:6, name:"Walker Cicada", smonth:7, emonth:8, stime:8, etime:17, loc:"Tree Trunks", bells:400, desc:"Cicadas. What can one say about these odd insects? They are certainly...noisy! Noisy enough, I should say! Their horrid caterwauling is awfully irritating, you know. About as musical as a train wreck, eh wot? I'm sure that the cicadas have quite valid reasons for such boisterous behavior, but I dare say there are limits. And they have those membranes on their abdomens, which vibrate to create those disturbing tones...Odius.", chk:0};
var EveningCicada = {no:7, name:"Evening Cicada", smonth:7, emonth:8, stime:16, etime:19, loc:"Tree Trunks", bells:2500, desc:"Evening Cicada, commonly known as the higurashi cicada, is one insect that I may be able to abide. Its song is so mournful, so filled with sad longing...It's really quite beautiful. Even so, I have no desire to touch one! Mercy, no! How repulsive! I shudder at the very thought of it!", chk:0};
var RedDragonfly = {no:8, name:"Red Dragonfly", smonth:9, emonth:10, stime:9, etime:19, loc:"Flying", bells:80, desc:"Hey, have you ever peered closely into a dragonfly's eyes? Blech! Ghastly, really. Hoo, but I digress...", chk:0};
var CommonDragonfly = {no:9, name:"Common Dragonfly", smonth:5, emonth:7, stime:9, etime:17, loc:"Flying", bells:130, desc:"Hey, have you ever peered closely into a dragonfly's eyes? Blech! Ghastly, really. Hoo, but I digress...", chk:0};
var DarnerDragonfly = {no:10, name:"Darner Dragonfly", smonth:6, emonth:9, stime:9, etime:17, loc:"Flying", bells:200, desc:"Hey, have you ever peered closely into a dragonfly's eyes? Blech! Ghastly, really. Hoo, but I digress...", chk:0};
var BandedDragonfly = {no:11, name:"Banded Dragonfly", smonth:7, emonth:9, stime:9, etime:17, loc:"Flying", bells:4500, desc:"I've heard that Tom Nook pays quite a fair price for specimens such as this. Thank you for your generosity. But all that nonsense aside, this is a colossal dragonfly! Of course, that merely makes it colossally repulsive.", chk:0};
var Cricket = {no:12, name:"Cricket", smonth:9, emonth:11, stime:17, etime:8, loc:"Bushes", bells:130, desc:"I actually find their voices quite soothing. On an autumn evening, when their cries fill the air... Delightful! Their appearance however, is not in the least bit engaging, and actually borders on repugnant. As for myself, I find them no better than cockroaches. Blech! Vile. Vile indeed. Truly, dirtily vile, eh wot?", chk:0};
var Grasshopper = {no:13, name:"Grasshopper", smonth:7, emonth:9, stime:7, etime:20, loc:"Bushes", bells:160, desc:"I actually find their voices quite soothing. On an autumn evening, when their cries fill the air... Delightful! Their appearance however, is not in the least bit engaging, and actually borders on repugnant. As for myself, I find them no better than cockroaches. Blech! Vile. Vile indeed. Truly, dirtily vile, eh wot?", chk:0};
var PineCricket = {no:14, name:"Pine Cricket", smonth:9, emonth:10, stime:17, etime:8, loc:"Bushes", bells:100, desc:"I actually find their voices quite soothing. On an autumn evening, when their cries fill the air... Delightful! Their appearance however, is not in the least bit engaging, and actually borders on repugnant. As for myself, I find them no better than cockroaches. Blech! Vile. Vile indeed. Truly, dirtily vile, eh wot?", chk:0};
var BellCricket = {no:15, name:"Bell Cricket", smonth:9, emonth:10, stime:17, etime:8, loc:"Bushes", bells:430, desc:"I actually find their voices quite soothing. On an autumn evening, when their cries fill the air... Delightful! Their appearance however, is not in the least bit engaging, and actually borders on repugnant. As for myself, I find them no better than cockroaches. Blech! Vile. Vile indeed. Truly, dirtily vile, eh wot?", chk:0};
var Ladybug = {no:16, name:"Ladybug", smonth:3, emonth:6, smonth2:8, emonth2:10, stime:8, etime:17, loc:"Flowers", bells:200, desc:"Ladybugs are one insect I thought might appeal to me. Then I made the grievous error of touching one. This vile fluid appeared from someplace and... Oh, it was everywhere! Blech! Utterly appalling!", chk:0};
var SevenSpottedLadybug = {no:17, name:"Seven Spotted Ladybug", smonth:3, emonth:7, smonth2:10, emonth2:10, stime:8, etime:17, loc:"Flowers", bells:200, desc:"Ladybugs are one insect I thought might appeal to me. Then I made the grievous error of touching one. This vile fluid appeared from someplace and... Oh, it was everywhere! Blech! Utterly appalling!", chk:0};
var Mantis = {no:18, name:"Mantis", smonth:8, emonth:10, stime:8, etime:17, loc:"Flowers", bells:430, desc:"Ah yes, the infamous mantis... Tell me, does it seem to you that it's almost TOO aware of us? Like it's studying us...It's rather as if it were questioning our reason for existence, eh wot? Its eyes... They're far too judgemental. Additionally, the manner in which it uses its scythe-like forelegs to kill and feed... So very vivid! So graphic! 'Blech! Grisly little beast!", chk:0};
var LongLocust = {no:19, name:"Long Locust", smonth:8, emonth:10, stime:8, etime:19, loc:"Flowers", bells:200, desc:"I have a rather difficult time dealing with the soft underbellies of grasshoppers. They're...vulgar. And their legs! Why do they come off so easily when one merely handles the beast? Blech! Simply horrid!", chk:0};
var MigratoryLocust = {no:20, name:"Migratory Locust", smonth:9, emonth:11, stime:8, etime:19, loc:"Flowers", bells:1350, desc:"I have a rather difficult time dealing with the soft underbellies of grasshoppers. They're...vulgar. And their legs! Why do they come off so easily when one merely handles the beast? Blech! Simply horrid!", chk:0};
var Cockroach = {no:21, name:"Cockroach", smonth:1, emonth:12, stime:0, etime:23, loc:"Trees/Turnips/Flowers", bells:5, desc:"Hoo... Uh... Huh-hoo? Is that a cockroach?! Oh, how repugnant! How foul! The vileness! The putrescence! Hoooo-ecchh! I will NEVER understand why we're required to include cockroaches in our collection. It makes no sense. Well, who am I to question management? Hoo, indeed! And in any case, what's one more filthy insect, eh wot? Hoooo, my... I hate this part. I hear it wriggling in there...", chk:0};
var Bee = {no:22, name:"Bee", smonth:1, emonth:12, stime:0, etime:23, loc:"Shaken Trees", bells:4500, desc:"Why, I'd imagine it took more than a bit of skill and daring to catch bees! You've got 'moxie,' as I believe they say. I'm certain you must have been stung numerous times. How terribly painful that must have been, eh wot? Incidentally, do you know how some honeybees protect their hives when attacked by giant wasps? The giant wasps can't survive heats above 113 degrees, but the honeybees can live at heats up to 122 degrees. The canny honeybees use this nine-degree difference to their fullest advantage, wot! When the wasps arrive, the bees attack them en masse. A single wasp may be swarmed by up to 500 bees! Now this is truly amazing. The bees then begin to vibrate, creating a veritable cocoon of suffocating heat. Do you see the genius at work here? This swarming is but a feverish defense against the giant wasps' weakness. The temperature? Hoo hoo! Lo and behold, 120 degrees! Just below the bees own threshold of survival! In this incredible fashion, the honeybees literally lay their lives on the line to protect the hive! Stupendous! To be honest, I learned that from a wee documentary I saw on the telly! Of course, incredible feats can only go so far. When all is said and done, they're still insects, and still ghastly!", chk:0};
var Firefly = {no:23, name:"Firefly", smonth:6, emonth:6, stime:19, etime:4, loc:"Flying", bells:300, desc:"I've heard tales of children unable to buy candles... Yes, these unfortunate souls are said to have studied by firefly light! Ugh. The mere thought of having a bug that close... Blech! So very vile... I'd rather read in darkness!", chk:0};
var DroneBeetle = {no:24, name:"Drone Beetle", smonth:7, emonth:8, stime:0, etime:23, loc:"Tree Trunks", bells:80, desc:"They're called beetles, wot? The lugs of the insect world. Insects with armor plating on their backs, you know. Their armor, it...opens up, revealing wings, which they use to fly. It's really quite unnatural. Then, there's that thin membrane-like covering where their heads connect to their bodies. Most foul!", chk:0};
var LonghornBeetle = {no:25, name:"Longhorn Beetle", smonth:6, emonth:8, stime:0, etime:23, loc:"Tree Trunks", bells:200, desc:"Hoo my! Those sharpish mandibles... truly frightening. Honestly, what could be more off-putting than these? And the antennae! Why on earth are they so very thick? Blech! Most objectionable! In a word: bad!", chk:0};
var JewelBeetle = {no:26, name:"Jewel Beetle", smonth:7, emonth:8, stime:8, etime:17, loc:"Tree Trunks", bells:3000, desc:"The incredible jewel-like iridescence, it's so... So very... It's just so very... nauseating. Yes, that's it.", chk:0};
var DynastidBeetle = {no:27, name:"Dynastid Beetle", smonth:7, emonth:8, stime:17, etime:8, loc:"Tree Trunks", bells:1350, desc:"They're called beetles, wot? The lugs of the insect world. Insects with armor plating their backs, you know. Their armor, it... opens up, revealing wings. Which they use to fly! It's really quite unnatural. Then, there's that thin, membrane-like covering where their heads connect to their bodies. Most foul!", chk:0};
var FlatStagBeetle = {no:28, name:"Flat Stag Beetle", smonth:6, emonth:8, stime:17, etime:8, loc:"Tree Trunks", bells:2000, desc:"They're called beetles, wot? The lugs of the insect world. Insects with armor plating their backs, you know. Their armor, it... opens up, revealing wings. Which they use to fly! It's really quite unnatural. Then, there's that thin, membrane-like covering where their heads connect to their bodies. Most foul!", chk:0};
var SawStagBeetle = {no:29, name:"Saw Stag Beetle", smonth:7, emonth:8, stime:17, etime:8, loc:"Tree Trunks", bells:2000, desc:"They're called beetles, wot? The lugs of the insect world. Insects with armor plating their backs, you know. Their armor, it... opens up, revealing wings. Which they use to fly! It's really quite unnatural. Then, there's that thin, membrane-like covering where their heads connect to their bodies. Most foul!", chk:0};
var MountainStagBeetle = {no:30, name:"Mountain Stag Beetle", smonth:7, emonth:8, stime:17, etime:8, loc:"Tree Trunks", bells:2000, desc:"They're called beetles, wot? The lugs of the insect world. Insects with armor plating their backs, you know. Their armor, it... opens up, revealing wings. Which they use to fly! It's really quite unnatural. Then, there's that thin, membrane-like covering where their heads connect to their bodies. Most foul!", chk:0};
var GiantStagBeetle = {no:31, name:"Giant Stag Beetle", smonth:7, emonth:8, stime:23, etime:8, loc:"Tree Trunks", bells:10000, desc:"Your donation of such an obviously valuable insect is really quite generous. Thank you so very much! To me, however, it's just an overpriced cockroach. And that awful black luster... Horrendous!", chk:0};
var PondSkater = {no:32, name:"Pond Skater", smonth:6, emonth:9, stime:8, etime:19, loc:"River/Pond", bells:130, desc:"I've been always been curious... Why is it that these water striders choose to live their lives on the water? And skating across water without sinking? Unnatural! Blech! A grotesque affront to the natural order, wot wot!", chk:0};
var Ant = {no:33, name:"Ant", smonth:1, emonth:12, stime:0, etime:23, loc:"Rotten Food", bells:80, desc:"I wonder, how do you think that ants manage to search out their food? Because the question really confounds me! I mean, really. Come now. If ants were our size, the area they traverse in their search for sustenance...would FAR exceed the entire size of our fair village. Can you imagine it, wot? Hiking that far for a snack? What is going on in their tiny little ant-minds, hm? Do they have some specific target in mind? Could it be they're just wandering about aimlessly? Hoo-rrrumph! Ridiculous and revolting!", chk:0};
var PillBug = {no:34, name:"Pill Bug", smonth:1, emonth:12, stime:0, etime:23, loc:"Under Rocks", bells:250, desc:"Tell me, have you ever turned a pill bug over and examined its repellant underside? The legs...so many of them...jerking...wiggling...writhing...Blech! Abhorrent! Wretched little monsters!", chk:0};
var Mosquito = {no:35, name:"Mosquito", smonth:5, emonth:9, stime:17, etime:4, loc:"Flying", bells:130, desc:"I'm rather impressed that you managed both to capture and transport a mosquito here without squashing it. I might have squashed it just on general principles, wot! So, how's your mosquito knowledge? Were you, for example, aware that male mosquitoes can't suck blood? No, they survive by drinking plant nectar. Evidently, the female is the vampiric one, and she only ingests blood for the protein she needs to lay eggs. I couldn't care a fig, myself. All I know is the itching that occurs after one is bitten is quire disturbing. Not only that, but mosquitoes are notorious carriers of all sorts of disease, you know! Dirty, filthy little buggers!", chk:0};
var MoleCricket = {no:36, name:"Mole Cricket", smonth:11, emonth:5, stime:0, etime:23, loc:"Underground", bells:200, desc:"My my my! Good gracious! This is a frightfully large mole cricket, eh wot? Yes, rather large indeed. Interesting, isn't it? How its monotonous song drags on and on, while the insect is nowhere to be seen? That very secret is what sets the mole cricked apart from its relatives. You see, it lives underground, wot wot! It may be because it's become a bit scarce, but I believe most folk aren't aware the mole cricket exists. To be nitpicky, it's not actually a true cricket, but rather a distant relative of crickets and grasshoppers. It has ripplingly powerful forelegs for digging. In face, it's these mole-like limbs that give it its name. Its rear legs are shorter than a true cricket's as well. Bleeeeeech! All this talk of bug legs... Simply dreadful!", chk:0};
var Spider = {no:37, name:"Spider", smonth:4, emonth:9, stime:0, etime:23, loc:"Shaken Trees", bells:300, desc:"Hanging a toy spider from a string to frighten someone is a jolly good childhood ruse known throughout the world. Now, I may be mistaken, but I believe this shows the general loathing civilized folk have for spiders. They deserve it! Eight legs, bug diet, and those eyes! They just have too many! Blech! Sinister fiends!", chk:0};
var Snail = {no:38, name:"Snail", smonth:4, emonth:9, stime:0, etime:23, loc:"Flowers (Rain)", bells:250, desc:"Let me make one thing perfectly clear: snails are not insects. Snails are members of the mollusk, wot! They are related to oysters, clams, and more obviously to slugs. It's a well-known fact, you can't pick your relatives. Snails have soft bodies, which are protected by hard shells, and their eyes are on the tips of their tentacles. I've pondered from time to time, if one pulled a snail from its shell, would it then become a slug? Blech! The very thought of touching that slimy, mucous-covered body... Most foul! Utterly nauseating!", chk:0};
var Bagworm = {no:39, name:"Bagworm", smonth:10, emonth:3, stime:0, etime:23, loc:"Shaken Trees", bells:250, desc:"The bagworm is not a worm per se, but rather any moth of the family Psychidae while in its caterpillar phase. Bagworms construct their cocoons by cutting leaves or branches to the length of their own bodies. Next, they hang these leaves or branches on shrubs or trees and spin their cocoons around them. Fascinating! Interestingly enough, only males of the species become moths. Females spend the rest of their lives in the cocoons. The black, furry males fly from cocoon to cocoon, leaving the females to lay 500 or so eggs, then die. Just imagine it! 500 or more eggs! And then they die! That's not very sporting, if you ask me. Not at all! I can't see any female owls standing for that nonsense. My dear old mum would have given my da an earful, wot! In any case, where was I? Ah, yes. Bagworms, bagworms. Quite the pests, they are... Voracious in the extreme! An infestation of bagworms can defoliate entire trees in surprisingly rapid fashion. Gluttonous monsters! This is particularly harmful, sometimes fatally so, in evergreens, whose needles are never replaced. Hundreds and hundreds of bagworms...eating and eating...stuffing their bug-gullets... Bleech! Wretched villains!", chk:0};


var fishList = [
    CrucianCarp, BrookTrout, Carp, Koi, BarbelSteed, Dace, Catfish, GiantCatfish, PaleChub, Bitterling,
    Loach, Bluegill, SmallBass, Bass, LargeBass, GiantSnakehead, Eel, FreshwaterGoby, PondSmelt, Sweetfish,
    CherrySalmon, RainbowTrout, LargeChar, Stringfish, Salmon, Goldfish, PopeyedGoldfish, Guppy, Angelfish, Piranha,
    Arowana, Arapaima, Crawfish, Frog, Killifish, Jellyfish, SeaBass, RedSnapper, BarredKnifejaw, Coelacanth
];

var bugList = [
    CommonButterfly, CloudedYellowButterfly, TigerSwallowtailButterfly, PurpleButterfly, BrownCicada, RobustCicada, WalkerCicada, EveningCicada, RedDragonfly, CommonDragonfly,
    DarnerDragonfly, BandedDragonfly, Cricket, Grasshopper, PineCricket, BellCricket, Ladybug, SevenSpottedLadybug, Mantis,
    LongLocust, MigratoryLocust, Cockroach, Bee, Firefly, DroneBeetle, LonghornBeetle, JewelBeetle, DynastidBeetle, FlatStagBeetle, SawStagBeetle,
    MountainStagBeetle, GiantStagBeetle, PondSkater, Ant, PillBug, Mosquito, MoleCricket, Spider, Snail, Bagworm
];

function createlocalcache()
{
    if(localStorage.getItem("GCBitterlingchk") == null)
    {
        fishList.forEach(function(fish){
            localStorage.setItem("GC" + fish.name + "chk", fish.chk);
        }) 
    }
    if(localStorage.getItem("GCCommon Butterflychk") == null)
    {
        bugList.forEach(function(bug){
            localStorage.setItem("GC" + bug.name + "chk", bug.chk);
        }) 
    }
    if(localStorage.getItem("GClist") == null)
    {
        localStorage.setItem("GClist", list);
    }

}

function highlight(item)
{
    if(item == "leave")
    {
        document.getElementById('BG').src = "img/populationgrowing/GCBG" + list + ".png";

    }
    else
    {
        document.getElementById('BG').src = "img/populationgrowing/GCBG" + list + item +".png";
    }
}
function ShowAvail()
{
    document.body.style.backgroundColor = "#9c93cc";
    //document.getElementById("border").style.backgroundImage = "url('img/populationgrowing/GCFishBG.png')";
    //document.getElementById("border").style.borderRadius = "50%/25%"
    //document.body.style.backgroundRepeat = "fixed";
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
    var critterimage = "img/populationgrowing/" + list + "/" + item.name + ".png";
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

function SwapCritter(ls)
{
    if(ls == "bug")
    {
        list = "bug";
        document.getElementById('title').src = "img/populationgrowing/BugTitle.png";
        document.getElementById('BG').src = "img/populationgrowing/GCBGbug.png";
        ShowAvail();
    }
    else
    {
        list = "fish";
        document.getElementById('title').src = "img/populationgrowing/FishTitle.png";
        document.getElementById('BG').src = "img/populationgrowing/GCBGfish.png";
        ShowAvail();
    }
    localStorage.setItem("list", list);
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
    var fishimage = "img/populationgrowing/"+ list + "/" + critter.name + ".png";
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
    document.getElementById('BG').src = "img/populationgrowing/GCBGfish.png";
    document.getElementById('BG').width = 1099;
    document.getElementById('BG').height = 828;
    document.getElementById('title').src = "img/populationgrowing/FishTitle.png";
    document.getElementById('title').width = 477;
    
}