import { useState, useEffect } from 'react'
import Header from './components/Header'
import TeamCard from './components/TeamCard'

function App() {
  const [teams, setTeams] = useState(2)
  const [name, setName] = useState("")
  const [teamsNames, setTeamsNames] = useState(Array.from({ length: teams }, () => []));

  function changeTeams(value){
    setTeams(Number(value))
    setTeamsNames(Array.from({ length: Number(value) }, () => []));
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function handleName(e){
    setName(e.currentTarget.value)
  }
  function distribute(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      const newNames = [...teamsNames];
      let randomTeamIndex = getRandomInt(teams);
      let allTeamsFull = true;

      // Check if all teams are full
      for (let i = 0; i < teams; i++) {
        if (newNames[i].length < 5) {
          allTeamsFull = false;
          break;
        }
      }

      if (allTeamsFull) {
      } else {
        while (newNames[randomTeamIndex].length === 5) {
          randomTeamIndex = getRandomInt(teams);
        }

        newNames[randomTeamIndex].push(name);
        setTeamsNames(newNames);
        setName('');
        e.currentTarget.value = '';
      }
      console.log(teamsNames)
    }
  }
  function handleAgain(){
    setName("")
    setTeamsNames(Array.from({ length: teams }, () => []))
  }
  function handleCopy(){
    var copyText = document.getElementById("copyTxt").innerText;
    
    navigator.clipboard.writeText(copyText)
  }
  
  return (
    <>
    <div className="container">


      <Header againFunct = {handleAgain}/>


        <div>
          <div className="form-group">
            <label htmlFor="teamsnum">Количество команд</label>
            <select className="form-control" id="teamsnum" onChange={e =>{changeTeams(e.currentTarget.value)}}>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        <input type="text" id="names" className='form-control' placeholder='Введите ники' onChange={e =>{handleName(e)}} onKeyUp={e =>{distribute(e)}} />
        <div className='cardCont'>
          {teamsNames.map((team, index) => (
            <TeamCard key={index} teams={team} index={index} />
          ))}
        </div>
        <span id='copyTxt'>
          {teamsNames.map((team, index) => (
            <div key={index} className="team">
              {index+1} - <span> </span>
              {team.map((player, index) => (
                <span key={index}>{player}{index === 4 ? "." : ", "}</span>
              ))}
              <br />
            </div>
          ))}
        </span> 
        <div className="copyCont">
          <button className='copy' onClick={handleCopy}>Скопировать</button>
        </div>
    </div>
    </> 
  )
}

export default App
