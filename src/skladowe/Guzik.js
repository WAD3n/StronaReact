import React from 'react';
import './Guzik.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];
const SIZES = ['btn--medium','btn--large'];

export const Guzik = ({childer, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : Sizes[0]
};