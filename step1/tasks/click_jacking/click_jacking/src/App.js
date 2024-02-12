import logo from './logo.svg';
import './App.css';

function App() {
  let style1 = {
    opacity: 0.5000000009,
    position: 'absolute',
    width:"100%",
    height:"100%",
    flex:1,
    zIndex: 2 // Lower z-index for iframe
  };

  let style2 = {
    position: 'absolute',
    left:'50%',
    top:"50%",
    right:"50%",
    bottom:"50%", 
    zIndex: 1 // Higher z-index for text
  };

  return (
    <>
    <div class="container">
    <div class="row center">
        
        <iframe src="https://radham0wn1ka.github.io/" title="title" style={style1}></iframe>
          <p style={style2}> lottery</p>
        
    </div>
</div>
      </>
  );
}

export default App;
