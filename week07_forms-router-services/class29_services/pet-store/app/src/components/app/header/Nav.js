import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const NavItem = ({ name, to }) => (
  <li>
    <Link to={to}>{name}</Link>
  </li>
);

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <NavItem to='/' name='Home'/>
        <NavItem to='/stores' name='Stores'/>
        <NavItem to='/pets' name='Pets'/>
        <NavItem to='/toys' name='Toys'/>
      </ul>
    </nav>
  );
}