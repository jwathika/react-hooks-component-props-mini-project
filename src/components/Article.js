function Article(props) {
	return (
		<>
			<h3>{props.title}</h3>
			<small>{props.date ? props.date : 'January 1, 1970'}</small>
			<p>{props.preview}</p>
		</>
	);
}

export default Article;
