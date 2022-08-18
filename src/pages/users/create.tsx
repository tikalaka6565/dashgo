import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import * as yup from 'yup'
import { Input } from "../components/Form/Input";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
}

const createUserFormSchema = yup.object().shape({
  email: yup.string().required('Insira o E-mail').email('E-mail Inválido'),
  name: yup.string().required('Nome Obrigatório'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null,
    yup.ref('password')
  ], 'As senhas precisam ser iguais')
}).required();

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData>
    = async (values) => {

    }

  const { errors } = formState

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx={["2", "auto"]} px="6">
        <Sidebar />

        <Box as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(handleCreateUser)}
        >

          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome Completo" {...register('name')} error={errors.name} />
              <Input name="email" type="email" label="E-mail" {...register('email')} error={errors.email} />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="Senha" {...register('password')} error={errors.password} />
              <Input name="password_confirmation" type="password" label="Confirmação da Senha" {...register('password_confirmation')} error={errors.password_confirmation} />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users/">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink">Salvar</Button>

            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}