const data = [
    {
        "quizName": "sports",
        "complexity": "easy",
        "status": "active",
        "questions": [
            {
                "type": "mcq",
                "question": "Who won the FIFA World Cup in 2018?",
                "options": [
                    "France",
                    "Croatia",
                    "Brazil",
                    "Germany"
                ],
                "correctAnswer": "France",
                "explanation": "France won the 2018 FIFA World Cup by defeating Croatia 4-2 in the final."
            },
            {
                "type": "boolean",
                "question": "Is Lionel Messi considered one of the greatest football players of all time?",
                "options": [
                    ""
                ],
                "correctAnswer": "true",
                "explanation": "Lionel Messi is widely regarded as one of the greatest football players in history due to his numerous records and achievements."
            },
            {
                "type": "text",
                "question": "Which football club is known as Real Madrid?",
                "options": [
                    ""
                ],
                "correctAnswer": ["madrid", "real", "rma", "real madrid"],
                "explanation": "Real Madrid is one of the most successful and famous football clubs in the world, based in Madrid, Spain."
            }
        ]
    },
    {
        "quizName": "geography",
        "complexity": "medium",
        "status": "active",
        "questions": [
            {
                "type": "mcq",
                "question": "What is the capital of Japan?",
                "options": [
                    "Tokyo",
                    "Seoul",
                    "Beijing",
                    "Bangkok"
                ],
                "correctAnswer": "Tokyo",
                "explanation": "Tokyo is the capital city of Japan and one of the most populous cities in the world."
            },
            {
                "type": "boolean",
                "question": "Is Mount Everest the tallest mountain on Earth?",
                "options": [
                    ""
                ],
                "correctAnswer": "true",
                "explanation": "Mount Everest, located in the Himalayas on the border between Nepal and China, is the tallest mountain on Earth, standing at 8,848 meters."
            },
            {
                "type": "text",
                "question": "Which country is known for its pyramids and ancient civilization?",
                "options": [
                    ""
                ],
                "correctAnswer": ["egypt", "cairo", "pharaohs"],
                "explanation": "Egypt is famous for its ancient civilization, including the pyramids and the iconic Sphinx."
            }
        ]
    },
    {
        "quizName": "science",
        "complexity": "hard",
        "status": "active",
        "questions": [
            {
                "type": "mcq",
                "question": "What is the chemical symbol for water?",
                "options": [
                    "H2O",
                    "CO2",
                    "O2",
                    "CH4"
                ],
                "correctAnswer": "H2O",
                "explanation": "Water's chemical formula is H2O, meaning it consists of two hydrogen atoms bonded to one oxygen atom."
            },
            {
                "type": "boolean",
                "question": "Is the Earth the only planet in our solar system known to support life?",
                "options": [
                    ""
                ],
                "correctAnswer": "true",
                "explanation": "Earth is the only known planet in our solar system where life exists, based on current scientific knowledge."
            },
            {
                "type": "text",
                "question": "What is the process by which plants make their food?",
                "options": [
                    ""
                ],
                "correctAnswer": ["photosynthesis", "light reaction", "chlorophyll"],
                "explanation": "Photosynthesis is the process by which plants convert sunlight into energy, using chlorophyll to absorb light and produce glucose."
            }
        ]
    },
    {
        "quizName": "history",
        "complexity": "medium",
        "status": "active",
        "questions": [
            {
                "type": "mcq",
                "question": "Who was the first President of the United States?",
                "options": [
                    "George Washington",
                    "Thomas Jefferson",
                    "Abraham Lincoln",
                    "John Adams"
                ],
                "correctAnswer": "George Washington",
                "explanation": "George Washington was the first President of the United States, serving from 1789 to 1797."
            },
            {
                "type": "boolean",
                "question": "Did World War I end in 1918?",
                "options": [
                    ""
                ],
                "correctAnswer": "true",
                "explanation": "World War I ended in 1918 with the signing of the armistice agreement, which led to the Treaty of Versailles."
            },
            {
                "type": "text",
                "question": "Who was the leader of the Soviet Union during World War II?",
                "options": [
                    ""
                ],
                "correctAnswer": ["stalin", "joseph stalin", "ussr", "soviet union"],
                "explanation": "Joseph Stalin was the leader of the Soviet Union during World War II, overseeing the USSR's involvement in the conflict."
            }
        ]
    }
]

localStorage.setItem("quizzes", JSON.stringify(data));