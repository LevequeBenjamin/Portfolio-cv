import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
	return (
		<div className="contact">
			<Navigation />
			<div className="contactContent">
				<div className="header"></div>
					<div className="contactBox">
						<h1>Contactez-moi</h1>
						<ul>
							<li>
								<i className="fas fa-map-marker-alt"></i>
								<span>Annecy</span>
							</li>
							<li>
								<i className="fas fa-mobile-alt"></i>
								<CopyToClipboard text="+330642828806">
									<span
										className="clickInput"
										onClick={() => {
											alert('Téléphone copié !');
										}}
									>
										+33 06 42 82 88 06
									</span>
								</CopyToClipboard>
							</li>
							<li>
								<i className="fas fa-envelope"></i>
								<CopyToClipboard text="benjaminleveque@ik.me">
									<span
										className="clickInput"
										onClick={() => {
											alert('Email copié !');
										}}
									>
										benjaminleveque@ik.me
									</span>
								</CopyToClipboard>
							</li>
						</ul>
					</div>
					<div className="socialNetwork">
						<ul>
							<li>
								<a
									href="https://www.google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
                  <h4>Linkedin</h4>
									<i className="fab fa-linkedin"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
                  <h4>GitHub</h4>
									<i className="fab fa-github"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
                  <h4>Twitter</h4>
									<i className="fab fa-twitter"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.google.com"
									target="_blank"
									rel="noopener noreferrer"
								>
                  <h4>Codepen</h4>
									<i className="fab fa-codepen"></i>
								</a>
							</li>
						</ul>
					</div>
				
			</div>
		</div>
	);
};

export default Contact;
