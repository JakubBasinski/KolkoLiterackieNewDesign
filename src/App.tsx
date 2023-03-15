import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favorites } from './components/favorites/favorites';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <Routes>
                {/* <Route path="/*" element={<Menu />} /> */}
                <Route path="/books" element={<Container />} />
                <Route path="/fav" element={<Favorites />} />
            </Routes>
        </div>
    );
}

export default App;
