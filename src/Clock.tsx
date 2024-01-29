import { useEffect, useState } from "react";


export const Clock = () => {

	const [date, setDate] = useState(new Date());

	const hour = date.getHours() * 30  // Move 30degree on first hour, 60 degree on second and so on. 
	const minute = date.getMinutes() * 6 //same as above.
	const second = date.getSeconds() * 6 //same as above.

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const [actualClock, setActualClock] = useState(true);

	const changeClock = (bool: boolean) => {
		actualClock ? setActualClock(bool) : setActualClock(bool);
		console.log(actualClock)
	};


	return (
		<>
			{actualClock ?
				<div className="clock">
					<div className="hour-hand"
						style={{ transform: "rotate(" + hour + "deg)" }}
					></div>
					<div className="minute-hand"
						style={{ transform: "rotate(" + minute + "deg)" }}
					></div>
					<div className="second-hand"
						style={{ transform: "rotate(" + second + "deg)" }}
					></div>
				</div>
				:
				`${hour / 30}:${minute / 6}:${second / 6}`
		}
			<button onClick={() => changeClock(true)}>analog clock</button>
			<button onClick={() => changeClock(false)}>digital clock</button>
		</>
	)
};