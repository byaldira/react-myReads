import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {

    updateShelf = event =>
        this.props.changeBookShelf(this.props.bookWillUpdate, event.target.value);

    render() {

        const { bookWillUpdate, allBooks } = this.props;

        // get shelf and set if exists.
        let currentShelf = 'none'; // = bookWillUpdate.shelf; won't work cause' search components  

        //console.log(currentShelf);
        for (let item of allBooks) {
            if (item.id === bookWillUpdate.id) {
                currentShelf = item.shelf;
                //     console.log('aranan kitap list için de bulundu :' + item.id + ' --> ' + item.shelf );
                break;
            }

        }

        return (
            <div>
                <div className="book-shelf-changer" >
                    <select onChange={this.updateShelf} value={currentShelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
        )
    }
}

BookShelfChanger.propTypes = {
    bookWillUpdate: PropTypes.object.isRequired,
    changeBookShelf: PropTypes.func.isRequired,
    allBooks: PropTypes.array.isRequired
}

export default BookShelfChanger;