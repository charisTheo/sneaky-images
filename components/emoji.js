import React from 'react'

const Emoji = ({ children, label }) => <span role="img" aria-label={`${label} emoji`}>{children}</span>

export default Emoji
