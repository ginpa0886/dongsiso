const button = document.querySelector('.button')

function processData(rawData) {

const sell = [];
const buy = [];
const resultSell = [];
const resultBuy = [];

const result = [];

let wholeSell = 0;
let wholeBuy = 0;


for(let i = 0; i < rawData.length; i++){
  if(rawData.side === 'SELL'){
    sell.push(rawData[i]);
    wholeSell += rawData.qty;
  }else{
    buy.push(rawData[i]);
    wholeBuy += rawData.qty;
  }
}

let qtysell = 0;
let qtybuy = 0;


for(let i = 0; i < 20; i++){
  qtysell += sell[i].qty;
  qtybuy += buy[i].qty;

  resultSell[i] = {
    price: sell[i].price,
    qty: sell[i].qty,
    cumQty: qtysell,
    percent: qtysell / wholeSell *100
  };

  resultBuy[i] = {
    price: buy[i].price,
    qty: buy[i].qty,
    cumQty: qtybuy,
    percent: qtybuy / wholeBuy *100
  };
}

result.push(resultSell);
result.push(resultBuy);
console.log(result);

return result;

  // TODO:
  // 1. side가 SELL인 데이터와 BUY인 데이터를 나눈다
  // 2. SELL의 경우 가장 싼 값 20개를 추출하고 BUY의 경우 가장 비싼 값 20개를 추출한다
  // 3. 그렇게 추출한 배열 데이터를 테이블을 만드는 데 필요한 데이터로 새로 가공해 리턴한다
  // 필요한 정보-----
  // {
  //   price: '가격',
  //   qty: '수량',
  //   cumQty: '현 가격까지의 누적수량',
  //   percent: '누적합계 / 전체수량 * 100'
  // }
}

button.addEventListener('click', function () {
  this.parentNode.classList.add('hide')

  axios
    .get('/orderbook')
    .then((res) => {
      const { data } = res
      
      processData(data)
    })
    .catch((err) => {
      console.error(err)
    })
})