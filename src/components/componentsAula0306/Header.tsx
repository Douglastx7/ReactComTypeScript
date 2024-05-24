import React from 'react'
import { useUser } from './contexts/UserContext';

const Header = () => {
    const {data} = useUser();
    if(!data) return null;
    return (<div>{data.nome}</div>)
}

export default Header;