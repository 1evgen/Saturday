import type { Meta, StoryObj } from '@storybook/react'
import { SliderComponent } from '@/components/ui/slider/slider'

const meta: Meta<typeof SliderComponent> = {
  title: 'Components/Slider',
  component: SliderComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SliderComponent>

export const TestSlider: Story = {
  args: {},
}
