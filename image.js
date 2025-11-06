let userinupt=document.getElementById("userinupt");
let searchbutton=document.getElementById("button");
let seachform=document.getElementById("seachform");
let key="PrQ_wuLN05Lknf6XKa6F30vGK43hGEvZGvp77doAGHA";
let  resultcard=document.getElementById("resultSection");

let showmore=document.getElementById("showmore");

let keyword="";
let page=1;

async function  searchimage() {
    keyword= userinupt.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;

    const response=await fetch(url);
    const data= await response.json();
    
    console.log(data);
    let results=data.results;
    if(page===1){
        resultcard.textContent="";
    }
    results.map((result)=>{
         const image=document.createElement("img");
         image.src=result.urls.small;
         image.classList.add("imageEl");

         const imagelink=document.createElement("a");
         imagelink.href=result.links.html;
         imagelink.target="_blank";

         imagelink.appendChild(image);
         resultcard.appendChild(imagelink);
         showmore.style.display="block";
         
    });

     
}
seachform.addEventListener("submit",(e)=>{
    e.preventDefault(); // prevents the defult submission of form 
    page=1;
    searchimage();
});

function more(){
    page++;
    searchimage();
}
showmore.addEventListener("click",more);
