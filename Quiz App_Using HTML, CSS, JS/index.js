'use strict'

let quan = [
    {
        "question_" : "1. Which one of the following river flows between Vindhyan and Satpura ranges?",
        "option1_" : "Narmada",
        "option2_" : "Mahanadi",
        "option3_" : "Son",
        "option4_" : "Netravati",
        "answer_": "Narmada"
    },
    {
        "question_" : "2. The Central Rice Research Station is situated in?",
        "option1_" : "Chennai",
        "option2_" : "Cuttack",
        "option3_" : "Bangalore",
        "option4_" : "Quilon",
        "answer_": "Cuttack"
    },
    {
        "question_" : "3. Who among the following wrote Sanskrit grammar?",
        "option1_" : "Kalidasa",
        "option2_" : "Charak",
        "option3_" : "Panini",
        "option4_" : "Aryabhatt",
        "answer_": "Panini"
    },
    {
        "question_" : "4. Which among the following headstreams meets the Ganges in last?",
        "option1_" : "Alaknanda",
        "option2_" : "Pindar",
        "option3_" : "Mandakini",
        "option4_" : "Bhagirathi",
        "answer_": "Bhagirathi"
    },
    {
        "question_" : "5. The metal whose salts are sensitive to light is?",
        "option1_" : "Zinc",
        "option2_" : "Silver",
        "option3_" : "Copper",
        "option4_" : "Aluminum",
        "answer_": "Silver"
    },
    {
        "question_" : "6. River Luni originates near Pushkar and drains into which one of the following?",
        "option1_" : "Rann of Kachchh",
        "option2_" : "Arabian Sea",
        "option3_" : "Gulf of Cambay",
        "option4_" : "Lake Sambhar",
        "answer_": "Rann of Kachchh"
    },
    {
        "question_" : "7. Which one of the following rivers originates in Brahmagiri range of Western Ghats?",
        "option1_" : "Pennar",
        "option2_" : "Cauvery",
        "option3_" : "Krishna",
        "option4_" : "Tapti",
        "answer_": "Cauvery"
    },
    {
        "question_" : "8. The country that has the highest in Barley Production?",
        "option1_" : "China",
        "option2_" : "India",
        "option3_" : "Russia",
        "option4_" : "France",
        "answer_": "Russia"
    },
    {
        "question_" : "9. With which of the following rivers does Chambal river merge?",
        "option1_" : "Banas",
        "option2_" : "Ganga",
        "option3_" : "Narmada",
        "option4_" : "Yamuna",
        "answer_": "Yamuna"
    },
    {
        "question_" : "10. The hottest planet in the solar system?",
        "option1_" : "Mercury",
        "option2_" : "Venus",
        "option3_" : "Mars",
        "option4_" : "Jupiter",
        "answer_": "Venus"
    },
];

var index = -1;

document.addEventListener("DOMContentLoaded", () => {
    let question = document.getElementById("ques");
    let option1 = document.getElementById("op1");
    let option2 = document.getElementById("op2");
    let option3 = document.getElementById("op3");
    let option4 = document.getElementById("op4");
    let lab1 = document.getElementById("label1");
    let lab2 = document.getElementById("label2");
    let lab3 = document.getElementById("label3");
    let lab4 = document.getElementById("label4");
    question.textContent = quan[++index].question_;
    option1.setAttribute("value", quan[index].option1_);
    option2.setAttribute("value", quan[index].option2_);
    option3.setAttribute("value", quan[index].option3_);
    option4.setAttribute("value", quan[index].option4_);
    lab1.textContent = quan[index].option1_;
    lab2.textContent = quan[index].option2_;
    lab3.textContent = quan[index].option3_;
    lab4.textContent = quan[index].option4_;
    let prev_ = document.getElementById("prev_");
    prev_.style.visibility = "hidden";
});

let nextQuiz = () => {
    let question = document.getElementById("ques");
    let option1 = document.getElementById("op1");
    let option2 = document.getElementById("op2");
    let option3 = document.getElementById("op3");
    let option4 = document.getElementById("op4");
    let lab1 = document.getElementById("label1");
    let lab2 = document.getElementById("label2");
    let lab3 = document.getElementById("label3");
    let lab4 = document.getElementById("label4");
    if(index < 9){
        question.textContent = quan[++index].question_;
        if(index > 0) {
            let prev_ = document.getElementById("prev_");
            prev_.style.visibility = "visible";
        }
        let next_ = document.getElementById("next_");
        let finish_ = document.getElementById("finish_");
        if(index == 9) {
            question.textContent = quan[index].question_;
            next_.style.display = "none";
            finish_.style.display = "block";
        }
    }
    option1.setAttribute("value", quan[index].option1_);
    option2.setAttribute("value", quan[index].option2_);
    option3.setAttribute("value", quan[index].option3_);
    option4.setAttribute("value", quan[index].option4_);
    option1.setAttribute("name", "ans"+(index+1));
    option2.setAttribute("name", "ans"+(index+1));
    option3.setAttribute("name", "ans"+(index+1));
    option4.setAttribute("name", "ans"+(index+1));
    lab1.textContent = quan[index].option1_;
    lab2.textContent = quan[index].option2_;
    lab3.textContent = quan[index].option3_;
    lab4.textContent = quan[index].option4_;
}

let prevQuiz = () => {
    let question = document.getElementById("ques");
    let option1 = document.getElementById("op1");
    let option2 = document.getElementById("op2");
    let option3 = document.getElementById("op3");
    let option4 = document.getElementById("op4");
    let lab1 = document.getElementById("label1");
    let lab2 = document.getElementById("label2");
    let lab3 = document.getElementById("label3");
    let lab4 = document.getElementById("label4");
    let next_ = document.getElementById("next_");
    let finish_ = document.getElementById("finish_");
    next_.style.display = "inline";
    finish_.style.display = "none";
    if(index == 0){
        question.textContent = quan[index].question_;
    }
    else{
        question.textContent = quan[--index].question_;
    }
    option1.setAttribute("value", quan[index].option1_);
    option2.setAttribute("value", quan[index].option2_);
    option3.setAttribute("value", quan[index].option3_);
    option4.setAttribute("value", quan[index].option4_);
    option1.setAttribute("name", "ans"+(index+1));
    option2.setAttribute("name", "ans"+(index+1));
    option3.setAttribute("name", "ans"+(index+1));
    option4.setAttribute("name", "ans"+(index+1));
    lab1.textContent = quan[index].option1_;
    lab2.textContent = quan[index].option2_;
    lab3.textContent = quan[index].option3_;
    lab4.textContent = quan[index].option4_;
    if(index == 0) {
        let prev_ = document.getElementById("prev_");
        prev_.style.visibility = "hidden";
    }
}

let viewScore = () => {
    let score = 0;
    let skipped = 0;
    for(let i=0; i<quan.length; i++) {
        let ans = document.getElementById("ans"+(i));
        let unChecked = 0;
        for(let j=0; j<quan.length; j++) {
            if(ans[j].checked && anj[j]==quan[0].answer_) {
                score++;
            }
            else {
                ++unChecked;
            }
        }
        if(unChecked == 4) {
            skipped++;
            unChecked = 0;
        }
    }

    let correct_ = document.getElementById("correct");
    let wrong_ = document.getElementById("wrong");
    let skipped_ = document.getElementById("skipped");

    correct_.textContent = "Correct : "+(score);
    wrong_.textContent = "Wrong : "+(10 - (score + skipped));
    skipped_.textContent = "Skipped : "+(skipped);
};