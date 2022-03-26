import David from './Images/David.jpg'

function HomeContent(){
    return(
        <>
           Hello I'm name is David, a full stack software engineer from Kigali, Rwanda
           {/* <img src={David} alt="David"/> */}
           <img  src={David} width="300" height="300" border-radius="30px"></img>
          
        </>
    )
}


export default HomeContent