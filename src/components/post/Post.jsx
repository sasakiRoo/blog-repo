import './post.css'
import imageHeader from '../../assets/roman-synkevych-vXInUOv1n84-unsplash.jpg'

export default function Post(){
	return (

		<div className="post">
			<img src={imageHeader} alt="img"/>
			<div className="post-info">
				<div className="post-category">
					<div className="span">tech</div>
				</div>
				<a href="https://fb.com" style={{color: "blue"}} className="post-header">
					<h2 className="post-title">code review</h2>
				</a>
				<div className="date-post">
					<p>06/07/22</p>
				</div>
			</div>
			<p className="post-desc">
				Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Natus veniam voluptates labore quo, fugit corrupti neque! Itaque, dignissimos, ab. Maxime, doloribus cupiditate reiciendis tenetur temporibus fugit, incidunt libero quaerat consequatur?
			</p>
		</div>


	)
}