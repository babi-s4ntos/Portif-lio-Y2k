/* ===== FOLHEAR MAIS FÁCIL ===== */

const papers = document.querySelectorAll(".paper");

papers.forEach((paper) => {

    let startX = 0;
    let currentX = 0;
    let dragging = false;

    /* ===== DESKTOP ===== */

    paper.addEventListener("mousedown", (e)=>{
        dragging = true;
        startX = e.clientX;
    });

    window.addEventListener("mousemove", (e)=>{

        if(!dragging) return;

        currentX = e.clientX;

        const diff = currentX - startX;

        /* movimento visual da folha */
        let rotate = Math.max(-40, Math.min(0, diff / 4));

        if(!paper.classList.contains("flipped")){

            paper.style.transform =
            `translate(-50%, -50%) rotateY(${rotate}deg)`;

        }

    });

    window.addEventListener("mouseup", (e)=>{

        if(!dragging) return;

        dragging = false;

        const diff = e.clientX - startX;

        /* muito mais fácil virar */
        if(diff < -30){
            paper.classList.add("flipped");
        }

        if(diff > 30){
            paper.classList.remove("flipped");
        }

        paper.style.transform = "";

    });

    /* ===== MOBILE ===== */

    paper.addEventListener("touchstart", (e)=>{
        startX = e.touches[0].clientX;
    });

    paper.addEventListener("touchmove", (e)=>{

        currentX = e.touches[0].clientX;

        const diff = currentX - startX;

        let rotate = Math.max(-40, Math.min(0, diff / 4));

        if(!paper.classList.contains("flipped")){

            paper.style.transform =
            `translate(-50%, -50%) rotateY(${rotate}deg)`;

        }

    });

    paper.addEventListener("touchend", (e)=>{

        const endX = e.changedTouches[0].clientX;

        const diff = endX - startX;

        if(diff < -30){
            paper.classList.add("flipped");
        }

        if(diff > 30){
            paper.classList.remove("flipped");
        }

        paper.style.transform = "";

    });

});