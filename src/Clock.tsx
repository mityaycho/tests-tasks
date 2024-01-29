

export const Clock = () => {

	const date = new Date();

	return (
		<>
		{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
		<button>analog clock</button>
		<button>digital clock</button>
		</>
	)
};