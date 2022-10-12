import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from './hero';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-200 drop-shadow-lg">
                <div className="flex-1">
                    <div>

                        <a href='/' className="btn btn-ghost normal-case text-xl"> <img className='w-10 h-10 m-2' src={require('../../images/favicon.png')} alt="" />SELF {' '}<span className='text-yellow-400 pl-2'>TEST</span></a>
                    </div>
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
            <br />

        </div>
    );
};

export default Header;