import React from "react";
import "./Song.css";
import moment from "moment";

import { Col, Card, Button } from "react-bootstrap";
const Song = ({ songProp }) => {
	const handleClick = (e) => {
		e.preventDefault();

		let audio = new Audio(songProp.song);
		audio.play();
	};
	return (
		<Col>
			<Card className="text-center m-2">
				<Card.Header></Card.Header>
				<Card.Body>
					<Card.Title>{songProp.songName}</Card.Title>

					<Button variant="primary" onClick={handleClick}>
						<i class="fa fa-play-circle" aria-hidden="true"></i>
					</Button>
				</Card.Body>
				<Card.Footer className="text-muted">
					{moment(songProp.createdAt).fromNow()}
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default Song;
