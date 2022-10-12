import React, { memo, useEffect } from 'react'

const Item = memo(({ user }) => {

  useEffect(() => {
    console.log('Item Render' + user.name);
  })


  return (
    <li>
      {user.name}
    </li>
  )
})

export { Item };