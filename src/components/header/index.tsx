import React from "react";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectCount, increment, decrement } from "../../store/todo";

type HeaderProps = {
  wide: boolean;
};

const Header = ({ wide }: HeaderProps): JSX.Element => {
  const count: number = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const onIncrementClick = () => dispatch(increment());

  const onDecrementClick = () => dispatch(decrement());

  return (
    <div>
      <h4>
        {count} {wide}{" "}
      </h4>
      <Button variant="contained" onClick={onIncrementClick}>
        Increase Count
      </Button>
      <Button variant="contained" onClick={onDecrementClick}>
        Decrease Count
      </Button>
    </div>
  );
};

export default Header;
