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

export const FieldText: Story = {
  args: {
    labelName: 'input',
    placeholder: 'Input',
    variant: 'textInput',
    isDisabled: false,
    type: 'text',
  },
}

export const FieldPassword: Story = {
  args: {
    labelName: 'enter password',
    placeholder: 'your password',
    variant: 'passwordField',
    isDisabled: false,
    type: 'password',
  },
}

export const FieldSearch: Story = {
  args: {
    labelName: 'Search',
    placeholder: 'Input',
    variant: 'searchInput',
    isDisabled: false,
  },
}
