import React from 'react';
import PropTypes from 'prop-types';
import BookCard from '../BookCard';
import './index.css';

const GroupedBooks = (props) => {
  console.log('yaaar', props.author);

  return (
    <div className="GroupedBooks">
      <h2 className="Grouped-author">
        {props.author}
      </h2>
      <div className="GroupedBooks-pane">
        {props.books.map(book =>
        //   console.log('array', book);
(
  <BookCard
    name={book.name}
    author={book.author}
    bookid={book.bookid}
    rating={book.rating}
    like={book.like}
  />
))}
        {console.log('han han', props.books)}
      </div>
      {/* <BookCard books={props.books} /> */}
    </div>
  );
};

GroupedBooks.propTypes = {
  author: PropTypes.arrayOf(),
  books: PropTypes.arrayOf(),
};

GroupedBooks.defaultProps = {
  author: [],
  books: [],
};

export default GroupedBooks;
