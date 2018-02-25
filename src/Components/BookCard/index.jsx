import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: this.props.like === 0 ? 0 : 1,
    };
  }

  handleLike(bookid) {
    const url = this.state.like === 0 ? `/opinion/${bookid}/1` : `/opinion/${bookid}/0`;
    fetch(url, {
      method: 'PUT',
    }).then(() => {
      this.setState({
        like: this.state.like === 0 ? 1 : 0,
      });
    });
  }


  render() {
    return (
      <div className="BookCard">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg"
          className="Book-img"
          alt="Book"
        />
        <div className="Book-info">
          <button
            className={this.state.like === 1 ? 'Book-like-button-liked' : 'Book-like-button'}
            onClick={() => this.handleLike(this.props.bookid)}
          >
            <i className="material-icons">favorite</i>
          </button>
          {/* {console.log('this is the stuff', this.props.books)} */}

          <p className="Book-name" >{this.props.name}</p>
          <p className="Book-rating" >{this.props.rating}</p>
          <p className="Book-author" >{this.props.author}</p>
        </div>
      </div>
    );
  }
}

BookCard.propTypes = {
  bookid: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
};

BookCard.defaultProps = {
  book: {},
};

export default BookCard;
