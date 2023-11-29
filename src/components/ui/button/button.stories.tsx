import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './'
import { FlexContainer } from '@/components/helperComponents/FlexContainer'
import { Icon } from '@/components/_Icon/Icon'
import { IconComponent } from '@/components/Icon/IconComponent'

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
  render: () => {
    return (
      <Button variant={'primary'} disabled={false}>
        Button primary
      </Button>
    )
  },
}

export const PrimaryWithIcon = {
  render: () => {
    return (
      <Button variant={'primary'}>
        <IconComponent name={'arrow'} />
        Button primary
      </Button>
    )
  },
}

export const SecondaryWithIcon = {
  render: () => {
    return (
      <Button variant={'secondary'}>
        <IconComponent name={'arrow'}></IconComponent>
        Button Secondary
      </Button>
    )
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
    variant: 'link',
    children: 'Link button',
    as: 'a',
  },
}

export const IconButton: Story = {
  render: () => {
    return (
      <Button>
        <FlexContainer justify={'space-between'} gap={'5px'}>
          <Icon iconId={'arrowButton1'} color={'var(--light-100, #FFF)'} />
          Button primary
        </FlexContainer>
      </Button>
    )
  },
}
