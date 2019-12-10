import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/gudang">
            <a>Gudang</a>
        </Link>
        <Link href="/production">
            <a>Production</a>
        </Link>
        <Link href="/distributor">
            <a>Distributor</a>
        </Link>
    </NavStyles>
)

export default Nav;