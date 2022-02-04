import React from 'react';
//импорт стилевых компонент
import Pagination from '@mui/material/Pagination';

const styles = {
    paginator: {
        marginTop: 2,
        marginBottom: 2,
        '& .MuiPagination-ul': {
            justifyContent: 'center'
        }
    }
}

export function Paginator({totalPages, page, setPage}) {
    return (
        <Pagination
            sx={styles.paginator}
            onChange={(event,page) => setPage(page)}
            page={page}
            count={totalPages}
            variant="outlined"
            color="primary" />
    )
};