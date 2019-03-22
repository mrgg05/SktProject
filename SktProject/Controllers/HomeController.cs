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

        public ActionResult Index1()
        {
            //return RedirectToAction("Index1", "Categories");



            return View();
        }

        public ActionResult Login()
        {
            //return RedirectToAction("Index1", "Categories");



            return View();
        }
        public ActionResult Index()
        {
            //return RedirectToAction("Index1", "Categories");



            return View();
        }


        [HttpGet]
        public JsonResult IndexProduct()
        {
            var result = (from p in db.Products
                         select new IndexViewModels
                         {
                             ProductId=p.ProductId,
                             SKT = p.SKT,
                             Price = p.Price,
                             ProductName = p.Title,
                             ProductUrl = p.ProductUrl
                         }).ToList();
                       


            return Json(result,JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult IndexCat()
        {
            var result = (from p in db.Categories
                          select new CategoriesViewModels
                          {
                              CategoryId = p.CategoryId,
                              CategoryName = p.CategoryName
                          }).ToList();
                         


            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult GetCatProduct(Category cat)
        {
            var id = Convert.ToInt32(cat.CategoryId);

            var catproduct = (from p in db.Products
                              join c in db.Categories on p.CategoryId equals c.CategoryId
                              where p.CategoryId==id
                              select new
                              {
                                  p.ProductId,
                                  p.Price,
                                  p.SKT,
                                  p.TETT,
                                  p.Title,
                                  p.ProductUrl,
                                  p.ProductionDate,
                                  p.CategoryId
                              }).ToList();


            return Json(catproduct,JsonRequestBehavior.AllowGet);
        }

      
    }
}