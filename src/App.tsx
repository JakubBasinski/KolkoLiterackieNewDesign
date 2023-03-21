import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { AnimatedRoutes } from './components/animatedRoutes/AnimatedRoutes';
import { useLocation } from 'react-router-dom';
import { Doors } from './door/door';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <Doors />
            <AnimatedRoutes />
        </div>
    );
}

export default App;
