import React from 'react';
import styles from './App.module.scss';
import { Menu } from './components/menu/Menu';
import { AnimatedRoutes } from './components/animatedRoutes/AnimatedRoutes';
import { useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
    const [menuMiniDisplay, setMenuMiniDisplay] = useState(true);

    const handleSetMenu = (e: boolean) => {
        setMenuMiniDisplay(e);
    };

    return (
        <div className={styles.App}>
            <Menu handleSetMenu={handleSetMenu} menuMiniDisplay={menuMiniDisplay} />
            <AnimatedRoutes menuMiniDisplay={menuMiniDisplay} handleSetMenu={handleSetMenu} />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </div>
    );
}

export default App;
