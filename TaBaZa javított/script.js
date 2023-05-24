const kerdesek = [
    {
        kerdes: "1.	Melyik táplálék kiegészítő tartalmaz több fehérjét?",
        valasz: [
            {text: "a)	Fehérje por", correct: true},
            {text: "b) Creatin", correct: false},
        ]
    },
    {
        kerdes: "2.	Mi a szerepe a preworkoutnak?",
        valasz: [
            {text: "a)	A jobb alvásért felel", correct: false},
            {text: "b) Felpörgeti a szervezetet", correct: true},
        ]
    },
    {
        kerdes: "3.	Mi az ashwaganda?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "4.	Miben található meg az omega-3?",
        valasz: [
            {text: "a)	zöldségekben", correct: false},
            {text: "b) halban", correct: true },
        ]
    },
    {
        kerdes: "5.	Melyik fehérje típus túladagolásánál leszel pattanásos",
        valasz: [
            {text: "a)	növényi", correct: true},
            {text: "b) tejsavó", correct: false},
        ]
    },
    {
        kerdes: "6.	Melyik vitamin szedése után múlnak el a görcsök?",
        valasz: [
            {text: "a)	Magnézium", correct: true}, ITTJÁROK,
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "7.	Melyik táplálék kiegészítő tartalmaz több típusú vitamint?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },{
        kerdes: "8.	Miből nyerik ki a creatint?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "9.	Hogy érdemes fogyasztani a fehérje port?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },{
        kerdes: "10.	Mikor kell a creatint szedni?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },{
        kerdes: "11.	Mikor a leghatékonyabb az ashwaganda?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "12.	A fehérje port mikor hasznosítja a szervezet a legjobban?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "13.	Mi a kollagén?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "14.	Mire jó a kollagén?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "15.	Mi az L-carnitine?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "16.	Melyiket használják teljesítmény fokozásra?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "17.	Dönts el hogy igaz-e az állítás: A fehérje por megfelelő adagolás mellett is lehet káros.",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "18.	Dönts el hogy igaz-e az állítás: Vitaminokat csak akkor szabad szedni ha végzel valamilyen ",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "19.	 Minden táplálékkiegészítő esetében tartani kell a dobozra írt adagolást?",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },
    {
        kerdes: "20.	Minek az alapjai az aminósavak",
        valasz: [
            {text: "a)	Gyógynövény", correct: true},
            {text: "b) edzőtermi kellék", correct: false},
        ]
    },

]

const valaszButton = document.getElementById("valasz-gomb");
const kovetkezoButton = document.getElementById("next-btn");