import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import styles from '../styles/posts.module.css'

export default function Filter({ChangeOnFilter,postsMemo}) {

const [filter,setFilter]=React.useState('')

    return (
        <div className='flex justify-center'>
            <div className={`flex justify-between items-center ${styles.filter}`} style={{ width: '40vw' }}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label"
                        sx={{ color: 'var(--primary)',
                            '&.Mui-focused': {
                              color:'var(--primary)',
                            },
                         }}
                    >Sort By</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={filter}
                        label="Sort By"
                        onChange={(e) => {
                            setFilter(e.target.value)
                            ChangeOnFilter(e.target.value)
                        }}
                        sx={{
                            '& .MuiSelect-select': {
                                color: '#555',
                            },
                            "& .MuiSvgIcon-root": {
                                color: "var(--primary)",
                            },
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: '#555',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'var(--primary)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#999',
                            },
                        }}
                    >
                        <MenuItem value={'new'}>Newest First</MenuItem>
                        <MenuItem value={'old'}>Oldest First</MenuItem>
                    </Select>
                </FormControl>
                <div style={{color:'var(--primary)'}}>{postsMemo} Post</div>
            </div>
        </div>
    )
}