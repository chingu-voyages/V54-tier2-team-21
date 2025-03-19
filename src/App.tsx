import { useState } from 'react';
import './App.css';
// import Header from './components/Header'
import Form from './components/Form';
import Prompt from './components/Prompt';
// import Footer from './components/Footer'

function App() {
    const [formData, setFormData] = useState({});

    function onFormSubmit(formData) {
        // console.log(formData);
        setFormData(formData);
    }

    return (
        <>
            {/* <Header /> */}
            <Form onFormSubmit={onFormSubmit} />
            <Prompt formData={formData} />
            {/* <Footer /> */}
        </>
    );
}

export default App;
