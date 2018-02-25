import React from 'react';
import GroupedBooks from '../GroupedBooks';
import './index.css';


class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      books: {},
    };

    this.getBooksFromDB();
  }
  getBooksFromDB() {
    // fetch('/join', {
    //   method: 'PUT',
    // }).then(response => response.json())
    //   .then((booksObj) => {
    //     // console.log('aditi', booksObj);

    //     this.setState({
    //       books: booksObj,
    //     });
    //     console.log('>>>>', this.state.books);
    //   });
    fetch('/readDb', {
      method: 'GET',
    }).then(response => response.json())
      .then((booksObj) => {
        // console.log('aditi', booksObj);

        this.setState({
          books: booksObj,
        });
        console.log('>>>>', this.state.books);
      });
  }

  render() {
    return (
      <div className="Body">
        {

          Object.keys(this.state.books).map(author =>
              // console.log('hello', this.state.books[author]);
              (
                <GroupedBooks
                  author={author}
                  books={this.state.books[author]}
                  key={author}
                />
              ))
        }
      </div>
    );
  }
}

export default Body;
