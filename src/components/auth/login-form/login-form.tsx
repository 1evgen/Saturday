import { TextField } from '@/components/ui/TextField'
import { Button } from '@/components/ui/button'
import { IconComponent } from '@/components/Icon/IconComponent'
import s from './loginForm.module.scss'
import { Card } from '@/components/ui/card/Card'
import { useController, useForm } from 'react-hook-form'
import { CheckboxComponent } from '@/components/ui/checkbox'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type LoginFormType = {
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
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginShema),
  })

  const onSubmit = (data: LoginFormType) => {
    console.log(data)
  }
  const {
    field: { onChange, value },
  } = useController({
    control,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className={s.loginBox}>
        <TextField {...register('email')} label={'email'} errorMessage={errors.email?.message} />
        <TextField
          {...register('password')}
          label={'password'}
          errorMessage={errors.password?.message}
        />
        <CheckboxComponent checked={value} onValueChange={onChange} id={'eddq11'} />
        <Button type={'submit'} variant={'primary'}>
          <IconComponent className={s.styleIcon} name={'arrow'} size={16} />
          send
        </Button>
      </Card>
    </form>
  )
}
