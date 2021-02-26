import React from 'react';

const Hobbies = () => {
	return (
		<div className="hobbies">
			<h3>Intérets</h3>
			<ul>
				<li className="hobby">
					<i className="fas fa-coins"></i>
					<span>Détecteur de métaux</span>
				</li>
				<li className="hobby">
					<i className="fas fa-hard-hat"></i>
					<span>Béhourd</span>
				</li>
				<li className="hobby">
					<i className="fab fa-ubuntu"></i>
					<span>Ubuntu</span>
				</li>
				<li className="hobby">
					<i className="fas fa-gamepad"></i>
					<span>Geek</span>
				</li>
				<li className="hobby">
					<i className="fas fa-dumbbell"></i>
					<span>CrossFit</span>
				</li>
			</ul>
		</div>
	);
};

export default Hobbies;
