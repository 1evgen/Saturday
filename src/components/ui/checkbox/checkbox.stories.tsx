import type { Meta } from '@storybook/react'
import { CheckboxComponent } from '@/components/ui/checkbox/Checkbox'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxStories: Story = {
  args: {},
}
