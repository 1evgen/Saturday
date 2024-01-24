import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { RadioGroupComponent } from '@/components/ui/radioGroup/radioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroupComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroupComponent>

export default meta
type Story = StoryObj<typeof meta>

const testArray = [
  { id: '1', value: 'default', label: 'default' },
  { id: '2', label: 'test 1', value: 'test 1' },
  { id: '3', value: 'Test2', label: 'Test2' },
]
export const testRadio: Story = {
  args: {
    demo: testArray,
  },
}
