/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Loader from 'components/Loader/Loader';
import Home from './Home/Home';
import useGetRepoDetails from 'hooks/useGetRepoDetails';

// STYLES
import './index.css';

export const AppContext = React.createContext();

const Wrapper = () => {
	const { isLoading } = useGetRepoDetails();

	return (
		<AppContext.Provider>
			{isLoading && (
				<div className='loader-wrapper'>
					<Loader />
				</div>
			)}
			<div className='main-wrapper'>
				<Home />
			</div>
		</AppContext.Provider>
	);
};

export default Wrapper;
