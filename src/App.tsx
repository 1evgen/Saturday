// style={{ width: '400px', height: '300px', backgroundColor: 'white' }}

import { Input } from '@/components/ui/input/Input'

export function App() {
  return (
    <div>
      <Input labelName={'password'} placeholder={'enter your password'} variant={'passwordField'} />
    </div>
  )
}
