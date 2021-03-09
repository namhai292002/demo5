
    var APIURL = "https://z27wg.sse.codesandbox.io/listImage";
    // getMovies(APIURL);";
    // getMovies(APIURL);

    // async function getMovies(http){
    //     let resp = await fetch(http);
    //     let respJson = await resp.json();
    //     if(respJson === null){
    //         respJson = [];
    //     }
    //     render(respJson,htmlRender)
    // }
    axios.get(APIURL)
    .then(function (response) {
        var listItem = response.data;
        render(listItem,htmlRender)
    })
    .then(function () {
    })
    .catch(function (error) {

        console.log(error);
    })

    var htmlRender = document.querySelector(".best-seller");
     function render(arrayItem,htmlRender) {
        let listProduct = arrayItem.map(item => {
            return(  
                
                `
                    <div class="box_prd">
                        <div class="img-prd">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="info_prd">
                            <h2>${item.name}</h2>
                            <h3>${item.price}<span>đ</span></h3>
                            <button class="btn">THÊM VÀO GIỎ </button>
                        </div>
                    </div>
                `
                ) 
        });
        var htmlList = listProduct.join('');
        if(htmlRender) {
            htmlRender.innerHTML = htmlList; 
        } 
     }



    
