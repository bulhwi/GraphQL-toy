import * as React from 'react';
import {
  Box, Button, Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {LoginMutationVariables, useLoginMutation} from "../../generated/graphql";
import {useNavigate} from "react-router-dom";

function RealLoginForm(): React.ReactElement {
  const navigate = useNavigate();
  const [login, {loading}] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm<LoginMutationVariables>();

  // login
  const onSubmit = async (formData: LoginMutationVariables) => {
    const {data} = await login({variables: formData});
    if(data?.login.errors) {
      data.login.errors.forEach(err => {
        const field = `loginInput.${err.field === 'password' ? 'password' : 'emailOrUsername'}` as Parameters<typeof setError>[0];
        setError(field, {
          message: err.message
        });
      });
    }
    if(data && data.login.accessToken) {
      localStorage.setItem('access_token', data.login.accessToken);
      navigate('/');
    }
  }

  return (
    <Box
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
    >
      <Stack as={"form"} spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.loginInput?.emailOrUsername}>
          <FormLabel>이메일 또는 아이디</FormLabel>
          <Input
            type={"emailOrUsername"}
            placeholder={"이메일 또는 아이디를 입력하세요."}
            {...register('loginInput.emailOrUsername', {
              required: '이메일 또는 아이디를 입력해주세요.'
            })}
          />
          <FormErrorMessage>
            {errors.loginInput?.emailOrUsername && errors.loginInput.emailOrUsername.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.loginInput?.password}>
          <FormLabel>암호</FormLabel>
          <Input
            type={"password"}
            placeholder={"******"}
            {...register('loginInput.password', {
              required: '암호를 입력해주세요.'
            })}
          />
          <FormErrorMessage>
            {errors.loginInput?.password && errors.loginInput.password.message}
          </FormErrorMessage>
        </FormControl>

        <Divider/>

        <Button colorScheme={"teal"} type={"submit"} isLoading={loading}>
          로그인
        </Button>
      </Stack>
    </Box>
  )
}

export const LoginForm = (): React.ReactElement => {
  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Project</Heading>
        <Text fontSize={"lg"} color={"gray.600"}>
          감상평과 좋아요를 눌러보세요!
        </Text>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={"lg"}
        p={8}
      >
        <RealLoginForm />
      </Box>
    </Stack>
  );
};