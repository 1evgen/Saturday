import { Button } from '@/components/ui/button'
import { Icon } from '@/components/Icon/Icon'
import { FlexContainer } from '@/components/helperComponents/FlexContainer'

export function App() {
  return (
    <div style={{ width: '400px', height: '300px', backgroundColor: 'white' }}>
      <FlexContainer gap={'20px'} justify={'space-around'}>
        <Button>
          <Icon iconId={'arrowButton1'} width={'16px'} height={'16px'} viewBox={'0 0 16 16'} />
          Return to home
        </Button>
      </FlexContainer>
    </div>
  )
}
