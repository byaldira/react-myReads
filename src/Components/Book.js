import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types'

class Book extends Component {
    render() {
        
        let imageUrl = ''; //this.props.kitap.imageLinks === null ? 'http://via.placeholder.com/640x360' : this.props.kitap.imageLinks.thumbnail;
        const {kitap} = this.props;
        if(kitap.imageLinks)
        {
            imageUrl = this.props.kitap.imageLinks.thumbnail;
        }else{
            imageUrl = 'http://via.placeholder.com/128x193';
            
        }
        return (
            <div key={this.props.kitap.id}>
                <li key={this.props.kitap.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + imageUrl + ")" }}></div>

                            <BookShelfChanger bookWillUpdate={this.props.kitap} changeBookShelf={this.props.changeBookShelf} allBooks={this.props.allBooks} />

                        </div>
                        <div className="book-title">{this.props.kitap.title}</div>
                        <div className="book-authors">
                            {
                                kitap.authors &&  
                                kitap.authors.map(yazar => {
                                    return <label key={this.props.kitap.id + yazar}>{yazar}</label>
                                }) 
                            }
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

Book.propTypes = {
    kitap: PropTypes.object.isRequired,
    changeBookShelf: PropTypes.func.isRequired,
    allBooks: PropTypes.array.isRequired
}

export default Book;