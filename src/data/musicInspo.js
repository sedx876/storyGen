const musicInspo = [
  "1904 by The Tallest Man on Earth",
  "40oz to Freedom by Sublime",
  "American Girl by Tom Petty",
  "And It Stoned Me by Van Morrison",
  "Barefoot Children by Jimmy Buffet",
  "Big Parade by The Lumineers",
  "Creep by Radiohead",
  "Darkness Between the Fireflies by Mason Jennings",
  "Don't Leave Me by Regina Spektor",
  "Doomsday by Elvis Perkins",
  "Dirty Deeds Done Dirt Cheap by AC/DC",
  "Bear Claws by The Academics",
  "Desire by Ryan Adams",
  "New Kind of Cool by Adrianne",
  "Got Monsters by Keith Caputo",
  "What It Takes by Aerosmith",
  "Demon In Profile by The Afghan Whigs",
  "Transgender Dysphoria Blues by Against Me!",
  "Grace Like Rain by Todd Agnew",
  "Wallflower by Priscilla Ahn",
  "Playground Love by Air",
  "The Fifth Day by The Airborne Toxic Event",
  "Sober Up by AJR",
  "Always Alright by Alabama Shakes",
  "Everyday Robots by Damon Albarn",
  "Sick of Myself by Cindy Alexander",
  "Would by Alice in Chains",
  "Every Girl by Allah-Las",
  "A Handful Of Darkness by Alphaville",
  "Next Of Kin by Alvvays",
  "Journey To The Center Of The Mind by The Amboy Dukes",
  "Gravitational Pull by Bob Amos",
  "Tear in Your Hand by Tori Amos",
  "Fragile Dreams by Anathema",
  "Relative Ways by ...And You Will Know Us By the Trail of Dead",
  "Clowns by Brett Anderson",
  "The Purple Bottle by Animal Collective",
  "Strange Attractor by Animal Kingdom",
  "Obsession by Animotion",
  "My Heartbeat by Annie",
  "Dirty Money by Antibalas",
  "Every Night My Teeth Are Falling Out by The Antlers",
  "Katie Queen of Tennessee by The Apache Relay",
  "Singing To The Earth (To Thank Her For You) by Apollo Sunshine",
  "The Child Is Gone by Fiona Apple",
  "Same Old Drag by The Apples In Stereo",
  "Mohammed's Hex and Bounty by Arbouretum",
  "The Well and the Lighthouse by Arcade Fire",
  "My Body Is A Cage by Arcade Fire",
  "She's Thunderstorms by Artic Monkeys",
  "Bright Lit Blue Skies by Ariel Pink's Haunted Graffiti",
  "Seduction by Diane Arkenstone",
  "The Weakness in Me by Joan Armatrading",
  "Sick and Beautiful by Artificial Joy Club",
  "Jailer by Asa",
  "Your Amazing Life by Ass Ponys",
  "Molecules by Atlas Genius",
  "Like a Stone by Audioslave",
  "King Of A One Horse Town by Dan Auerbach",
  "The Offer by Augie March",
  "Frontier Psychiatrist by The Avalanches",
  "Little Fang by Avey Tare's Slasher Flicks",
  "Wake Me Up by Avicii",
  "Hollow Moon (Bad Wolf) by Awolnation",
  "Carried By the Wind by Ayreon",
  "Lonely By Your Side by Azzido da Bass featuring Johnny Blake",
  "Nut Rocker by B Bumble And The Stingers",
  "Hero Worship by The B-52's",
  "High Heel Leather Boots by Baby Bee",
  "Cardiac Arrest by Bad Suns",
  "The Funeral by Band of Horses",
  "Where's the Fun In That? by BANG sugar BANG",
  "Things We Lost In The Fire by Bastille",
  "Pearl's Dream by Bat For Lashes",
  "Smoking Her Wings by The Bats",
  "Hold Back The River by James Bay",
  "Was I On Your Mind by Jessie Baylin",
  "No Trains to Heaven by Be Bop Deluxe",
  "Master of None by Beach House",
  "High Society by Bear Hands",
  "Sinful Nature by Bear In Heaven",
  "I Thought About You by The Beautiful Girls",
  "Old Red Eyes Is Back by The Beautiful South",
  "Devil's Haircut by Beck",
  "St. Andrews by Bedouin Soundclash",
  "Where Not to Look for Freedom by The Belle Brigade",
  "Around the Girl in 80 Ways by Big Audio Dynamite",
  "Broken Hearted Savior by Big Head Todd and the Monsters",
  "Shark Smile by Big Thief",
  "On My Way by Billy Boy On Poison",
  "Learn Me Right by Birdy With Mumford & Sons",
  "Venus As A Boy by Bj??rk",
  "Half Believing by The Black Angels",
  "10 Lovers by The Black Keys",
  "Love Burns by Black Rebel Motorcycle Club",
  "We Are The Tide by Blind Pilot",
  "Rip Her to Shreds by Blondie",
  "Fan Mail by Blondie",
  "Lucretia MacEvil by Blood, Sweat & Tears",
  "Veteran Of The Psychic Wars by Blue ??yster Cult",
  "Reach For The Dead by Boards Of Canada",
  "Lights Out, Words Gone by Bombay Bicycle Club",
  "Blood Bank by Bon Iver",
  "Cursed Sleep by Bonnie `Prince` Billy",
  "I'm the Urban Spaceman by Bonzo Dog Band",
  "The Man Who Sold the World by David Bowie",
  "Fall At Your Feet by Boy and Bear",
  "Mama Didn't Lie by Jan Bradley",
  "The Quiet Things That No One Ever Knows by Brand New",
  "Two Door Coupe by Crystal Brandt",
  "I Am Your Skin by The Bravery",
  "Huffer by The Breeders",
  "Whatever Hippie Bitch by The Brian Jonestown Massacre",
  "Lover I Don't Have to Love by Bright Eyes",
  "God Is Dead (Meet The Kids) by British India",
  "The Ghost Inside by Broken Bells",
  "It`s A Man`s Man`s Man`s World by James Brown",
  "Mama (He Treats Your Daughter Mean) by Ruth Brown",
  "The Birds Of St. Marks by Jackson Browne",
  "Song To The Siren by Tim Buckley",
  "Distopian Dream Girl by Built To Spill",
  "Rose Hip November by Vashti Bunyan",
  "2 Cool 2 Care by Anna Burch",
  "The Man With The Child In His Eyes by Kate Bush",
  "Ever Fallen In Love (With Someone You Shouldn't've)? by The Buzzcocks",
  "Jerk It Out by Caesars",
  "Too Late To Say Goodbye by Cage The Elephant",
  "Slip Away by Kathryn Calder",
  "He Lays In the Reins by Calexico & Iron & Wine",
  "Lloyd, I'm Ready to Be Heartbroken by Camera Obscura",
  "Here I Am to Worship by Jeremy Camp",
  "All Her Favorite Fruit by Camper Van Beethoven",
  "Cute Thing by Car Seat Headrest",
  "White Line Fever by Cari Cari",
  "Show Me What I'm Looking for by Carolina Liar",
  "4 Chords Of The Apocalypse by Julian Casablancas",
  "Ring of Fire by Johnny Cash",
  "The Long Black Veil by Johnny Cash",
  "If We Are the Body by Casting Crowns",
  "Red Right Hand by Nick Cave & The Bad Seeds",
  "Paper Thin by Chapel Club",
  "The Observer by Chris Chavez",
  "I Want You To Want Me by Cheap Trick",
  "Had Ten Dollaz by Cherry Glazerr",
  "Out Of The Black by Neneh Cherry",
  "Crossbitch by CHILDBIRTH",
  "She's Mine by The Children Of Darkness",
  "I Can Never Be Myself When You're Around by Chromatics",
  "The Mother We Share by CHVRCHES",
  "Nothing's Gonna Hurt You Baby by Cigarettes After Sex",
  "Bullet And A Target by Citizen Cope",
  "Rabbit Run by City Calm Down",
  "Dying to be Born by Civil Twilight",
  "Everybody Here Is A Cloud by Cloud Cult",
  "I'm Not Part Of Me by Cloud Nothings",
  "Pacing The Cage by Bruce Cockburn",
  "Heaven or Las Vegas by Cocteau Twins",
  "Jailbirds by Cold War Kids",
  "Violet Hill by Coldplay",
  "Perfect Skin by Lloyd Cole and the Commotions",
  "She Gathers Rain by Collective Soul",
  "Paper Child by Colours in the Street",
  "Hot Rod Lincoln by Commander Cody And His Lost Planet Airmen",
  "Communist Daughter by Communist Daughter",
  "Web of Sound by The Comsat Angels",
  "Joey by Concrete Blonde",
  "Straight In the Head by Controller.Controller",
  "Elegant Chaos by Julian Cope",
  "Buses Splash With Rain by Frankie Cosmos",
  "Mr. Pitiful by Matt Costa",
  "Psychotic Reaction by The Count Five",
  "Love Is A Fire by Courrier",
  "Vestiges by Martin Courtney",
  "Misguided Angel by Cowboy Junkies",
  "I'm Not Cold Anymore by Coyote",
  "Hot Razors In My Heart by Crack the Sky",
  "Kerosene Hat by Cracker",
  "Knock Three Times by Billy `Crash` Craddock",
  "Put Me Down by The Cranberries",
  "Afternoons & Coffeespoons by Crash Test Dummies",
  "All the Pleasures of the World by The Crayon Fields",
  "Deserted Cities Of The Heart by Cream",
  "Have You Ever Seen The Rain? by Creedence Clearwater Revival",
  "She Sells Sanctuary by The Cult",
  "Sweet Soul Sister by The Cult",
  "Why Can't I Be You? by The Cure",
  "Riverdeadbank by Current 93",
  "High Tension House by Dadamah",
  "How the Gods Kill by Danzig",
  "Jealous Enemies by Dark Captain Light Captain",
  "Shadow Preachers by Zella Day",
  "Your Freedom Is The End Of Me by Melanie De Biasio",
  "In Hell I'll Be In Good Company by The Dead South",
  "The Lake And The River by The Dear Hunter",
  "The Ghosts Of Beverly Drive by Death Cab For Cutie",
  "16 Military Wives by The Decemberists",
  "Knockin' At Your Back Door by Deep Purple",
  "Fluorescent Grey by Deerhunter",
  "Change (In the House of Flies) by Deftones",
  "Born To Die by Lana Del Rey",
  "I Fought the Angels by The Delgados",
  "Don't Become the Thing You Hated by Destroyer",
  "Before You Accuse Me by Bo Diddley",
  "Too Bad About Your Girl by The Donnas",
  "Kingdom of Rust by Doves",
  "That Old Black Hole by Dr. Dog",
  "Milk and Alcohol by Dr. Feelgood",
  "Dirty Glass by Dropkick Murphys",
  "Dance Little Rude Boy by Ian Dury & The Blockheads",
  "Tears On Tarmac by Dusty Colours",
  "You're Gonna Make Me Lonesome When You Go by Bob Dylan",
  "The Killing Moon by Echo & The Bunnymen",
  "I Hear You Knocking by Dave Edmunds",
  "Critters Have Feelings by Todd Edwards",
  "Novacaine for the Soul by Eels",
  "Greetings In Braille by Elected",
  "This Head I Hold by Electric Guest",
  "God Sent Me Here to Rock You by Naomi Elizabeth",
  "Weird Honey by Elvis Depressedly",
  "The Grey Ship by Ema",
  "Tiger By My Side by Empire Of The Sun",
  "The Days Before The Fall by Empyrium",
  "Evil Girls by Escondido",
  "Someone Disappeared by The Everywheres",
  "Black Soap by Ex Cops",
  "First Breath After Coma by Explosions In The Sky",
  "The Drug In Me Is You by Falling In Reverse",
  "Harold T. Wilkins. Or How To Wait For A Very Long Time by Fanfarlo",
  "How Come You Never Go There by Feist",
  "Fragile Chances by Caroline Fenn",
  "Lost In My Bedroom by Sky Ferreira",
  "Shade of a Ghost by Fetish",
  "Johnny Delusional by FFS",
  "Restorative Beer by The Fiery Furnaces",
  "Hope For The Hopeless by A Fine Frenzy",
  "Master Pretender by First Aid Kit",
  "Out Of My League by Fitz And The Tantrums",
  "Video Girl by FKA Twigs",
  "Waitin' For A Superman by The Flaming Lips",
  "Down Among the Dead Men by Flash and the Pan",
  "The Rapture Of Your Design by Flash Fiktion",
  "Helplessness Blues by Fleet Foxes",
  "What the Water Gave Me by Florence + The Machine",
  "Left Too Late by Florrie",
  "The Box by Johnny Flynn",
  "What Went Down by Foals",
  "The Old Man Down the Road by John Fogerty",
  "Alice Childress by Ben Folds Five",
  "One Part Lullaby by Folk Implosion",
  "On Your Porch by The Format",
  "He Didn't Mention His Mother by Eleanor Friedberger",
  "Collarbone by Fujiya",
  "Restless Year by Ezra Furman",
  "Like A Girl Jesus by Game Theory",
  "The Trick Is To Keep Breathing by Garbage",
  "Cake Parade by Georgie James",
  "Lexicon Devil by The Germs",
  "Stay Gold, Ponyboy by The Get Up Kids",
  "Empire Builder by Laura Gibson",
  "Old Soul by Thea Gilmore",
  "Cut Your Bangs by Girlpool",
  "Sound Of The Underground by Girls Aloud",
  "Saw You First by Givers",
  "Feeling Without Touching by Glass Candy",
  "A Snowflake Fell (And It Felt Like A Kiss) by Glasvegas",
  "Strict Machine by Goldfrapp",
  "Can't Go Home by Good Old War",
  "On Melancholy Hill by Gorillaz",
  "Somebody That I Used To Know by Gotye",
  "Play Delicate, Desire Quiet by Grace Cathedral Park",
  "Stare Into The Sun by Graffiti6",
  "New Medication by Grand Ole Party",
  "O.K. With My Decay by Grandaddy",
  "He`s Simple, He`s Dumb, He`s The Pilot by Grandaddy",
  "Bully's Lament by Shakey Graves",
  "Hospital Food by David Gray",
  "Zombie For Love by Green On Red",
  "Flesh without Blood by Grimes",
  "Love's Lost On You by The Grip Weeds",
  "Mourning Sound by Grizzly Bear",
  "Sweetest Touch by Gross Magic",
  "The Man Who Died In His Boat by Grouper",
  "Good Advice by The Growlers",
  "Alice's Restaurant Massacree by Arlo Guthrie",
  "Hurricane by Halsey",
  "Always on My Mind by Hanna & Andrea",
  "Imagining My Man by Aldous Harding",
  "Broken Flowers by Danny L Harle",
  "Wait for Returns by Annie Hayden",
  "It's Harvest Time by Michael Head & The Strands",
  "Hide and Seek by Imogene Heap",
  "Stoic Resemblance by The Helio Sequence",
  "Bestia by Hello Seahorse!",
  "Her In These Lights by Hello Stranger",
  "Soft Offering by Hey Rosetta!",
  "In The Same Room by Julia Holter",
  "Every Time I Fall by Holychild",
  "Bud by Honeyblood",
  "Bring Us Closer Together by Hooray For Earth",
  "This Strange Effect by Hooverphonic",
  "Sea Within a Sea by The Horrors",
  "Curs In the Weeds by Horse Feathers",
  "I Miss Your Bones by Hospitality",
  "Casino (Bad Things) by Houndmouth",
  "I Forget Where We Were by Ben Howard",
  "The Hanging Tree by James Newton Howard",
  "Back Of Your Neck by Howler",
  "Killing Floor by Howlin' Wolf",
]

export default musicInspo