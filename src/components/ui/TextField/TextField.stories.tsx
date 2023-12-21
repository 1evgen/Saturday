import { Meta, StoryObj } from '@storybook/react'
import { TextField } from '@/components/ui/TextField/TextField'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const InputTest: Story = {
  args: {
    variant: 'search',
  },
}
