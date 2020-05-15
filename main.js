var form=document.getElementById('addform');
var itemlist=document.getElementById('items');
var filter =document.getElementById('filter');
//form submit event
form.addEventListener('submit',additem);
//delete event
itemlist.addEventListener('click',removeitem);
filter.addEventListener('keyup',filteritems);
//add item
function additem(e){
    e.preventDefault();
    //getinput value
    var newitem=document.getElementById('item').value;

    //craete new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
   li.appendChild(document.createTextNode(newitem));
   //craete del button element
   var deletebtn=document.createElement('button');
   //addclass to del button
   deletebtn.className='btn btn-danger btn-sm float-right delete';
   //append text node
   deletebtn.appendChild(document.createTextNode('x'));
   //append button to li
   li.appendChild(deletebtn);

   itemlist.appendChild(li);  
}
   //remove item
   function removeitem(e){
       if(e.target.classList.contains('delete')){
            if(confirm('are you ok')){
                var li=e.target.parentElement;
                itemlist.removeChild(li);
            }
   }
}
//fiter item
function filteritems(e){
    //convert text to lower case
    var text=e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        if(itemname.toLowerCase().indexof(text)!=-1){
            item.style.display='block';

        } else{
            item.style.display='none';
        }

    });

}
