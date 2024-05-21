import React from 'react'
import { useUi } from './contexts/UiContext';

const Header = () => {
    const {setDark} = useUi();
    return <button onClick={() => setDark((b) => !b)}>Modo</button>;
}

export default Header;