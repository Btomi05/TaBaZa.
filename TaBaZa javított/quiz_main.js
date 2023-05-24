const questions = [
    { type: "abc", text: "1.	Melyik táplálék kiegészítő tartalmaz több fehérjét?", options: ["a)	Fehérje por", "b) Creatin"], answer: "A" },
    { type: "abc", text: "2.	Mi a szerepe a preworkoutnak?", options: ["a)	A jobb alvásért felel", "b) Felpörgeti a szervezetet"], answer: "B" },
    { type: "abc", text: "3.	Mi az ashwaganda?", options: ["a)	Gyógynövény", "b) edzőtermi kellék"], answer: "A" },
    { type: "abc", text: "4.	Miben található meg az omega-3?", options: ["a)	zöldségekben", "b) halban"], answer: "B" },
    { type: "abc", text: "5.	Melyik fehérje típus túladagolásánál leszel pattanásos", options: ["a)	növényi", "b) tejsavó"], answer: "A" },
    { type: "abc", text: "6.	Melyik vitamin szedése után múlnak el a görcsök?", options: ["a)	Magnézium", "b)  szilícium"], answer: "A" },
    { type: "abc", text: "7.	Melyik táplálék kiegészítő tartalmaz több típusú vitamint?", options: ["a)	multivitamin", "b) vibránium"], answer: "A" },
    { type: "abc", text: "8.	Miből nyerik ki a creatint?", options: ["a)	hús", "b) zöldség"], answer: "A" },
    { type: "abc", text: "9.	Hogy érdemes fogyasztani a fehérje port?", options: ["a)	ételbe keverve szilárdan", "b) tejjel / vízzel hígítva"], answer: "A" },
    { type: "abc", text: "10.	Mikor kell a creatint szedni?", options: ["a)	napi kétszer", "b) mindig edzés előtt"], answer: "A" },
    { type: "abc", text: "11.	Mikor a leghatékonyabb az ashwaganda?", options: ["a)	napi kétszer", "b) 	edzés előtt egy órával"], answer: "A" },
    { type: "abc", text: "12.	A fehérje port mikor hasznosítja a szervezet a legjobban?", options: ["a)	edzés után", "b)	edzés előtt"], answer: "A" },
    { type: "abc", text: "13.	Mi a kollagén?", options: ["a)	⦁aminósav", "b) vitamin"], answer: "A" },
    { type: "abc", text: "14.	Mire jó a kollagén?", options: ["a)	nyugtatja és ápolja a bőrt", "b) edzőtermi kellék"], answer: "A" },
    { type: "abc", text: "15.	Mi az L-carnitine?", options: ["a)	aminósav", "b) ⦁gyógynövény"], answer: "A" },
    { type: "abc", text: "16.	Melyiket használják teljesítmény fokozásra?", options: ["a)	⦁	Taurin", "b) metal-amin"], answer: "A" },
    { type: "abc", text: "17.	Minek az alapjai az aminósavak?", options: ["a)	szénhidrátok", "b) Fehérjék"], answer: "B" },
];

let currentQuestionIndex = 16;
let gotPoints = 0;

function answerToQuestion(letter, button) {
    if(questions[currentQuestionIndex].answer == letter) {
        gotPoints++;
        document.getElementById(button).style.color = "green";
    } else {
        if(letter == "A"){
            document.getElementById("answer_b").style.color = "green";
            document.getElementById("answer_a").style.color = "red";
        } else {
            document.getElementById("answer_b").style.color = "red";
            document.getElementById("answer_a").style.color = "green";
        }
    }
    if(currentQuestionIndex+1 == questions.length){
        document.getElementById("question_holder").style.display = "none";
        document.getElementById("result_holder").style.display = "inline";
        document.getElementById("result").innerText = gotPoints + "/" + questions.length + " pont"
        getResultFeedback();
    } else {
        document.getElementById("next-question").style.display = "inline";
    }
    
}

function getResultFeedback(){
    let totalPoints = questions.length;
    let element = document.getElementById("result-feedback");

    let percentage = totalPoints / gotPoints;

    if(percentage < 25){
        element.innerHTML = "Úgy látjuk, nem figyeltél eléggé oda a leírtakra. <br>Olvasd el mégegyszer! "
    }
    else if(percentage < 50) {
        element.innerHTML = "Kissé hiányosan sajátítottad el a tudást! <br> Próbáld meg újra"
    }
    else if(percentage < 75) {
        element.innerHTML = "Egész jó eredmény!"
    } else {
        element.innerHTML = "Gratulálok teljesítetted a quizt!"
    }

}

function nextQuestion() {
    currentQuestionIndex++;
    initPage();
    document.getElementById("next-question").style.display = "none";
}

function initPage() {
    document.getElementById("answer_b").style.removeProperty("color")
    document.getElementById("answer_a").style.removeProperty("color")
    document.getElementById("question_counter").innerText = currentQuestionIndex+1;
    document.getElementById("question_content").innerText = questions[currentQuestionIndex].text;
    document.getElementById("answer_a").innerText = questions[currentQuestionIndex].options[0];
    document.getElementById("answer_b").innerText = questions[currentQuestionIndex].options[1];

}