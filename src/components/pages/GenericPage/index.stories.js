import React from 'react'
import { storiesOf } from '@kadira/storybook'
import GenericPage from '.'

storiesOf('GenericPage', module)
  .addWithInfo('default', () => (
    <GenericPage />
  ))
