import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import IndexPage from './Head';

const theme = {
    red: '#ff0000',
    black: '#393939',
    grey: '#3a3a3a',
    lightGrey: '#e1e1e1',
    offWite: '#ededed',
    maxWidth: '1000px',
    boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
    background: white;
    color: black;
`;

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
    background: ${theme.red};
`;

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'radnika-next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika-next';
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                <GlobalStyle/>
                    <IndexPage/>
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;