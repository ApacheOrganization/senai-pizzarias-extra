using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using Pizzarias.WebApi.Domains;
using Pizzarias.WebApi.Interfaces;
using Pizzarias.WebApi.Repositories;
using Pizzarias.WebApi.ViewModels;

namespace Pizzarias.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository { get; set; }

        public LoginController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Logar(LoginViewModel login)
        {
            try
            {
                Usuarios usuarioProcurado = UsuarioRepository.BuscarPorEmailESenha(login);

                if (usuarioProcurado == null)
                {
                    return NotFound();
                }

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioProcurado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioProcurado.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Role, usuarioProcurado.IdTipoUsuarioNavigation.Permissao),
                    new Claim("permissao", usuarioProcurado.IdTipoUsuarioNavigation.Permissao),
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("Pizzarias-key-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "Pizzarias.WebApi",
                    audience: "Pizzarias.WebApi",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds
                    
                );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
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