import * as React from 'react'
import { color, spacing } from '../utilities/theme'
import clsx from '../utilities/clsx'
import styled from '../utilities/styled'

export const CellStyle = styled('td')`
  &,
  .th {
    padding: ${spacing.sm} ${spacing.md};
    background: ${color.background.primary};
    overflow: hidden;
  }
`

const Cell = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      {...props}
      className={clsx('td', 'Cell', className || '')}
      style={props.style}
      ref={ref}
    />
  )
})

export default Cell
