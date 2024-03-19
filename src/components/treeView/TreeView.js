import React from 'react'
import MenuList from './MenuList'

const TreeView = ({menus=[]}) => {
  return (
    <div>
      <div className="text">
            <MenuList list={menus}/>
      </div>
    </div>
  )
}

export default TreeView
