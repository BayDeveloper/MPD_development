import Nav from './Nav';
import Link from 'next/link';

const Header = () => (
    <div>
        <div className="bar">
            <Link href="/">
                <a>Mineral Group</a>
            </Link>
        </div>
        <Nav/>
        <div className="sub-header">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </div>
)

export default Header; 