import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { CheckboxComponent } from '@/components/ui/checkbox/Checkbox'
import { useState } from 'react'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    setChecked: () => {},
  },
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledCheckboxExample: Story = {
  args: {
    checked: true,
    setChecked: () => {},
    id: 'id1',
    disabled: false,
  },
}

export const UncontrolledCheckboxExample = () => {
  const [checked, setChecked] = useState(true)
  const onHandlerChecked = () => {
    setChecked(!checked)
  }
  console.log(checked)
  return (
    <div>
      <CheckboxComponent
        checked={checked}
        setChecked={onHandlerChecked}
        id={'id-1'}
        label={'Check-box'}
        disabled={false}
      />
    </div>
  )
}

export const testWorkCheckbox = () => {
  const [checked, setChecked] = useState(true)
  const onHandlerChecked = () => {
    setChecked(!checked)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ color: 'gold' }}>{checked ? 'checkbox enabled' : 'checkbox disabled'}</div>
      <CheckboxComponent
        checked={checked}
        setChecked={onHandlerChecked}
        id={'id-1'}
      ></CheckboxComponent>
    </div>
  )
}
