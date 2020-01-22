import { fade, makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(2),
        border: '1px solid #ced4da',
        color: '#adb5bd'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }), backgroundColor: theme.palette.common.white,
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        position: "fixed"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
        backgroundColor: theme.palette.common.white,
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        position: "fixed"
    },
    search: {
        position: 'relative',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        borderRadius: '50px',
        border: '1px solid #dee2e6',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        textAlign: "right",
        color: "#495057",
        height: 46
    },
    searchIcon: {
        width: '40px',
        height: '40px',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: ' #4662D4',
        color: "#fff",
        top: "50%",
        transform: "translateY(-50%)",
        left: 3,
        zIndex: 99

    },
    inputRoot: {
        color: 'inherit',
        height: "100%"
    },
    inputInput: {
        padding: theme.spacing(1, 2, 1, 7),
        transition: theme.transitions.create('width'),
        height: "100%",
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
        textAlign: "right",
    },
    sectionDesktop: {
        display: 'none',
        color: '#6c757d',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    dropdownMenu: {
        position: "relative",
        zIndex: "1000",
        minWidth: "15rem",
        padding: "0.5rem 0",
        fontSize: "0.875rem",
        color: "#868ba1",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: "#fff",
        backgroundClip: "padding-box",
        border: "1px solid rgba(0, 0, 0, 0.15)",
        borderTop: "none",
        borderRadius: "3px",
    },
    relative: {
        position: "relative"
    }
}));
export default useStyles;