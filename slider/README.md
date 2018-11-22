#Slider Js

###### 개발단계
> - vanilla JS
> - MO 플리킹 / PC 사이드 버튼으로 슬라이드
> - 모바일 / PC 디바이스 분기로 인한 각 JSON파일에서 데이터 읽을 수 있음.
> - 데이터 갯수로 슬라이더 리스트 생성됨
> - utils.js 에 필요한 메소드 추가할것


###### 수정단계
> - 코드 리팩토링 필요(★★★★★) - MV* 패턴으로 나누기
> - webpack -> es6 로 수정해볼것 
> - PC 플리킹 추가..? ( 이미지 드래그.. 고스트 이미지.. 찾아보기 )
> - 반응형 대응을 위한 모바일 / 피씨 리사이즈 다시 확인하기 (사이즈 줄이면 새로고침해야 드래그 가능..)
> - index로부터 받을수 있는 property값 줄이기...

-----------------------------

### Slider.js property
| properties  |  value  | type |   
|-------------|---------|------|
| ctx  | 최상단 id | string  |   
|elem | - |  string  |    
|  elemList | - |  string  |
| nextBtn | - | string |    
| prevBtn | -  | string |    
| listPage | - | string |    



### utils.js
| methodName  |  param  | return |   
|-------------|---------|--------|
| deviceCheck  | - | mobile/desktop  |   
|  $ | elem, parentElem  |  DOM/Node  |    
|  $$ | elem, parentElem  |  DOM/Node  |
| ajax |  |  |    
| index | Node  | num |    
| trigger | elem, eventName, option  | event |    


----------------------------------------
### release.
| date  |  value  | - |   
|-------|---------|---|
| 2018.09.10  | README 추가/ 개선 여부.. | - |
| 2018.06.01  | 슬라이더 일단 기능만 구현.. | 코드 더러음.. |   