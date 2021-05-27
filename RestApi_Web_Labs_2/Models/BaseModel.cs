using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestApi_Web_Labs_2.Models
{
    public abstract class BaseModel
    {
        public Guid Id { get; set; }
    }
}
