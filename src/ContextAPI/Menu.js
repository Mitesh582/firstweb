import React, { useContext } from 'react'
import { Menus, Comp } from '../App'

function Menu() {
    const value = useContext(Menus);
    const name = useContext(Comp);
  return (
    <>
        {
            name.map((el, i) => {
                return (
                    <p key={i}>
                        {
                            el.name + el.age + value
                        }
                    </p>
                )
            })
        }

    </>
  )
}

export default Menu