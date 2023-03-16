import { useNavigate } from "react-router-dom"

export default function Kumamoto() {

	let navigate = useNavigate()


	return (
		<div>
			<h1>Kumamoto city</h1>

			<p>This is <strong>Echiro Oda</strong> Home town! <br /> In this place you'll be able to find at least 10 sculptures of the Straw-Hat crew!</p>

			<button onClick={() => navigate('/japan')}>BACK</button>

		</div>
	)
}