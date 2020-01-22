import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './LogStyles';
import axios from "axios";
import { Redirect } from "react-router-dom"
import Smodal from "./modal"

const Log = (props) => {
    let { text } = props
    const baseurl = "https://inventory.tasawk.net/api/v1";
    const classes = useStyles();
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [code, setcode] = useState(400);
    const [message, setmessage] = useState();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const preventDefault = event => event.preventDefault();


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let handelMailChange = (e) => {
        setemail(e.target.value);
    }
    let handelPassChange = (e) => {
        setpass(e.target.value);
    }
    let handelSave = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post(baseurl + "/cashier", {
            email: email,
            password: pass
        }).then((response) => {
            let apiToken = response.data.data.info.api_token

            localStorage.setItem('user', JSON.stringify(apiToken));
            setcode(response.data.status)
        }).catch(err => {
            setmessage(err.response.data.message)
            setcode(err.response.data.status)
            handleOpen()
        }).then(() => {
            setLoading(false)
        })
    }
    let uploader = code == 200 ?
        <Redirect to="/" exact /> : null

    return (

        <div className={classes.root} dir={localStorage.getItem('lang') == "ar" ? "rtl" : "ltr"}>
            <form className={classes.form} onSubmit={handelSave}>
                <Typography variant="h1" noWrap>
                    <Link href="#" onClick={preventDefault} className={classes.logo} underline='none'>
                        pos.
                    </Link>
                </Typography>
                <h2 className={classes.primary}>{text.t('Welcome to React and react-i18next')}</h2>
                <h3 className={classes.secondary}>Sign in to continue.</h3>
                <TextField id="email" label="E-Mail" className={classes.input} onChange={handelMailChange} />
                <TextField id="password" label="Password" className={classes.input} onChange={handelPassChange} />
                <div className={classes.wrapper}>
                    <Button
                        id="sub"
                        variant="contained"
                        className={classes.btn}
                        type="submit"
                        disabled={loading}
                    >
                        Login
                </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
                {uploader}
                <Smodal message={message} handleClose={handleClose} open={open} />
            </form>

        </div>
    );
};

export default Log;