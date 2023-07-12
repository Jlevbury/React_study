import React, { useState, useEffect } from "react";

function App() {
	const [posts, setPosts] = useState([]);
	const [selectedPost, setSelectedPost] = useState(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);

	const handlePostClick = (post) => {
		setSelectedPost(post);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Posts</h1>
				{selectedPost ? (
					<div>
						<h2>{selectedPost.title}</h2>
						<p>{selectedPost.body}</p>
						<button onClick={() => setSelectedPost(null)}> Back</button>
					</div>
				) : (
					posts.map((post) => (
						<div
							key={post.id}
							onClick={() => handlePostClick(post)}
						>
							<h2>{post.title}</h2>
						</div>
					))
				)}
			</header>
		</div>
	);
}

export default App;
