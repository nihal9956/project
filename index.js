let cardRow=document.getElementsByClassName('img__wrapper');
let colImg=document.getElementsByClassName('col__img')



for(let i=0;i<cardRow.length;i++){

    console.log(colImg[i],cardRow[i])

    cardRow[i].addEventListener('mouseover',()=>{

        for(let i=0;i<colImg.length;i++){
            colImg[i].style.filter = "grayscale(1)";
            
            colImg[i].style.transform="scale(0.8)"
            colImg[i].style.transition="transform 0.2s ease-in"
        }

       
    
    })

   
    
    cardRow[i].addEventListener('mouseout',()=>{

        for(let i=0;i<colImg.length;i++){
            colImg[i].style.filter = "grayscale(0)";
            colImg[i].style.transform="scale(1)";
            colImg[i].style.transition="transform 0.2s ease-out"
        }
    
    })
}








