import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favorites } from './components/favorites/favorites';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <Container />
            <Favorites />
        </div>
    );
}

export default App;
