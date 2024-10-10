import { useEffect, useState } from 'react';

function useNavigationState() {
  const [isNewChat, setIsNewChat] = useState(false);

  useEffect(() => {
    // Retrieve and clear the state from session storage
    const stateString = sessionStorage.getItem('navigationState');
    sessionStorage.removeItem('navigationState');

    if (stateString) {

        const state = JSON.parse(stateString);
        if (state) {
          setIsNewChat(state.value);
        }
  
    }
  }, []);

  return { isNewChat };
}

export default useNavigationState;