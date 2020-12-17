
// 받은 주소의 값을 기준으로 데이터 골라내기

function findUser(data, param) {
  const hold = JSON.parse(data);
  const { id } = hold;
  const paramsId = param;
  const result = [];

  for(let i = 0; i < id.length; i++){
    if(id[i].id == paramsId){
      result.push(id[i]);
      break;
    }
  }
  if(result.length === 0){
    result.push('값이 없습니다.');
  }
  
  res.send(result[0])
  return 0;
}

module.exports = findUser;