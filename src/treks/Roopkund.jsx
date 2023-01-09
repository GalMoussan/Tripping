import { useNavigate } from "react-router-dom"

export default function Gangotri() {

	let navigate = useNavigate()


	return (
		<div>
			<h1>The Roopkund Trek:</h1>

			<button onClick={() => navigate('/')}>BACK</button>

		</div>
	)
}