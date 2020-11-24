using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BACKEND.Controllers.Models
{
        public class Employee
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string mobile { get; set; }
        public string office { get; set; }
        public string stars { get; set; }
        public string createdat { get; set; }
    }

    public class Banker
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string mobile { get; set; }
        public string office { get; set; }
        public string stars { get; set; }

        public string createdat { get; set; }
        public string updatedat { get; set; }
    }


        public class Contact
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string phone { get; set; }     
        public string stars { get; set; }

        public string published { get; set; }
        public string createdat { get; set; }
        public string updatedat { get; set; }
    }
}
