import React from 'react'
import '../Styles/App.css'
import * as BooksAPI from '../Source/BooksAPI';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

import SearchBook from './SearchBook';
import BookList from './BookList';

class BooksApp extends React.Component {
  state = {
    allBooks : []
  }

  handleSearchFilter = value =>{
    this.setState({showSearchPage : false});
  }


  componentDidMount(){
    BooksAPI.getAll().then((kitaplar) =>{
      
      this.setState(() => ({
        allBooks : kitaplar
      }))
    });
    
  }

  changeShelf = (willaddBook, shelf) => {
    BooksAPI.update(willaddBook, shelf).then(response => {
      // set shelf for new or updated book
      willaddBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        allBooks: prevState.allBooks
          // remove updated book from array
          .filter(kitap => kitap.id !== willaddBook.id)
          // add updated book to array
          .concat(willaddBook)
      }));
    });
  };
  
  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={() => (
              <SearchBook allBooks={this.state.allBooks} changeShelf={this.changeShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>My Reads</h1>
                </div>
                <BookList allBooks={this.state.allBooks} changeShelf={this.changeShelf} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp
