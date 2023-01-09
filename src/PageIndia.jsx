import { useNavigate } from "react-router-dom"
export default function PageIndia() {

	let navigate = useNavigate()


	return (
		<div>
			<h1>India</h1>

			<img src="./assets/india_flag.jpg" alt="flag" />
			<h2 >Suggested Treks:</h2>
			<h3 onClick={() => navigate("/gangotri")} style={{ cursor: "pointer" }}>Gangotri Gomukh Tapovan trek</h3>
			<h4>A Journey to the Source of River Ganga</h4>
			<p>Gaumukh Trek is a 46 km trek hiked over 6 days 8 days including the drive to and from the trek, in the Greater Himalayas. It lies in the state of Uttarakhand and begins and ends at the pilgrim town of Gangotri.</p>
			<h3 onClick={() => navigate("/roopkund")} style={{ cursor: "pointer" }}>Roopkund Trek</h3>
			<h4>The most popular trek of them all !</h4>
			<p>It's got everything going for it. Deep virgin forests, gurgling brooks, breath-taking campsites, miles of undulating meadows, snow and ice and the taste of a great adventure as you climb from 8,000 ft to 16,000 ft in six days.</p>

		</div>
	)
}