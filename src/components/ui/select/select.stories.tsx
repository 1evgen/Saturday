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

export const TestSelect: Story = {
  args: {
    placeholder: 'Test',
    options: [
      { value: 'apple', label: 'apple' },
      { value: 'strawberry', label: 'strawberry' },
      { value: 'potato', label: 'potato' },
    ],
    disabled: true,
  },
}

// export const testWorkedSelect = () => {
//   return (
//     <div>
//       <div>{test}</div>
//       <SelectComponent placeholder={'fruit'} values={test} />
//     </div>
//   )
// }
