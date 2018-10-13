var a;
var additem;
function inventory()
{
    

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
    document.getElementById('main').innerHTML =a;
    console.log("test");
}
function addProduct()
{
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
    document.getElementById('main').innerHTML = a + additem;
    //document.getElementById('main').innerHTML="okok";
}