import { useNavigate } from "react-router-dom"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Gangotri() {

	let navigate = useNavigate()


	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>The Gangotri Trek:</h1>
			<iframe style={{ display: "block", margin: "0 auto" }} width="600" height="300" src="https://www.youtube.com/embed/EZpmceY75E8" title="Gaumukh -Tapovan: Trek To The Source Of River Ganga | Indiahikes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<div style={{ textAlign: 'center' }}>
				<h2 >Prequests:</h2>
				<p>&#x2022; Experience of any high altitude trek, at least 1 trek of above 4,000m</p>
				<p>&#x2022; Climber must be fit and have sufficent stamina to cover 5km of distance in 30 minutes without a stress</p>
				<p>&#x2022; The climber should be able to carry a 12-16kg backpack</p>
			</div>
			<h1>Quick Itinerary:</h1>




			<div>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Day 1:</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Reach Gangotri from Dehradun
						</Typography>
						<p>
							Drive distance: 242 km | Drive Duration: 8 hours
						</p>
						<p>&nbsp;</p>
						<p>&#x2022; Transport will be arranged from Hotel Grand Legacy Dehradun at 6.00 am. Cab cost per vehicle will be Rs.8,000 5-6 seater. This is to be shared among trekkers and paid directly to the driver. <br />
							&#x2022; Get all set to begin the journey from Dahradun in 6AM in the morning, The day will be longer as you will cover 241km to Gangotri. <br />
							&#x2022; It will be a wonderful 8 hours ride along the mighty mountains. We start early in the morning so that we can reach Gangotri by evening.
						</p>
						<p>&nbsp;</p>
						<p>&#x2022; Located at only 35kms from Dahradun, the first major attraction will be Mussorie, the famous hill station. <br />
							&#x2022; The Hill station offers majestic sights of the Shivalik Ranges. After a break for lunch and a bit of sightseeing through Dhanulti, Chmamba, You will arrive at the land of GODS, Uttarkashi.
						</p>
						<p>&nbsp;</p>
						<p>&#x2022; Uttarkashi, the 'Kashi of the north' lies on the banks of river Bhagirathi and is home to the renowned Kashi Vishwanath tample. <br />
							&#x2022; It is picturesque town where you will see all the tamples and religious people around, making you believe that you truly are in the land of Gods. <br />
							&#x2022; The river Bhagirathi takes you to the scenic Harshil village. Harshil is known for apple orchards everywhere gibing a retreat to your eyes. Harshil is the best place to enjoy the serene evening amidst mountains.
						</p>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 2:</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Trek from Gangotri 3,100m to Chirbasa 3,550m
						</Typography>
						<p>Trek Distance: 10 km | Trek Duration: 6 hours</p>
						<p>Moderate. Initial 300 m steep ascent followed by a very gradual ascent all the way. in Gangotri national park.</p>
						<p>&nbsp;</p>
						<p>&#x2022; The trek starts from a forest check post and after getting your permits checked proceed on the trekking train on the left side of the mountain.<br />
							&#x2022; You will be walking through the pine fortests alongside the gurgling Bhagirathi river. There will be gradual ascents but it will be an easy 4-5 hours trek. <br />
							&#x2022; You will come across many waterfalls and natural streams where you can refill your bottles. Throughout the route beautiful Sudarshan Parbat ='montain' will accompany you. <br />
							&#x2022; The entire walk will be in the Gangotri National Park. Once you cross the third ridge on your trek, you will be greeyed with mesmerizing view of the valley. The fragrance of the blue pine and fir trees is enough to sooth your senses.
						</p>
						<p>&nbsp;</p>
						<p>&#x2022; Towards the end of the trek you will be welcomed by boulders of the Sudarshan peak. Just cross them and you will reach the campsite.</p>
						<span style={{ fontWeight: 'bold' }}>&#x2022; This will be the most scenic campsite</span>
						<span> with the Bhagirathi river gushing on the right, lying in between the mountains under the pine trees.<br />
							&#x2022;The campsite offers the first views of the Bhagirathi Sister peaks, Bhagirathi I, II, and III  6856 m, 6512 m,  6454 m respectively sharing space with Manda Peak, Bhrigu Parbat, etc. Far away you can also make out the Gaumukh Glacier.</span>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 3:</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Chirbasa 11,630 ft to Bhojbasa 12,415 ft
						</Typography>
						<p>Trek Distance: 5 km | Trek Duration: 3 hours</p>
						<p>Moderate. Initial 100 m ascent to get back on the trail. Very gradual ascent all the way to Bhojbasa</p>
						<p>&nbsp;</p>
						<p>&#x2022; Wake up with the stunning fluorescent views of sun rays on the mountain peaks, and get refreshed to trudge again.<br />
							&#x2022; This will be the easiest 2-3 hours trek having a gradual ascent. The trail widens now with closer views of the Bhagirathi peaks. <br />
							&#x2022; You will cross some landslide sections easier to walk upon. About 45 minutes into the walk and you will reach the first ridge section and as you keep walking, the Bhagirathi group of peaks comes closer and closer. <br />
							&#x2022; Soon you will reach a landslide-prone area filled with boulders and a stream running across your path. <br />
							&#x2022; There will be another ridge after this point with about 8 to 9 landslide-prone bends, be mindful of falling rocks in this area. After the trek, you will see a bridge over a stream and a plain terrain where tents will be laid for you, this is Bhojwassa.<br />
						</p>
						<p>&nbsp;</p>
						<p>More info <br />
							The name Bhojwasa came from Bhopatra trees or the Birch trees, which are in abundance there. This is the widest part of the valley serving you the first view of Mount Shivling. <br />
							&#x2022; You will find an ashram, police post, and a rest house, also some igloo-like houses. You can opt to stay in those houses but that requires permission.<br />
							&#x2022; Chill around in the noon after having lunch at the campsite.<br />
							&#x2022; You can capture the splendid camping area, or you can walk 300 m above the Bhojwasa campsite from where you can get a striking view of the valley. Spend the cozy cold night in the tents.<br />
						</p>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 4:</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Bhojbasa 12,415 ft to Tapovan 14,203 ft
						</Typography>
						<p>Trek Distance: 6 km | Trek Duration: 9 hours</p>
						<p>Difficult. Gradual ascent for 2.5 hours. 2 hours glacier walk followed by 1 hour of moderate ascent. Final 1.5 hours is a steep ascent.</p>
						<span>
							&#x2022; Today we will trek from Bhojwasa to Tapovan. It is a 9 km long trek so eat full, get packed lunch, fill water bottles
						</span> <span style={{ fontWeight: 'bold' }}>there are no water sources on the route.</span> <span>carry energy bars, and lots of excitement.</span>
						<p>&nbsp;</p>
						<p>
							&#x2022; We will set off early in the morning and after walking for bout half a kilometer, we will arrive at the Bhagirathi River. To reach the Tapovan, we need to cross the river by means of a manually pulled trolley over the bridge.<br />
							&#x2022; It is a unique experience and this method is often used as a method of river crossing in the mountains where there are no bridges in place.<br />
							&#x2022; It takes about an hour for the entire batch to cross the river via a trolley so don’t be impatient.<br />
						</p>
						<p>&nbsp;</p>
						<p>
							&#x2022; After crossing the river, you will walk for about 2 km with rocks and stones on either side, this is also a potential rockfall-prone zone, so we will try to cross the area before lunchtime to avoid any potential rockfalls.<br />
							&#x2022; After crossing this zone, you have to cross the Akash Ganga River. <br />
							&#x2022;  Look for spots from where you can cross the river and if the water flow is high then you will have to take your shoes off to cross the stream.<br />
						</p>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 5:</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Tapovan 14,203 ft to Bhojbasa 12,415 ft
						</Typography>
						<p>Trek Distance: 6 km | Trek Duration: 5 hours</p>
						<p>Moderate Difficult. Level trail to Chirbasa</p>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 6:</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Bhojbasa 12,415 ft to Gangotri 10,050 ft
						</Typography>
						<p>Trek Distance: 14 km | Trek Duration: 8 hours</p>
						<p>Tricky descent over bouldery section</p>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 7:</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Drive from Gangotri to Dehradun
						</Typography>
						<p>Drive distance: 242 km | Drive Duration: 8 hours</p>
						<p>Cab cost per vehicle will be Rs 8000 (5-6 seater). You will reach Dehradun between 6.00 pm and 7.00 pm.</p>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 8:</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Buffer Day
						</Typography>
						<p>If the buffer day is used,  you have to pay us Rs. 2,500 per day 'INR' +5% GST. The money will be collected by the Trek Leader only if we use the buffer day.</p>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>IMPORTANT POINTS</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							&#x2022; You will be staying in tents on all days of the trek. <br />
							&#x2022; It is mandatory for trekkers to carry a copy of their photo ID for entry at forest check posts on the trek.<br />
							&#x2022; If the buffer day is used,  you must pay Rs 2,500 per day + 5% GST. The Trek Leader will only collect the money if we use the buffer day. This depends completely on the weather conditions on the trek, and the trek leader will take the call.<br />
							&#x2022; Please note: Twin sharing tents may not be available in May, June. This is because raw materials for making tents are sourced from different countries. But their export has been affected due to international unrest. This has led to a global shortage of tents. Having said that, you'll still have comfortable space as these tents have been designed to accommodate three trekkers.<br />
						</Typography>
					</AccordionDetails>
				</Accordion>

			</div>


			<button onClick={() => navigate('/')}>BACK</button>

		</div>
	)
}