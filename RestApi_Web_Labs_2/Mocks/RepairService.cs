using RestApi_Web_Labs_2.Interfaces;
using RestApi_Web_Labs_2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestApi_Web_Labs_2.Mocks
{
    public class RepairService : IRepairService
    {
        private IBaseRepository<CountryModel> Countries { get; set; }
        private IBaseRepository<PhotographerModel> Photographers { get; set; }
        private IBaseRepository<PhotoModel> Photos { get; set; }
        public RepairService(IBaseRepository<CountryModel> countries, IBaseRepository<PhotographerModel> photographers, IBaseRepository<PhotoModel> photos)
        {
            Countries = countries;
            Photographers = photographers;
            Photos = photos;

        }
        public void Work()
        {
            var rand = new Random();
            var CountryId = Guid.NewGuid();
            var PhotographerId = Guid.NewGuid();
            if(Countries!=null)
            Countries.Create(new CountryModel
            {
                Id = CountryId,
                Name = String.Format($"Country number{rand.Next()}"),
                Description = String.Format($" Какое-то описание под номером {rand.Next()}")
            });
            if (Photographers != null)
                Photographers.Create(new PhotographerModel
            {
                Id = PhotographerId,
                Name = String.Format($"Photographer number{rand.Next()}"),
                Age = rand.Next(14,100),
                WorkExperience = rand.Next(1,50)
            });
            string[] vs = new string[]  {
                "https://i01.fotocdn.net/s116/2320ba10fcae1007/gallery_m/2646880603.jpg",
                "https://avatars.mds.yandex.net/get-pdb/2813188/2075c997-2a0b-4de9-bd18-d5d14fcf08da/s1200?webp=false",
                "https://www.nastol.com.ua/download.php?img=201411/1024x768/nastol.com.ua-116927.jpg",
                "https://mota.ru/upload/resize/1024/768/upload/wallpapers/source/2014/10/07/14/05/41429/190-39c.jpg",
                "https://krot.info/uploads/posts/2021-03/thumbs/1615024524_10-p-raznotsvetnii-kosmos-art-kartinki-10.jpg",
                "https://www.wallpapermaiden.com/image/2016/10/01/galaxy-planet-space-nebula-stars-lights-space-6811-resized.jpg",
                "https://f3.upet.com/m_IqMWZNcQCt_C.jpg",
                "https://proza.ru/pics/2019/07/10/885.jpg",
                "http://cdn.fishki.net/upload/post/201506/30/1582281/2_03.jpg"
            };
            var Country = Countries.Get(CountryId);
            var Photographer = Photographers.Get(PhotographerId);
            if (Photos != null)
                Photos.Create(new PhotoModel
            {
                Name = String.Format($"Photo number{rand.Next()}"),

                Description = String.Format($" Какое-то описание под номером {rand.Next()}"),

                url = vs[rand.Next(0,9)],

                Date = DateTime.Now.ToShortDateString(),

                CountryModelId = CountryId,

                PhotographerModelId = PhotographerId,

                Country = Country,

                Photographer = Photographer
    });
        }
    }
}
