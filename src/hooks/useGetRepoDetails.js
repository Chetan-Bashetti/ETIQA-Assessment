import React from 'react';
import axios from 'axios';

const useGetRepoDetails = () => {
	const [repos, setRepos] = React.useState([]);
	const [pageNum, setPageNum] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		getTrendingRepos();
	}, [pageNum]);

	const getTrendingRepos = async () => {
		let currentDate = '2024-07-15';
		try {
			setIsLoading(true);
			let response = await axios({
				method: 'get',
				url: `${process.env.REACT_APP_API_URL}q=created:>${currentDate}&amp;sort=stars&amp;order=desc`
			});
			console.log('Repos', response?.data?.items);
			setRepos(response?.data?.items);
			setIsLoading(false);
		} catch (e) {
			console.log(e);
			setIsLoading(false);
		}
	};

	return { repos, pageNum, isLoading };
};

export default useGetRepoDetails;
