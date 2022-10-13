// fetch로 데이터 가져와서 html 코드 없이 자바스크립트만으로 홈페이지 구현
fetch("http://test.api.weniv.co.kr/mall")
    .then((response) => response.json())
    .then((json) => {
        for (let item of json) {
            let 제목 = document.createElement('h2')
            제목.innerText = item.productName
            // document.childNodes[0].childNodes[1].append(제목)
            document.body.append(제목)

            let 사진 = document.createElement('img')
            // 'http://test.api.weniv.co.kr/' + item.thumbnailImg;
            사진.setAttribute('src', 'http://test.api.weniv.co.kr/' + item.thumbnailImg)
            사진.setAttribute('class', '이미지')
            사진.setAttribute('alt', item.productName + ' 상품 이미지')
            document.childNodes[0].childNodes[1].append(사진)
            
            let 가격 = document.createElement('p')
            가격.innerText = item.price
            document.childNodes[0].childNodes[1].append(가격)
        }
    });