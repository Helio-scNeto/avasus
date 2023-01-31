import React from 'react';
import '../styles/Pagination.css';

function Pagination({
  currentPage,
  setCurrentPage,
  pages,
  itensPerPage,
  offset,
  setOffset,
}) {
  const MAX_ITEMS = 5;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  const first = Math.max(currentPage - MAX_LEFT, 1);

  async function onPageChange(e) {
    try {
      await setCurrentPage(Number(e.target.value));
      await setOffset((Number(currentPage) - 1) * itensPerPage);
    } catch (error) {
      'Whats happening?' + error;
    }
  }

  function ProximoBtn(e) {
    setOffset((Number(currentPage) + 1) * itensPerPage);
    setCurrentPage(Number(e.target.value) + 1);
  }

  return (
    <div className="pagination">
      {Array.from({ length: Math.min(MAX_ITEMS), pages })
        .map((_,index) => index + first)
        .map((page) => {
          return (
            <div key={page}>
              <button
                className="pagination-btn-historia2"
                value={page}
                onClick={(e, page) => onPageChange(e, page)}
                style={
                  page === currentPage
                    ? { backgroundColor: '#D2202C' }
                    : { backgroundColor: '#FAFAFA' }
                }
              >
                {page}
              </button>
            </div>
          );
        })}
      <button className="pagination-btn-historia2">...</button>
      <button
        className="pagination-btnProximo-historia2"
        value={currentPage}
        onClick={(e) => ProximoBtn(e)}
        disabled={currentPage === pages - 1}
      >
        Próximo{'>'}
      </button>
    </div>
  );
}

export default Pagination;
