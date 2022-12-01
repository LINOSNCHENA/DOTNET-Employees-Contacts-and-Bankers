namespace WebApplication1.Models
{
    public class ItemData
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Phone { get; set; }
        public DateTime Date { get; set; }
        public bool Done { get; set; }
    }
    public class Employee
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string mobile { get; set; }
        public string office { get; set; }
        public string stars { get; set; }

        public DateTime createdat { get; set; }
    }

    public class Banker
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string mobile { get; set; }
        public string office { get; set; }
        public string stars { get; set; }

        public DateTime createdat { get; set; }
        public DateTime updatedat { get; set; }
    }


    public class Contact
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public int phone { get; set; }
        public string stars { get; set; }

        public string published { get; set; }
        public DateTime createdat { get; set; }
        public DateTime updatedat { get; set; }
    }
}