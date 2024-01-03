var data=[
    {
        image:'https://static.toiimg.com/thumb/54714340.cms?imgsize=458099&width=800&height=800',
        foodName:'sandwich',
        foodDescription:'"Sandwiching" may be accomplished by putting one original image on top of the other, placing them into the film carrier of an enlarger, and printing on one sheet of paper. It may also be accomplished by placing the two "sandwiched" originals in a frame on the surface of a lightbox and taking a third photograph of the combination. ',
        foodprice: 500
    },
    {
        image:'https://static.toiimg.com/thumb/56933159.cms?width=1200&height=900',
        foodName:'pizza',
        foodDescription:'pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil. These toppings are added over a piece of bread covered with sauce.',
        foodprice:699
    },
    {
        image:'https://static.toiimg.com/thumb/75584113.cms?imgsize=1576247&width=800&height=800',
        foodName:'burger',
        foodDescription:'A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world',
        foodprice:450
    },
    {
        image:'https://cafedelites.com/wp-content/uploads/2018/05/Red-Velvet-Cake-IMAGE-43.jpg',
        foodName:'red velver cake',
        foodDescription:'Red velvet cake is much more than vanilla cake tinted red. This recipe produces the best red velvet cake with superior buttery, vanilla, and cocoa flavors, as well as a delicious tang from buttermilk. My trick is to whip the egg whites, which guarantees a smooth velvet crumb',
        foodprice: 550
    },
    {
        image:'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-7.jpg',
        foodName:'cheescake',
        foodDescription:'Cheesecake is a dessert made with a soft fresh cheese (typically cottage cheese, cream cheese, quark or ricotta), eggs, and sugar. It may have a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sometimes sponge cake.[1] Cheesecake may be baked or unbaked, and is usually refrigerated.',
        foodprice:650
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtlpc718nxcnugF7CFTV6LcAKCY4Lcjlx-g&usqp=CAU',
        foodName:'strawberry milkshake',
        foodDescription:'milk and strawberry puree layered on top of a splash of strawberry puree and finished with vanilla whipped cream',
        foodprice:700
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ztSWzipxmhnNO7yXkq3D9fafh2CaABAHiA&usqp=CAU',
        foodName:'health saled',
        foodDescription:'These Plates Will Add Elegance To Your Dining Table Setup - 4 Options For YouWe have got you some plates to add grace to your crockery collection. Read on.',
        foodprice:400
    },

    {
        image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg',
        foodName:'pasta',
        foodDescription:'Italian pasta  is a collective name for a category of food made from wheat flour and water, sometimes with egg. The name refers to the resulting dough (pasta also means “dough”) that is rolled out and cut into various shapes. Pasta is cooked in water and served with a sauce.',
        foodprice:750
    },
    {
        image:'https://www.markwellfoods.co.nz/wp-content/uploads/2023/02/Untitled-design-2023-02-28T124736.962-1024x561.png',
        foodName:'momos',
        foodDescription:'Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine that is also popular in neighbouring Bhutan and India. Momos are usually served with a sauce known as achar influenced by the spices and herbs used within many South Asian cuisines.',
        foodprice: 300
    },
    {
        image:'https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/04/30/0/FNK_The-Best-Cheddar-And-Herb-Chaffle_H_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1588257306685.jpeg ',
        foodName:'waffle',
        foodDescription:'A waffle is a leavened batter or dough cooked between two hot plates of a waffle iron, patterned to give a characteristic size, shape, and grid-like surface impression. Waffles are cooked until they become golden-brown in color, with a crispy outer texture and a soft interior.',
        foodprice:250
    },
    {
        image:'https://t4.ftcdn.net/jpg/04/35/07/19/360_F_435071969_sCwvSRnSi9r9XonzvFnEwXy8PvFShFeP.jpg',
        foodName:'pavbhaji',
        foodDescription:'Pav bhaji is a spiced .',
        foodprice:350
    },

    {
        image:'https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg',
        foodName:'panir tikka',
        foodDescription:'Paneer Tikka is a popular and delicious .',
        foodprice:500
    }, 

]

window.onload =function (){
    for(let i=0;i<data.length;i++){
      document.getElementById('products-card').innerHTML +=`<section class="col-3 mb-4 product ">
      <div class="image-div">
            <img src="${data[i].image}" class="w-100 ">
      </div>
         <div class="description-div">
        <section class="product-name my-2">
        <strong class="name">
            ${data[i].foodName}
        </strong>
        </section>
        <section class="product-description">
        <p>
            ${data[i].foodDescription}
        </p>
        </section>
        </div>
        <div class="purchase-div row w-100 align-items-center">
        <span class="col-6">
        price:
        <strong class="item-price" ${parseInt(data[i].foodprice)<450 ? "text-primary" :"text-danger"}>
          ${data[i].foodprice}
        </strong> 
        </span>
        <button class="col-6 btn btn-primary" onclick="addItem(${i})">
        purchase
        </button>
        </div>
        
        </section>`
    }
}

function addItem(x){
    var orderIteams = parseInt(document.getElementById('order-items').innerText)
    document.getElementById('order-items').innerText = orderIteams + 1
    var price=parseInt(document.getElementById('price').innerText)
    var productprice = parseInt(document.getElementsByClassName('item-price')[x].innerText)
    price+=productprice
    document.getElementById('price').innerText =price
    var gst=parseInt(document.getElementById('gst').innerText)
    var gstamount=(price*18)/100
    document.getElementById('gst-amount').innerText =gstamount

        var discount=document.getElementById('discount').innerText
    if(price>1){
        discount= 10
    }
    if(price>2000){
        discount= 20
    }
    document.getElementById('discount').innerText =discount
    var discountedprice=(price+gstamount)*discount/100
    document.getElementById('discounted-price').innerText = Math.round(discountedprice)

    var totalbill=(price+gstamount)-discountedprice
    document.getElementById('total').innerText =Math.round(totalbill)

}   