import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <div className="NavBarSection">
                    <nav className="navbar">
                        <ul>
                            <li className="navbar_menu"><Link className='navLinks' to="/home" id="home">Home</Link></li>
                            <li className="navbar_menu"><Link className='navLinks' to="/geography" id="geography">Geography</Link></li>
                            <li className="navbar_menu"><Link className='navLinks' to="/history" id="history">History</Link></li>
                            <li className="navbar_menu"><Link className='navLinks' to="/culture" id="culture">Culture</Link></li>
                            <li className="navbar_menu"><Link className='navLinks' to="/bestplace" id="bestplaces">Best places</Link></li>
                            <li className="navbar_menu"><Link className='navLinks' to="/blog" id="blog">Blog</Link></li>
                            <li className="navbar_menu"><select>
                                <option value="en">English</option> 
                                <option value="ta">Tamil</option>  
                            </select></li>
                        </ul>
                    </nav>
                </div>
        </>
    );
}