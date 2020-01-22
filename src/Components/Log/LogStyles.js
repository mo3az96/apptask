import { makeStyles } from '@material-ui/core/styles';
const modalWidth = 300;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f2f7",
        padding: "25px",
        height: "100vh"
    },
    form: {
        padding: "40px",
        maxWidth: "400px",
        width: "400px",
        backgroundColor: "#fff",
        border: "1px solid #ced4da",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
    },
    input: {
        marginBottom: "25px",
        width: "100%"
    },
    logo: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            fontSize: '36px',
            color: '#1b84e7',
            fontWeight: 'bold',
        },
    },
    secondary: {
        fontWeight: "300",
        margin: "0",
        marginBottom: "50px",
        fontSize: " 1.53125rem",
        color: "#868ba1"
    },
    primary: {
        fontWeight: "300",
        marginBottom: "0.5rem",
        fontSize: " 1.75rem",
        color: "#212529"
    },
    btn: {
        fontWeight: '500',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        border: '0',
        minHeight: '40px',
        backgroundImage: 'linear-gradient(to right, #1b84e7 0%, #6f42c1 100%)',
        backgroundRepeat: 'repeat-x',
        color: "#fff",
        display: "flex",
        width: "100%"
    },
    wrapper: {
        position: 'relative',
        color: "#fff"
    },
    buttonProgress: {
        color: "green",
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

export default useStyles;