import { useState } from 'react';
import './App.css';
// import Header from './components/Header'
import Form from './components/Form';
import Prompt from './components/Prompt';
// import Footer from './components/Footer'
import { Inputs } from './types';

function App() {
    const [formData, setFormData] = useState<Inputs>({
        persona: '',
        context: '',
        task: '',
        output: '',
        constraint: '',
    });

    function onFormSubmit(formData: Inputs) {
        // console.log(formData);
        setFormData(formData);
    }

    return (
        <>
            {/* <Header /> */}
            <div className="prompt-container">
                <Form onFormSubmit={onFormSubmit} />
                <Prompt formData={formData} />
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default App;
