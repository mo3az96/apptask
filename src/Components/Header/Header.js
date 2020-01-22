import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './Headerstyle'
import { Redirect, Switch } from "react-router-dom"
import Log from '../Log/Log';
import List from '@material-ui/core/List';
import { NavLink } from "react-router-dom";


const Header = (props) => {
    let { handleDrawerOpen, open, handleDrawerClose } = props
    const [logout, setlogout] = React.useState(false)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorNotificationEl, setAnchorNotificationEl] = React.useState(null);
    const [anchorMsgEl, setAnchorMsgEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMsgOpen = Boolean(anchorMsgEl);
    const isNotificationOpen = Boolean(anchorNotificationEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleNotificationMenuOpen = event => {
        setAnchorNotificationEl(event.currentTarget);
    };

    const handleMsgMenuOpen = event => {
        setAnchorMsgEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setAnchorNotificationEl(null)
        setAnchorMsgEl(null)
        handleMobileMenuClose();
    };
    const handelLogout = () => {
        localStorage.removeItem('user')
        setlogout(true)
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            elevation={0}
            getContentAnchorEl={null}

            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            id={menuId}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <List className={classes.dropdownMenu}>
                <MenuItem onClick={handleMenuClose}><NavLink to="/Account">My Account</NavLink></MenuItem>
                <MenuItem onClick={handelLogout}>Logout</MenuItem>
            </List>
        </Menu>
    );


    const menuNotificationId = 'primary-search-notification-menu';
    const renderNotificationMenu = (
        <Menu
            elevation={0}
            getContentAnchorEl={null}

            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            id={menuNotificationId}
            open={isNotificationOpen}
            onClose={handleMenuClose}
        >
            <List className={classes.dropdownMenu}>
                Notification
             </List>
        </Menu>
    );

    const menuMsgId = 'primary-search-Msg-menu';
    const renderMsgMenu = (
        <Menu
            elevation={0}
            getContentAnchorEl={null}

            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            id={menuMsgId}
            open={isMsgOpen}
            onClose={handleMenuClose}
        >
            <List className={classes.dropdownMenu}>
                Msg
             </List>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    let checkLog = logout ? <Redirect exact to="/Log" component={Log} /> : null
    return (
        <div className={classes.grow}>
            <AppBar position="static" className={(!open ? classes.appBar : classes.appBarShift)}>
                <Toolbar>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuMsgId}
                            aria-haspopup="true"
                            onClick={handleMsgMenuOpen}
                            color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuNotificationId}
                            aria-haspopup="true"
                            onClick={handleNotificationMenuOpen}
                            color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            className={classes.menuButton}
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>

                    <div className={classes.grow} />

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={open ? handleDrawerClose : handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            {renderNotificationMenu}
            {renderMsgMenu}
            <Switch>
                {checkLog}
            </Switch>
        </div>
    );
};

export default Header;