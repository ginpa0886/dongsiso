const db = require('../../../helper/db')
const user = require('./user')

const ACCOUNT = 'testtable'

// 유저 목록 조회[데이터베이스]
const userList = (page, pageSize) => {
  if(isNaN(page)){
    return Promise.reject('page의 값이 숫자가 아닙니다.')
  }
  if(isNaN(pageSize)){
    return Promise.reject('pageSize의 값이 숫자가 아닙니다.')
  }

  return db(ACCOUNT)
      .select('id', 'name', 'updatedAt', 'createdAt')
      .where('enabled', 'enable')
      .limit(pageSize)
      .offset((page - 1) * pageSize)
}

// 유저 생성[데이터베이스]
const userCreate = user => {
  return db(ACCOUNT)
      .insert(user)
}

// 유저 로그인[데이터베이스]
const userLogin = id => {
  if(!id){
    return Promise.reject('id를 입력해주세요.');
  }

  return db(ACCOUNT)
      .select('salt', 'pw')
      .where('id', id)
      .then(([item]) => item)
}

// 유저 상세 조회[데이터베이스]
const userFindById = id => {
  if (!id) {
    return Promise.reject('id 값이 없습니다.')
  }

  return db(ACCOUNT)
    .select('*')
    .where('id', id)
    .andWhere('enabled', 'enable')
    .then(([item]) => item)
}

// 유저 수정[데이터베이스]
const userUpdate = changeUser => {
  return db(ACCOUNT)
      .where('id', changeUser.id)
      .update({
        pw: changeUser.saltPw,
        name: changeUser.name,
        enabled: changeUser.enabled,
        updatedAt: new Date()
      })
}

// 유저 삭제[데이터베이스] - disable
const userDelete = id => {
  return db(ACCOUNT)
      .where('id', id)
      .update({
        enabled: 'disabled'
      })
  
}


module.exports = {
  userList,
  userCreate,
  userLogin,
  userFindById,
  userUpdate,
  userDelete
}