import { Meta, StoryObj } from '@storybook/react'
import { InputTest } from '@/components/ui/ImputTest/InputTest'
import { useState } from 'react'

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

export const TestPassValue = () => {
  let [value, setValue] = useState('')
  return (
    <div>
      <InputTest type={'text'} label={'test'} setValue={setValue} />
      <p>This value is ref from Input: {value}</p>
    </div>
  )
}
