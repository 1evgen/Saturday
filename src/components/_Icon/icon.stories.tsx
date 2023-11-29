import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@/components/_Icon/Icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/IconSvg',
  component: Icon,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Icon>

export const IconHome: Story = {
  args: {
    iconId: 'home1',
    viewBox: '0 0 30 30',
    width: '60px',
    height: '60px',
    color: 'var(--color-accent-100)',
  },
}

export const IconArrowButton: Story = {
  args: {
    iconId: 'arrowButton1',
    viewBox: '0 0 80 80',
    width: '65px',
    height: '65px',
    color: 'var(--color-success-700)',
  },
}

export const EyeIcon: Story = {
  args: {
    iconId: 'eye1',
    viewBox: '0 0 30 30',
    width: '55px',
    height: '55px',
    color: 'var(--color-danger-500)',
  },
}
