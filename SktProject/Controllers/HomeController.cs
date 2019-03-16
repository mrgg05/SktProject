using SktProject.Models;
using SktProject.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SktProject.Controllers
{
    public class HomeController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();

        public ActionResult Index()
        {
            //return RedirectToAction("Index1", "Categories");



            return View();
        }


        [HttpGet]
        public JsonResult Index1()
        {
            var result = (from p in db.Products
                         select new IndexViewModels
                         {
                             SKT = p.SKT,
                             Price = p.Price,
                             ProductName = p.Title,
                             ProductUrl = p.ProductUrl
                         }).ToList();
                       


            return Json(result,JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Index2()
        {
            var result = (from p in db.Categories
                          select new 
                          {
                             p.CategoryName
                          }).ToList();



            return Json(result, JsonRequestBehavior.AllowGet);
        }

      
    }
}