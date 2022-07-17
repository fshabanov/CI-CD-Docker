import React from "react";
import spinner from "src/assets/images/spinner.svg";

interface Props {}

const Loading: React.FC<Props> = () => {
	return (
		<div className="loader_container">
			<div className="loader"></div>
		</div>
	);
};

export default Loading;
