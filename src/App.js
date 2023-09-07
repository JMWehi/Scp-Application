import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Nav.css';
import Header from './Header';
import Footer from './Footer';
import SCPList from './SCPList';
import SCPDetail from './SCPDetail';
import './App.css';
import CardCarousel from './CardCarousel';
import scpData from './scpData.json';




const images = [
  'https://qph.cf2.quoracdn.net/main-qimg-4955315095b5d0e4e35d33512dccff20-lq',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00184a5a-adaa-46e5-bab0-c5ee46ca5c62/df6sw1a-f636d729-74de-4589-a85b-f1219e2ab980.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAwMTg0YTVhLWFkYWEtNDZlNS1iYWIwLWM1ZWU0NmNhNWM2MlwvZGY2c3cxYS1mNjM2ZDcyOS03NGRlLTQ1ODktYTg1Yi1mMTIxOWUyYWI5ODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Y3JSaVrdTte4nrP37kbn8NVkiG-f4AnfkeHRiqFR5is',
  'https://i.redd.it/32upqtns1ae61.png',
  'https://preview.redd.it/7ibrjqvwy8041.jpg?width=960&crop=smart&auto=webp&s=bf179d49e5d24642c06bb5015ee166b597bc9b87',
  'https://static.wikia.nocookie.net/multiversology/images/1/1c/Scp_049_by_molotovgtm-d60n7id-1-.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCTQ0PYvBvUFA7VGwjCsnDnYyb4yvqnYR2Q&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KDh7Ur9mozarZSt0KXapN6HcOzIBKhg3q2SQjXAap4oNYizQZxff2xKJRSSoqTIV2BY&usqp=CAU',
  '/images/SCP-005.jpg',
  'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/11/SCP-Ccard-Wiki-01-e1573928853815.png?resize=1000%2C600&ssl=1', 
  '/images/scp-002.jpg', 
  'https://pm1.aminoapps.com/7139/224b8d7237cc8264a881ff18cbc7f8161830af1cr1-777-1732v2_00.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlERD2ANQc2VkdhmkqxQBmgQCW6GSX9oCspcm80ytsweboFKK9W4eotrXp4HpS_IIRQD8&usqp=CAU',
  'https://static.wikia.nocookie.net/scpreadings/images/1/19/SCP004_door.jpg',
  'https://qph.cf2.quoracdn.net/main-qimg-9f610d4fdb2ffdd03dd3d9f520f97d9a-pjlq',
  'https://e1.pxfuel.com/desktop-wallpaper/74/877/desktop-wallpaper-scp-foundation-logo-on-dog-scarlet-king.jpg'
  
];
function App() {
  return (
    <Router>
      <div id="page-container">
        <Header className="header" />
        <Routes>
          <Route path="/" element={<SCPList />} />
          <Route path="/scp/:id" element={<SCPDetail scpData={scpData} />} />
        </Routes>
        <CardCarousel images={images} />
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;





