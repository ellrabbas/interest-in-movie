// https://interestinmovie-4tzbx430y-ellrabbas-projects.vercel.app

const MoviesData = [
  // movies of Nuri Bilge Ceylan

  {
    name: "Cocon",
    desc: "A short, silent, black and white story about life, survival, death; animals, objects, trees; young and old. It is mostly an aggregation of a bunch of good photos, which is not surprising, as Ceylan is also a photographer",
    titleImage:
      "https://upload.wikimedia.org/wikipedia/tr/thumb/6/63/Koza_Filmi.jpg/220px-Koza_Filmi.jpg",
    image:
      "https://assets.mubicdn.net/images/artworks/566905/images-original.png?1686645511",
    category: "Drama",
    language: "Turkish",
    year: 1995,
    time: "20",
    video:
      "https://www.youtube.com/watch?v=ZDF_cGhNbN0&pp=ygUPbnVyaSBiaWxnZSBrb3ph",
    rate: 6.7,
    casts: [
      {
        fullName: "Mehmet Emin Ceylan",
        image:
          "https://tr.web.img3.acsta.net/medias/nmedia/18/91/80/05/20164031.jpg",
      },
      {
        fullName: "Emine Ceylan",
        image:
          "https://arhm.ktb.gov.tr/repo/uploads/16022021224508-f124b905-1160-4b40-ba7f-4de169c85c28-cs.jpg",
      },
      {
        fullName: "Fatma Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/76830/cache-603794-1620556604/image-w856.jpg?size=800x",
      },
    ],
    directors: [
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
    ],
  },
  {
    name: "The Small Town",
    desc: "A photographer wanders through a small Anatolian town, encountering various characters",
    titleImage:
      "https://m.media-amazon.com/images/M/MV5BOTcwMzFhZjctYjcxZS00YmQ0LTg0ZGItZTMwMzYzMGVlNTg4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    image:
      "https://assets.mubicdn.net/images/film/23942/image-w1280.jpg?1602847872",
    category: "Drama",
    language: "Turkish",
    year: 1997,
    time: "1",
    video:
      "https://www.youtube.com/watch?v=X0FLZTDYANo&pp=ygUPbnVyaSBiaWxnZSBrb3ph",
    rate: 7,
    casts: [
      {
        fullName: "Mehmet Emin Toprak",
        image:
          "https://media.themoviedb.org/t/p/w500/7SXN3BfVv5aVQxp9gvdShIDPCvo.jpg",
      },
      {
        fullName: "Mehmet Emin Ceylan",
        image:
          "https://tr.web.img3.acsta.net/medias/nmedia/18/91/80/05/20164031.jpg",
      },
      {
        fullName: "Fatma Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/76830/cache-603794-1620556604/image-w856.jpg?size=800x",
      },
      {
        fullName: "Muzaffer Ozdemir",
        image:
          "https://media.themoviedb.org/t/p/w500/tZ39s32phQGZ19SEewup6iGYGXd.jpg",
      },
    ],
    directors: [
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
    ],
  },
  {
    name: "Clouds of May",
    desc: "A filmmaker returns to his hometown to shoot a movie, encountering personal and professional challenges",
    titleImage: "https://tr.web.img2.acsta.net/pictures/bzp/01/27539.jpg",
    image:
      "https://assets.mubicdn.net/images/film/29346/image-w1280.jpg?1605013663",
    category: "Drama",
    language: "Turkish",
    year: 1999,
    time: "1",
    video:
      "https://www.youtube.com/watch?v=k9ysLQfoQd0&pp=ygUbbnVyaSBiaWxnZSBzZXJzZXJpIG1heWlubGFy",
    rate: 7.3,
    casts: [
      {
        fullName: "Mehmet Emin Toprak",
        image:
          "https://media.themoviedb.org/t/p/w500/7SXN3BfVv5aVQxp9gvdShIDPCvo.jpg",
      },
      {
        fullName: "Mehmet Emin Ceylan",
        image:
          "https://tr.web.img3.acsta.net/medias/nmedia/18/91/80/05/20164031.jpg",
      },
      {
        fullName: "Fatma Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/76830/cache-603794-1620556604/image-w856.jpg?size=800x",
      },
      {
        fullName: "Muzaffer Ozdemir",
        image:
          "https://media.themoviedb.org/t/p/w500/tZ39s32phQGZ19SEewup6iGYGXd.jpg",
      },
    ],
    directors: [
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
    ],
  },
  {
    name: "Distant",
    desc: "Two distant relatives struggle to connect while dealing with their own personal issues",
    titleImage: "https://upload.wikimedia.org/wikipedia/en/1/18/Uzak.png",
    image:
      "https://images.mubicdn.net/images/film/386/cache-8119-1546729211/image-w1280.jpg?size=800x",
    category: "Drama",
    language: "Turkish",
    year: 2002,
    time: "1",
    video:
      "https://www.youtube.com/watch?v=YJKIypY3P-g&pp=ygURbnVyaSBiaWxnZSBtZXNhZmU%3D",
    rate: 7.5,
    casts: [
      {
        fullName: "Muzaffer Ozdemir",
        image:
          "https://media.themoviedb.org/t/p/w500/tZ39s32phQGZ19SEewup6iGYGXd.jpg",
      },
      {
        fullName: "Mehmet Emin Toprak",
        image:
          "https://media.themoviedb.org/t/p/w500/7SXN3BfVv5aVQxp9gvdShIDPCvo.jpg",
      },
      {
        fullName: "Zuhal Gencer",
        image:
          "https://www.yuzdeyuz.com.tr/images/uploads/voice-cast/dsc02750r.jpg",
      },
      {
        fullName: "Fatma Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/76830/cache-603794-1620556604/image-w856.jpg?size=800x",
      },
      {
        fullName: "Nazan Kesal",
        image:
          "https://im.showtv.com.tr/5/7998/nazan-kesal-500x500.png?v=1645455765",
      },
      {
        fullName: "Ercan Kesal",
        image:
          "https://media0043.elcinema.com/uploads/_315x420_afc39c721ec69d9e5dac0f01edeea498ae913643cd251b0be312763a2fa2ab9f.jpg",
      },
      {
        fullName: "Ebru Ceylan",
        image: "https://fwcdn.pl/ppo/80/93/618093/469388.2.jpg",
      },
    ],
    directors: [
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
    ],
  },
  {
    name: "Climates",
    desc: "A couple's relationship deteriorates as they journey through Turkey",
    titleImage:
      "https://m.media-amazon.com/images/M/MV5BNDE2ODRhOGMtYjM1My00ODQ2LTg5YmMtZGIxZjAyN2M1OWM5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    image: "https://static01.nyt.com/images/2006/10/27/arts/27clim.600.jpg",
    category: "Drama",
    language: "Turkish",
    year: 2006,
    time: "1",
    video:
      "https://www.youtube.com/watch?v=zKMtBZXguYg&pp=ygUTbnVyaSBiaWxnZSBpa2xpbWxlcg%3D%3D",
    rate: 7.6,
    casts: [
      {
        fullName: "Ebru Ceylan",
        image: "https://fwcdn.pl/ppo/80/93/618093/469388.2.jpg",
      },
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
      {
        fullName: "Nazan Kesal",
        image:
          "https://im.showtv.com.tr/5/7998/nazan-kesal-500x500.png?v=1645455765",
      },
      {
        fullName: "Mehmet Eryilmaz",
        image:
          "https://pbs.twimg.com/profile_images/1739219828/y_netmen_m.ery_400x400.jpg",
      },
      {
        fullName: "Ufuk Bayraktar",
        image:
          "https://images.entertainment.ie/person/w780_vkXCGpu7i5vVuPGM1JHKtRBCqUz.jpg?w=400&q=high",
      },
      {
        fullName: "Mehmet Emin Ceylan",
        image:
          "https://tr.web.img3.acsta.net/medias/nmedia/18/91/80/05/20164031.jpg",
      },
      {
        fullName: "Fatma Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/76830/cache-603794-1620556604/image-w856.jpg?size=800x",
      },
    ],
    directors: [
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
    ],
  },
  {
    name: "Three Monkeys",
    desc: "A family disintegrates when a corrupt politician covers up a hit-and-run accident",
    titleImage:
      "https://m.media-amazon.com/images/M/MV5BMTcyZjk4YmYtOWQ0NS00NTM4LTg2MmQtYjU1NmE4ZmVjMWM0XkEyXkFqcGdeQXVyOTQ2MjQ3MTI@._V1_.jpg",
    image:
      "https://assets.mubicdn.net/images/artworks/544714/images-original.png?1685000794",
    category: "Drama",
    language: "Turkish",
    year: 2008,
    time: "1",
    video:
      "https://www.youtube.com/watch?v=mV6caVhd1DM&pp=ygUSbnVyaSBiaWxnZTMgbWF5bXVu",
    rate: 7.3,
    casts: [
      {
        fullName: "Yavuz Bingol",
        image:
          "https://images.entertainment.ie/person/w780_pl3P9qjtHp5jdyRFcU83UW5fT5j.jpg?w=400&q=high",
      },
      {
        fullName: "Firat Tanis",
        image:
          "https://m.media-amazon.com/images/M/MV5BOWMxOThiYmUtMzc4Zi00YzZmLTkyNDctMTBiZmIxNmRjM2E2XkEyXkFqcGdeQXVyMTY3Mzc5NjI0._V1_QL75_UY207_CR86,0,140,207_.jpg",
      },
      {
        fullName: "Ercan Kesal",
        image:
          "https://media0043.elcinema.com/uploads/_315x420_afc39c721ec69d9e5dac0f01edeea498ae913643cd251b0be312763a2fa2ab9f.jpg",
      },
      {
        fullName: "Hatice Aslan",
        image:
          "https://medyapim.com/wp-content/uploads/2022/05/Hatice-Aslan.jpg",
      },
      {
        fullName: "Ahmet Rifat Sungar",
        image:
          "https://idiletisim.com.tr/media/images/sanatcilar/galeri/923778862-b.jpg",
      },
    ],
    directors: [
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
    ],
  },
  {
    name: "Once Upon a Time in Anatolia",
    desc: "A group of men set out in search of a dead body in the Anatolian steppes.",
    titleImage:
      "https://upload.wikimedia.org/wikipedia/en/6/6f/Once_Upon_a_Time_in_Anatolia.jpg",
    image:
      "https://static01.nyt.com/images/2012/01/04/arts/04once/04once-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    category: "Drama",
    language: "Turkish",
    year: 2011,
    time: "2",
    video:
      "https://www.youtube.com/watch?v=M19py3h7LZo&pp=ygUXbnVyaSBiaWxnZSBiaXIgemFtYW5sYXI%3D",
    rate: 7.8,
    casts: [
      {
        fullName: "Muhammet Uzuner",
        image:
          "https://i.pinimg.com/474x/5c/61/11/5c61112b8725cd7818e80385f6a24800.jpg",
      },
      {
        fullName: "Yilmaz Erdogan",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjEyMjE5NjQ2OV5BMl5BanBnXkFtZTgwOTgwODYzNTE@._V1_FMjpg_UX1000_.jpg",
      },
      {
        fullName: "Taner Birsel",
        image:
          "https://images.mubicdn.net/images/cast_member/69116/cache-102159-1416664785/image-w856.jpg",
      },
      {
        fullName: "Ahmet Mumtaz Taylan",
        image:
          "https://m.media-amazon.com/images/M/MV5BMThkYjc4YmUtZWY5NS00NTA1LWIyOWYtNmZlYjZmNzNjNTZiXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_FMjpg_UX1000_.jpg",
      },
      {
        fullName: "Firat Tanis",
        image:
          "https://m.media-amazon.com/images/M/MV5BOWMxOThiYmUtMzc4Zi00YzZmLTkyNDctMTBiZmIxNmRjM2E2XkEyXkFqcGdeQXVyMTY3Mzc5NjI0._V1_QL75_UY207_CR86,0,140,207_.jpg",
      },
      {
        fullName: "Erol Erarslan",
        image: "https://seecinema.net/images/whoiswho/5383/Erol-Erarslan.jpg",
      },
      {
        fullName: "Murat Kilic",
        image:
          "https://im.showtv.com.tr/5/7927/murat-kilic-500x500.png?v=1630607495",
      },
      {
        fullName: "Kubilay Tuncer",
        image:
          "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTLZyilyMauwrHqVIWH0nnuroIXnJqMkQR37ePyig4FnpyJ2ibixOkmCHuuXq1znDTP1q5ikcerSaKNBX4",
      },
    ],
    directors: [
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
    ],
  },
  {
    name: "Winter Sleep",
    desc: "A retired actor runs a small hotel in central Anatolia with his wife",
    titleImage:
      "https://m.media-amazon.com/images/M/MV5BNTU1NTY2Mzg5M15BMl5BanBnXkFtZTgwNDcwNjM5MTE@._V1_.jpg",
    image:
      "https://static01.nyt.com/images/2014/12/23/arts/SUB-TURKISHFILM/SUB-TURKISHFILM-superJumbo.jpg",
    category: "Drama",
    language: "Turkish",
    year: 2014,
    time: "3",
    video:
      "https://www.youtube.com/watch?v=Jce0Kdb96zo&pp=ygUYbnVyaSBiaWxnZSBrxLHFnyB1eWt1c3Ug",
    rate: 8,
    casts: [
      {
        fullName: "Haluk Bilginer",
        image:
          "https://media.themoviedb.org/t/p/w500/nx7f5rzMB3zqVW4pqaJsW37DNnP.jpg",
      },
      {
        fullName: "Melisa Sozen",
        image:
          "https://media.themoviedb.org/t/p/w500/nuK1xjicGltvRv3aAs16x3uTniV.jpg",
      },
      {
        fullName: "Demet Akbag",
        image:
          "https://images.entertainment.ie/person/w780_pMqqIBXBskFWfbXUSPBSib0pgB4.jpg?w=400&q=high",
      },
      {
        fullName: "Ayberk Pekcan",
        image:
          "https://media.themoviedb.org/t/p/w500/1D3TwIK5hoWAn3k8j8Wrsq7CJnS.jpg",
      },
      {
        fullName: "Serhat Kilic",
        image:
          "https://image.cnnturk.com/i/cnnturk/75/400x512/65b69c369b40e4b51b535208.jpg",
      },
      {
        fullName: "Nejat Isler",
        image:
          "https://media0043.elcinema.com/uploads/_315x420_9c160dc685d2d183307ca4b126ead373babf78ea3427b7bf28665d12c4693342.jpg",
      },
      {
        fullName: "Tamer Levent",
        image:
          "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Factor%2F470531%2Fphoto%2F6314da692b23b.jpg&w=640&q=75",
      },
      {
        fullName: "Nadir Saribacak",
        image:
          "https://image.hurimg.com/i/hurriyet/75/770x0/566abd4418c77318844e2cce.jpg",
      },
      {
        fullName: "Mehmet Ali Nuroglu",
        image:
          "https://images.mubicdn.net/images/cast_member/132201/cache-439507-1559090422/image-w856.jpg?size=800x",
      },
    ],
    directors: [
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
    ],
  },
  {
    name: "The Wild Pear Tree",
    desc: "An unpublished writer returns to his hometown after graduating, where he seeks sponsors to publish his book while dealing with his father's deteriorating indulgence into gambling",
    titleImage:
      "https://m.media-amazon.com/images/M/MV5BZjJmMGZmZTQtOWQ5NS00YjUwLWI4ZjEtZGY5NzBlMmY5ZGZlXkEyXkFqcGdeQXVyMTg5MDEyNw@@._V1_.jpg",
    image:
      "https://variety.com/wp-content/uploads/2018/05/under-the-pear-tree-cannes.jpg",
    category: "Drama",
    language: "Turkish",
    year: 2018,
    time: "3",
    video:
      "https://www.youtube.com/watch?v=po0vls18Koc&pp=ygUQbnVyaSBiaWxnZSBhaGxhdA%3D%3D",
    rate: 8,
    casts: [
      {
        fullName: "Dogu Demirkol",
        image:
          "https://b6s54eznn8xq.merlincdn.net/Uploads/People/f4004dd34ecd4b79aac18b9f027d9cb2.jpg",
      },
      {
        fullName: "Hazar Erguclu",
        image:
          "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F1%2Fpeople%2F14278ddf15508e091f43be927dc09ebc.jpg",
      },
      {
        fullName: "Murat Cemcir",
        image:
          "https://cdn.bubilet.com.tr/files/Sanatci/murat-cemcir-49130.jpeg",
      },
      {
        fullName: "Bennu Yildirimlar",
        image: "https://www.haberler.com/i/19/bennu-yildirimlar_3662_b.jpg",
      },
      {
        fullName: "Serkan Keskin",
        image:
          "https://image.tmdb.org/t/p/original/3TPGvIpgHrP7q6BDEtwWnnVtcQJ.jpg",
      },
      {
        fullName: "Tamer Levent",
        image:
          "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Factor%2F470531%2Fphoto%2F6314da692b23b.jpg&w=640&q=75",
      },
      {
        fullName: "Oner Erkan",
        image:
          "https://im.showtv.com.tr/5/7020/oner-erkan-500x500.png?v=1512024031",
      },
      {
        fullName: "Ahmet Rifat Sungar",
        image:
          "https://idiletisim.com.tr/media/images/sanatcilar/galeri/923778862-b.jpg",
      },
      {
        fullName: "Kubilay Tuncer",
        image:
          "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTLZyilyMauwrHqVIWH0nnuroIXnJqMkQR37ePyig4FnpyJ2ibixOkmCHuuXq1znDTP1q5ikcerSaKNBX4",
      },
      {
        fullName: "Kadir Cermik",
        image:
          "https://im.showtv.com.tr/5/7047/kadir-cermik-500x500.png?v=1512024555",
      },
    ],
    directors: [
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
    ],
  },
  {
    name: "About Dry Grasses",
    desc: "A young teacher hopes to be transferred to Istanbul after four years of mandatory service in a remote village, but is accused of inappropriate contact by two students. After losing hope, a colleague offers him new perspectives on life",
    titleImage:
      "https://m.media-amazon.com/images/M/MV5BZGU1YmJhMTUtZGNhYi00MjUwLTgwNWEtODY1YzBjN2EwNjZjXkEyXkFqcGdeQXVyODc5Mjc4Nzg@._V1_.jpg",
    image:
      "https://images.mubicdn.net/images/film/374465/cache-865045-1686481265/image-w1280.jpg",
    category: "Drama",
    language: "Turkish",
    year: 2023,
    time: "3",
    video:
      "https://www.youtube.com/watch?v=Ywajc6S8YEg&pp=ygUQbnVyaSBiaWxnZSBvdGxhcg%3D%3D",
    rate: 8,
    casts: [
      {
        fullName: "Deniz Celiloglu",
        image:
          "https://media.e-talenta.eu/foto/1713168.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjZmV0IiwiYXVkIjoiY2ZldCIsImlhdCI6MTcwNzkxNDAzNCwiZXhwIjoxNzA3OTIxMjM0LCJkYXRhIjp7ImNkbl9zY29wZSI6ImZvdG8iLCJjZG5faWQiOjE3MTMxNjgsInVzZXJfcHJvZmlsZUlkIjowLCJub0luZGV4IjpmYWxzZSwid2lkdGgiOjM1NjksImhlaWdodCI6NDkzN319.XiHBEQ6kQXcSs4oArzhrFtsizUDxW1nxPWsMK7HOPoI",
      },
      {
        fullName: "Merve Dizdar",
        image:
          "https://tr.web.img3.acsta.net/pictures/23/09/04/09/27/1832067.png",
      },
      {
        fullName: "Musab Ekici",
        image:
          "https://static.boxofficeturkiye.com/person/200x250/5623-rxjfq.png",
      },
      {
        fullName: "Ece Bagci",
        image:
          "https://media.themoviedb.org/t/p/w500/oqHieO4PU9hcBEkL2sSmJUejrvQ.jpg",
      },
      {
        fullName: "Erdem Senocak",
        image:
          "https://admin.biyografya.com/_docs/photos/e1d8f87a9c90640f24aaa422fc49b374.jpg",
      },
      {
        fullName: "Munir Can Cindoruk",
        image:
          "https://img03.imgsinemalar.com/images/afis_buyuk/m/munir-can-cindoruk-1655292570.jpg",
      },
      {
        fullName: "Cengiz Bozkurt",
        image:
          "https://b6s54eznn8xq.merlincdn.net/Uploads/People/f5ed2a1e6e0842fea21f982b5a310b75.jpg",
      },
      {
        fullName: "Elif Urse",
        image:
          "https://media.themoviedb.org/t/p/w500/q90DjpBFDZOGvUSjnuh7qzr5B2R.jpg",
      },
      {
        fullName: "Nalan Kurucim",
        image:
          "https://admin.biyografya.com/_docs/photos/ad3346dd44b54c322a82d6960c6f6d96.jpg",
      },
      {
        fullName: "Ferhat Akgun",
        image:
          "https://tiyatronline.com/isDosyalar/2021/02/07/ferhat-akgu_Vi6uCJUuXO.jpg",
      },
    ],
    directors: [
      {
        fullName: "Nuri Bilge Ceylan",
        image:
          "https://images.mubicdn.net/images/cast_member/1231/cache-84-1625243460/image-w856.jpg?size=800x",
      },
    ],
  },

  {
    name: "Bird Box",
    desc: "Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.",
    titleImage:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/Bird_Box_%28film%29.png",
    image:
      "https://www.indiewire.com/wp-content/uploads/2018/12/Screen-Shot-2018-12-27-at-10.28.15-AM.png",
    category: "Thriller",
    language: "English",
    year: 2018,
    time: "2",
    video: "https://www.youtube.com/watch?v=o2AsIXSh2xo",
    rate: 7.2,
    casts: [
      {
        fullName: "Sandra Bullock",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1074346390-square.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
      },
      {
        fullName: "Trevante Rhodes",
        image:
          "https://m.media-amazon.com/images/M/MV5BMzAwNDEyNTc3MV5BMl5BanBnXkFtZTgwNTEzMzc1MTI@._V1_FMjpg_UX1000_.jpg",
      },
      {
        fullName: "John Malkovich",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/John_Malkovich_KVIFF_2.jpg/1200px-John_Malkovich_KVIFF_2.jpg",
      },
      {
        fullName: "Sarah Paulson",
        image:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/79647_v9_bb.jpg",
      },
      {
        fullName: "Jacki Weaver",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Jacki_Weaver_-_Flickr_-_Eva_Rinaldi_Celebrity_and_Live_Music_Photographer_%281%29.jpg/640px-Jacki_Weaver_-_Flickr_-_Eva_Rinaldi_Celebrity_and_Live_Music_Photographer_%281%29.jpg",
      },
    ],
    directors: [
      {
        fullName: "Susanne Bier",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Susanne_Bier_2011_%28cropped%29.jpg/1200px-Susanne_Bier_2011_%28cropped%29.jpg",
      },
    ],
  },
];

module.exports = MoviesData;
