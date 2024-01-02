import { useController, useForm } from 'react-hook-form'
import { TextField } from '@/components/ui/TextField'
import { Button } from '@/components/ui/button'
import { CheckboxComponent } from '@/components/ui/checkbox'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card } from '@/components/ui/card/Card'
import s from '@/components/ui/card/card.module.scss'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

const loginShema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
})

export const LoginForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginShema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <Card className={s.loginCard}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('email')} label={'email'} errorMessage={errors.email?.message} />
        <TextField
          {...register('password')}
          label={'password'}
          errorMessage={errors.password?.message}
        />
        <CheckboxComponent checked={value} setChecked={onChange} id={'id-1'} />
        <Button type={'submit'} variant={'primary'}>
          Submit
        </Button>
      </form>
    </Card>
  )
}
