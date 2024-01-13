import s from './avatar.module.scss'

type AvatarType = {
  width?: string
  height?: string
  link: string
}

export const Avatar = (props: AvatarType) => {
  const { width = '36px', height = '36px', link } = props
  return (
    <div>
      <img className={s.avatar} width={width} height={height} src={link} />
    </div>
  )
}
