/**
 * Компонент поискового запроса
*/

function Search() {
    return (
      <div className='search__form'>
        <form>
          <div className='search'>
            <input
              type='text'
              className='form-control'
              placeholder=' '
            />
            <button type='submit' className='btn btn-primary'>
            Искать
            </button>
          </div>
        </form>
      </div>
    );
  }
  export default Search;