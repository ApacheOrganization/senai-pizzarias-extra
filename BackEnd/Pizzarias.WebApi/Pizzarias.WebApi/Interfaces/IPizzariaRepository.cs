using Pizzarias.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pizzarias.WebApi.Interfaces
{
    public interface IPizzariaRepository
    {
        void CadastrarPizzaria(Pizzaria pizzaria);

        List<Pizzaria> ListarTodas();
    }
}
