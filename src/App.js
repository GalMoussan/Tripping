import { Route, Routes, Link } from "react-router-dom";
import PageIndia from "./PageIndia";
import PageAustralia from "./PageAustralia";
import PageJapan from "./PageJapan";
import Page404 from "./Page404";
import PageVietnam from "./PageVietnam";
import PageThailand from "./PageThailand";
import Gangotri from "./treks/Gangotri";
import Roopkund from "./treks/Roopkund";
import Kumamoto from "./cities/Kumamoto";

export const ownerHeading = "Gal's WORLD-WIDE Trip guide";

const colors = {
	darkest: "#392F5A",
	dark: "#F092DD",
	mid: "#FFAFF0",
	light: "#EEC8E0",
	secondary: "#A8C7BB",
};

export default function App() {
	return (
		<>
			<header
				style={{
					background: colors.darkest,
					padding: "15px 40px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					color: "white",
				}}>
				<p style={{ fontSize: "60px" }}>{ownerHeading}</p>
				<nav>
					<Link to="/">India</Link>
					<Link to="/japan">Japan</Link>
					<Link to="/thailand">Thailand</Link>
					<Link to="/australia">Australia</Link>
					<Link to="/vietnam">Vietnam</Link>
				</nav>
			</header>
			<main style={{ background: colors.light }}>
				<Routes>
					<Route path="/" element={<PageIndia />} />
					<Route path="/japan" element={<PageJapan />} />
					<Route path="/australia" element={<PageAustralia />} />
					<Route path="/thailand" element={<PageThailand />} />
					<Route path="/vietnam" element={<PageVietnam />} />
					<Route path="gangotri" element={<Gangotri />} />
					<Route path="roopkund" element={<Roopkund />} />
					<Route path="Kumamoto" element={<Kumamoto />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</main>
			<footer
				style={{
					background: colors.darkest,
					padding: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "white",
				}}>
				Copyright © 2023 King Gal - All Rights Reserved.
			</footer>
		</>
	);
}
