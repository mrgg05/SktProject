using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SktProject.Models.ViewModel
{
    public class ShoppingCartViewModels
    {
      
        public int RecordId { get; set; }
        public string CartId { get; set; }
        public int ProductId { get; set; }
        public int Count { get; set; }
        public DateTime DateCreated { get; set; }
        public string Title { get; set; }
        public decimal CartTotal { get; set; }
    }
}