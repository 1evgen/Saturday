import * as Checkbox from '@radix-ui/react-checkbox'

type CheckboxType = {}

export const CheckboxComponent = (props: CheckboxType) => {
  const {} = props
  return (
    <div className={'container'}>
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>
    </div>
  )
}
