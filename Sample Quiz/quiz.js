var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var time = document.getElementById("time");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var TIMER;
var score = 0;

var curques = 0;
var questime = 10;
let count = 10;

var ques = [
    {
        question: "Q.1> Capital of Haryana is:",
        choiceA: "Patna",
        choiceB: "Mohali",
        choiceC: "Chandigarh",
        choiceD: "None of the above",
        ans: "C",
    },

    {
        question: "Q.2> Capital of Bihar is:",
        choiceA: "Patna",
        choiceB: "Chandigarh",
        choiceC: "Mohali",
        choiceD: "None of the above",
        ans: "A",
    },

    {
        question: "Q.3> Capital of West Bengal is:",
        choiceA: "Kolkata",
        choiceB: "Patna",
        choiceC: "Mohali",
        choiceD: "None of the above",
        ans: "A",
    },
    {
        question: "Q.4> Full form of HTML is:",
        choiceA: "Hindi To Math Language",
        choiceB: "Home Tool Making Language",
        choiceC: "Hyper Text Markup Language",
        choiceD: "None of the above",
        ans: "C",
    },
    {
        question: "Q.5> Full Form of ATM is:",
        choiceA: "Any Time Money",
        choiceB: "Automated Teller Machine",
        choiceC: "At The Machine",
        choiceD: "All The Money",
        ans: "B",
    }
]
var lastques = ques.length - 1;
function renderques() {
    var q = ques[curques];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
function iscorrect(answer) {
    if (ques[curques].ans == answer)
        return 1;
    else
        return 0;
}
function startquiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    setInterval(rendercounter, 1000);
    renderques();
    setTimeout("renderprogress()", 1000);
}

function rendercounter() {
    time.innerHTML = "Time remaining:" + count;
    if (count > 0)
        count--;
    else {
        curques++;
        count = 10;
        renderques();
    }
}
function checkanswer(a) {
    if (iscorrect(a)) {
        score++;
        document.getElementById("A" + curques + "").style.backgroundColor = "green";
    }
    else {
        document.getElementById("A" + curques + "").style.backgroundColor = "red";
    }
    if (curques == lastques) {
        setTimeout(function () {
            showresult();
        }, 1000)
    }
    else {
        curques++;
        count = 10;
        renderques();
    }
}
function showresult() {
    if (score >= 1) {
        document.getElementById("score").innerHTML = "Congrats! You scored " + score + " marks out of "+ques.length+".";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("welcome").style.opacity = "0.2";
        document.getElementById("score").style.display = "block";
    }

    else {
        document.getElementById("score").innerHTML = "You scored " + score + " marks out of "+ques.length+".";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("welcome").style.opacity = "0.2";
        document.getElementById("score").style.display = "block";
        
    }
    // document.write("Thanks for this quiz.");
}
var p;
function renderprogress() {
    for (p = 0; p <= lastques; p++) {
        if (p == 0)
            document.getElementById("progress").innerHTML = "Result:";
        document.getElementById("progress").innerHTML += "&nbsp;<span id=A" + p + ">&nbsp;" + (p + 1) + "&nbsp;</span>";
    }
}