# props & children & Modal & Form

```md

<a>编辑</a>

{ children }

onClick={this.showModelHandler}



```


```jsx
// Table
    {
        title: 'Operation',
        key: 'operation',
        render: (text, record) => (
            <span className={styles.operation}>
                <UserModal record={record} onOk={editHandler.bind(null, record.id)}>
                    <a>编辑</a>
                </UserModal>
                <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
                    <a href="">删除</a>
                </Popconfirm>
            </span>
        )
    }

// UserModal

<span>
    <span onClick={this.showModelHandler}>
        { children }
    </span>
    <Modal
        title="Edit User"
        visible={this.state.visible}
        onOk={this.okHandler}
        onCancel={this.hideModelHandler}
        >
        <Form />
    </Modal>
</span>

```

