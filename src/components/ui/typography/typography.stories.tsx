// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react'
import { TypographyComponent } from '@/components/ui/typography/TypographyComponent'

const meta: Meta<typeof TypographyComponent> = {
  title: 'Components/Typography',
  component: TypographyComponent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TypographyComponent>

export const Large: Story = {
  args: {
    variantName: 'Large',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}

export const Heading1: Story = {
  args: {
    variantName: 'h1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'h1',
  },
}
export const Heading2: Story = {
  args: {
    variantName: 'h2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'h2',
  },
}
export const Heading3: Story = {
  args: {
    variantName: 'h3',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'h3',
  },
}

export const body1: Story = {
  args: {
    variantName: 'body1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}
export const body2: Story = {
  args: {
    variantName: 'body2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'p',
  },
}
export const Link1: Story = {
  args: {
    variantName: 'link1',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'a',
  },
}
export const Link2: Story = {
  args: {
    variantName: 'link2',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'a',
  },
}

export const caption: Story = {
  args: {
    variantName: 'caption',
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    as: 'span',
  },
}

export const AllTypography: Story = {
  render: () => {
    return (
      <div style={{ width: '350px', margin: '0 auto' }}>
        <TypographyComponent variantName={'Large'} as={'p'}>
          Large
        </TypographyComponent>
        <TypographyComponent variantName={'h1'} as={'h1'}>
          H1
        </TypographyComponent>
        <TypographyComponent variantName={'h2'} as={'h2'}>
          H2
        </TypographyComponent>
        <TypographyComponent variantName={'h3'} as={'h3'}>
          H3
        </TypographyComponent>
        <TypographyComponent variantName={'body1'} as={'p'}>
          Body1
        </TypographyComponent>
        <TypographyComponent variantName={'body2'} as={'p'}>
          Body2
        </TypographyComponent>
        <TypographyComponent variantName={'subtitle1'} as={'p'}>
          Subtitle1
        </TypographyComponent>
        <TypographyComponent variantName={'subtitle2'} as={'p'}>
          Subtitle2
        </TypographyComponent>

        <TypographyComponent variantName={'overline'} as={'span'} style={{ padding: '0' }}>
          Overline
        </TypographyComponent>

        <TypographyComponent variantName={'caption'} as={'span'} style={{ display: 'block' }}>
          Caption
        </TypographyComponent>

        <TypographyComponent variantName={'link1'} as={'a'} style={{ display: 'block' }}>
          Link1
        </TypographyComponent>

        <TypographyComponent variantName={'link2'} as={'a'} style={{ display: 'block' }}>
          Link2
        </TypographyComponent>
      </div>
    )
  },
}
