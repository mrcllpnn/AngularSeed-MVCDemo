using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestApi1.Areas.HelpPage.Models;

namespace TestApi1.Areas.HelpPage.Controllers
{
    public class EmployeesController : ApiController
    {
        // GET api/Employees
        public string Get()
        {
            List<EmployeeModel> Employee = new List<EmployeeModel>()
                {
                  new EmployeeModel {FirstName="Mega", LastName="Tronus", JobTitle="Decepticon Leader"},
                  new EmployeeModel {FirstName="Optimus", LastName="Prime", JobTitle="Autobot Leader"},
                };

            return JsonConvert.SerializeObject(Employee);
        }

        // Update api/Employees     
        public HttpResponseMessage Update(EmployeeModel model)
        {  
            if (model != null)
            {
                System.Diagnostics.Debug.WriteLine("FirstName: {0},LastName: {1},JobTitle: {2}", model.FirstName, model.LastName, model.JobTitle);

                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }
    }
}