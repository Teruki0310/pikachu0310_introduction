let timeSaisyo = Date.now()
let timer = 0
let stop = 0
let keika = 0
let count = 0
const countUp = () => {
  timerSaisyo = Date.now()
  stop = 1
  keika = (Date.now() - timerSaisyo)
  const countElement = document.querySelector('#timer')
  countElement.innerText = time - timeSaisyo
}
const countStop = () => {
    if (stop == 0) {
        stop = 1;
        const countElement = document.querySelector('#kaisi')
        countElement.innerText = "スタート！"
    }
    else{
        stop = 0;
        timerSaisyo = Date.now()-keika
        const countElement = document.querySelector('#kaisi')
        countElement.innerText = "ストップ！"
    }
}
const countSuper = () => {
    count += 1
    const countElement = document.querySelector('#hosii')
    countElement.innerText = count
    if (count == 1){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "人生そんな甘くない"
    }
    if (count == 2){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "500000000000円をゲットした！"
    }
    if (count == 3){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "読みやすいコード書けって言われたのに、"
    }
    if (count == 4){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "if文連打しまくってこれ書いてるよ..."
    }
    if (count == 5){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "js、おもしれ～～"
    }
    if (count == 6){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "これ以上はもうないぞ...?"
    }
    if (count == 10){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "とかいってまだあるやつ、あるある"
    }
    if (count == 20){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "おなかすいた～～～～～～～～～～～～"
    }
    if (count == 30){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "キミ よっぽど ヒマなんだね"
    }
    if (count == 40){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "これ作ってたら凄い時間たってた"
    }
    if (count == 50){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "ちなみにまだまだまだまだこれあります"
    }
    if (count == 75){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "どうせソース見るよなぁ。お楽しみに"
    }
    if (count == 100){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "まぁ、これやってみたかっただけですｗ"
    }
    if (count == 101){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "連打してたから見逃しちゃったんじゃない～～？ｗ"
    }
    if (count == 150){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "何やってんだろ俺..."
    }
    if (count == 200){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "ｵﾏｴﾓﾅ~"
    }
    if (count == 300){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "そろそろ連打ツール使い始めるんじゃね？"
    }
    if (count == 500){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "そういえばあと1時間で締め切りの課題あるわ"
    }
    if (count == 1000){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "1000回おめでとう！"
    }
    if (count == 1001){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "キリ番踏み逃げ禁止！！！"
    }
    if (count == 2000){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "こっからインフレ"
    }
    if (count == 5000){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "5000回おめでとう！"
    }
    if (count == 5001){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "ここまで来てるやついないだろ"
    }
    if (count == 10000){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "10000回おめでとうの会"
    }
    if (count == 10001){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "インフレします"
    }
    if (count == 10100){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "ストップウォッチ作っただけで学べたことが多い。ありがとうなろう講習会"
    }
    if (count == 100000){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "100000回おめでとう！流石に君はソース見てるね。"
    }
    if (count == 100100){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "ここから長いぞ～～～"
    }
    if (count == 1000000){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "100万回クリックされた5000兆円"
    }
    if (count == 1000001){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "ザ・エンドってね"
    }
    if (count == 10000000){
        const countElement = document.querySelector('#hosii2')
        countElement.innerText = "PIKACTF{SAUCE_OISII}"
    }
}
window.onload = function(){
    setInterval("maibyou()", 100);
    setInterval("tuneni()", 1);
}
function maibyou(){
    const countElement = document.querySelector('#time')
    countElement.innerText = new Date()
}
function tuneni(){
    if (stop == 0){
        keika = (Date.now() - timerSaisyo)
    }
    const countElement = document.querySelector('#timer')
    countElement.innerText = "経過時間:" + keika/1000 + "秒"
}