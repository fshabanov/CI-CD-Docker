import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import trips from "src/data/trips.json";
import filterDuration from "src/helpers/filterDuration";
import Trip from "./Trip";

interface Props {
	search: string;
	duration: string;
	level: string;
}

const Trips: React.FC<Props> = ({ duration, level, search }) => {
	const [filteredTrips, setFilteredTrips] = useState(trips);

	useEffect(() => {
		const filtered = trips.filter((trip) => {
			return (
				trip.title.toLowerCase().includes(search.toLowerCase()) &&
				filterDuration(duration, trip) &&
				trip.level.includes(level)
			);
		});
		setFilteredTrips(filtered);
	}, [search, duration, level]);

	return (
		<section className="trips">
			<h2 className="visually-hidden">Trips List</h2>
			<ul className="trip-list">
				{filteredTrips.map((trip) => (
					<Trip trip={trip} key={trip.id} />
				))}
			</ul>
		</section>
	);
};

export default Trips;
