import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { AnimatedRoutes } from './components/animatedRoutes/AnimatedRoutes';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <AnimatedRoutes />
        </div>
    );
}

export default App;
