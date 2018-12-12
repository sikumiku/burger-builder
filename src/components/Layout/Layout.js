import React from 'react';
import Aux from '../../hoc/Auxilliary';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, sideDrawer, backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;