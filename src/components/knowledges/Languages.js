import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
	state = {
		languages: [
			{ id: 1, value: 'javaScript', xp: 1 },
			{ id: 2, value: 'nodeJS', xp: 0.8 },
			{ id: 3, value: 'python', xp: 0.2 },
		],
		frameworks: [
			{ id: 1, value: 'express', xp: 0.8 },
			{ id: 4, value: 'nextjs', xp: 0.3 },
			{ id: 2, value: 'react', xp: 0.4 },
			{ id: 3, value: 'django', xp: 0.2 },
		],
	};
	render() {
		let { languages, frameworks } = this.state;
		return (
			<div className="languagesFrameworks">
				<ProgressBar
					languages={languages}
					className="languagesDisplay"
					title="languages"
				/>
				<ProgressBar
					languages={frameworks}
					title="frameworks & bibliothèques"
					className="frameworksDisplay"
				/>
			</div>
		);
	}
}

export default Languages;
