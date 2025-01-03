import Card from 'components/Card/Card';
import useGetRepoDetails from 'hooks/useGetRepoDetails';

const Home = () => {
	const { repos, pageNum } = useGetRepoDetails();
	return (
		<div>
			<div>Trending Repos</div>
			<div>
				{repos?.map((eachRepo) => (
					<Card repoDetails={eachRepo} />
				))}
			</div>
			<div>Footer</div>
		</div>
	);
};

export default Home;
