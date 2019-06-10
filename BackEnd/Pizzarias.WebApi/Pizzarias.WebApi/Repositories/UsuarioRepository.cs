using Microsoft.EntityFrameworkCore;
using Pizzarias.WebApi.Domains;
using Pizzarias.WebApi.Interfaces;
using Pizzarias.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pizzarias.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        public Usuarios BuscarPorEmailESenha(LoginViewModel login)
        {
            using (PizzariasContext ctx = new PizzariasContext())
            {
                return ctx.Usuarios.Include(x => x.IdTipoUsuarioNavigation).FirstOrDefault(x => x.Email == login.Email && x.Senha == login.Senha);
            }
        }

        public void CadastrarUsuario(Usuarios usuario)
        {
            using (PizzariasContext ctx = new PizzariasContext())
            {
                ctx.Usuarios.Add(usuario);
                ctx.SaveChanges();
            }

        }

    }
}
