using System;
using System.Collections.Generic;

namespace Pizzarias.WebApi.Domains
{
    public partial class Pizzaria
    {
        public int IdPizzaria { get; set; }
        public string Localizacao { get; set; }
        public string Nome { get; set; }
        public string HorarioFuncionamento { get; set; }
        public string Cnpj { get; set; }
        public bool Vegan { get; set; }
        public string Categoria { get; set; }
        public int? IdCategoria { get; set; }
        public string Telefone { get; set; }

        public Categoria IdCategoriaNavigation { get; set; }
    }
}
