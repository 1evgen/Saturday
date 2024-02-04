import type { Meta, StoryObj } from '@storybook/react'
import { Orientation, TabsSwitcher, TabValueType } from '@/components/ui/tabs/Tabs'

const meta = {
  title: 'components/TabsSwitcher',
  component: TabsSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof TabsSwitcher>

export default meta
type Story = StoryObj<typeof meta>

let TabTest: TabValueType[] = [
  { id: '12w', value: 'Switcher1' },
  { id: '32ssd', value: 'Switcher2' },
  { id: '32ssd', value: 'Switcher3' },
]

export const TabsStories: Story = {
  args: {
    tabValues: TabTest,
    orientation: Orientation.Vertical,
  },
}
