using Microsoft.EntityFrameworkCore;
using Pizzarias.WebApi.Domains;
using Pizzarias.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pizzarias.WebApi.Repositories
{
    public class PizzariaRepository : IPizzariaRepository
    {
        public void CadastrarPizzaria(Pizzaria pizzaria)
        {
            using (PizzariasContext ctx = new PizzariasContext())
            {
                ctx.Pizzaria.Add(pizzaria);
                ctx.SaveChanges();
            }
        }

        public List<Pizzaria> ListarTodas()
        {
            using (PizzariasContext ctx = new PizzariasContext())
            {
                return ctx.Pizzaria.Include(x=>x.IdCategoriaNavigation).ToList();
            }
        }
    }
}
