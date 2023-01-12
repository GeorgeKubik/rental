import styles from './App.module.scss';
import Header from '../Header/index';
import MainPage from '../pages/MainPage/index';
import Footer from '../Footer/index';
import FlatsPage from '../pages/FlatsPage/index';
import HousePage from '../pages/HousePage/index';
import BothPage from '../pages/BothPage/index';
import AutoPage from '../pages/AutoPage/index';
import NewsPage from '../pages/NewsPage/index';



import {Routes, Route} from 'react-router-dom';



function App() {
	return (
		<>	
			<Header />
					<Routes>
						<Route path='/' element={<MainPage />}/>
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
