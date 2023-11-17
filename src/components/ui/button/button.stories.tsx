import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './'
import { Icon } from '@/components/Icon/Icon'
import { FlexContainer } from '@/components/helperComponents/FlexContainer'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false,
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    disabled: false,
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Tertiary Button',
    disabled: false,
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
  },
}

export const AsLink: Story = {
  args: {
    variant: 'primary',
    children: 'Link that looks like a button',
    as: 'a',
  },
}

export const IconButton: Story = {
  render: () => {
    return (
      <Button>
        <FlexContainer justify={'space-between'} gap={'4px'}>
          <Icon
            iconId={'arrowButton1'}
            width={'16px'}
            height={'16px'}
            color={'var(--light-100, #FFF)'}
          />
          Button primary
        </FlexContainer>
      </Button>
    )
  },
}
