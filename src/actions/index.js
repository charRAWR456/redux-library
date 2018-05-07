export function selectBook(book){
// selectBook is an actionCreator it need to return an action,an object with a type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  }
  console.log('book has been selected: ', book.title);
}
