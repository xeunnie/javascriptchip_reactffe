import React, {useState} from 'react';
import './App.css';

function App() {

  let [title,titleChange] = useState(['web form1','web form2','web form3']);
  let [likes, addlikes] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [subject, setSubject] = useState(0)
  let [input, inputChange] = useState('')

  function nextTitle(){
    var newArray =[...title];
    newArray[0] = 'blogform';
    titleChange(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>Web Portfolio by Seungeun</div> <br></br>
        <div>react with js</div>
      </div>
      <button onClick={ () => {nextTitle()}}>next</button>

      {
        title.map(function(a, i){
          return (
            <div className='list' key={i}>
              <div className='listTitle'>
                <h4 onClick={()=> {setModal(!modal);setSubject(i)}}>
                {title[i]}
                <span onClick={ (e) => { 
                  e.stopPropagation()
                  let copy = [...likes];
                  copy[i] = copy[i] +1
                  addlikes(copy)
                  }}>👍</span>
                  {likes[i]}
                </h4>
                <button onClick={()=>{
                  let copy = [...title]
                  copy.splice(i,1)
                  titleChange(copy)
                }}>Delete</button>
                </div>
              <p>7월 9일 발행</p>
              <hr />
            </div>
          )
        })
      }
 
      <input type="text" onChange={(e)=>{
        inputChange(e.target.value);
        console.log(input)
        }}/>
        <button onClick={()=>{
          let copy = [...title]
          copy.unshift(input)
          titleChange(copy)
        }}>publish</button>

      {
        modal === true ? <Modal title={title} subject={subject} titleChange={titleChange} /> : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
        <h2>{props.title[props.subject]}</h2>
        <p>date</p>
        <p>detail</p>
        <button onClick={()=>{props.titleChange(['transform'])}}>Edit</button>
      </div>
  )
}



export default App;