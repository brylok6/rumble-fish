import React from 'react'

import classes from "./Header.module.css"

const Header = () => {
  return(
    <div className={classes.header}>
      <h2 className={classes.header_title}>Movie Tinder</h2>
    </div>
  )
}

export default Header;