// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Typography, variantsTypography } from '@/components/ui/typography/TypographyComponent'
import { ElementType } from 'react'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Typography>

export const basicTest: Story = {
  args: {
    variant: 'large',
    as: 'h1',
    children: 'test',
  },
}

let value = 'Carosserie Test Zürichv Stauffacherstrasse 318004 Zürich, ZH, CH'
type TestStoryType = {
  variant: variantsTypography
  text: string
  tag: ElementType
}

let testDataForStories: TestStoryType[] = [
  { variant: 'large', text: value, tag: 'p' },
  { variant: 'h1', text: value, tag: 'h1' },
  { variant: 'h2', text: value, tag: 'h2' },
  { variant: 'h3', text: value, tag: 'h3' },
  { variant: 'body1', text: value, tag: 'div' },
  { variant: 'body2', text: value, tag: 'div' },
  { variant: 'subtitle1', text: value, tag: 'p' },
  { variant: 'subtitle2', text: value, tag: 'p' },
  { variant: 'overline', text: value, tag: 'span' },
  { variant: 'caption', text: value, tag: 'span' },
  { variant: 'link1', text: value, tag: 'a' },
  { variant: 'link2', text: value, tag: 'a' },
]

export const AllTypography: Story = {
  render: () => {
    return (
      <div style={{ width: '180px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {testDataForStories.map(el => (
          <Typography variant={el.variant} as={el.tag}>
            {el.text}
          </Typography>
        ))}
      </div>
    )
  },
}
