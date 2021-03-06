import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Heading from 'components/atoms/Heading'
import Paragraph from 'components/atoms/Paragraph'

const Article = styled.article``

const Post = ({ title, body, ...props }) => {
  return (
    <Article {...props}>
      <Heading level={2}>{title}</Heading>
      <Paragraph>{body}</Paragraph>
    </Article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Post
