import { useContext } from 'react';
import ContextData from './../../context/Data/ContextData';

const General = () => {
	const {stateData} = useContext(ContextData)
	console.log(stateData)
	return (
		<div>General</div>
	)
}

export default General;