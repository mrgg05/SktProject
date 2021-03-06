﻿using SktProject.Models;
using SktProject.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SktProject.Controllers
{
    public class ShoppingCartController : Controller
    {
        // GET: ShoppingCart
        ApplicationDbContext db = new ApplicationDbContext();
        // GET: ShoppingCart

            [HttpGet]
        public JsonResult Index()
        {
            var cart = ShoppingCart.GetCart(this.HttpContext);
            var cartviewModel = new ShoppingCartViewModels
            {
                CartItems = cart.GetCartItems(),
                CartTotal = cart.GetTotal()
            };



            return Json(cartviewModel, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public JsonResult CartTotal()
        {
            var cart = ShoppingCart.GetCart(this.HttpContext);

            var shoptotal = cart.GetTotal();
            return Json(shoptotal, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddToCart(Product product)
        {
            int id = Convert.ToInt32(product.ProductId);
            var eklenen = db.Products.FirstOrDefault(x => x.ProductId == id);
            var cart = ShoppingCart.GetCart(this.HttpContext);
            cart.AddToCart(eklenen);

            return Json(eklenen);

        }


        public JsonResult ClearCart()
        {
            var cart = ShoppingCart.GetCart(this.HttpContext);

            cart.EmptyCart();


            return Json(cart, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult RemoveToCart(Cart cartt)
        {
            int id = Convert.ToInt32(cartt.RecordId);
            var cart = ShoppingCart.GetCart(this.HttpContext);
            string itemname = db.Carts.FirstOrDefault(x => x.RecordId == id).Product.Title;


            int itemcount = cart.RemoveFromCart(id);



            var result = new ShoppingCartRemoveViewModels
            {
                Message = Server.HtmlEncode(itemname) + " sepetinizden basariyla kaldirildi",
                CartTotal = cart.GetTotal(),
                Count = cart.GetCount(),
                ItemCount = itemcount,
                DeleteId = id
            };

            return Json(result);

        }

        public ActionResult CartSummary()
        {
            var cart = ShoppingCart.GetCart(this.HttpContext);
            ViewData["CartCount"] = cart.GetCount();

            return PartialView("CartSummary");
        }
    }
}