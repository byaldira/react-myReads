import React, { Component } from 'react'
import Book from './Book';
import PropTypes from 'prop-types';

class BookList extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.allBooks);
  }


  render() {
    //const { allbooks } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  this.props.allBooks.filter(kitap => kitap.shelf === 'currentlyReading').map(kitap => {
                    return <Book key={kitap.id} kitap={kitap} changeBookShelf={this.props.changeShelf} allBooks={this.props.allBooks}/>
                  })
                }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  this.props.allBooks.filter(kitap => kitap.shelf === 'wantToRead').map(kitap => {
                    return <Book key={kitap.id} kitap={kitap}  changeBookShelf={this.props.changeShelf}  allBooks={this.props.allBooks}/>
                  })
                }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  this.props.allBooks.filter(kitap => kitap.shelf === 'read').map(kitap => {
                    return <Book key={kitap.id} kitap={kitap} changeBookShelf={this.props.changeShelf}  allBooks={this.props.allBooks}/>
                  })
                }
              </ol>
            </div>
          </div>
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
