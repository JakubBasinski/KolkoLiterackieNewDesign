import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { AnimatedRoutes } from './components/animatedRoutes/AnimatedRoutes';
import { useLocation } from 'react-router-dom';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <AnimatedRoutes />
        </div>
    );
}

export default App;
