import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

const handleRouteChangeStart = () => {
    NProgress.start();
}
const handleRouteChangeDone = () => {
    NProgress.done();
}
const handleRouteChangeError = () => {
    NProgress.done();
}

Router.events.on('routeChangeStart', handleRouteChangeStart);
Router.events.on('routeChangeComplete', handleRouteChangeDone);
Router.events.on('routeChangeError', handleRouteChangeError);

const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        padding: 0.5rem 1rem;
        background: ${props => props.theme.red};
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }
    @media (max-width: 1100px) {
        margin: 0.5rem;
        text-align: center;
    }
`;

const StyledHeader = styled.header`
    .bar {
        border-bottom: 10px solid ${props => props.theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
            justify-content:center
        }
    }
    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid ${props => props.theme.lightGrey};
    }
`;

const Header = () => (
    <StyledHeader>
        <div className="bar">
            <Logo>
                <Link href="/">
                    <a>Mineral Group</a>
                </Link>
            </Logo>
            <Nav/>
        </div>
        <div className="sub-header">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
)

export default Header; 