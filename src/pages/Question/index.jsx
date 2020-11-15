import React from 'react';

import HeaderQuestion from '../../components/HeaderQuestion';

function getColorTheme(theme) {
    switch(theme) {
        case 'theme-01':
            return '#2878CD';
        case 'theme-02':
            return '#F99933';
        case 'theme-03':
            return '#9541B8';
        case 'theme-04':
            return '#25C96F';
        case 'theme-05':
            return '#F52B37';
        case 'theme-06':
            return '#F44DB0';
        default:
            return ''
    }
}

function Question() {
    return(
        <HeaderQuestion color={ getColorTheme('theme-01') } />
    );
}

export default Question;