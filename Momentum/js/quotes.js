const quotes = [
    {
        quote: "현실주의자가 되어라, 불가능한 것을 요구하라",
        author: "68 Revolution",
    },
    {
        quote: "금지하는 것은 금지하라",
        author: "68 Revolution",
    },
    {
        quote: "사람들을 위한 구조를 원한다, 구조를 위한 사람은 원치 않는다",
        author: "68 Revolution",
    },
    {
        quote: "교육은 세뇌가 아니다",
        author: "68 Revolution",
    },
    {
        quote: "지식인이 되지 말고, 사상가가 되어라",
        author: "68 Revolution",
    },
    {
        quote: "모든 권력을 상상력에게",
        author: "68 Revolution",
    },
    {
        quote: "동지여 도망쳐라, 낡은 세계가 너를 뒤쫓고 있다",
        author: "68 Revolution",
    },
    {
        quote: "진실은 너를 자유롭게 하겠지만, 그 전에 너를 화나게 할 것이다",
        author: "68 Revolution",
    },
    {
        quote: "달리는 열차에서 중립일 수는 없다",
        author: "68 Revolution",
    },
    {
        quote: "여성의 해방 없이 혁명은 없다",
        author: "68 Revolution",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


console.log(quotes[Math.floor(Math.random() * quotes.length)])


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;