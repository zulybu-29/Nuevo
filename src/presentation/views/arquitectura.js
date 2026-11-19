export function showArquitectura(container, presenter)
{
    container.innerHTML = `
    
            <h1> yo</h1>
        <h2> soy</h2>
        <h3> lorena</h3>
       

`;


container.addEventListener("click", (event) =>{
  console.log("entre en el navar"); 
    const  link=event.target.closest("[data-view]");

    if(!link) return;
console.log("entre en el navar222"); 
    event.preventDefault();
    navigate(link.dataset.view);


} ); 

}