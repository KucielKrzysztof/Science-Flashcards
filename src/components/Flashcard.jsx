function FlashCard({ question, id, selected, answer, handleClick }) {
	return (
		<div onClick={() => handleClick(id)} className={selected === id ? "selected" : ""}>
			{selected === id ? answer : question}
		</div>
	);
}
export default FlashCard;
