import './App.scss';
import Header from '../Header/index';
import MainPage from '../pages/MainPage/index';
import Footer from '../Footer';
import FlatsPage from '../pages/FlatsPage';
import HousePage from '../pages/HousePage';
import BothPage from '../pages/BothPage';
import AutoPage from '../pages/AutoPage';
import NewsPage from '../pages/NewsPage';


import {Routes, Route} from 'react-router-dom';


function App() {
	return (
		<>
			<Header />
				<Routes>
					<Route path='/'element={<MainPage />}/>
					<Route path='flats' element={<FlatsPage />}/>
					{/* <Route path='flats/:id' element={<FlatPage />}/> */}
					<Route path='house' element={<HousePage/>}/>
					{/* <Route path='house/:id' element={<LookHousePage/>}/> */}
					<Route path='both' element={<BothPage/>}/>
					{/* <Route path='both/:id' element={<LookBothPage/>}/> */}
					<Route path='auto' element={<AutoPage/>}/>
					{/* <Route path='auto/:id' element={<LookAutoPage/>}/> */}
					<Route path='news' element={<NewsPage/>}/>
				</Routes>
			<Footer/>
		</>
	);
}

export default App;
