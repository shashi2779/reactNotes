## Difference b/w pure component vs higher order component 
#### pure component :
- ye class component me use hote hai
- stateless hote hai
- esliye enko props ke through "data" bhejte hai , aur unke base par render karte hai
- aapke component ke re-rendering ko rokta hai  [class comp me re-rendering ko rokta hai] 
    - bda comp rahega toh re-rendering hone me time lagega
    - eg. counter wala fun


#### higher order component :
- state hoti hai
- ek component jo dusare components ko as a props leta hai , 
 
  aur ek alag components return karta hai.

- HOC is a component which recieve a component & return a component  
- eg. counter wala fun 