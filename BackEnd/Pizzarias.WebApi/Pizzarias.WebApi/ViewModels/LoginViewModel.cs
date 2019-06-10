using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Pizzarias.WebApi.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "É necessário um e-mail para que seja efetuado o login no sistema.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "É necessário uma senha para que seja efetuado o login no sistema.")]
        public string Senha { get; set; }
    }
}
