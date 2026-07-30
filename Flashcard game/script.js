document.addEventListener('DOMContentLoaded', () => {

    /*Create an array to store all the questions/answers */

    const flashcards = [
        { question: "Microbes", answer: "Tiny living things; too small to see without microscope"},
        { question: "Elated", answer: "Being extremely happy"},
        { question: "Vital", answer: "Extremely important for life"},
        { question: "odometer", answer: "An instrument on a vehicles dashboard that measures and shows total distance traveled"},
        { question: "scarce", answer: "something that is hard to find or in short supply"},
        { question: "Frigid", answer: "extremely cold"},
        { question: "Notorious", answer: "famous or well-known for something bad"},
        { question: "adversary", answer: "An ememy, opponent or rival"},
        { question: "Jury", answer: "A group of people chosen to make a decision in a court case"},
        { question: "Authentic", answer: "Being genuine and true to an original"},
 ];
 let  currentCard = 0;  /*Initialize currentCard to represent which flashcard we are currently viewing. 
                            0 corresponds to the 1st flashcard*/
    /*Grab the "flashcard" element, inorder to get the "question" and the "answer" elements by id */
    const flashcardElement = document.getElementById('flashcard'); 
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer')
    /*Defining a function to display card */
    function displayCard() {
        questionElement.textContent = flashcards[currentCard].question;
        answerElement.textContent = flashcards[currentCard].answer; 
        flashcardElement.classList.remove('is-flipped');  /*This removes the is-flipped class 
        from the flashcard element to ensure that it displays the question side when the 
        question is first shown */
    }
    /* Enables flip feature. It adds Event Listener to the flip button, so when the button is clicked, it flips the card */
    document.getElementById('flip-card').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    });
    /* Setting up Event Listener for the Next button. When Next is clicked, increment the currentcard by 1. 
    We use the modulo (%)  operator to ensure that if the length exceeds the flashcards length, it resets back to  0.
    This ensures looping of flashcards. */
    document.getElementById('next-card').addEventListener('click', () => {
        currentCard = (currentCard + 1) % flashcards.length;
        displayCard();
    });
    displayCard(); /*Calling this function to initialize the 1st card when the app is shown in the browser */
});