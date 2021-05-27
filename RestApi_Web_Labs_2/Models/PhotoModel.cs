using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestApi_Web_Labs_2.Models
{
    public class PhotoModel : BaseModel
    {
        public string Name { get; set; }
        public string url { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public Guid CountryModelId { get; set; }
        public Guid PhotographerModelId { get; set; }
        public virtual CountryModel Country { get; set; }
        public virtual PhotographerModel Photographer { get; set; }
    }   
}
