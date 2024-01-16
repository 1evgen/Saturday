import {
  DropDownItem,
  MyDropDownMenu,
  DropDownSeparator,
} from '@/components/ui/dropDownMenu/dropDownMenu'
import { Meta } from '@storybook/react'
import { Avatar } from '@/components/avatar/avatar'
import avatarImag from '@/components/avatar/avatest.jpeg'
import s from '@/components/ui/dropDownMenu/dropDownMenu.module.scss'
import { IconComponent } from '@/components/Icon/IconComponent'
import { Typography } from '@/components/ui/typography'

const meta = {
  argTypes: {},
  component: MyDropDownMenu,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof MyDropDownMenu>

export default meta

export const AvatarTriggerDropDownMenu = () => {
  return (
    <>
      <MyDropDownMenu className={s.styleText} menuComponent={<Avatar link={avatarImag} />}>
        <DropDownItem className={s.wrapperItem}>
          <Avatar link={avatarImag} />
          <div className={s.Boxtex}>
            <Typography as={'div'} variant={'subtitle2'}>
              Ivan
            </Typography>
            <Typography as={'div'} variant={'caption'} className={s.mailTextStyle}>
              j&johnson@gmail.com
            </Typography>
          </div>
        </DropDownItem>
        <DropDownSeparator />

        <DropDownItem>
          <IconComponent name={'profileIcon'} size={18} className={s.iconStyle} />
          Sign out
        </DropDownItem>
        <DropDownSeparator />

        <DropDownItem>
          <IconComponent name={'arrow'} size={18} className={s.iconStyle} />
          Sign out
        </DropDownItem>
        <DropDownSeparator />
      </MyDropDownMenu>
    </>
  )
}

export const ButtonTriggerDropDownMenu = () => {
  return (
    <>
      <MyDropDownMenu
        menuComponent={<IconComponent name={'dot'} size={32} className={s.iconStyleButton} />}
      >
        <DropDownItem>
          <IconComponent name={'startIcon'} size={18} className={s.iconStyle} />
          <Typography variant={'caption'}>Learn</Typography>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem>
          <IconComponent name={'pencilIcon'} size={18} className={s.iconStyle} />
          <Typography variant={'caption'}>Edit</Typography>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem>
          <IconComponent name={'trashIcon'} size={18} className={s.iconStyle} />
          <Typography variant={'caption'}>Delete</Typography>
        </DropDownItem>
        <DropDownSeparator />
      </MyDropDownMenu>
    </>
  )
}
