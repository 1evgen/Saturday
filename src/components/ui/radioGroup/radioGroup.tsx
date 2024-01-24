import * as RadioGroup from '@radix-ui/react-radio-group'

export type itemType = {
  value: string
  id: string
  label: string
}

export type PropsType = {
  demo: itemType[]
}

export const RadioGroupComponent = (props: PropsType) => {
  const { demo } = props

  return (
    <>
      <RadioGroup.Root>
        {demo.map(i => (
          <RadioGroup.Item key={i.id} value={i.value} id={i.id}>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </>
  )
}
