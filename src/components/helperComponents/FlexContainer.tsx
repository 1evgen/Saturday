import React, { ReactNode } from 'react'

type PropsType = {
  children: ReactNode
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justify?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  aline?: 'start' | 'center' | 'space-between' | 'space-around'
  wrap?: 'nowrap' | 'wrap'
  gap?: string
}

export const FlexContainer = (props: PropsType) => {
  const { children, direction, gap, wrap, justify, aline } = props
  const containerStyled: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction || 'row',
    justifyContent: justify || 'start',
    alignItems: aline || 'stretch',
    gap: gap || '',
    flexWrap: wrap || 'nowrap',
  }
  return <div style={containerStyled}>{children}</div>
}
