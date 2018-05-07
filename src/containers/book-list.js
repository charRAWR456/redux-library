import React, { Component } from  'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
         className="list-group-item">
         {book.title}</li>
      );
  });
}

  render () {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return{
    // whatever is returned will show up as props inside of booklist
    books: state.books
  }
}

// anything returned from this function will end up as props on the booklist container
function mapDispatchToProp(dispatch){
  // when selectvook is called result should be pass to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// promote booklist from component to container- it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProp)(BookList);
