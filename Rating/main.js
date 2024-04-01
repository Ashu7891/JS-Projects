const stars = document.querySelectorAll(".star")
const feedback = document.querySelector("#feedback")
stars.forEach((star,ind)=>{
    star.addEventListener( "click", ()=>{
        let rating = ind+1;
        feedback.innerText = `${rating} of 5`;
        stars.forEach((s,index)=>{
            if(index<=ind) {
                s.innerHTML = "&#9733;"
            } else {
                s.innerHTML = "&#9734;"
            }
        })
    })
})