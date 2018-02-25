import React from 'react';
import GroupedBooks from '../GroupedBooks';
import './index.css';
import NoBooks from '../NoBooks';


class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      books: {},
    };

    this.getBooksFromDB();
  }
  onSync() {
    const url = '/sync';
    fetch(url, {
      method: 'PUT',
      // body: JSON.stringify(this.props.notes),
    }).then(() => {
      this.getBooksFromDB();
    });
  }

  getBooksFromDB() {
    fetch('/readDb', {
      method: 'GET',
    }).then(response => response.json())
      .then((booksObj) => {
        // console.log('pari', booksObj);

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
          Object.keys(this.state.books).length === 0 ?
            <NoBooks onSync={() => this.onSync()} /> :
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
