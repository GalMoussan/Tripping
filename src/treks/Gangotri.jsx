import { useNavigate } from "react-router-dom"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from "@mui/material";

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

			<h1>How to Reach:</h1>
			<p>The distance from Dehradun Bus Stand (ISBT) to Railway Station is 6 km, without traffic it will take 15 minutes.</p>
			<p>options to reach Dehradun:</p>
			<br />
			<p>1.&nbsp; Take an overnight train/bust to Dehradun, and then take a cab to the pickup point.</p>
			<br />
			<p>We always recommend to go for the govt. Buses over the private ones outside the bus station as based on the experience we have found that there are very high chances of delay involved with private buses. Also, govt. Buses are always more reliable. Whichever bus you choose, just make sure to reach Rishikesh at least by 05:30 am positively.</p>
			<br />
			<p>2.&nbsp; Take flight to Dehradun airport (Jolly Grant Airport) (25 km, 50 min), if coming by flight then come one day early.</p>
			<h2>Cost Trems</h2>
			<p>
				The fee can be paid by online transfer/Check deposit/Cash deposit/Demand draft. Instruction for <br />
				payment will be forwarded along with your confirmation email. When your transfer is done, please <br />
				e-mail us a confirmation mail with your transfer details, so that we can follow up your reservation efficiently.
			</p>

			<h1>Quick Itinerary:</h1>
			<div>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Day 1:  Dehradun to Gangotri</Typography>
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
						<Typography>Day 2:  Gangotri</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Acclimatization Day At Gangotri
						</Typography>

						<p>&#x2022; Now that you are at 3,100m height, today is the day for acclimatization. <br />
							&#x2022; Acclimatization is like a health supplement for your body to get used to the environment and low temperature. <br />
							&#x2022; At TTH, we take acclimatization very seriously as it is one of the key contributors to the success of a trek. Take acclimatization walks around Gangotri in the evening and while doing that, you can take the advantage of being in Gangotri, one of the four Char Dhams. The Gangotri temple is the biggest temple that was built in the 18th century. Apart from that, you can visit the BhagirathShila, a holy rock where King Bhagirath worshipped Lord Shiva, and Pandava Gufa where Pandavas were rested. Surya Kund and Gaurikund are two hot water springs that you can visit as well, Surya and Gauri Kund are both located on either side of an iron bridge near the temple.<br />
						</p>

						<p>&#x2022; You will see many foreigners meditating and roaming around. Spend the night in the guest house and get ready for the upcoming trek.</p>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 3: Gangotri to Chirbasa</Typography>
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
						<Typography>Day 4: Chirbasa to Bhojbasa</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Chirbasa 3,544m to Bhojbasa 3,784m
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
						<Typography>Day 5:  Bhojbasa to Tapovan</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Bhojbasa 3784m to Tapovan 4,329m
						</Typography>
						<p>Trek Distance: 6 km | Trek Duration: 5 hours</p>
						<p>Moderate Difficult. Level trail to Chirbasa</p>
						<span>It is a 9km long trek so eat full, get packed lunch, fill water bottles</span><span style={{ fontWeight: 'bold' }}> there are no water sources on the route</span>
						<span> carry energy bars, and lots of excitement.</span>
						<p>&nbsp;</p>
						<p>
							&#x2022; We will set off early in the morning and after walking for bout half a kilometer, we will arrive at the Bhagirathi River. <br />
							&#x2022; To reach the Tapovan, we need to cross the river by means of a manually pulled trolley over the bridge. <br />
							&#x2022; It is a unique experience and this method is often used as a method of river crossing in the mountains where there are no bridges in place. <br />
							&#x2022; It takes about an hour for the entire batch to cross the river via a trolley so don’t be impatient.
						</p>
						<p>&nbsp;</p>
						<p>
							&#x2022; After crossing the river, you will walk for about 2 km with rocks and stones on either side, this is also a potential rockfall-prone zone, so we will try to cross the area before lunchtime to avoid any potential rockfalls <br />
							&#x2022; After crossing this zone, you have to cross the Akash Ganga River. Look for spots from where you can cross the river and if the water flow is high then you will have to take your shoes off to cross the stream.
						</p>
						<p>&nbsp;</p>
						<p>
							&#x2022; We will have lunch after crossing the river. Tapovan is a steep climb from here. After lunch, we will set out for the Tapovan campsite.  <br />
							&#x2022; It takes about 1.5 hr to reach Tapovan from this point <br />
							&#x2022; Once we reach the Tapovan meadows, we will find a suitable spot to pitch our camp for an overnight stay.
						</p>
						<p>&nbsp;</p>

						<p>
							&#x2022; Tapovan is famous for the Sadhus who come here for meditation. It is also the base camp for the expeditions going to Mt. Shivling. <br />
							&#x2022; It offers the direct, bigger sight of Mt. Shivling which is considered one of the most sacred and beautiful mountains.  <br />
							&#x2022; Do not miss the sight of Mt. Meru and Bhagirathi peaks. Pilgrims are not allowed to camp in Tapovan unless they have a permit.
						</p>
						<p>&nbsp;</p>
						<p>
							&#x2022; After a grueling trek, Tapovan serves as the perfect place for solitude. <br />
							&#x2022; Here you will find mountain goats roaming around, just as you are, and a great view of the Gaumukh Glacier. <br />
							&#x2022; End your strained yet memorable day by resting peacefully in tents.
						</p>

					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 6:  Tapovan to Bhojbasa via Gaumukh</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Tapovan 4329m to Bhojbasa 3784m via Gaumukh
						</Typography>
						<p>Trek Distance: 14 km | Trek Duration: 8 hours</p>
						<p>Tricky descent over bouldery section</p>
						<p>&nbsp;</p>
						<p>
							&#x2022; Rise early to cherish the few last moments in front of legendary mountains that are shining in the bright suns rays and get ready to visit the Gaumukh Glacier. <br />
							&#x2022; Mt. Shivling looks prettier as never before, passing its beauty to the adjacent peaks. <br />
							&#x2022; Together they all make a spectacular sight. It is time to take these memories back after having breakfast. <br />
							&#x2022; Carry packed lunch and enough water as you did earlier because there are no water sources.
						</p>
						<p>&nbsp;</p>
						<p>
							&#x2022; Yes, again you have to cross the rocky terrain and moraines of the glacier. <br />
							&#x2022; Descending is more difficult than ascending they say, you will realize this now as you make your way around the boulders. <br />
							&#x2022; Watch your steps and move gradually. Try to relive the moments while you retrace the steps. <br />
							&#x2022; Enjoy the forested sections of Bhojwasa once again with its flora and fauna.
						</p>
						<p>&nbsp;</p>
						<p>
							&#x2022; It is quite a steep descent to Gaumkuh and today you will get to see the behemoth glacier from up close. <br />
							&#x2022; Gaumukh is the end of the Gangotri glacier and hence the source of the divine Ganges river. <br />
							&#x2022; Gaumukh means cows mouth, it is believed the snout looked like a cows mouth in past. <br />
							&#x2022; Most religious people consider it a blessing to visit the Ganges. <br />
							&#x2022; Even if you are not religious you will be astonished to see how huge the snout is and how small you are in front of it.
						</p>
						<p>&nbsp;</p>
						<p>
							The legend has it that once there was a powerful king named Sagar, who wished to perform the Ashwamedh Yajna with a ceremonial sacrifice horse. <br />
							Fearing that Sagar will complete the Yajna, Lord Indra took the horse and tied it to the ashram of Lord Kapila where he used to meditate. <br />
							Sagar sent out 60,000 of his sons to bring back the horse and when they were creating chaos in Kapila Muni's ashram,<br />
							his meditation got disrupted and he turned all of the 60000 sons to ashes and cursed that they will attain Moksha only if their ashes are washed in the water of the holy River Ganga, who then resided in heaven. <br />
							All of Sagars ancestors failed to please Brahma to bring Ganga on Earth, however, King Bhagirath was able to please Brahma and he ordered Ganga to flow down Earth. <br />
							Goddess Ganga was not pleased with this and flowed with such intensity that she was about to drown the entire world. <br />
							Bhagirath then prayed to Lord Shiva and Shiva agreed to capture Ganga in his locks to control the force and this is how Ganga arrived on Earth. <br />
							To date, it is believed that a dip in the Ganga is enough to resolve all sins of an individual.
						</p>
						<p>&nbsp;</p>
						<p>
							&#x2022; After a steep descent to Gaumukh, walk down the terrain alongside the Bhagirathi river. <br />
							It will be a 5 to 6 hrs trek to Bhojwasa and you will be back to the same pine forests. Tonight we will camp here again before returning to Gangotri the following day.
						</p>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 7: Gangotri to Dehradun</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Drive from Gangotri to Dehradun
						</Typography>
						<p>&nbsp;</p>
						<p>Drive distance: 242 km | Drive Duration: 8 hours</p>
						<p>&nbsp;</p>
						<p>
							&#x2022; Wake up to realize that this will be the last day of the trek. Trek for around 6 to 7 hours covering 14 km to reach Gangotri. <br />
							You will enter again in the Gangotri National Park, with the valley slowly closing behind you. <br />
							Watch out for the rockfall section once again and you can catch upstreams and waterfalls to refill your water bottle. <br />
							Say goodbye to the Bhagirathi and other mountain peaks as their sight now disappears.
						</p>
						<p>&nbsp;</p>
						<p>Cab cost per vehicle will be Rs 8000 (5-6 seater). You will reach Dehradun between 6.00 pm and 7.00 pm.</p>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Day 8: Dehradun</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Buffer Day
						</Typography>
						<p>If the buffer day is used,  you have to pay us Rs. 2,500 per day 'INR' +5% GST. The money will be collected by the Trek Leader only if we use the buffer day.</p>
						<p>If the buffer day is not neccecery,</p>
						<p>&nbsp;</p>
						<p>
							Have a final cup of morning tea in the mighty land of Gangotri. Say a final goodbye to your fellow trekkers and take back lots of memories. <br />
							Take a wonderful group picture and get into the cab that will ride you back to Dehradun. <br />
							This will be an 8 hours ride, between the mountains, valleys, and Bhagirathi river. The river guided us throughout the trek.
						</p>
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

			<Button variant="contained" onClick={() => navigate('/')} style={{}}>Back</Button>


		</div>
	)
}