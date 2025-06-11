document.addEventListener('DOMContentLoaded', function() {
    // Quiz questions from all 9 tutorials
    const quizQuestions = [
        // Tutorial 1 - Uvod u blockchain
        {
            question: "Što je glavna karakteristika blockchain tehnologije?",
            options: [
                "Centralizirana kontrola podataka",
                "Decentralizirana struktura podataka",
                "Mogućnost brisanja transakcija",
                "Ograničen broj korisnika"
            ],
            correctAnswer: 1
        },
        {
            question: "Tko je objavio originalni Bitcoin whitepaper?",
            options: [
                "Vitalik Buterin",
                "Satoshi Nakamoto",
                "Charlie Lee",
                "Gavin Andresen"
            ],
            correctAnswer: 1
        },
        
        // Tutorial 2 - Kako funkcioniraju kriptovalute
        {
            question: "Što je rudarenje (mining) u kontekstu kriptovaluta?",
            options: [
                "Fizičko kopanje rijetkih metala",
                "Proces validacije transakcija i dodavanja novih blokova u blockchain",
                "Proces kupovine kriptovaluta",
                "Proces konverzije kriptovaluta u fiat novac"
            ],
            correctAnswer: 1
        },
        {
            question: "Koji konsenzusni mehanizam koristi Bitcoin?",
            options: [
                "Proof of Stake",
                "Proof of Authority",
                "Proof of Work",
                "Delegated Proof of Stake"
            ],
            correctAnswer: 2
        },
        
        // Tutorial 3 - Novčanici za kriptovalute
        {
            question: "Što je hardverski novčanik?",
            options: [
                "Softverska aplikacija za pohranu kriptovaluta",
                "Fizički uređaj za sigurnu pohranu privatnih ključeva",
                "Online platforma za trgovanje kriptovalutama",
                "Papirni dokument s privatnim ključem"
            ],
            correctAnswer: 1
        },
        {
            question: "Što je privatni ključ u kontekstu kriptovaluta?",
            options: [
                "Jedinstveni identifikator blockchain mreže",
                "Lozinka za pristup burzi kriptovaluta",
                "Tajni niz znakova koji omogućuje pristup i kontrolu nad kriptovalutama",
                "Javna adresa za primanje kriptovaluta"
            ],
            correctAnswer: 2
        },
        
        // Tutorial 4 - Najpoznatije kriptovalute
        {
            question: "Koja kriptovaluta je prva uvela koncept pametnih ugovora?",
            options: [
                "Bitcoin",
                "Ethereum",
                "Litecoin",
                "Ripple"
            ],
            correctAnswer: 1
        },
        {
            question: "Koja je najpoznatija i prva kriptovaluta?",
            options: [
                "Ethereum",
                "Bitcoin",
                "Dogecoin",
                "Litecoin"
            ],
            correctAnswer: 1
        },
        
        // Tutorial 5 - Prednosti i izazovi kriptovaluta
        {
            question: "Koja je jedna od glavnih prednosti kriptovaluta?",
            options: [
                "Centralizirana kontrola",
                "Visoke naknade za transakcije",
                "Decentralizacija i otpornost na cenzuru",
                "Stabilnost vrijednosti"
            ],
            correctAnswer: 2
        },
        {
            question: "Koji je jedan od glavnih izazova kriptovaluta?",
            options: [
                "Prevelika regulacija",
                "Volatilnost cijena",
                "Prejednostavno korištenje",
                "Previše korisnika"
            ],
            correctAnswer: 1
        },
        
        // Tutorial 6 - Pravni i regulatorni okvir
        {
            question: "Što je MiCA?",
            options: [
                "Međunarodni centar za analizu kriptovaluta",
                "Uredba EU o tržištima kriptoimovine",
                "Metoda za identifikaciju crypto adresa",
                "Mobilna aplikacija za praćenje cijena kriptovaluta"
            ],
            correctAnswer: 1
        },
        {
            question: "Koje obveze u Hrvatskoj imaju pružatelji usluga vezanih uz kriptovalute?",
            options: [
                "Nemaju nikakve obveze",
                "Moraju se registrirati samo kod HNB-a",
                "Moraju se registrirati kod HANFA-e i provoditi mjere sprječavanja pranja novca",
                "Moraju prihvaćati samo kune kao sredstvo plaćanja"
            ],
            correctAnswer: 2
        },
        
        // Tutorial 7 - Primjene blockchaina izvan financija
        {
            question: "Koja je primjena blockchain tehnologije u zdravstvu?",
            options: [
                "Samo za naplatu usluga",
                "Sigurna pohrana i dijeljenje medicinskih podataka",
                "Isključivo za praćenje lijekova",
                "Blockchain se ne koristi u zdravstvu"
            ],
            correctAnswer: 1
        },
        {
            question: "Što su pametni ugovori?",
            options: [
                "Tradicionalni pravni ugovori pisani jednostavnim jezikom",
                "Samoprovodivi digitalni ugovori koji se izvršavaju automatski kada su ispunjeni određeni uvjeti",
                "Ugovori koji zahtijevaju odobrenje odvjetnika",
                "Ugovori koji se mogu mijenjati nakon potpisivanja"
            ],
            correctAnswer: 1
        },
        
        // Tutorial 8 - Praktični savjeti i upozorenja
        {
            question: "Koja je preporučena praksa za sigurno čuvanje kriptovaluta?",
            options: [
                "Čuvanje svih kriptovaluta na burzi",
                "Zapisivanje privatnih ključeva na računalu",
                "Korištenje hardverskog novčanika i sigurno čuvanje seed fraze",
                "Dijeljenje privatnih ključeva s prijateljima radi sigurnosti"
            ],
            correctAnswer: 2
        },
        {
            question: "Koji je znak potencijalne prevare u svijetu kriptovaluta?",
            options: [
                "Obećanje garantiranog povrata investicije",
                "Transparentni kod projekta",
                "Jasno definirani ciljevi projekta",
                "Aktivna zajednica korisnika"
            ],
            correctAnswer: 0
        },
        
        // Tutorial 9 - Zaključak i budućnost
        {
            question: "Što je važno za budućnost blockchain tehnologije?",
            options: [
                "Korištenje isključivo za kriptovalute",
                "Razvoj novih primjena i regulatorni okvir",
                "Potpuno ukidanje regulacije",
                "Ograničavanje pristupa samo na banke"
            ],
            correctAnswer: 1
        },
        {
            question: "Koja je jedna od novih prilika za pravničku profesiju u blockchain području?",
            options: [
                "Smanjenje potrebe za pravnim uslugama",
                "Specijalizacija u području tokenizacije imovine i pametnih ugovora",
                "Isključivo tradicionalna pravna praksa",
                "Potpuno automatizirane pravne usluge bez ljudske intervencije"
            ],
            correctAnswer: 1
        },
        {
            question: "Što su CBDC (Central Bank Digital Currencies)?",
            options: [
                "Privatne kriptovalute koje izdaju banke",
                "Digitalne valute koje izdaju središnje banke temeljene na blockchain tehnologiji",
                "Međunarodna udruženja za regulaciju kriptovaluta",
                "Certifikati za blockchain developere"
            ],
            correctAnswer: 1
        },
        {
            question: "Koji je jedan od trendova u regulaciji kriptovaluta?",
            options: [
                "Potpuna zabrana u svim zemljama",
                "Ignoriranje kriptovaluta od strane regulatora",
                "Konvergencija regulatornih pristupa na globalnoj razini",
                "Ukidanje svih poreza na kriptovalute"
            ],
            correctAnswer: 2
        }
    ];
    
    // DOM elements
    const startScreen = document.getElementById('quiz-start-screen');
    const questionsScreen = document.getElementById('quiz-questions');
    const resultsScreen = document.getElementById('quiz-results');
    const startButton = document.getElementById('start-quiz-btn');
    const prevButton = document.getElementById('prev-question');
    const nextButton = document.getElementById('next-question');
    const questionContainer = document.getElementById('question-container');
    const questionNumber = document.getElementById('question-number');
    const correctAnswers = document.getElementById('correct-answers');
    const totalQuestions = document.getElementById('total-questions');
    const scorePercentage = document.getElementById('score-percentage');
    const restartButton = document.getElementById('restart-quiz-btn');
    
    // Quiz state
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let shuffledQuestions = [];
    
    // Initialize quiz
    function initQuiz() {
        // Reset state
        currentQuestionIndex = 0;
        userAnswers = Array(quizQuestions.length).fill(null);
        
        // Shuffle questions
        shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);
        
        // Update total questions count
        totalQuestions.textContent = shuffledQuestions.length;
        
        // Show first question
        showQuestion(currentQuestionIndex);
    }
    
    // Show question
    function showQuestion(index) {
        const question = shuffledQuestions[index];
        questionContainer.innerHTML = '';
        
        // Create question element
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<h4>${index + 1}. ${question.question}</h4>`;
        
        // Create options
        const optionsList = document.createElement('ul');
        optionsList.className = 'options';
        
        question.options.forEach((option, i) => {
            const optionItem = document.createElement('li');
            optionItem.className = 'option';
            if (userAnswers[index] === i) {
                optionItem.classList.add('selected');
            }
            optionItem.textContent = option;
            optionItem.addEventListener('click', () => selectOption(index, i));
            optionsList.appendChild(optionItem);
        });
        
        questionElement.appendChild(optionsList);
        questionContainer.appendChild(questionElement);
        
        // Update question number
        questionNumber.textContent = `Pitanje ${index + 1} od ${shuffledQuestions.length}`;
        
        // Update navigation buttons
        prevButton.disabled = index === 0;
        nextButton.textContent = index === shuffledQuestions.length - 1 ? 'Završi kviz' : 'Sljedeće pitanje';
    }
    
    // Select option
    function selectOption(questionIndex, optionIndex) {
        userAnswers[questionIndex] = optionIndex;
        
        // Update UI to show selected option
        const options = document.querySelectorAll('.option');
        options.forEach((option, i) => {
            if (i === optionIndex) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
    }
    
    // Calculate score
    function calculateScore() {
        let score = 0;
        shuffledQuestions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                score++;
            }
        });
        return score;
    }
    
    // Show results
    function showResults() {
        const score = calculateScore();
        correctAnswers.textContent = score;
        
        // Create percentage bar
        const percentage = (score / shuffledQuestions.length) * 100;
        scorePercentage.innerHTML = `<div style="width: ${percentage}%;"></div>`;
        
        // Add percentage text
        const percentageText = document.createElement('p');
        percentageText.textContent = `Točnost: ${percentage.toFixed(1)}%`;
        scorePercentage.after(percentageText);
        
        // Create review of answers
        const reviewContainer = document.createElement('div');
        reviewContainer.className = 'answers-review';
        reviewContainer.innerHTML = '<h4>Pregled odgovora:</h4>';
        
        shuffledQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            const questionReview = document.createElement('div');
            questionReview.className = `question-review ${isCorrect ? 'correct' : 'incorrect'}`;
            
            // Question text
            const questionText = document.createElement('p');
            questionText.className = 'review-question';
            questionText.innerHTML = `<strong>${index + 1}. ${question.question}</strong>`;
            questionReview.appendChild(questionText);
            
            // User's answer
            if (userAnswer !== null) {
                const userAnswerText = document.createElement('p');
                userAnswerText.className = 'user-answer';
                userAnswerText.innerHTML = `Vaš odgovor: <span class="${isCorrect ? 'correct-text' : 'incorrect-text'}">${question.options[userAnswer]}</span>`;
                questionReview.appendChild(userAnswerText);
            } else {
                const userAnswerText = document.createElement('p');
                userAnswerText.className = 'user-answer';
                userAnswerText.innerHTML = `<span class="incorrect-text">Niste odgovorili na ovo pitanje</span>`;
                questionReview.appendChild(userAnswerText);
            }
            
            // Correct answer (only show if user was wrong)
            if (!isCorrect) {
                const correctAnswerText = document.createElement('p');
                correctAnswerText.className = 'correct-answer';
                correctAnswerText.innerHTML = `Točan odgovor: <span class="correct-text">${question.options[question.correctAnswer]}</span>`;
                questionReview.appendChild(correctAnswerText);
            }
            
            reviewContainer.appendChild(questionReview);
        });
        
        // Add review to results
        document.getElementById('quiz-results').insertBefore(reviewContainer, document.getElementById('restart-quiz-btn'));
        
        // Show results screen
        questionsScreen.style.display = 'none';
        resultsScreen.style.display = 'block';
    }
    
    // Event listeners
    startButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        questionsScreen.style.display = 'block';
        initQuiz();
    });
    
    prevButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    });
    
    restartButton.addEventListener('click', () => {
        resultsScreen.style.display = 'none';
        questionsScreen.style.display = 'block';
        initQuiz();
    });
});
