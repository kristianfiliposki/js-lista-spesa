const ShopList=["Pane" , "Pizza" ,  "Formaggio" , "pasta" , "acido" , "uova di struzzo" , "mercurio" , "unicorno"];

let Nlist = 0;

while (Nlist < ShopList.length) {
    const node = document.createElement("li");
    document.querySelector("ul").appendChild(node);
    node.innerHTML+=(`${ShopList[Nlist]}   <input type="checkbox">`)
    Nlist++;
 }

 