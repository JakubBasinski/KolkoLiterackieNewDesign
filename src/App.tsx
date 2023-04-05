import React from 'react';
import styles from './App.module.scss';
import { Menu } from './components/menu/Menu';
import { AnimatedRoutes } from './components/animatedRoutes/AnimatedRoutes';
import { useState } from 'react';

function App() {
    const [menuMiniDisplay, setMenuMiniDisplay] = useState(true);

    const handleSetMenu = (e: boolean) => {
        setMenuMiniDisplay(e);
    };

    return (
        <div className={styles.App}>
            <Menu handleSetMenu={handleSetMenu} menuMiniDisplay={menuMiniDisplay} />
            <AnimatedRoutes   menuMiniDisplay={menuMiniDisplay} handleSetMenu={handleSetMenu} />
        </div>
    );
}

export default App;
