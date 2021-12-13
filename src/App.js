
import './App.css';
import HandleName from './Profile/HandleName';
import MyProfile from './Profile/MyProfile';
import Profilepicture from './Profile/Profilepicture';
import picture from '../src/image/picture.jpg'

function App() {

   const FullName={name:"Aouina Sarra"}
   const Bio="Student"
   const Profession="Full Stack developper"
   const pic=picture
  

   const Handlealert =(name)=>  alert( `hello ${name}`  )  

  return (
    <div className="App">
     
      
     <Profilepicture pic={pic}   >
     <img src={pic} className='mypic'  alt=""/>
     <HandleName  FullName={FullName}    Handlealert={Handlealert}     ></HandleName>
     </Profilepicture>
    <MyProfile FullName={FullName}   Bio={Bio}   Profession={Profession}    ></MyProfile>

    </div>
  );
}

export default App;
