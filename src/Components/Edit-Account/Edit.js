import React, { useEffect, useState } from 'react';
import DrawerCon from '../../containers/DrawerContainer';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './EditStyles';
import axios from "axios";

const Edit = () => {
    const onload = ""
    const classes = useStyles();
    let userStore = JSON.parse(localStorage.getItem('user'));
    const baseurl = "https://inventory.tasawk.net/api/v1";
    let arr = [];
    const [email, setemail] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get(baseurl + "/cashier", {
            params: {
                api_token: userStore,
            }
        }).then((response) => {
            let data = response.data.data.info
            document.getElementById("Name").value = data.name;
            document.getElementById("email").value = data.email;
        }).catch(err => {
            console.log(err.response);
        })
    }, [onload])

    let handelMailChange = (e) => {
        setemail(e.target.value);
    }
    let handelNameChange = (e) => {
        setName(e.target.value);
    }
    let handelSave = (e) => {
        e.preventDefault();
        // axios.put(baseurl + "/cashier/", {
        //     api_token: userStore,
        //     crossDomain: true,
        //     name: name,
        //     email: email,
        //     permissions: []
        // }).then((response) => {
        //     console.log(response);
        // }).catch(err => {
        //     console.log(err);
        // })
        axios({
            url: baseurl + "/cashier/",
            method: 'post',
            // mode: 'no-cors',
            data: JSON.stringify({
                api_token: userStore,
                name: name,
                email: email,

                permissions: []
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            proxy: {
                target: "http://localhost:3000",
                changeOrigin: true
            },
            json: false,
            cache: false,
            withCredentials: true,
            credentials: 'same-origin'
        }).then((response) => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <DrawerCon />
            <div className={classes.content}>
                <form className={classes.form} onSubmit={handelSave}>
                    <h3>Edit Account Info.</h3>
                    <TextField id="Name" label="Name" className={classes.input} InputLabelProps={{ shrink: true, }} onChange={handelNameChange} />
                    <TextField id="email" label="E-Mail" className={classes.input} InputLabelProps={{ shrink: true, }} onChange={handelMailChange} />
                    <div >
                        <Button
                            id="sub"
                            variant="contained"
                            className={classes.btn}
                            type="submit"

                        >
                            Save
                </Button>

                    </div>

                </form>
            </div>
        </>
    );
};

export default Edit;