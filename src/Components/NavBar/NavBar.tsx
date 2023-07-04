import { FC } from 'react';
import { Typography, Stack } from '@mui/material'

interface Props {

}

let NavBar: FC<Props> = ({ }) => {
    return (
        <>
            <Stack width={'100%'} sx={{backgroundColor:'primary.main'}}>
                <Typography>Hello</Typography>
            </Stack>
        </>
    )
}

export default NavBar;