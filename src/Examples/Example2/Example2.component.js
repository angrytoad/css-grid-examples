import React from 'react';
import css from './styles.module.scss';

function Example2() {
    return (
        <>
        <h2>EXAMPLE #2 - Grid Areas</h2>
        <div className={css.example2}>
            <div className={css.header}>Header</div>
            <div className={css.promoVideo}>Promo Video</div>
            <div className={css.moreVideos}>More Videos</div>
            <div className={css.sideBar}>Side Bar</div>
            <div className={css.anotherArticle}>Another Article</div>
            <div className={css.footer}>Footer</div>
            <div className={css.overlay}>Don't mind me, im just an overlay</div>
        </div>
        </>
    )
}

export default Example2;