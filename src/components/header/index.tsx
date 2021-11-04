import React from 'react';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCount, increment, decrement } from '../../store/todo';

type HeaderProps = {
    wide: boolean
}

const Header = ({ wide }: HeaderProps): JSX.Element => {

    const count: number = useAppSelector(selectCount)
    const dispatch = useAppDispatch();

    return (
        <div>
            <h4>{ count }</h4>
            <Button
                variant="contained"
                onClick={()=> dispatch(increment())}
            >
                Increase Count
            </Button>
            <Button
                variant="contained"
                onClick={()=> dispatch(decrement())}
            >
                Decrease Count
            </Button>
        </div>  
    );
};

export default Header;