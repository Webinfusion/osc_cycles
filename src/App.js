import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ContentPage from 'components/ContentPage/ContentPage';
import { useState, useEffect } from "react";

// mui Theme
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
// import Footer from 'components/Footer/Footer';
import axios from "axios";
import { Box } from "@mui/material";

import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import Home from "pages/Home";
import AboutUsPage from "pages/AboutUsPage";
import ProductsPage from "pages/ProductsPage";
// import PrivacyPolicy from 'pages/privacypolicy';

// Create a theme instance.
const theme = createTheme({
	typography: {
		fontFamily: `"DM Sans",sans-serif`,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
	button: {
		textTransform: "capitalize",
		Elevation: 0,
	},
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
});

function App() {
	// Axois Defaults

	axios.defaults.baseURL = "https://api.airtable.com/v0/appnJav2VhkwmVxST";
	axios.defaults.headers.common["Authorization"] = "Bearer key0K8InZ2JdeKzLR";
	axios.defaults.headers.post["Content-Type"] = "application/json";
	const [categoryData, setCategoryData] = useState();
	const [products, setProducts] = useState();

	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get("/cycleCategories");
			setCategoryData(res.data.records);
		};
		fetch();
	}, []);
	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get("/allCycles");
			setProducts(res.data.records);
		};
		fetch();
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<Navbar />
					<Box height={{ xs: 60, sm: 80 }} />
					<Routes>
						<Route path="/" element={<Home categoryData={categoryData} products={products} />} />
						<Route path="/about-us" element={<AboutUsPage />} />
						<Route
							path="/products"
							element={<ProductsPage categoryData={categoryData} products={products} />}
						/>
						{/* <Route path="/privacypolicy" element={<PrivacyPolicy />} /> */}
						{/* <Route path=":subPage" element={navHead && <ContentPage elements={navElements} head={navHead}  />} /> */}
					</Routes>
					<Footer />
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
