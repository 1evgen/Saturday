import IconsSprite from '@/assets/images/icons-sprite.svg'

type PropsIconType = {
  iconId: string
  color?: string
  width?: string
  height?: string
  viewBox?: string
}
export const Icon = (props: PropsIconType) => {
  const { iconId, color, height, viewBox, width } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '30px'}
      height={height || '20'}
      viewBox={viewBox}
      fill={color || 'black'}
    >
      <use xlinkHref={`${IconsSprite}#${iconId}`}></use>
    </svg>
  )
}
