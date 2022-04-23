# GraphQL-toy
    
* [GraphQL in Action](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791162245040&orderClick=LAG&Kc=)
* [Code Helper Guide for GraphQL in Action](https://jscomplete.com/learn/gia)
* [GraphQL in Action repository](https://github.com/jscomplete/graphql-in-action)
* [React Query](https://react-query.tanstack.com/)
* [GraphQL 스펙 문서](https://az.dev/graphql-spec)
* [GraphQL, JavaScript 레퍼런스](https://az.dev/graphql-js)
* [GraphQL 서버 라이브러리 리스트](https://az.dev/graphql-servers)
* [REST, GraphQL](https://www.inflearn.com/course/%ED%92%80%EC%8A%A4%ED%83%9D-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/dashboard)

```bash
#node: v14.16.1
#yarn: v1.22.18

# local-api
$ yarn run client 

$ yarn run server
```

GraphQL Playground   
[localhost:8000/graphql](http://localhost:8000/graphql)

## 그래프QL 컨셉
* 타입이 정해진 그래프 스키마
  * 그래프QL 스키마는 타입을 가진 필드로 구성됨. 기본타입 or 커스텀타입   
    스키마 내에 모든 것이 타입을 지니게 되고, 타입구조로 스키마 검색이 가능하게 됨.
* 선언적 언어
  * 그래프QL 데이터 요건을 표현하기 위해 선언적 방식을 사용함. 그래서 더 사용하기 쉽덴다 ㅎㅎㅎ;;;
* 단일 엔드포인트와 클라이언트 언어 
  * 여러번 왕복해서 통신하는 문제를 해결하기 위해 그래프QL은 응답하는 서버를 단일 엔드포인트로 만듦
    클라이언트는 필요한 것을 정확하게 요청하고  서버또한 요청받은 데이터를 정확하게 응답할 수 있다.
    -> 불필요한 데이터의 과다추출문제 해결
## 그래프QL 문제점
* 보안