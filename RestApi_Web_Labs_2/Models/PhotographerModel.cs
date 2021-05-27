using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestApi_Web_Labs_2.Models
{
    public class PhotographerModel : BaseModel
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public int WorkExperience { get; set; }
    }
}
