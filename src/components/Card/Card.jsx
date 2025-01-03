import StarIcon from '@mui/icons-material/Star';
import './Card.css';

const Card = ({ repoDetails }) => {
	const { name, full_name, owner, description, score } = repoDetails;
	return (
		<div className='card-wrapper'>
			<div>
				<img className='avatar' src={owner?.avatar_url} alt={name} />
			</div>
			<div className='card-details'>
				<div className='repo-name-ratings'>
					<div className='repo-full-name'>Repo : {full_name}</div>
					<div className='repo-rating'>
						<StarIcon /> <span className='rating'>{score}</span>
					</div>
				</div>
				<div className='repo-name'>Owner : {name}</div>
				<div className='repo-desc'>{description}</div>
			</div>
		</div>
	);
};

export default Card;
