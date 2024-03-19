import React from 'react'
import MenuItems from './MenuItems'

const MenuList = ({list = []}) => {
  return (
      <ul className="text">
        {list && list.length > 0 && list.map((itemList) => (
            <MenuItems key={itemList.label} item={itemList}/>
        ))}
      </ul>
  )
}

export default MenuList
