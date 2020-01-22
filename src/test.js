import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


export default function CustomizedExpansionPanels() {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <List>

                <ListItem primaryText="Sent mail" />
                <ListItem primaryText="Drafts" />
                <ListItem
                    primaryText="Inbox"
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem
                            key={1}
                            primaryText="Starred"

                        />,
                        <ListItem
                            key={2}
                            primaryText="Sent Mail"

                            disabled={true}
                            nestedItems={[
                                <ListItem key={1} primaryText="Drafts" />,
                            ]}
                        />,
                        <ListItem
                            key={3}
                            primaryText="Inbox"

                            open={this.state.open}
                            onNestedListToggle={this.handleNestedListToggle}
                            nestedItems={[
                                <ListItem key={1} primaryText="Drafts" />,
                            ]}
                        />,
                    ]}
                />
            </List>
        </div>
    );
}
