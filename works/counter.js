let count = 0
let mozi = ""
const countUp = () => {
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数: ' + count + mozi
}
const countReset = () => {
    count = 0
    mozi = ""
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: ' + count + mozi
}
const countSuper = () => {
    count += 500000000000
    mozi = "円"
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: ' + count + mozi
}