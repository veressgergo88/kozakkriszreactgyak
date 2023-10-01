import React, {Component} from 'react'

/* Propertiként átadott értékek, komponensben komponens
const BookTitle = (props) => {
  return <div>{props.title}</div>;
};

const Book = (props) => {
  return (
    <div>
        <BookTitle title={props.title} />
    </div>
  );
};

export default Book;
*/

/* Gyerekének értékét akarjuk megjeleníteni
const BookTitle = (props) => {
    return <div>{props.children}</div>;
  };
  
  const Book = (props) => {
    return (
      <div>
          <BookTitle>{props.title}</BookTitle>
      </div>
    );
  };
  
  export default Book;
*/

class Book extends Component {

    state = {
        a1: true,
        a2: [],
        selected: null
    }

    onClickHandler = (title) => {
        this.setState({
            selected: title
        }, () => {
            console.log(this.state.selected)
        })
    }

    render() {

        const {title, isbn} = this.props.book

        return (
            <div>
                <h2 onClick={ () => this.onClickHandler(title)}>{title}</h2>
                <p>{isbn}</p>
            </div>
        )
    }
}

export default Book