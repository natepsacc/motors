import logo from './logo.svg';
import './App.css';

function App() {
const urlone = "https://ipfs.fleek.co/ipfs/bafybeibuhucj4xd4vstpjdq6r66oieluxq6qai64fy7fkoxp3qfp6dlzhy";
const urltwo = "https://ipfs.fleek.co/ipfs/bafybeid63dh22g6ljxtayse44xizagavdplylovvkhhqowi6wokdxmp5dq";
const urlthr = "https://ipfs.fleek.co/ipfs/bafybeif2dwplp55xxqjw6d44aje2gmfnr32b3nozkbasdskrxqsezjltpe";
  return(
<div>
<img alt='schidtcomotors' src={urlone} id='schidtcomotors'></img>
<img alt='schidtcomotorstwo' src={urltwo} id='schidtcomotors'></img>
<img alt='schidtcomotorsthree' src={urlthr} id='schidtcomotors'></img>
</div>

)
}

export default App;
