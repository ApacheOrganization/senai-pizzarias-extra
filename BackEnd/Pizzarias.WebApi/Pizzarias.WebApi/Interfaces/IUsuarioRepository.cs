using Pizzarias.WebApi.Domains;
using Pizzarias.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pizzarias.WebApi.Interfaces
{
    public interface IUsuarioRepository
    {
        void CadastrarUsuario(Usuarios usuario);

        Usuarios BuscarPorEmailESenha(LoginViewModel login);
    }
}
