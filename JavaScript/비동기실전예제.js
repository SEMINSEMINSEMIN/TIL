// 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)
// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 출력하는 코드를 작성해주세요.(console.log)
// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.
// 4. error 처리를 해주세요.

fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then(data=>{
        const productNames = data.map(i => i.productName);
        console.log(productNames);
        console.log(data.filter(i => i.price >= 10000));
        const main = document.createElement('main');
        data.forEach(i => {
            const itemCont = document.createElement('article');
            const itemName = document.createElement('h2');
            const itemPrice = document.createElement('p');
            itemName.textContent = i.productName;
            itemPrice.textContent = i.price;
            itemCont.appendChild(itemName);
            itemCont.appendChild(itemPrice);
            main.appendChild(itemCont);
        });
        document.body.appendChild(main);
    })
    .catch(error=>{
        console.error(error);
        // error page로 리다이렉트도 필요함!
    });

// async, await의 경우
async function getData(){
    const response = await fetch(`http://test.api.weniv.co.kr/mall`);
    // fetch는 프로미스 반환!
    const productData = await(response.json());
    console.log(productData);
    console.log(productData.map((item) => item.productName));
    console.log(productData.map((item) => item.price).filter((item) => item > 10000));

    const main = document.createElement("main");
    productData.forEach(item => {
        const ProductCard = document.createElement("article");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");

        productName.textContent = `상품명 : ${item.productName}`;
        productPrice.textContent = `가격 : ${item.price}`;

        ProductCard.appendChild(productName);
        ProductCard.appendChild(productPrice);

        main.appendChild(ProductCard);
    })
    document.body.appendChild(main);
}

getData();

