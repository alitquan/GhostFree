import { useState, useEffect } from 'react';
import tranStyle from '@styles/Transition.module.css';
import { useNavigate } from 'react-router-dom';

function Transition() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState(''); // State to manage textarea input
  const [completed, setComplete] = useState(false);

  // Initialize questions state
  const [questions, setQuestions] = useState([
    { id: 1, text: "What do you like to do in your free time?", answer: '' },
    { id: 2, text: "Name some of your favorite movies?", answer: '' },
    { id: 3, text: "What kind of sports do you like?", answer: '' }
  ]);

  const navigate = useNavigate();

  const goToWaiting = () => {
		navigate('/waiting'); 
  };

  // Handle showing and hiding questions
  useEffect(() => {
    if (completed) {
      uploadAndTransition();
	  goToWaiting();
    }
  }, [completed]);

  function uploadAndTransition() {
    console.log(questions);
  }

  useEffect(() => {
    setShowQuestion(true);

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Adjust timing as needed for the display duration

    return () => clearTimeout(fadeOutTimer);
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    setFadeOut(false);
    setShowQuestion(false);
    setTimeout(() => {
      setCurrentQuestionIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < questions.length) {
          return nextIndex;
        } else {
          setComplete(true);
          return 0; // Reset to first question if needed
        }
      });
      setShowQuestion(true);
    }, 1200);
  };

  // Handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log(inputValue);

    // Update the current question's answer immutably
    setQuestions(prevQuestions => 
      prevQuestions.map(question =>
        question.id === questions[currentQuestionIndex].id
          ? { ...question, answer: inputValue }
          : question
      )
    );

    // Clear the input field
    setInputValue('');
    
    // Move to the next question
    handleNextQuestion();
  };

  return (
    <div className={tranStyle.baseGradient}>
      <div className={tranStyle.transitionQuery}>
        <div className={`${tranStyle.question} ${showQuestion ? tranStyle.fadeIn : fadeOut ? tranStyle.fadeOut : ''}`}>
          <p>{questions[currentQuestionIndex].text}</p>
        </div>
        <div className={tranStyle.answer}>
          <textarea
            placeholder="Enter text here"
            className={tranStyle.transparentInput}
            value={inputValue}
            onChange={handleInputChange} // Update state on input change
          />
        </div>
        <div className={tranStyle.submitAnswer}>
          <button onClick={handleSubmit}> 
            Submit
          </button> 
        </div>
      </div>
    </div>
  );
}

export default Transition;
