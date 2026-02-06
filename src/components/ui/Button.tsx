import React from 'react'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const button = (props: Props) => {
  return (
    <button {...props}>button</button>
  )
}

export default button