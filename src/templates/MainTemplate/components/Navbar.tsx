import React, { useState } from 'react';
import {
  createStyles,
  Navbar as MantineNavbar,
} from '@mantine/core'

const useStyles = createStyles(() => ({
  body: {},
  header: {},
  aside: {},
}));


export const Navbar = () => {
  const { classes, cx } = useStyles()

  return (
    <MantineNavbar height={'100vh'} width={{ base: 250 }}>
      <MantineNavbar.Section grow>
        <div className={classes.aside}>
          <div>Usuarios</div>
        </div>
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}