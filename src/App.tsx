// style={{ width: '400px', height: '300px', backgroundColor: 'white' }}

import { CheckboxComponent } from '@/components/ui/checkbox/Checkbox'
import { useState } from 'react'

export function App() {
  const [checked, setChecked] = useState(false)
  const onHandler = () => {
    setChecked(!checked)
  }

  return (
    <div
      style={{
        width: '100vh',
        height: '100vh',

        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <CheckboxComponent
        disabled={false}
        checked={checked}
        setChecked={onHandler}
        id={'id'}
        label={'test'}
      />
    </div>
  )
}
