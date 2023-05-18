const allQuestions =
    [
        {
            "question": "¿Cuál es la etiqueta HTML que indica el título de una página?",
            "answer": [
                {
                    "answer": "h1",
                    "isCorrect": false
                },
                {
                    "answer": "title",
                    "isCorrect": true
                },
                {
                    "answer": "description",
                    "isCorrect": false
                },
                {
                    "answer": "h2",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál es la etiqueta HTML para crear un enlace a otra página?",
            "answer": [
                {
                    "answer": "link",
                    "isCorrect": false
                },
                {
                    "answer": "a",
                    "isCorrect": true
                },
                {
                    "answer": "href",
                    "isCorrect": false
                },
                {
                    "answer": "url",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál es la etiqueta HTML para insertar una imagen en una página?",
            "answer": [
                {
                    "answer": "img",
                    "isCorrect": true
                },
                {
                    "answer": "image",
                    "isCorrect": false
                },
                {
                    "answer": "picture",
                    "isCorrect": false
                },
                {
                    "answer": "src",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál es la etiqueta HTML para crear una lista no ordenada?",
            "answer": [
                {
                    "answer": "ol",
                    "isCorrect": false
                },
                {
                    "answer": "li",
                    "isCorrect": false
                },
                {
                    "answer": "ul",
                    "isCorrect": true
                },
                {
                    "answer": "list",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál es la etiqueta HTML para resaltar texto en negrita?",
            "answer": [
                {
                    "answer": "strong",
                    "isCorrect": true
                },
                {
                    "answer": "b",
                    "isCorrect": false
                },
                {
                    "answer": "em",
                    "isCorrect": false
                },
                {
                    "answer": "i",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál es la etiqueta HTML para crear un salto de línea?",
            "answer": [
                {
                    "answer": "br",
                    "isCorrect": true
                },
                {
                    "answer": "break",
                    "isCorrect": false
                },
                {
                    "answer": "nl",
                    "isCorrect": false
                },
                {
                    "answer": "lb",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál es la etiqueta HTML para crear un formulario?",
            "answer": [
                {
                    "answer": "form",
                    "isCorrect": true
                },
                {
                    "answer": "input",
                    "isCorrect": false
                },
                {
                    "answer": "submit",
                    "isCorrect": false
                },
                {
                    "answer": "button",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál es la etiqueta HTML para definir una tabla?",
            "answer": [
                {
                    "answer": "table",
                    "isCorrect": true
                },
                {
                    "answer": "tab",
                    "isCorrect": false
                },
                {
                    "answer": "tr",
                    "isCorrect": false
                },
                {
                    "answer": "td",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál es la etiqueta HTML para resaltar texto en cursiva?",
            "answer": [
                {
                    "answer": "em",
                    "isCorrect": true
                },
                {
                    "answer": "i",
                    "isCorrect": false
                },
                {
                    "answer": "u",
                    "isCorrect": false
                },
                {
                    "answer": "italic",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál es la etiqueta HTML para agregar un comentario en el código?",
            "answer": [
                {
                    "answer": "comment",
                    "isCorrect": false
                },
                {
                    "answer": "//",
                    "isCorrect": false
                },
                {
                    "answer": "<!-- -->",
                    "isCorrect": true
                },
                {
                    "answer": "#",
                    "isCorrect": false
                }
            ]
        }
    ]
const questList = document.querySelector("#questList");




let pos = 0;
let points = 0;
let isAnswered = false;


window.addEventListener("load", updateTitle(), printAnswers());



function nextQuestion() {
    if (!(pos == allQuestions.length - 1)) { pos++; } else {
        document.getElementById("results").classList.remove("hidden");
        document.getElementById("questList").classList.add("hidden");
        document.querySelector("#questTitle").innerText = "¡Quiz terminado!";
        document.querySelector("#points").innerText = points;
        return;
    }
    clearAnswers(); updateTitle(); printAnswers();
    isAnswered = false;
}
const clearAnswers = () => { questList.innerHTML = ""; }
function printAnswers() {
    allQuestions[pos].answer.forEach((answer, index) => {
        questList.innerHTML += `<li class="min-w-xl">
            <button onclick="checkAnswer(${index})"  id="${answer.answer}" class="transition-all w-full p-3 rounded-xl mt-2 bg-slate-200 cursor-pointer hover:bg-gray-400">${answer.answer}</button>
        </li>`;
    })
}


function updateTitle() {
    document.querySelector("#questTitle").innerText = allQuestions[pos].question;
    document.querySelector("#numberOfQuestions").innerText = `${pos + 1} de ${allQuestions.length}`;

}

function checkAnswer(position) {
    if (isAnswered == true) {
        return;
    }
    isAnswered = true;
    const correctAnswerIndex = allQuestions[pos].answer.findIndex(answer => answer.isCorrect === true);
    const botones = document.querySelectorAll("button[id]");
    btn = document.querySelector("#" + allQuestions[pos].answer[correctAnswerIndex].answer)

    const correctAnswer = () => {
        btn = document.querySelector("#" + allQuestions[pos].answer[position].answer)
        btn.classList.remove("bg-slate-200", "cursor-pointer", "hover:bg-gray-400");
        btn.className += " bg-green-400 cursor-default"
        points += 100
    }
    if (allQuestions[pos].answer[position].isCorrect) {
        correctAnswer();

    } else {
        console.log(correctAnswerIndex);

        btn.classList.remove("bg-slate-200", "cursor-pointer", "hover:bg-gray-400");
        btn.className += " bg-green-400 cursor-default "
        btn = document.querySelector("#" + allQuestions[pos].answer[position].answer)
        btn.classList.remove("bg-slate-200", "cursor-pointer", "hover:bg-gray-400");
        btn.className += " bg-red-400 cursor-default"
    }
    botones.forEach((boton) => {
        console.log(boton)
        boton.classList.remove("cursor-pointer");
        boton.classList.add("cursor-default");
        boton.classList.remove("hover:bg-gray-400");
    });


}







