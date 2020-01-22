import React, { useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import useStyles from './Sidebarstyle';
import { connect } from "react-redux";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Acc from './acc';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const Sidebar = (props) => {
    let { open, links } = props;
    const preventDefault = event => event.preventDefault();




    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
                dir="rtl"
            >
                <Typography variant="h1" noWrap>
                    <Link href="#" onClick={preventDefault} className={classes.logo} underline='none' align="right">
                        pos.
                        </Link>
                </Typography>
                <Divider />
                <List className={classes.content}>

                    {links ? links.map((element) => (
                        element.children.length ?
                            <ListItem>
                                <MuiExpansionPanel className={classes.acc} expanded={expanded === element.link} onChange={handleChange(element.link)}>
                                    <MuiExpansionPanelSummary aria-controls={element.link} id={element.link} className={classes.acc}>
                                        {element.link}
                                    </MuiExpansionPanelSummary>
                                    <MuiExpansionPanelDetails>
                                        <Acc children={element.children} />
                                    </MuiExpansionPanelDetails>
                                </MuiExpansionPanel>
                            </ListItem>
                            :
                            <ListItem>{element.link}</ListItem>

                    )) : null}

                </List>
            </Drawer>
        </>
    );
};

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Sidebar)
// export default Sidebar;