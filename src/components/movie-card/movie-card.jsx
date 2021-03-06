import React from 'react';
import PropTypes from 'prop-types';

import './movie-card.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

export class MovieCard extends React.Component {
	render() {
		const { movie, onClick } = this.props;

		return (
			<CardDeck className="movie-card-deck">
				<Container>
					<Card className="movie-card" style={{ width: '16rem', flex: 1 }} className="movie-card mb-3">
						<Card.Img variant="top" src={movie.ImagePath} />
						<Card.Body className="movie-card-body">
							<Card.Title className="movie-card-title">{movie.Title}</Card.Title>
							<Card.Text className="movie-text">{movie.Description}</Card.Text>
							<Button className="movie-card-button" onClick={() => onClick(movie)} variant="button">
								Open
							</Button>
						</Card.Body>
					</Card>
				</Container>
			</CardDeck>
		);
	}
}

MovieCard.propTypes = {
	movie: PropTypes.shape({
		Title: PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired,
		Genre: PropTypes.shape({
			Name: PropTypes.string.isRequired,
			Description: PropTypes.string.isRequired,
		}),
		Director: PropTypes.shape({
			Name: PropTypes.string.isRequired,
			Bio: PropTypes.string.isRequired,
			Birth: PropTypes.string.isRequired,
		}),
		ImagePath: PropTypes.string.isRequired,
		Featured: PropTypes.bool,
	}).isRequired,
	onClick: PropTypes.func.isRequired,
};
