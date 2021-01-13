import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Link,
    IconButton
} from '@material-ui/core';
import { 
    GitHub as GitHubIcon, 
    Menu as MenuIcon 
} from '@material-ui/icons';

import Emoji from './emoji';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Sneaky Images{" "}<Emoji label="Picture">🖼</Emoji>{" "}<Emoji label="Eyes">👀</Emoji>
                </Typography>
                
                <div className="flex-stretch"></div>
                
                <Link href="https://github.com/charisTheo/sneaky-images" color="inherit">
                    <GitHubIcon />
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header
