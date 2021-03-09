import React from 'react'

const Pagination = ({GoToNext, preview}) => {
    return(
        <>
            {preview && <button class="BtnPagination" onClick={preview}>Previous</button>}
            {GoToNext && <button class="BtnPagination" onClick={GoToNext}>Next</button>}
        </>
    );
}
export default Pagination;