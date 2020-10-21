import React, { useState } from 'react';
import { ListItem, Icon, Avatar } from 'react-native-elements'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';


const MidPriority = () => {


  const useInputChange = () => {
    const [input, setInput] = useState({})
  
    const handleInputChange = (e) => setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    })
  
    console.log(' 18- input ' , input ); 
    return [input, handleInputChange]
  }

  
  const [input, handleInputChange] = useInputChange(); 


  
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" onChange={handleInputChange} />
      </div>
    <input type="submit" />
  </form>
  );
}

export default MidPriority; 
