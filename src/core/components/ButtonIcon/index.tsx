import React from 'react';
import './styles.css'

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <button type="submit" className="btn-icon">
        {text}
    </button>
);

export default ButtonIcon;