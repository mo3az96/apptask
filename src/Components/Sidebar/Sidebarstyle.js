import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    logo: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            fontSize: '36px',
            color: '#1b84e7',
            fontWeight: 'bold',
            width: 205,
            height: 64,
            padding: '0 25px',
            alignItems: "center"
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        border: "none"
    },
    content: {
        flexGrow: 1,
        borderLeft: "1px solid rgba(0, 0, 0, 0.12)"
    },
    acc: {
        boxShadow: "None",
        margin: 0,
        padding: 0
    }
}));

export default useStyles;