import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-200 drop-shadow-lg">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl">SELF-TEST</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <Link to='/'></Link>
                        <li><Link to='/Topic'>Topic</Link></li>
                        <li><Link to='/Statistics'>Statistics</Link></li>
                        <li><Link to='/Blog'>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;