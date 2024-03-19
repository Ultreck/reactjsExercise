import React, { useState } from 'react'
import MenuList from './MenuList'

const MenuItems = ({item, key}) => {
    const [displayCurrentChildren, setdisplayCurrentChildren] = useState({});

    const handleToggleChildren = (getCurrentLabel) => {
        setdisplayCurrentChildren({...displayCurrentChildren, [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]});
        console.log(displayCurrentChildren);
    };
  return (
      <li className="text list-disc" key={key}>
        <div className="text">
        <p className="text">{item.label}</p>
        {
            item && item?.children?.length && (
                <span onClick={() =>handleToggleChildren(item?.label)} className="text cursor-pointer">
                    {displayCurrentChildren[item.label]? "-" : "+"}
                </span>
            )
        }

        </div>
        {item && item?.children?.length > 0 && displayCurrentChildren[item?.label] && (
            <MenuList list={item?.children}/>
        )}
      </li>
  )
}

export default MenuItems
