import React from 'react';
import '../styles/Pagination.css';

function Pagination({ currentPage, pages, setCurrentPage }) {
  return (
    <div className="pagination">
      {Array.from(Array(pages), (item, index) => {
        return (
          <div>
            <button className='btn'
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
              style={
                index === currentPage
                  ? { backgroundColor: '#D2202C' }
                  : { backgroundColor: '#FAFAFA' }
              }
            >
              {index + 1}
            </button>
          </div>
        );
      })}
      <button
        onClick={(e) => setCurrentPage(console.log(e.target))}
      >
        Próximo{'>'}
      </button>
    </div>
  );
}

export default Pagination;
