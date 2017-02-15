using System.Web.Mvc;
using TestApi1.Models;
using Newtonsoft.Json;

namespace TestApi1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
