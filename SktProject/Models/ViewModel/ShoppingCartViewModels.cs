using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SktProject.Models.ViewModel
{
    public class ShoppingCartViewModels
    {
        public List<Cart> CartItems { get; set; }

        public decimal CartTotal { get; set; }
    }
}