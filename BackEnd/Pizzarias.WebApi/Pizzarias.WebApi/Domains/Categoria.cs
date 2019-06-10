using System;
using System.Collections.Generic;

namespace Pizzarias.WebApi.Domains
{
    public partial class Categoria
    {
        public Categoria()
        {
            Pizzaria = new HashSet<Pizzaria>();
        }

        public int Id { get; set; }
        public string Categoria1 { get; set; }

        public ICollection<Pizzaria> Pizzaria { get; set; }
    }
}
