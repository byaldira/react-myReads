import React, { Component } from 'react'
import Book from './Book';
import PropTypes from 'prop-types';

class BookList extends Component {

  state = {
    shelves: [
      {
        title: 'Currently Reading',
        id: 'currentlyReading'
      },
      {
        title: 'Want To Read',
        id: 'wantToRead'
      },
      {
        title: 'Read',
        id: 'read'
      }
    ]
  }

  constructor(props) {
    super(props);
    console.log(this.props.allBooks);
  }




  render() {
    const shelfTypes = [
      { id: 'currentlyReading', title: 'Currently Reading' },
      { id: 'wantToRead', title: 'Want to Read' },
      { id: 'read', title: 'Read' }
    ];
    const { allBooks, changeShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-content">
          {
          shelfTypes.map((shelf, index) => {
            const shelfBooks = allBooks.filter(kitap => kitap.shelf === shelf.id);
            return (
              <div className="bookshelf" key={index}>
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    shelfBooks.map((kitap,index) => {
                      return <Book key={kitap.id} kitap={kitap} changeBookShelf={changeShelf} allBooks={this.props.allBooks} />
                    })
                   
                   }
                   </ol>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  allBooks: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default BookList;
