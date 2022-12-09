import React from 'react'
import { Link } from 'react-router-dom'
import { menus } from '../../static/menu'
import { Header } from './MainHeader.styled'

const MainHeader = () => {
  return (
    <Header>
    <p>HOSU</p>
    <div>
        {menus.map(({ to, name})=>(
            <Link
                key={name}
                to={to}
            >
                {name}
            </Link>
        ))}
    </div>
    <p>깃허브</p>
    </Header>
  )
}

export default MainHeader