let btnShowAddRecipe = document.getElementById('btn_add_recipe');
let modalAddRecipe = document.getElementById('recipe_modal')
let btnCloseModal = document.getElementById('span_close');
let btnCloseView = document.getElementById('span_close_view');
let inpRecipeName = document.getElementById('recipe_name');
let recipeIngredients = document.getElementById('ingredients');
let recipeSteps = document.getElementById('recipe_steps');
let btnAddRecipe = document.getElementById('btn_submit_recipe');
let modalViewRecipe = document.getElementById('view_recipe');
let viewRecipeName = document.getElementById('view_recipe_name');
let viewRecipeIngredients = document.getElementById('recipe_ingredients');
let viewRecipeSteps = document.getElementById('view_recipe_steps');
let btnEditRecipe = document.getElementById('edit_recipe');
let btnDeleteRecipe = document.getElementById('delete_recipe');

let recipeList = document.getElementById('recipeList');

let ingredients = [];
let steps = [];
let recipe = [];
let recipeID = 1;

btnShowAddRecipe.addEventListener('click', addRecipe);
btnCloseModal.addEventListener('click', closeModal);
btnCloseView.addEventListener('click', closeViewModal);
inpRecipeName.addEventListener('change', capitalizeRecipeName);
recipeIngredients.addEventListener('keypress', addRecipeIngredients);
recipeIngredients.addEventListener('focusout', displayIngredients);
recipeIngredients.addEventListener('click', showIngredients);
recipeSteps.addEventListener('keypress', addRecipeSteps);
recipeSteps.addEventListener('focusout', displaySteps);
recipeSteps.addEventListener('click', showSteps);
btnAddRecipe.addEventListener('click', addNewRecipe);
modalViewRecipe.addEventListener('click', editRecipe);

function addRecipe(){
  modalAddRecipe.style.display = "block";
  inpRecipeName.value = "";
  recipeIngredients.value = "";
  recipeSteps.value = "";
}

function closeModal(){
  modalAddRecipe.style.display = "none";
}

function closeViewModal(){
  modalViewRecipe.style.display = "none";
}

function capitalizeRecipeName(){
  inpRecipeName.value = inpRecipeName.value.toUpperCase();
}

function addRecipeIngredients(e){
  if(e.key === 'Enter'){
    ingredients = recipeIngredients.value.split('\n');
  }
}

function displayIngredients(){
  recipeIngredients.value = "";
  let newArr = ingredients.map(myFunction);
  function myFunction(value){
    return value+'\n';
  }
  for(let i=0; i<newArr.length; i++){
    recipeIngredients.value += '*'+newArr[i];
  }
}

function showIngredients(){
  recipeIngredients.value = "";
  for(let i=0; i<ingredients.length; i++){
    recipeIngredients.value += ingredients[i]+'\n';
  }
}

function addRecipeSteps(e){
  if(e.key === 'Enter'){
    steps = recipeSteps.value.split('\n');
  }
}

function displaySteps(){
  recipeSteps.value = "";
  let newArr = steps.map(myFunction);
  function myFunction(value){
    return value+'\n';
  }
  for(let i=0; i<newArr.length; i++){
    recipeSteps.value += `${i+1}. ${newArr[i]}`;
  }
}

function showSteps(){
  recipeSteps.value = "";
  for(let i=0; i<steps.length; i++){
    recipeSteps.value += steps[i]+'\n';
  }
}

function addNewRecipe(){
  if(inpRecipeName.value.trim() === "" || recipeIngredients.value.trim() === "" || recipeSteps.value.trim() === ""){
    alert("Please complete all fields");
    inpRecipeName.value = inpRecipeName.value.trim();
    recipeIngredients.value = recipeIngredients.value.trim();
    recipeSteps.value = recipeSteps.value.trim();
  }
  else{
    recipe.push([recipeID, inpRecipeName.value, ingredients, steps]);
    showAllRecipes();
    recipeID++;
    modalAddRecipe.style.display = "none";
    ingredients = [];
    steps = [];
  }
}

function showAllRecipes(){
  recipeList.innerHTML = "";

  for(let i=0; i<recipe.length; i++){
    let newRecipe = document.createElement('li');
    let newRecipeTitle = document.createElement('h2');
    let newRecipeButton = document.createElement('button');
    newRecipeTitle.innerHTML = recipe[i][1];
    newRecipeButton.innerHTML = "View Recipe";
    newRecipe.setAttribute('id', recipe[i][0]);
    newRecipeButton.addEventListener('click', myFunction);


    function myFunction(){
      viewRecipeIngredients.innerHTML = "";
      viewRecipeSteps.innerHTML = "";
      viewRecipeName.innerHTML = recipe[i][1];
      let viewIngredientsName = recipe[i][2].map(viewIngredients);
        
      function viewIngredients(value){
        return value+'<br>';
      }
      for(let i=0; i<viewIngredientsName.length; i++){
        viewRecipeIngredients.innerHTML += '*'+viewIngredientsName[i];
      }
      let viewRecipeStepsModal = recipe[i][3].map(viewSteps);
      function viewSteps(value){
        return value+'<br>';
      }
      for(let i=0; i<viewRecipeStepsModal.length; i++){
        viewRecipeSteps.innerHTML += `${i+1}. ${viewRecipeStepsModal[i]}`;
      }
      modalViewRecipe.style.display = "block";
    }

    newRecipe.appendChild(newRecipeTitle);
    newRecipe.appendChild(newRecipeButton);
    recipeList.appendChild(newRecipe);
   }
}

function editRecipe(e){
  //alert(e.target.id);
  if(e.target.id === 'edit_recipe'){
      alert('you are editing the recipe');
  }
  if(e.target.id === 'delete_recipe'){
      let answer = confirm("Are you sure you want to delete this recipe?");
      console.log(answer);
  }
}