const getElm = (id) => {
    return document.getElementById(id);
}

//show data
fetch('../data/Data.json').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    showMenu(data.navPills);
});
//filter data
const filterData = (id) => {
    fetch('../data/Data.json').then(function (response) {
        return response.json();
    }).then(function (data) {

        showData(data.tabPanes.filter((item) => {
            return item.type === id;
        }))
    });
}

// hien thi cac menu tab
const showMenu = (arr) => {
    let content = '';
    arr.map((item) => {
        content += `
        <a class="nav-link " data-toggle="tab"
        href="#${item.tabName}" role="tab"
        id="${item.type}"
         aria-selected="true"
         onclick ="filterData('${item.type}')"
         >${item.showName}</a>
     `;
    })
    getElm('nav-tab').innerHTML = content;
}
// function thay do
const clickButton = (id) => {

    fetch('../data/Data.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        var x = data.tabPanes.filter((item) => {
            return item.id === id;
        })

        console.log(x[0].imgSrc_png);
        console.log(x[0].id)
        switch (x[0].type) {
            // áo
            case "topclothes":
                getElm('body').innerHTML = `<img 
                style ="width: 250px;
                height: 500px;
                z-index:2;
                position: absolute;
                top: 0;
                left: 0;"
            src="${x[0].imgSrc_png}"></img>`;
                break;
            // quần
            case "botclothes":
                getElm('bikinibottom').innerHTML = `<img 
            style ="width: 250px;
            height: 500px;
            z-index:2;
            position: absolute;
            top: 0;
            left: 0;"
            src="${x[0].imgSrc_png}"></img>`;
                break;
            // giày
            case "shoes": console.log('shoes');
                getElm('feet').innerHTML = `<img 
            width: 500px;
            height: 1000px;
            position: absolute;
            bottom: -37%;
            right: -3.5%;
            transform: scale(0.5);
            z-index: 1;
            src="${x[0].imgSrc_png}"></img>`;
                break;

            case "handbags": console.log('handbags')
            getElm('handBag').innerHTML = `<img 
            width: 500px;
            height: 1000px;
            position: absolute;
            bottom: -40.5%;
            right: -3.5%;
            transform: scale(0.5);
            z-index: 4;
            src="${x[0].imgSrc_png}" ></img>`;
         
                break;
            case "necklaces": console.log('necklaces')
                getElm('necklace').innerHTML = `<img 
            width: 500px;
            height: 1000px;
            position: absolute;
            bottom: -40%;
            right: -3.5%;
            transform: scale(0.5);
            z-index: 4;
            src="${x[0].imgSrc_png}"></img>`;
                break;

            case "hairstyle": console.log('hairstyle');
            getElm('hairStyle').innerHTML = `<img 
            width: 1000px;
            height: 1000px;
            position: absolute;
            top: -75%;
            right: -57%;
            transform: scale(0.15);
            z-index: 4;
            ></img>`;
            getElm('hairStyle').style.backgroundImage=`url('../${x[0].imgSrc_png}')`;
                break;
            case "background": console.log('background');
                getElm('backGround').innerHTML = `<img 
                style="
                width: 900px;
                height: 1500px;
                background-size: cover;
                background-repeat: no-repeat;
                position: absolute;
                bottom: -90%;
                right: -50%;
                transform: scale(0.5);
                z-index: -1;
                "
                src="${x[0].imgSrc_png}" ></img>`;
                getElm('backGround').style.backgroundImage=`url('../${x[0].imgSrc_png}')`;
            default:
                console.log('nothing')
                    ;
        }
    });
}
// create element show data
const showData = (arr) => {
    let content = '';
    arr.map((item) => {
        content += `
                <div class="col-3 content-item" >
                <div class="img" style="height:200px">
                    <img src="${item.imgSrc_jpg}" alt="">
                </div>
                <p>${item.name}</p>
                <button onclick="clickButton('${item.id}')">Thu Do</button>
                </div>    
        `
    })
    getElm('tabTopClothes').innerHTML = content;
}


