type AvatarType = {
  width: string
  height: string
  link: string
}

export const Avatar = (props: AvatarType) => {
  const { width, height, link } = props
  return (
    <div>
      <img width={width} height={height} src={link} />
    </div>
  )
}
