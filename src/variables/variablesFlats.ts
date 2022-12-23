export interface IFlats {
	img: string;
	town: string;
	street: string;
	district: string;
	rooms: number;
	price: number;
	descr: string;
	numberOfPeople: number;
	id: number;
}

export interface ServerResponse<T> {
	flats: T[]
}