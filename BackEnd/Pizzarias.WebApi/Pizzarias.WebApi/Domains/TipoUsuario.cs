using System;
using System.Collections.Generic;

namespace Pizzarias.WebApi.Domains
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Usuarios = new HashSet<Usuarios>();
        }

        public int Id { get; set; }
        public string Permissao { get; set; }

        public ICollection<Usuarios> Usuarios { get; set; }
    }
}
