import { useNavigate } from "react-router-dom"

export default function PageJapan() {


	let navigate = useNavigate()

	return (
		<div>
			<h1>Japan</h1>

			<img style={{ display: 'block', margin: '0 auto', width: '800px', height: '500px' }} src="./assets/japan_flag.jpg" alt="flag" />


			<h3 onClick={() => navigate("/kumamoto")} style={{ cursor: "pointer" }}>Echiro Oda's Home town - Kumamoto</h3>


		</div>
	)
}