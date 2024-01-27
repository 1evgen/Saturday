import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { RadioGroupComponent, RadioValueType } from '@/components/ui/radioGroup/radioGroup'

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

const testArray: RadioValueType[] = [
  { id: '1qw', value: 'England', label: 'England' },
  { id: '2ew', value: 'Germany', label: 'Germany' },
  { id: '32e', value: 'Russian', label: 'Russian' },
  { id: '1cds', value: 'China', label: 'China' },
  { id: '2rew', value: 'Turkey', label: 'Turkey' },
  { id: '311wqx', value: 'Belarus', label: 'Belarus' },
]
export const ChooseCountryStory: Story = {
  args: {
    values: testArray,
  },
}

const testRadio = [{ id: '1qwdde', value: 'Radio Group', label: 'Radio Group' }]
export const RadioDefaultStory: Story = {
  args: {
    values: testRadio,
    disabled: false,
  },
}
