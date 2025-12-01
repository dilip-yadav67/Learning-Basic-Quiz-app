const question = [
    {
        que:'which of the following is a markup language?',
        a:'html',
        b:'css',
        c:'javascript',
        d:'PHP',
        correct:'a',
    },

    {
        que:'what year was javascript launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct:'b',
    },

    {
        que:'what does css stand for?',
        a:'hypertext Markup language',
        b:'cascading style sheet',
        c:'json object notation',
        d:'helicopter terminal motorboat yamaha',
        correct:'b',
    },
];

let index = 0;
let total = question.length;
let right = 0, wrong = 0;

const queBox = document.getElementById('queBox');
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) return endQuiz();

    reset();
    const data = question[index];

    queBox.innerText = `${index + 1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer();

    if (!ans) {
        alert("Please select an option!");
        return;
    }

    if (ans === data.correct) right++;
    else wrong++;

    index++;
    loadQuestion();
};

const getAnswer = () => {
    let answer = null;

    optionInputs.forEach(input => {
        if (input.checked) answer = input.value;
    });

    return answer;
};

const reset = () => {
    optionInputs.forEach(input => input.checked = false);
};

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
        <div style="text-align:center">
            <h2>THANKS FOR THE PARTICIPATION</h2>
            <h2>${right}/${total} are correct</h2>
        </div>
    `;
};

loadQuestion();
