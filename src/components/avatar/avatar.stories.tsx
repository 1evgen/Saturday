import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@/components/avatar/avatar'
import AvatarImg from './avatest.jpeg'

const meta = {
  argTypes: {},
  component: Avatar,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarExample: Story = {
  args: {
    width: '250px',
    height: '150px',
    link: AvatarImg,
  },
}
