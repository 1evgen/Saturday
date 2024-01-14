import {
  DropDownItem,
  DropDownMenu,
  DropDownSeparator,
} from '@/components/ui/dropDownMenu/dropDownMenu'
import { Meta } from '@storybook/react'
import { Avatar } from '@/components/avatar/avatar'
import avatarImag from '@/components/avatar/avatest.jpeg'
import s from '@/components/ui/dropDownMenu/dropDownMenu.module.scss'
import { IconComponent } from '@/components/Icon/IconComponent'

const meta = {
  argTypes: {},
  component: DropDownMenu,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta

export const DropDownMenuTest = () => {
  return (
    <>
      <DropDownMenu className={s.styleText} menuComponent={<Avatar link={avatarImag} />}>
        <DropDownItem>
          <IconComponent name={'profileIcon'} />
          My Profile
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem>
          <IconComponent name={'arrow'} />
          Sign out
        </DropDownItem>
        <DropDownSeparator />
      </DropDownMenu>
    </>
  )
}
