const con = document.getElementById('log');
const log = (...args) => con.innerHTML += '<br>' + args.join(' ');

log('a', 1, 'con');
log('b', 2, 'ccon');