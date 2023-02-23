import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <NavLink to="/">Consultation</NavLink>
                </li>
                <li>
                    <NavLink to="/add-ouvrage">Ajouter Ouvrage</NavLink>
                </li>
                <li>
                    <NavLink to="/mod-sup-fil"> Modifier Rechercher Supprimer </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
