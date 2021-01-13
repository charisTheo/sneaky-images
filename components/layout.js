import React from 'react'
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './../utils/theme';
import Header from './header';
// import ServiceWorker from './serviceWorker';

import LayoutStyles from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Container className={LayoutStyles.container} disableGutters={true}>
                <Header />
                <main>{children}</main>
                <footer></footer>
                {/* <ServiceWorker /> */}
            </Container>
        </ThemeProvider>
    )
}

export default Layout
