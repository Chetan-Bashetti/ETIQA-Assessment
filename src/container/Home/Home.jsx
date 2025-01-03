import React from 'react';

import Card from 'components/Card/Card';
import useGetRepoDetails from 'hooks/useGetRepoDetails';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularProgress from '@mui/material/CircularProgress';

import './Home.css';

const Home = () => {
	const { repos, totalRecords, isLoading, getTrendingRepos, isLoadingMore } =
		useGetRepoDetails();

	React.useEffect(() => {
		getTrendingRepos(false);
	}, []);

	return (
		<div className='home-wrapper'>
			<div className='header'>Trending Repos</div>
			<div className='cards-wrapper'>
				{isLoading ? (
					<div className='loader'>
						<CircularProgress />
					</div>
				) : (
					<InfiniteScroll
						dataLength={repos?.length || 30}
						next={() => getTrendingRepos(true)}
						hasMore={totalRecords > repos.length}
						loader={
							isLoadingMore ? (
								<div className='records-loading'>
									<CircularProgress />
								</div>
							) : (
								<></>
							)
						}
						endMessage={
							<>
								<div>All records loaded</div>
							</>
						}
					>
						{repos?.map((eachRepo) => (
							<Card repoDetails={eachRepo} key={eachRepo.id} />
						))}
					</InfiniteScroll>
				)}
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
