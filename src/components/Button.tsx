import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const {name, callBack}=props
    const onclickHandler = () => {
        callBack()
    }
    return (
        <button onClick={onclickHandler}>{name}</button>
    );
};

export default Button;