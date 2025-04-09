import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/main.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
