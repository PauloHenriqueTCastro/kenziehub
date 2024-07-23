import {
  ButtonSubmit,
  Input,
  Logo,
  SpanRedirecionar,
  SpanDescriInput,
  DescriForm,
  SelectModulo,
  BtnVoltar,
  StyledParag,
} from "../../componentesGlobais/style";
import { ConteinerRegistro, ConteinerLogo } from "./style";

import * as yup from "yup";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    contact: yup.string().required("Contato obrigatorio"),
    bio: yup.string().required("Bio obrigatoria"),
    course_module: yup.string().required("Modulo obrigatorio"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mínimo de oito caracteres, pelo menos uma letra, um número e um símbolo"
      ),
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
      .post("/users", data)
      .then((res) => {
        notifySucess();
        setTimeout(travelRegisterPage, 3000);
      })
      .catch((err) => {
        if (err) {
          notifyErr();
        }
      });
  };
  const notifyErr = () => {
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
    // setTimeout(navigate("/"), 10000);
  };

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
  function travelRegisterPage() {
    navigate("/");
  }
  return (
    <ConteinerRegistro>
      <ConteinerLogo>
        <Logo>Kenzie Hub</Logo>
        <BtnVoltar
          onClick={(e) => {
            e.preventDefault();
            travelRegisterPage();
          }}
        >
          Voltar
        </BtnVoltar>
      </ConteinerLogo>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <DescriForm>Crie sua conta</DescriForm>
        <SpanRedirecionar>Rapido e grátis, vamos nessa</SpanRedirecionar>
        <SpanDescriInput>Nome</SpanDescriInput>
        <Input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name && <StyledParag>{errors.name.message}</StyledParag>}

        <SpanDescriInput>Email</SpanDescriInput>
        <Input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email && <StyledParag>{errors.email.message}</StyledParag>}

        <SpanDescriInput>Senha</SpanDescriInput>
        <Input
          type="text"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password && (
          <StyledParag>{errors.password.message}</StyledParag>
        )}

        <SpanDescriInput>Confirmar Senha</SpanDescriInput>
        <Input type="password" placeholder="Digite novamente sua senha" />
        <SpanDescriInput>Bio</SpanDescriInput>
        <Input type="text" placeholder="Fale sobre você" {...register("bio")} />
        {errors.bio && <StyledParag>{errors.bio.message}</StyledParag>}

        <SpanDescriInput>Contato</SpanDescriInput>
        <Input
          type="number"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact && <StyledParag>{errors.contact.message}</StyledParag>}
        <SpanDescriInput>Selecionar módulo</SpanDescriInput>
        <SelectModulo {...register("course_module")}>
          <option value="">Selecione</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </SelectModulo>
        {errors.course_module && (
          <StyledParag>{errors.course_module.message}</StyledParag>
        )}
        <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
      </form>
      <ToastContainer />
    </ConteinerRegistro>
  );
};
