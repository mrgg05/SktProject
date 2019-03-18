using SktProject.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace SktProject.Controllers
{
    public class AdminController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Products()
        {
            return View(db.Products.ToList());
        }

        [HttpPost]
        // GET: Products/Delete/5
        public JsonResult Delete(int id)
        {
            Product proc = db.Products.Find(id);
            var products = db.Products.Remove(proc);
            db.SaveChanges();

            return Json(products);
        }



        public ActionResult ProductAdd()
        {
            ViewBag.CategoryId = new SelectList(db.Categories, "CategoryId", "CategoryName");
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ProductAdd(Product product, HttpPostedFileBase image)
        {
            if (ModelState.IsValid)
            {
                WebImage img = new WebImage(image.InputStream);
                FileInfo fotoinfo = new FileInfo(image.FileName);
                string newfoto = Guid.NewGuid().ToString() + fotoinfo.Extension;
                img.Resize(500, 775);
                img.Save("../Uploads/Photo/" + newfoto);
                product.ProductUrl = "../Uploads/Photo/" + newfoto;

                db.Products.Add(product);
                db.SaveChanges();

            }

            ViewBag.CategoryId = new SelectList(db.Categories, "CategoryId", "CategoryName", product.CategoryId);
            return RedirectToAction("Products", "Admin");

        }


    }
}