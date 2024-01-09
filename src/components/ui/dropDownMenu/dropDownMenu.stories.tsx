import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { DropDownMenu } from '@/components/ui/dropDownMenu/dropDownMenu'

const meta = {
  title: 'Components/DropDownMenu',
  component: DropDownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    setChecked: () => {},
  },
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenuTest: Story = {
  args: {},
}
