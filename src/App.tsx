import { IconComponent } from '@/components/Icon/IconComponent'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div style={{ width: '400px', height: '300px', backgroundColor: 'white' }}>
      <Button variant={'primary'}>
        <IconComponent name={'arrow'} />
        Call me
      </Button>
      <Button variant={'link'} as={'a'}>
        ff
      </Button>
    </div>
  )
}
