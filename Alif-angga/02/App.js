// Array dan map()
// { this.state ?}
// button, 
import React from 'react'
import Header from './components/header'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {output: true, fformN: "", fformAl: false, fform: true}
    /*
output - untuk menampilkan array item atau tdk
fformN - menerima data dari form
fform  - menampilkan form, sebelum submit. jika submit form hilang
fformAl - error pesan, diman jika form kosong tetap "submit"
    */
  }

  handleClick(){ // untuk array item
    this.setState({output: !this.state.output})
  }

  handleChange(event){ // untuk menerima input form
    this.setState({fformN: event.target.value})
    console.log(event.target.value)
  }

  handleSubmit(){ // menerima dari button submit
    if(this.state.fformN !== ''){
      this.setState({fform: false})
    }
    else{
      this.setState({fformAl: true})
    }
    
  }

  handleAllert(){ // menampilkan pesan error jika form kosong
    return(
      <div style={{color: 'red'}}>
Form tidak boleh kosong
        </div>
    )
  }



  appForm(){ // Ini adalah HTML form
    return(
      <form>
        <h2>Formulir Pesanan</h2>
        <textarea onChange={(event) => {this.handleChange(event)}}/>
        {this.state.fformAl? this.handleAllert() : ""}

        <div className='appButton' onClick={() => {this.handleSubmit()}}>Submit</div>
      </form>
    )
  }

  render(){

    let abc = [
      {name: 'Appel', id: 1},
      {name: 'manggo', id: 2},
      {name: 'papaya', id: 3},
      {name: 'star fruit', id: 4},
      {name: 'banana', id:5},
    ]
    // () => {}
    // () => () untuk JSX

    return(
      <div className='appContainer'>
        <div className='appSubtitute'>
          <Header />

          {this.state.fform? this.appForm() : <p>Submited form!</p>} {/* <==== If statement apakah state true/false */}

          <h1>List Buah:</h1>
          
          {this.state.output? 

        abc.map((item) => (
          <p key={item.name}>Halo saya adalah {item.name}</p>
        )) : ''  

        } 

          <button onClick={() => {this.handleClick()}}>Submit / clear</button>
        </div>
      </div>
    )
  }
}

export default App 
