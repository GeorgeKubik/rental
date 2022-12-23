import styles from './FlatCard.module.scss';
	import { IFlats } from '../../variables/variablesFlats'; 
	interface FlatCardProps {
		flats: IFlats
	}

	const FlatCard = ({flats}: FlatCardProps) => {
		return (
			<>
				<div>
					{flats.descr}
				</div>
			</>
		)
	}

	export default FlatCard;