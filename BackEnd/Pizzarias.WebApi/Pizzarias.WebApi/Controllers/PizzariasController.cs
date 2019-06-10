using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pizzarias.WebApi.Domains;
using Pizzarias.WebApi.Interfaces;
using Pizzarias.WebApi.Repositories;

namespace Pizzarias.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class PizzariasController : ControllerBase
    {
        private IPizzariaRepository PizzariaRepository { get; set; }

        public PizzariasController()
        {
            PizzariaRepository = new PizzariaRepository();
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public IActionResult Cadastrar(Pizzaria pizzaria)
        {
            try
            {
                PizzariaRepository.CadastrarPizzaria(pizzaria);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        [Authorize]
        public IActionResult ListarTodas()
        {
            try
            {
                List<Pizzaria> Pizzarias = PizzariaRepository.ListarTodas();
                var resultado = from P in Pizzarias
                                select new
                                {
                                    idIdpizzaria = P.IdPizzaria,
                                    nome = P.Nome,
                                    horarioFuncionamento = P.HorarioFuncionamento,
                                    localizacao = P.Localizacao,
                                    vegan = Convert.ToString(P.Vegan),
                                    categoria = P.IdCategoriaNavigation.Categoria1,
                                    telefone = P.Telefone
                                };
                return Ok(resultado);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}