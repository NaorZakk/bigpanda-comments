import React from 'react';

import TextField from '@material-ui/core/TextField';


function FilterForm(props) {
    const { filterInput, setFilterInput } = props;

    return (
        <form>
            <TextField
                label="Filter By Email"
                value={filterInput}
                onChange={(e) => setFilterInput(e.target.value)}
                margin="normal"
                variant="outlined"
                fullWidth={true}
            />
        </form>
    );
}

export default FilterForm;