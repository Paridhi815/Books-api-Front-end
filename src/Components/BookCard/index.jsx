import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   like: this.props.book.like === t ? t : f,
    };
  }

  // getLikeStatus(index) {
  //   console.log('Books inside onSync:', this.props.allBooksList);
  //   const url = `/like/${this.props.allBooksList[index].bookid}/1`;
  //   fetch(url, {
  //     method: 'PUT',
  //     // body: JSON.stringify(this.props.notes),
  //   }).then(response => response.text())
  //     .then(data => console.log(data));
  // }


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
            className="hi"
            // className={this.state.like === t ? 'Book-like-button-liked' : 'Book-like-button'}
            // onClick={() => this.likeHandler(this.props.book.bookid)}
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
};

BookCard.defaultProps = {
  book: {},
};

export default BookCard;
