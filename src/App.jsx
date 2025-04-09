import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import FlashCard from "./components/Flashcard.jsx";

function App() {
	const [questions, setQuestions] = useState(null);
	const [selectedQ, setSelectedQ] = useState(null);

	useEffect(() => {
		async function fetchQuestions() {
			try {
				const res = await axios.get("https://opentdb.com/api.php?amount=9&category=18&difficulty=easy");
				console.log(res.data.results);
				const data = res.data.results;
				setQuestions(data);
			} catch (error) {
				console.log("Error while fetching data:", error);
			}
		}
		fetchQuestions();
	}, []);

	function handleClick(id) {
		setSelectedQ(id !== selectedQ ? id : null);
	}

	if (!questions) {
		return (
			<div className="error">
				Error while loading questions, please try again in a few seconds.
				<div className="buttons">
					<button onClick={() => window.location.reload()}>Retry</button>
				</div>
			</div>
		);
	}

	return (
		<div className="App">
			<Header />
			<div className="cards">
				{questions.map((q, index) => (
					<FlashCard key={index} question={q.question} id={index} selected={selectedQ} answer={q.correct_answer} handleClick={handleClick} />
				))}
			</div>
		</div>
	);
}

export default App;
