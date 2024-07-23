import { useForm } from "react-hook-form";
import {
  ButtonSubmit,
  Input,
  Logo,
  SpanRedirecionar,
  SpanDescriInput,
  DescriForm,
  StyledParag,
} from "../../componentesGlobais/style";

import { Conteiner, ButtonRegisterPage } from "./style";

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    password: yup.string().required("Senha obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post("/sessions", data)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("UserToken", res.data.token);
        window.localStorage.setItem("UserId", res.data.user.id);
        setTimeout(() => navigate("/landing"), 3000);
        notifySucess();
      })
      .catch((err) => {
        if (err) {
          notifyErr();
        }
      });
  };
  const notifyErr = () =>
    toast.error("Usuário já cadastrado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifySucess = () =>
    toast.success("Cadastro feito com suscesso", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  console.log(errors);

  return (
    <Conteiner>
      <Logo>Kenzie Hub</Logo>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <DescriForm>Login</DescriForm>
        <SpanDescriInput>Email</SpanDescriInput>
        <Input type="text" placeholder="Email" {...register("email")} />
        {errors.email && <StyledParag>{errors.email.message}</StyledParag>}
        <SpanDescriInput>Senha</SpanDescriInput>
        <Input type="password" placeholder="Senha" {...register("password")} />
        {errors.password && (
          <StyledParag>{errors.password.message}</StyledParag>
        )}
        <ButtonSubmit type="submit">Entrar</ButtonSubmit>
        <SpanRedirecionar>Ainda não possui uma conta?</SpanRedirecionar>
        <ButtonRegisterPage
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          Cadastre-se
        </ButtonRegisterPage>
      </form>
      <ToastContainer></ToastContainer>
    </Conteiner>
  );
};
