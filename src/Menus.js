import React from 'react'

const Menus = ({menus, deleteMenu}) => {
    const menuList = menus.length ? (
        menus.map(menu => {
            return (
                <div className="collection-item" key={menu.id}>
                <span onClick={() => {deleteMenu(menu.id)}}>{menu.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center"> You have no menu left </p>
    )
    return (
        <div className="menu collection">
        {menuList}
        </div>
    )
}
export default Menus;