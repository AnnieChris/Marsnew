 const listofItems = [ 
    { item: 'PS4 Pro', stock: 3, original: 399.99 },     
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },     
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },     
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },     
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }    
    ]; 
    
let itemdetails = {};

function totalofItems()
{
    let newTotalArr = [];
    for(let i=0;i<listofItems.length;i++)
    {
        itemdetails = new Object();
        itemdetails.item=listofItems[i].item;
        itemdetails.original=listofItems[i].original;
        itemdetails.stock=listofItems[i].stock;
        if(listofItems[i].discount == null)
        {    
            itemdetails.sale=listofItems[i].original;
        }
        else{
            itemdetails.discount=listofItems[i].discount;
            itemdetails.sale=listofItems[i].original-(listofItems[i].original*listofItems[i].discount);
            
        }
        itemdetails.total=itemdetails.sale*itemdetails.stock;
        newTotalArr.push(itemdetails);
    }
    return newTotalArr;
} 
console.log(totalofItems(listofItems));

