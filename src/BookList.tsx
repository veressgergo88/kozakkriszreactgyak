import React, {Component} from 'react'
import Book from './Book'

class BookList extends Component {
    state = {
        books: [
            {
                title: "Avatar",
                isbn: 'abc123'
            },
            {
                title: "Star Wars",
                isbn: 'abc456'
            },
            {
                title: "Peaceful Warrior",
                isbn: 'abc789'
            }
        ]
    }
    
    constructor() {
        super()
        console.log(1)
    }
    
    componentWillMount() {
        console.log(2)
    }

    componentDidMount(){
        console.log(4)
    }
    
    render() {
        console.log(3)
        return(
            /* Megoldás alapverzió
            <div>
                {this.state.books.map( (book, index) => {
                   return <div key={index}>{book.title}</div>
                } )}
            </div>
            */
            <div>
                {this.state.books.map( (book, index) => (<Book book={book} key={index} />) )}
            </div>
        )
    }
}

export default BookList