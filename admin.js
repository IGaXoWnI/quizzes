function submitQuizName() {
    const quizName = document.getElementById("quizName").value;
    const difficultyField = document.getElementById("difficulty").value;
    const status = document.getElementById("status").value;

    


    if (quizName) {

        if (!localStorage.getItem("quizzes")) {
            localStorage.setItem("quizzes", JSON.stringify([])); 
        }   

        let quizzes = JSON.parse(localStorage.getItem("quizzes"));

        quizzes.push({
            quizName: quizName ,
            complexity : difficultyField ,
            status : status ,
            questions: [] ,
        });

        localStorage.setItem("quizzes", JSON.stringify(quizzes));

        document.getElementById("quizNameContainer").classList.add("hidden");
        document.getElementById("startQuizButton").classList.remove("hidden");

    } else {
        alert("Please enter a quiz name!");
    }
}

function startQuiz() {
    document.getElementById("startQuizButton").classList.add("hidden");
    document.getElementById("quizFormContainer").classList.remove("hidden");
    document.getElementById("difficultyField").classList.add("hidden");
}

function showFieldsBasedOnType() {
    const type = document.getElementById("type").value;
    const questionField = document.getElementById("questionField");
    const optionsField = document.getElementById("optionsField");
    const correctAnswerField = document.getElementById("correctAnswerField");
    const correctAnswerInput = document.getElementById("correctAnswer");
    const explication = document.getElementById("explication");

    questionField.classList.remove("hidden");

    if (type === "mcq") {
        optionsField.classList.remove("hidden");
        correctAnswerField.classList.remove("hidden");
        explication.classList.remove("hidden");

        correctAnswerInput.setAttribute("required", true);
    } else {
        optionsField.classList.add("hidden");
        correctAnswerField.classList.add("hidden");
    }

    if (type === "boolean") {

        correctAnswerField.classList.remove("hidden");
        explication.classList.remove("hidden");

        correctAnswerInput.setAttribute("required", true);
    }

    if (type === "text") {
        optionsField.classList.add("hidden");
        correctAnswerField.classList.remove("hidden");
        explication.classList.remove("hidden");

        correctAnswerInput.removeAttribute("required");
    }
}

function handleSubmit() {
    const quizName = document.getElementById("quizName").value;
    const type = document.getElementById("type").value;
    const question = document.getElementById("question").value;
    const options = document.getElementById("options") ? document.getElementById("options").value.split(",") : [];
    const correctAnswer = document.getElementById("correctAnswer").value.split(",");
    const explanation = document.querySelector(".explication").value;
    
console.log(correctAnswer);

    const questionObj = {
        type: type,
        question: question,
        options: options,
        correctAnswer: correctAnswer,
        explanation : explanation
    };

    let quizzes = JSON.parse(localStorage.getItem("quizzes"));

    let quiz = quizzes.find(q => q.quizName === quizName);

    if (quiz) {
        quiz.questions.push(questionObj);

        localStorage.setItem("quizzes", JSON.stringify(quizzes));


        document.getElementById("addAnotherQuestionModal").classList.remove("hidden");
    } else {
        alert("Quiz not found!");
    }

    return false;
}

function addAnotherQuestion() {
    document.getElementById("addAnotherQuestionModal").classList.add("hidden");
    document.getElementById("quizForm").reset();
}

function finishQuiz() {
    window.location.reload();
}