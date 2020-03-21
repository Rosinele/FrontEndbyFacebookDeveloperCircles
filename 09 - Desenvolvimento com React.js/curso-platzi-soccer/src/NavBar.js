import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './NavBar.css';

const links = [
    {
        to: '/',
        text: 'Home'
    }, {
        to: '/brasileirao',
        text: 'Brasileirão 2019'
    }, {
        to: '/ao-vivo',
        text: 'Espanha x Suíça AO VIVO'
    }
];
const NavBar = () => {
    const isBigEnough = useMediaQuery({ query: "(min-width: 575px)" });
    console.log("isBigEnough");

    const [open, setOpen] = React.useState();
    const appLinks = links.map(l => (
        <a key={l.to} href={l.to} className="nav-link">
            {l.text}
        </a>
    ));
    return (
        <nav className='nav-bar'>
            {isBigEnough ? (
                <div className="nav-big">
                    {appLinks}
                </div>
            ) : (
                    <div className='nav-samll'>
                        <button
                            className='nav-small__button'
                            onClick={() => setOpen(o => !o)}
                            style={{
                                borderBottom: '1px solid ${open ? "#fff" : "transparent"}'
                            }}
                        >
                            MENU
                </button>
                        <div
                            className="nav-small__links"
                            style={{ display: open ? "block" : "none" }}
                        >
                            {appLinks}
                        </div>
                    </div>

                )}

        </nav>
    );
};

export default NavBar;