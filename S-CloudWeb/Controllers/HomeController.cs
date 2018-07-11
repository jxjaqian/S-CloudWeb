using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using S_CloudWeb.SCloudServices;

namespace S_CloudWeb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult CheckUserValid(string userID, string password)
        {
            SCloudServiceClient client = new SCloudServiceClient();
            OperationResultOfUserDTObN2_PkCvD remote = client.CheckUserValid(userID, password);
            //Session["UserName"]= remote.Data.UserName;
            return this.Json(remote);
        }
        public ActionResult CheckUserIsExist(string userCode)
        {
            SCloudServiceClient client = new SCloudServiceClient();
            OperationResultOfUserDTObN2_PkCvD remote = client.IsUserCodeAlreadyExists(userCode);
            return this.Json(remote);
        }
        public ActionResult RegisterUser(UserDTO dto)
        {
            SCloudServiceClient client = new SCloudServiceClient();
            OperationResultOfUserDTObN2_PkCvD remote = client.AddUser(dto);
            return this.Json(remote);
        }
        public ActionResult GetAllHospitals()
        {
            SCloudServiceClient client = new SCloudServiceClient();
            OperationResultOfArrayOfHospitalDTObN2_PkCvD remote = client.GetAllHospitals();
            return this.Json(remote);
        }
    }
}