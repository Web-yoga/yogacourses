import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import General from './routes/General/General';
import Courses from './routes/Courses/Courses';
import Shop from './routes/Shop/Shop';
import News from './routes/News/News';
import ContextData from './context/Data/ContextData';
import ReduserData from './context/Data/ReducerData';
import StateData from './context/Data/SateData';


function App() {
	const [stateData, dispatchData] = React.useReducer(ReduserData, StateData)
  return (
	  <div>
		  <ContextData.Provider value={{stateData, dispatchData}}>
		<Routes>
			
				<Route path="/" element={<General />} />
				<Route path="/courses" element={<Courses/>} />
				<Route path="/shop" element={<Shop/>} />
				<Route path="/news" element={<News/>} />
			
		</Routes>
		</ContextData.Provider>
	  </div>

  );
}

export default App;
