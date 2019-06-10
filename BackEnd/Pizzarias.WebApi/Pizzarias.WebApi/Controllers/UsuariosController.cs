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
using Pizzarias.WebApi.ViewModels;

namespace Pizzarias.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository { get; set; }

        public UsuariosController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public IActionResult CadastrarUsuario(Usuarios usuarioModel)
        {
            try
            {
                UsuarioRepository.CadastrarUsuario(usuarioModel);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = "Erro: " + ex
                });
            }
        }
    }
}