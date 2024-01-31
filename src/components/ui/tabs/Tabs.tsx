import s from './tabsSwitcher.module.scss'
import * as Tabs from '@radix-ui/react-tabs'

type TabsSwitcher = {
  id: string
  value: string
}

export const TabsSwitcher = (props: TabsSwitcher) => {
  const { value, id } = props
  return (
    <div>
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger value={id}>value</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
