import React from 'react';
import { Link } from 'react-router-dom';
import css from './styles.module.scss';

class GridExampleMenu extends React.Component {

    render(){
        return(
            <ul className={css.gridExampleMenu}>
                <li><Link to="/example-1">Example #1</Link></li>
                <li><Link to="/example-2">Example #2</Link></li>
                <li><Link to="/example-3">Example #3</Link></li>
            </ul>
        )
    }
}

export default GridExampleMenu;