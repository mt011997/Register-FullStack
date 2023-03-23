import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schemas";
import { CadastroContext, iCadastroData } from "../../contexts/contextCadastro";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Form } from "react-router-dom";
import { useContext } from "react";

export const FormCadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCadastroData>({
    resolver: yupResolver(formSchema),
  });

  const { toggleShowSenha, showSenha } = useContext(CadastroContext);

  return (
    <div>
      <h2>Crie sua conta</h2>
      <Form onSubmit={handleSubmit()}>
        <label htmlFor="full_name">Nome Completo</label>
        <input
          type="text"
          placeholder="Digite seu nome completo"
          {...register("full_name")}
        />
        <span>{errors.full_name?.message}</span>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Senha</label>
        <DivSenha>
          <input
            type={showSenha ? "text" : "password"}
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <button type="button" onClick={(e) => toggleShowSenha(e)}>
            {showSenha ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </DivSenha>

        <span>{errors.password?.message}</span>

        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          placeholder="Digite seu telefone"
          {...register("phone")}
        />
        <span>{errors.phone?.message}</span>
      </Form>
    </div>
  );
};
