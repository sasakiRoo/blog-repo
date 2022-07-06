import Post from '../post/Post'
import './posts.css'
import '../../global/style.css'

export default function Posts() {
	return(
		<>
			<div className="posts container tech-section">
				<Post/>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
			</div>
			<div className="posts mx container opinion-section">
				<Post/>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
			</div>
		</>



	)
}