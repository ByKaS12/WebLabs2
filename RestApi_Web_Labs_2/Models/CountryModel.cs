using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestApi_Web_Labs_2.Models
{
    public class CountryModel : BaseModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
