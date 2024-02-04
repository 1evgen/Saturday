import * as Tabs from '@radix-ui/react-tabs'
import { Typography } from '@/components/ui/typography'
import s from './tabsSwitcher.module.scss'

export type TabValueType = {
  id: string
  value: string
}

export enum Orientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export type TabsSwitcherType = {
  tabValues: TabValueType[]
  orientation: Orientation
}

export const TabsSwitcher = (props: TabsSwitcherType) => {
  const { tabValues, orientation = Orientation.Vertical } = props

  return (
    <div>
      <Tabs.Root className={s.Tabs}>
        <Tabs.List className={`${s.List} ${s[orientation]} `} data-orientation={orientation}>
          {tabValues.map(el => (
            <Tabs.Trigger value={el.id} key={el.id} className={s.Trigger}>
              <Typography variant={'body1'}>{el.value}</Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
