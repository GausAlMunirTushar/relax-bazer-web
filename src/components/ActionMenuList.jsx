import React from 'react'
import ActionMenu from './ActionMenu'

const ActionMenuList = () => {
  return (
    <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-y-5 gap-x-14'>
        <ActionMenu menuTitle="Upload your list"/>
        <ActionMenu menuTitle="WhatsApp"/>
        <ActionMenu menuTitle="Order to Call"/>
        <ActionMenu menuTitle="Customer Support"/>
        <ActionMenu menuTitle="Family"/>
        <ActionMenu menuTitle="Office"/>
    </div>
  )
}

export default ActionMenuList