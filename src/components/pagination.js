import React from 'react'

const Pagination = ({GoToNext, preview}) => {
    return(
        <>
            {preview && <button onClick={preview}>Previous</button>}
            {GoToNext && <button onClick={GoToNext}>Next</button>}
        </>
    );
}
export default Pagination;