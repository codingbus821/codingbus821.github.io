---
title: "막대그래프 vs 히스토그램"
tags:
    - OpenCV
date: "2025-11-08"
thumbnail: "/assets/img/thumbnail/sample.png"
bookmark: true
---
# 1. 막대그래프란?

- 정의
    - 막대그래프는 데이터의 수치를 막대의 길이 또는 높이로 표현하는 그래프입니다. 각 막대는 주로 범주형 데이터의 범주(카테고리)를 나타내며, 막대의 길이 또는 높이는 해당 범주의 빈도(개수, 비율)를 나타냅니다.
    
- 사용되는 데이터 유형 (범주형, 서로 독립적인 항목)
    - 애완 동물을 좋아하는 사람들의 수
    
    ![](https://www.mindonmap.com/wp-content/uploads/2023/03/bar-graph-example-vertical.jpg){:class="img-lg"}
    출처: [https://www.mindonmap.com/ko/blog/bar-graph-example-template/](https://www.mindonmap.com/ko/blog/bar-graph-example-template/)

- 그래프의 구성 요소
    - x축: 비교하려는 범주(카테고리)
    - y축: 각 범주의 빈도(개수, 비율)

- 막대그래프의 예시
    - 누적 막대그래프: 하나의 막대를 여러 구간으로 나누어 각 구간의 빈도를 표현하는 그래프입니다. 즉 한 범주내에서 세부 항목이 어떻게 구성되어 있는지를 한 막대 안에 층 형태로 쌓아서 나타냅니다.
    
    ![](https://www.jmp.com/ko/statistics-knowledge-portal/exploratory-data-analysis/media_10747f797647b6ce7d67548f40070205576331df2.png?width=2000&format=webply&optimize=medium)
    출처: [http://jmp.com/ko/statistics-knowledge-portal/exploratory-data-analysis/types-of-graphs](http://jmp.com/ko/statistics-knowledge-portal/exploratory-data-analysis/types-of-graphs)
    
    - 그룹 막대그래프: 하나의 범주 안에 여러 세부 항목을 나란히 배치하여 비교하는 그래프입니다.
    
    ![](https://www.jmp.com/ko/statistics-knowledge-portal/exploratory-data-analysis/media_1b7b16460989990033a51577970d25b3e55e23614.png?width=2000&format=webply&optimize=medium)
    출처: [https://www.jmp.com/ko/statistics-knowledge-portal/exploratory-data-analysis/types-of-graphs](https://www.jmp.com/ko/statistics-knowledge-portal/exploratory-data-analysis/types-of-graphs)

# 2. 히스토그램이란?

- 정의
    - 히스토그램 또한 데이터의 수치를 막대의 길이 또는 높이로 표현하는 그래프입니다. 그러나 각 막대는 연속형 데이터가 분할된 구간을 나타내며, 막대의 높이는 해당 구간의 빈도(개수, 비율)를 나타냅니다.

- 사용되는 데이터 유형 (연속형)
    - 수학 성적분포
        
        ![image.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FkAKsx%2FbtstywXAqlR%2FAAAAAAAAAAAAAAAAAAAAACLwFvnHBCh3VmVbULtsuSPThdP7Xc8Ba9qVI9_NN_GG%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3Dnr0eAQeFe0K9OAV3%252FgBu8m7X8sw%253D)
        출처: https://thinking-atelier.tistory.com/22

- 그래프의 구성 요소
    - x축: 데이터를 분할하는 구간
    - y축: 각 구간의 빈도(개수, 비율)

- 히스토그램의 예시
    - 정규 분포형 히스토그램: 가운데 부분이 높고 양쪽으로 대칭되는 종 모양의 분포입니다.
        
        ![](https://www.mathsisfun.com/data/images/normal-distribution.svg)
        출처: https://www.mathsisfun.com/data/images/normal-distribution.svg
        
    - 치우침 분포형 히스토그램: 데이터가 한쪽으로 치우쳐 있는 경우입니다.
    
    ![](https://www.mathsisfun.com/data/images/skewed-distribution.svg)
    출처: https://www.mathsisfun.com/data/images/skewed-distribution.svg
    
    - 이중봉형 히스토그램: 두 개의 봉우리를 가진 분포입니다.
    
    ![](https://upload.wikimedia.org/wikipedia/commons/7/7a/Bimodal-histogram.png)
    출처: https://ko.wikipedia.org/wiki/%ED%9E%88%EC%8A%A4%ED%86%A0%EA%B7%B8%EB%9E%A8
    
    - 균등 분포형 히스토그램: 각 구간에 속하는 데이터의 빈도수가 거의 일정한 분포입니다.
    
    ![](https://upload.wikimedia.org/wikipedia/commons/7/7b/Symmetric2.png)
    출처: https://ko.wikipedia.org/wiki/%ED%9E%88%EC%8A%A4%ED%86%A0%EA%B7%B8%EB%9E%A8
    

# 3.막대그래프과 히스토그램의 차이

|  | 막대그래프 | 히스토그램 |
| --- | --- | --- |
| 데이터 유형 | 범주형 데이터 | 연속형 데이터 |
| X축 | 각 범주 | 구간 |
| 막대 간 간격 | 간격 있음 | 간격 없음 |