import React from 'react';
import Aux from '../../hoc/Auxilliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidebar from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <Sidebar/>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;