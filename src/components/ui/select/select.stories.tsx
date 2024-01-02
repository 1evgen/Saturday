import type { Meta, StoryObj } from '@storybook/react'
import { SelectComponent } from '@/components/ui/select/select'

const meta = {
  argTypes: {},
  component: SelectComponent,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof SelectComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Test',
    values: ['Apple', 'Banana', 'potato', 'tomato'],
  },
}
