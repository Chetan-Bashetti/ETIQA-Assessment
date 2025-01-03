import Card from 'components/Card/Card';
import useGetRepoDetails from 'hooks/useGetRepoDetails';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';

import './Home.css';

const Home = () => {
	const { repos } = useGetRepoDetails();
	return (
		<div className='home-wrapper'>
			<div className='header'>Trending Repos</div>
			<div className='cards-wrapper'>
				{repos?.map((eachRepo) => (
					<Card repoDetails={eachRepo} key={eachRepo.id} />
				))}
			</div>
			<div className='footer'>
				<div className='footer-item'>
					<StarIcon className='blue' />
					<span className='blue'>Trending</span>
				</div>
				<div className='footer-item'>
					<SettingsIcon />
					<span>Settings</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
