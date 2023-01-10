export interface IFlats {
	img: string;
	city: string;
	street: string;
	district: string;
	rooms: number;
	price: number;
	descr: string;
	numberOfPeople: number;
	squareMeter: number;
	metro: string;
	additionally: string;
	id: number;
}

export interface INews {
	img: string;
	title: string;
	data: string;
	id: number
}

/* export interface ServerResponse<T> {
	flats: T[]
} */