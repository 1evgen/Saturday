import { Meta, StoryObj } from '@storybook/react'
import { InputTest } from '@/components/ui/ImputTest/InputTest'

const meta = {
  title: 'Components/Test/Input',
  component: InputTest,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputTest>

export default meta
type Story = StoryObj<typeof meta>

export const FieldTest: Story = {
  args: {
    type: 'text',
    label: 'test',
  },
}
