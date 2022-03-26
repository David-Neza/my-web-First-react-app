import React from 'react';
import David from './Images/David.jpg'
const Home = () =>{
  return (
    <div>
      <div>
      Hello I'm name is David, a full stack software engineer from Kigali, Rwanda
           <img  src={David} width="300" height="300" border-radius="30px" alt='David'></img>
      </div>
    </div>
  );
}
export default Home;