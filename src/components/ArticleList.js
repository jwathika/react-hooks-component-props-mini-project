import Article from './Article';
function ArticleList(props) {
	const postsList = props.posts.map((post) => {
		return (
			<Article
				key={post.id}
				title={post.title}
				date={post.date}
				preview={post.preview}
			/>
		);
	});
	return <main>{postsList}</main>;
}
export default ArticleList;
