interface StyleSheet {
    root: Object;
    input: Object;
    submit: Object;
    controls: Object;
    todoItem: Object;
    todoItemText: Object;
    todoItemDelete: Object;
};

const style: StyleSheet = {
    root: {
        maxWidth: '600px',
        margin: '0 auto',
    },
    controls: {
        display: 'flex',
        flex: 1,
    },
    input: {
        display: 'flex',
        flex: 1,
        outline: 'none',
        padding: '0 10px',
    },
    submit: {
        display: 'flex',
        marginLeft: 20,
        padding: '10px 20px',
    },
    todoItem: {
        width: '100%',
        padding: '8px 0 8px',
        borderBottom: '1px solid #ccc',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        display: 'flex',
        alignItems: 'center',
    },
    todoItemText: {
        fontSize: '16px',
        flex: 1,
    },
    todoItemDelete: {
        display: 'flex',
        height: '20px',
    },
};

export default style;