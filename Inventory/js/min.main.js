var a;
var additem;
var billingc;
var billingItem;

billingc = "<form>\
<table>\
    <tr>\
        <th><input type='text' name='ProductId' placeholder='Product Id'></th>\
        <th><input type='text' name='Price' placeholder='Price'></th>\
        <th><input type='text' name='discount' placeholder='discount'></th>\
        <th><input type='submit' value='Add'></th>\
    </tr>\
</table>\
</form>";
a = "<table>\
    <tr>\
        <th>\
            <button onclick=addProduct()>Add New+</button>\
        </th>\
         <th>\
         <select><option>Mother Board<option></select>\
         </th>\
         <th>\
         <button>Search</button></th>\
    </tr>\
    </table>";


    additem = "<h3>Add New Item </h3>\
    <form method='post' action=''>\
    <table>\
        <tr>\
            <th><label>Upload</label></th>\
            <th><input type='file' name='fileName'></th>\
        </tr>\
        <tr>\
            <th><label>Product Name </th>\
            <th></label><input type='text' name='pname'></th>\
        </tr>\
        <tr>\
            <th><label>Product Id </th>\
            <th></label><input type='text' name='pid'></th>\
        </tr>\
        <tr>\
            <th><label>Product Category </th>\
            <th></label><input type='text' name='pcat'></th>\
        </tr>\
        <tr>\
            <th><label>In Stock </th>\
            <th></label><input type='text' name='instck'></th>\
        </tr>\
        <tr>\
        <th><label>Selling Price </th>\
        <th></label><input type='text' name='sp'></th>\
        </tr>\
        <tr>\
            <th><label>Buying Price </th>\
            <th></label><input type='text' name='bp'></th>\
        </tr>\
        <tr>\
            <th></label><input type='submit'></th>\
            <th></label><input type='reset'></th>\
        </tr>\
        </table>\
    </form>";
    
function inventory()
{
    

    document.getElementById('main').innerHTML =a;
    console.log("test");
}
function addProduct()
{
    
    document.getElementById('main').innerHTML = a + additem;
    //document.getElementById('main').innerHTML="okok";
}
function billing()
{
    document.getElementById('main').innerHTML = billingc;
}