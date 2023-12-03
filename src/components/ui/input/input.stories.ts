import { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input/Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputStory: Story = {
  args: {
    labelName: 'input',
    placeholder: 'Input',
    variant: 'showInput',
    isDisabled: false,
  },
}
