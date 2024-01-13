import { DropDownItem, DropDownMenu } from '@/components/ui/dropDownMenu/dropDownMenu'
import { Meta } from '@storybook/react'
import { Avatar } from '@/components/avatar/avatar'
import avatarImag from '@/components/avatar/avatest.jpeg'

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
      <DropDownMenu menuComponent={<Avatar link={avatarImag} />}>
        <DropDownItem>Ivan</DropDownItem>
        <DropDownItem>test</DropDownItem>
      </DropDownMenu>
    </>
  )
}
