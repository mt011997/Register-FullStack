import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { FormCadastro } from "../../components/FormCadastro";
import { Load } from "../../components/LoadingScreen";
import { LoginContext } from "../../contexts/contextLogin";

export const Cadastro = () => {
  const { client, loading } = useContext(LoginContext);

  if (loading) {
    return <Load />;
  }

  return (
    <div>
      {!client ? <FormCadastro /> : <Navigate to="/homepage" replace />}
    </div>
  );
};
