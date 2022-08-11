import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from './components/Form/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Insira o E-mail').email('E-mail Inválido'),
  password: yup.string().required('Insira a senha'),
}).required();

export default function signIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  type SignInFormData = {
    email: string,
    password: string,
  }

  const { errors } = formState

  console.log(errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            error={errors.email}
            {...register('email'
            )} />

          <Input type="password"
            name="password"
            label="Senha"
            error={errors.password}
            {...register('password')} />
        </Stack>

        <Button type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >Entrar</Button>
      </Flex>

    </Flex >

  )
}
