```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
    </ul>
    <script>
        let e = document.querySelectorAll("li");
        console.log(e);
        // NodeList(10)
        // 어레이가 아니라 노드 리스트!
        e.forEach(e => console.log(e)); 
        // IE에서 작동하지 않음
    </script>
</body>
</html>
```
## 실행결과
![](/images/%EB%B0%B0%EC%97%B4_forEach_%EC%A3%BC%EC%9D%98%EC%82%AC%ED%95%AD(1).png)
![](/images/%EB%B0%B0%EC%97%B4_forEach_%EC%A3%BC%EC%9D%98%EC%82%AC%ED%95%AD.png)
## querySelector란?
querySelectorAll() returns a static (not live) **NodeList** representing **a list of** the document's **elements** **that match** the specified group of **selectors**.
