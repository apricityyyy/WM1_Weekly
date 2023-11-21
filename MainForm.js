"use client";
import { useState, useEffect, useContext } from 'react'
import Question0 from './Question0'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import Result from './Result'
import MessageContext from './MessageContext';

const MainForm = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
        planType: "",
        budget: "",
        reason: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };


    const [activeTab, setActiveTab] = useState(0)

    const formElements = [
        <Question0 data={data} handleChange={handleChange} />,
        <Question1 data={data} handleChange={handleChange} />,
        <Question2 data={data} handleChange={handleChange} />,
        <Question3 data={data} handleChange={handleChange} />,
        <Question4 data={data} handleChange={handleChange} />,
        <Result data={data} handleChange={handleChange} />,
    ]

    const { message, setActiveMessage } = useContext(MessageContext)

    useEffect(() => {
        // This code runs after `message` has been updated
        // console.log(message);
    }, [message]);

    function displayResults() {
        if (data.age === "50-65" && data.planType === "family" && data.budget === "301-600" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu ---- Vitamin A")
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "601-800" && data.data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin A & Aile Dostu --- Vitamin B");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "801-1000" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin B & Aile Dostu --- Vitamin C & Aile Dostu --- Multi-vitamin");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "601-800" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin A & Aile Dostu --- Vitamin B");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "301-600" && data.reason === "comprehensive") {
            setActiveMessage("Aile Dostu --- Vitamin A but see also Aile Dostu Vitamin B for more exact match");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "601-800" && data.reason === "comprehensive") {
            setActiveMessage("Aile Dostu --- Vitamin A & Aile Dostu --- Vitamin B");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "801-1000" && data.reason === "comprehensive") {
            setActiveMessage("Aile Dostu --- Vitamin B & Aile Dostu Vitamin C & Aile Dostu --- Multi-Vitamin");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "301-600" && data.reason === "preventive") {
            setActiveMessage("Aile Dostu --- Vitamin A but see also Aile Dostu --- Vitamin B & Aile Dostu --- Vitamin C for more exact match");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "601-800" && data.reason === "preventive") {
            setActiveMessage("Aile Dostu --- Vitamin A & Aile Dostu --- Vitamin B but see also Aile Dostu --- Vitamin C for more exact match");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "801-1000" && data.reason === "preventive") {
            setActiveMessage("Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin ");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "301-600" && data.reason === "wellness") {
            setActiveMessage("Aile Dostu --- Vitamin A but see also Aile Dostu --- Vitamin B for the better match");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "601-800" && data.reason === "wellness") {
            setActiveMessage("Aile Dostu --- Vitamin A & Aile Dostu --- Vitamin B but see also Aile Dostu --- Vitamin C for the better match");
        } if (data.age === "50-65" && data.planType === "family" && data.budget === "801-1000" && data.reason === "wellness") {
            setActiveMessage("Aile Dostu --- Vitamin B & Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "301-600" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin A & Aile Dostu --- Vitamin B");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "601-800" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin A & Aile Dostu --- Vitamin B & Aile Dostu --- Vitamin C");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "801-1000" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin ");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "301-600" && data.reason === "comprehensive") {
            setActiveMessage("Aile Dostu --- Vitamin A & Aile Dostu --- Vitamin B but see also Aile Dostu --- Vitamin C for more exact match");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "601-800" && data.reason === "comprehensive") {
            setActiveMessage("Aile Dostu --- Vitamin B & Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "801-1000" && data.reason === "comprehensive") {
            setActiveMessage("Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "301-600" && data.reason === "preventive") {
            setActiveMessage("Aile Dostu --- Vitamin B but see also Aile Dostu --- Vitamin C for a better match");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "601-800" && data.reason === "preventive") {
            setActiveMessage("Aile Dostu --- Vitamin C but see also Aile Dostu --- Multi-Vitamin for a better match");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "801-1000" && data.reason === "preventive") {
            setActiveMessage("Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "301-600" && data.reason === "wellness") {
            setActiveMessage("Aile Dostu --- Vitamin B ");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "601-800" && data.reason === "wellness") {
            setActiveMessage("Aile Dostu --- Vitamin B & Aile Dostu --- Vitamin C but see also Aile Dostu --- Multi-Vitamin for a better match");
        } if (data.age === "0-49" && data.planType === "family" && data.budget === "801-1000" && data.reason === "wellness") {
            setActiveMessage("Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "0-300" && data.reason === "basicCover") {
            setActiveMessage("SaghlamSen --- Emergency & Kompakt --- Alpha");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "301-600" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin A & SaghlamSen --- Emergency");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "601-800" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin A");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "801-1000" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin A");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "0-300" && data.reason === "comprehensive") {
            setActiveMessage("Kompakt --- Beta & Kompakt --- Gamma");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "301-600" && data.reason === "comprehensive") {
            setActiveMessage("SaghlamSen --- Classic+ & Kompakt --- Gamma but see also Aile Dostu --- Vitamin B for a better match");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "601-800" && data.reason === "comprehensive") {
            setActiveMessage("SaghlamSen --- Classic+ & SaghlamSen --- Silver & Aile Dostu --- Vitamin B & Aile Dostu --- Vitamin C but see also Aile Dostu --- Multi-Vitamin for a better match");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "801-1000" && data.reason === "comprehensive") {
            setActiveMessage("SaghlamSen --- Silver & SaghlamSen --- Gold & Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "0-300" && data.reason === "preventive") {
            setActiveMessage("Kompakt --- Alpha & Kompakt --- Beta & Kompakt --- Gamma");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "301-600" && data.reason === "preventive") {
            setActiveMessage("Kompakt --- Gamma");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "601-800" && data.reason === "preventive") {
            setActiveMessage("Aile Dostu --- Vitamin C but see also Aile Dostu --- Multi-Vitamin for a better match");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "801-1000" && data.reason === "preventive") {
            setActiveMessage("Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin & SaghlamSen --- Gold");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "0-300" && data.reason === "wellness") {
            setActiveMessage("SaghlamSen --- Emergency but see also SaghlamSen --- Classic+ for a better match");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "301-600" && data.reason === "wellness") {
            setActiveMessage("SaghlamSen --- Classic+ but see also Aile Dostu --- Vitamin B for a better match");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "601-800" && data.reason === "wellness") {
            setActiveMessage("SaghlamSen --- Classic+ & SaghlamSen --- Silver & Aile Dostu --- Vitamin B & Aile Dostu --- Vitamin C but see also Aile Dostu --- Multi-Vitamin for a better match");
        } if (data.age === "0-49" && data.planType === "individual" && data.budget === "801-1000" && data.reason === "wellness") {
            setActiveMessage("SaghlamSen --- Silver & SaghlamSen Gold & Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "0-300" && data.reason === "basicCover") {
            setActiveMessage("SaghlamSen --- Emergency & Kompakt --- Alpha");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "301-600" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin A & SaghlamSen --- Emergency");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "601-800" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin A");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "801-1000" && data.reason === "basicCover") {
            setActiveMessage("Aile Dostu --- Vitamin A");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "0-300" && data.reason === "comprehensive") {
            setActiveMessage("Kompakt --- Beta & Kompakt --- Gamma");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "301-600" && data.reason === "comprehensive") {
            setActiveMessage("SaghlamSen --- Classic+ & Kompakt --- Gamma");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "601-800" && data.reason === "comprehensive") {
            setActiveMessage("SaghlamSen --- Classic+ & SaghlamSen --- Silver & Aile Dostu --- Vitamin B");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "801-1000" && data.reason === "comprehensive") {
            setActiveMessage("SaghlamSen --- Silver & SaghlamSen --- Gold & Aile Dostu --- Vitamin B & Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "0-300" && data.reason === "preventive") {
            setActiveMessage("Kompakt --- Alpha & Kompakt --- Beta & Kompakt --- Gamma");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "301-600" && data.reason === "preventive") {
            setActiveMessage("Kompakt --- Gamma");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "601-800" && data.reason === "preventive") {
            setActiveMessage("Aile Dostu --- Vitamin B but see also Aile Dostu --- Vitamin C for a better match");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "801-1000" && data.reason === "preventive") {
            setActiveMessage("Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin & SaghlamSen --- Gold");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "0-300" && data.reason === "wellness") {
            setActiveMessage("SaghlamSen --- Emergency but see also SaghlamSen --- Classic+ for a better match");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "301-600" && data.reason === "wellness") {
            setActiveMessage("SaghlamSen --- Classic+");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "601-800" && data.reason === "wellness") {
            setActiveMessage("SaghlamSen --- Classic+ & SaghlamSen --- Silver & Aile Dostu --- Vitamin B");
        } if (data.age === "50-65" && data.planType === "individual" && data.budget === "801-1000" && data.reason === "wellness") {
            setActiveMessage("SaghlamSen --- Silver & SaghlamSen Gold & Aile Dostu --- Vitamin B & Aile Dostu --- Vitamin C & Aile Dostu --- Multi-Vitamin");
        }
    }

    const validateCurrentStep = () => {
        switch (activeTab) {
            case 0:
                return data.name.trim() !== '';
            case 1:
                return data.age.trim() !== '';
            case 2:
                return data.planType.trim() !== '';
            case 3:
                return data.budget.trim() !== '';
            case 4:
                return data.reason.trim() !== '';
            default:
                return true;
        }
    };

    const {withPerson, setWithPerson} = useContext(MessageContext)

    return (
        <div style={withPerson === true?{display:"flex"}:{display:"none"}} className='min-h-screen flex flex-col justify-center bg-white'>
            <div>
                {
                    formElements[activeTab]
                }
            </div>
            <div className='flex flex-wrap gap-x-6 mx-auto'>
                <button
                    disabled={activeTab === 0 ? "disabled" : ""}
                    onClick={() => setActiveTab(prev => prev - 1)}
                    className={`px-4 py-2 rounded-xl bg-[#0094C9] text-white ${activeTab === 0 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>
                    Back
                </button>
                <button
                    disabled={activeTab >= formElements.length - 2 ? "disabled" : ""}
                    onClick={() => {if (validateCurrentStep()) {
                        setActiveTab(prev => prev + 1);
                    } else {
                        alert('Please fill out all required fields.');
                    } }}
                    className={`px-4 py-2 rounded-xl bg-[#0094C9] text-white ${activeTab >= formElements.length - 2 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>Next</button>
                {
                    activeTab === formElements.length - 2 ? <button className='px-4 py-2 rounded-xl bg-[#0094C9] text-white' onClick={() => { setActiveTab(prev => prev + 1); displayResults(); }}>Submit</button> : null
                }
            </div>
        </div>
    )
}

export default MainForm