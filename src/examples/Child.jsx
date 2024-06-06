import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
export const Child = ({name}) => {
    // Directive
    // "use memo"

    useEffect(() => {
        console.log('Child component')
    })
  return (
    <div>I am child component with a name of: {name}</div>
  )
}

 