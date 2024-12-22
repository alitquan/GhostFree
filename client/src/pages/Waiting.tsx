import { useState, useEffect } from 'react';
import tranStyle from '@styles/Transition.module.css';
import { useNavigate } from 'react-router-dom'; 


function Waiting() {
  const messages = [
    'Finding Available People..',
    'Analyzing for a Connection..', 
    'Pairing....',
    'Connecting ...',
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  const [completed, setComplete] = useState(false);

  const navigate = useNavigate();

  const goToChat = () => {
		navigate('/chat'); 
  };

  // Handle showing and hiding questions
  useEffect(() => {
    if (completed) {
	  goToChat();
    }
  }, [completed]);


	const handleConnect = async () => {
		const storedUser = localStorage.getItem('User');
		const user = storedUser ? JSON.parse(storedUser) : null;

		if (!user) {
		  console.error('No user data found in localStorage');
		  return;
		}
		else {
			console.log('User data found: ', user);
		}

		// get the user that is logged in 
		const username = user.name || 'react'; // 
		console.log(username);
        
		try {

			// api can be seen in the queue folder 
            // Make the POST request to the /queueconnect endpoint
			// matches the user. 
            const response = await fetch( 'http://3.144.147.251:3019/queueconnect', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username })
            });

            // Check if the response is ok (status code 200-299)
            if (response.ok) {
                const result = await response.text(); 

				// hanle returned user if she is there 
                console.log (result); 
            } else {
                const errorText = await response.text();
                console.log (`Error: ${errorText}`); 
            }
        } catch (error) {
            console.error('Error connecting to the server:', error);
        }

		// make listener later to see if anything changes in case no matches are found
		// use this GET call: http://3.144.147.251:3019/checkmatch/sarah
		// to see if sarah was matched. it will return who her match was 
	}
 

  // the 0 creates an infinite loop
  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex(prevIndex =>
        prevIndex === messages.length - 1 ? setComplete(true) : prevIndex + 1
      );
	  handleConnect();
    }, 3000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <>
      <div className={tranStyle.baseGradient}>
		<h1>
        {messages[messageIndex]}
		</h1> 
      </div>
    </>
  );
}

export default Waiting;
