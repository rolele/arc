import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Hero from '.'

storiesOf('Hero', module)
  .addWithInfo('default', () => (
    <Hero />
  ))
