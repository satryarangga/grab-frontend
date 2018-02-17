const data = [
	{
		"id":1, 
		"name":"Sana Sini Restaurant",
		"location":"Jakarta",
		"address":"Rawa Bebek Street",
		"open_hour":"07am - 10pm",
		"rating":5,
		"cuisine":"Western Food, Chinese Food",
		"price_est":"IDR 250K for 2 Person",
		"image_thumb":"https://b.zmtcdn.com/data/pictures/2/7419572/b9872618bd6ff26e15df3da27823c7dc_top_thumb_620_314.jpg",
		"image_large":"https://b.zmtcdn.com/data/pictures/2/7419572/e419db7f6b38f7167f6ff7e57d6ffec9.jpg?resize=1204%3A904&crop=1200%3A464%3B-2%2C219"
	},
	{
		"id":2, 
		"name":"Shaburi",
		"location":"Bandung",
		"address":"Thamrin Street",
		"open_hour":"11am - 11pm",
		"rating":3.5,
		"cuisine":"Japanese Food Food",
		"price_est":"IDR 150K for 2 Person",
		"image_thumb":"https://b.zmtcdn.com/data/pictures/6/18244516/2ef855eb4166a8c0fa577ba53574c5cf_top_thumb_620_314.jpg",
		"image_large":"https://b.zmtcdn.com/data/pictures/chains/5/7418865/32920e8ba647cbd4a9998ca317f97dc7.jpg?resize=1219%3A813&crop=1200%3A464%3B9%2C282"
	},
	{
		"id":3, 
		"name":"The Cafe",
		"location":"Jakarta",
		"address":"Rawa Buaya Street",
		"open_hour":"11am - 11pm",
		"rating":4,
		"cuisine":"Western, Chinese Food",
		"price_est":"IDR 350K for 2 Person",
		"image_thumb":"https://b.zmtcdn.com/data/pictures/7/7403667/ae06224a0c05f3f47e59e40e071c2f8d_top_thumb_620_314.jpg",
		"image_large":"https://b.zmtcdn.com/data/res_imagery/7403667_RESTAURANT_196164f14a5442226fefa1c5fb79e87c.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0"
	},
	{
		"id":4, 
		"name":"Larb Thai",
		"location":"Bogor",
		"address":"Manggarai Street",
		"open_hour":"01pm - 02am",
		"rating":5,
		"cuisine":"Thai Food",
		"price_est":"IDR 250K for 2 Person",
		"image_thumb":"https://b.zmtcdn.com/data/pictures/9/18358559/496d294037abcb1da9272384295f78d7_top_thumb_620_314.jpg",
		"image_large":"https://b.zmtcdn.com/data/res_imagery/18358559_RESTAURANT_16b363b8af88113086abddb7d843b227.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0"
	},
	{
		"id":5, 
		"name":"Edogin",
		"location":"Bandung",
		"address":"Kalibata Street",
		"open_hour":"10am - 01am",
		"rating":3,
		"cuisine":"Western Food",
		"price_est":"IDR 350K for 2 Person",
		"image_thumb":"https://b.zmtcdn.com/data/pictures/9/7403739/2c1d2f39e81c0d911155c53119736458_top_thumb_620_314.jpg",
		"image_large":"https://b.zmtcdn.com/data/res_imagery/7403739_RESTAURANT_6f8d2045ac00f0705c3e7922f61ebe31.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0"
	},
	{
		"id":6, 
		"name":"Kopi Tuku",
		"location":"Jakarta",
		"address":"Cawang Street",
		"open_hour":"11am - 02am",
		"rating":4,
		"cuisine":"Indonesian Food",
		"price_est":"IDR 250K for 2 Person",
		"image_thumb":"https://b.zmtcdn.com/data/pictures/8/7426158/69041ac7d3e278097b64ce0837f030be_top_thumb_620_314.jpg",
		"image_large":"https://b.zmtcdn.com/data/pictures/8/7426158/418254f1a209ebd41cd950441901728f.jpg?resize=1205%3A468&crop=1200%3A464%3B1%2C-2"
	},
	{
		"id":7, 
		"name":"OKU",
		"location":"Bogor",
		"address":"Pajajaran Street",
		"open_hour":"11am - 11pm",
		"rating":5,
		"cuisine":"Korean Food",
		"price_est":"IDR 150K for 2 Person",
		"image_thumb":"https://b.zmtcdn.com/data/pictures/7/18286687/490e4b26e4fb5b1a2a444cdb584adaa6_top_thumb_620_314.jpg",
		"image_large":"https://b.zmtcdn.com/data/res_imagery/18286687_RESTAURANT_85d0acac6aa707ff37b7e714beb0dcc4.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0"
	},
	{
		"id":8, 
		"name":"Plataran Menteng",
		"location":"Jakarta",
		"address":"Menteng Street",
		"open_hour":"11am - 01am",
		"rating":4.5,
		"cuisine":"Western Food",
		"price_est":"IDR 350K for 2 Person",
		"image_thumb":"https://b.zmtcdn.com/data/pictures/6/18478836/6ad872f2601b7f02f0e7caffc5fb02e2_top_thumb_620_314.jpg",
		"image_large":"https://b.zmtcdn.com/data/res_imagery/18478836_RESTAURANT_6c16faa66b2508661df58b05e2677930.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0"
	},
	{
		"id":9, 
		"name":"Talaga Sampireun",
		"location":"Bandung",
		"address":"BSD Street",
		"open_hour":"11am - 10pm",
		"rating":5,
		"cuisine":"Chinese Food",
		"price_est":"IDR 500K for 2 Person",
		"image_thumb":"https://b.zmtcdn.com/data/pictures/0/7417450/6efc17090c0ecb90c0246ba4a9fa6e2e_top_thumb_620_314.jpg",
		"image_large":"https://b.zmtcdn.com/data/res_imagery/7417450_RESTAURANT_a434e692cbc8073ef45adabba648052f.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0"
	},
	{
		"id":10, 
		"name":"Tier Sera Resto",
		"location":"Jakarta",
		"address":"Ahmad Yani Street",
		"open_hour":"11am - 11pm",
		"rating":2,
		"cuisine":"Indonesian Food",
		"price_est":"IDR 250K for 2 Person",
		"image_thumb":"https://b.zmtcdn.com/data/pictures/7/7420867/16375fbcc4ef73d79322325d7ba74f57_top_thumb_620_314.jpg",
		"image_large":"https://b.zmtcdn.com/data/reviews_photos/0f6/b7bb40950b42ae76855d5377733d60f6_1470829756.jpg?resize=1204%3A804&crop=1200%3A464%3B1%2C127"
	},
]

export default data;