using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pizzarias.WebApi.ViewModels
{
    public class CadastrarUsuarioViewModel
    {

        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public int? IdTipoUsuario { get; set; }
    }
}
