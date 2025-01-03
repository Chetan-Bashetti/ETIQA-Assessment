import React from 'react';
import axios from 'axios';

const useGetRepoDetails = () => {
	const [repos, setRepos] = React.useState([]);
	const [pageNum, setPageNum] = React.useState(1);
	const [isLoading, setIsLoading] = React.useState(false);
	const [totalRecords, settotalRecords] = React.useState();
	const [isLoadingMore, setIsLoadingMore] = React.useState(false);

	let currentDate = '2024-07-15';

	const getTrendingRepos = async (hasMore) => {
		let updatedPageNum = hasMore ? pageNum + 1 : '';

		try {
			if (hasMore) setIsLoadingMore(true);
			else setIsLoading(true);
			let response = await axios({
				method: 'get',
				url: hasMore
					? `${process.env.REACT_APP_API_URL}q=created:>${currentDate}&amp;sort=stars&amp;order=desc&page=${updatedPageNum}`
					: `${process.env.REACT_APP_API_URL}q=created:>${currentDate}&amp;sort=stars&amp;order=desc`
			});
			setRepos(
				hasMore ? [...repos, ...response?.data?.items] : response?.data?.items
			);
			settotalRecords(response?.data?.total_count);
			if (hasMore) setPageNum(updatedPageNum);

			if (hasMore) setIsLoadingMore(false);
			else setIsLoading(false);
		} catch (e) {
			if (hasMore) setIsLoadingMore(false);
			else setIsLoading(false);
		}
	};

	return {
		repos,
		pageNum,
		isLoading,
		totalRecords,
		getTrendingRepos,
		isLoadingMore
	};
};

export default useGetRepoDetails;
