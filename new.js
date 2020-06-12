const Product_ID = document.getElementById('Product ID');
const Product_Name= document.getElementById('Product Name');
const short_Description= document.getElementById('short Description');
const Description= document.getElementById('Description');
const Problem_statement= document.getElementById('Problem statement');


const submitBtn = document.getElementById('submitBtn');


const database = firebase.database();
const rootRef = database.ref('Product');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  rootRef.child(Product_ID.value).set({
    Product_Name: Product_Name.value,
    Short_descrption: short_descrption.value,
    Descrption: Descrption.value,
    Problem_statement:Problem_statement.value,
  });
 });