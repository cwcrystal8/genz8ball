import './App.css';

import React, { Component } from 'react';

const RESPONSES = [
  "my bussy says no",
  "w idea",
  "L friend",
  "big yikes",
  "bussy now, try again later",
  "Sheeeeeesh (fuckboy emoji)",
  "why am i living rent free in ur head fuck off sis",
  "🚨the vibe check results are in🚨. the vibes are: inconclusive",
  "Yas. Periodt.",
  "dont drag me into this or you'll catch these hands",
  "you just like me fr",
  "finesse a yes (that's a no from me)",
  "i'm weak (no)",
  "i'm weak (yes)",
  "i'm weak (maybe)",
  "pass the tea sis, the answer is no",
  "it's BUSSIN how yes the answer is",
  "waist snatched, vibes matched, 'hell no' dispatched",
  "this ain't it chief",
  "outlook sus",
  "you ain't the main character, sorry hun, no",
  "and for that reason, i'm out",
  "bet",
  "YEET (no)",
  "Yes, no cap",
  "chugga chugga choo choo the NOPE train has arrived",
  "outlook didn't understand the assignment",
  "its gonna be a no from me",
  "say less its a yes",
  "ok boomer outlook grim",
  "lowkey a yes",
  "signs point to cancelled",
  "my homies say no",
  "throw it back that shits wack",
  "you're girlbossin too close to the sun",
  "poggers",
  "can't spill the tea rn, come back later",
  "only basic bitches would agree",
  "hell yes and thats fax no printer",
  "come back later, im baby rn",
  "banger question",
  "its a no bones day for me, sis",
  "cant believe you caught me in 4k sayin no",
  "my malewives say maybe",
  "not me saying yes",
  "nobu t why do i kinda think yes",
  "your question is sending me hahaha i'm sent",
  "uh oh, big yikes ahead",
  "manifesting a universe where you dont do that",
  "its giving chefs kiss",
  "come back when ur giving less cheugy"
];

interface AppStateType {
  counter: number;
  question: String;
  askedQuestion: Boolean;
}

class App extends Component<{}, AppStateType>  {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      question: "",
      askedQuestion: false
    }
  }

  render() {
    if (!this.state.askedQuestion) {
      return (
        <div id="homepage">
          
          <p className='heading'>✨ Gen Z 8 Ball ✨</p>
          <p className='subtitle'>discover the sage wisdom only possessed by those born after 1997</p>
          <input key = {this.state.counter.toString()} type="text" placeholder="what's poppin fam" 
                  onChange={(e) => {this.setState({question: e.target.value})}}
                  onKeyDown={(e) => {if(e.key === 'Enter') {this.setState({counter: this.state.counter + 1, askedQuestion: true})}}}
                  autoFocus = {true}
          ></input>
          <button onClick={() => {this.setState({counter: this.state.counter + 1, askedQuestion: true})}}
          >send DM</button>
        </div>
      );
    }
    else{
      var question = this.state.question;
      let answer = RESPONSES[Math.floor(Math.random()*RESPONSES.length)];
      var today = new Date();
      var ampm = today.getHours() >= 12 ? 'pm' : 'am';
      var time = today.getHours() + ":" + today.getMinutes() + ' ' + ampm;
      return (
        <div id="answer-page">
          <p className='heading'>✨ Gen Z 8 Ball ✨</p>
          <section id="dialog-box">
            <p id="answer-header"> 🎱 zaddy </p>
            <section id="dialog-body">
              <p id="question">{question}</p>
              <p id="answer">{answer}</p>
              <p id="answer-decor">yeeted {time}</p>

              <input key = {this.state.counter.toString()} type="text" placeholder='ask another question'
                  onKeyDown={(e) => {if(e.key === 'Enter') {this.setState(
                    {
                      question: (e as any).target.value,
                      counter: this.state.counter + 1
                    })
                  }
                  }}
            ></input>
            </section>
          </section>
        </div>
      )
    }
  }
}

export default App;
