import React from 'react';
import css from './styles.module.scss';

function Example1() {
    return (
        <>
        <h2>EXAMPLE #1 - Basic Grid Definition</h2>
        <div className={css.example1}>
            <div className={css.header}>I want to be the header!</div>
            <div className={css.article}>Article 1</div>
            <div className={css.article}>Article 2</div>
            <div className={css.article}>Article 3</div>
            <div className={css.article}>I'm a footer</div>
        </div>
        </>
    )
}

export default Example1;