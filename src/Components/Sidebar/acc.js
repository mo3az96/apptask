import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



const Acc = (props) => {
    let { children } = props
    let ListItems = children ? (
        children.map(item => {
            return (
                <ListItem>{item.Link}</ListItem>
            )
        })
    ) : null

    return (
        <List>
            {ListItems}
        </List>
    );
};

export default Acc;