import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/gudang">
            <a>Gudang</a>
        </Link>
        <Link href="/gudang">
            <a>Production</a>
        </Link>
        <Link href="/gudang">
            <a>Distributor</a>
        </Link>
    </div>
)

export default Nav;