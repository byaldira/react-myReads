import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from '../Source/BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class SearchBook extends Component {

    state = {
        query: '',
        yeniKitaplar: [],
        searchErr: ''
    };

    updateQuery = (event) => {
        const query = event.target.value;
        this.setState({ query });


        // if user input => run the search
        if (query) {
            BooksAPI.search(query.trim(), 20).then(kitaplar => {
                kitaplar.length > 0
                    ? this.setState({ yeniKitaplar: kitaplar, searchErr: false })
                    : this.setState({ yeniKitaplar: [], searchErr: true });
            });
        } else
            this.setState({ yeniKitaplar: [], searchErr: false });
    }

    render() {

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">
                            Close
                        </Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" onChange={this.updateQuery} />

                        </div>
                    </div>
                    <div className="search-books-results">
                        {
                            this.state.query === '' ? (
                                <div>Please search for book name....</div>) :
                                (
                                    <div>
                                        <ol className="books-grid">
                                            {
                                                this.state.yeniKitaplar.length > 0 ?
                                                        this.state.yeniKitaplar.map(kitap => {
                                                            return <Book key={kitap.id} kitap={kitap} changeBookShelf={this.props.changeShelf} allBooks={this.props.allBooks} />
                                                        })
                                                    :
                                                    this.state.searchErr && (
                                                        <h3>The book you are looking for was not found! </h3>
                                                    )

                                            }
                                        </ol>
                                    </div>
                                )
                        }

                    </div>
                </div>
            </div>
        )
    }
}

SearchBook.propTypes = {
    allBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}
export default SearchBook;