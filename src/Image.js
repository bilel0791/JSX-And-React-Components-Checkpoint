import React from "react";

//image component  : dans mon cas le procut est un tableau de produit (object) je peut pas fixe un url ici 
// j'ai l' accees des url pour chaque produit quand je fait un map de tableau  product voir App.js  
const image=()=>{
    const productImageUrl="https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/8/2/82kb0001fe_1.jpg";
       <img src={productImageUrl} alt="Product" />;;

};
export default image;