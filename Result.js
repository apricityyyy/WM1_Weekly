import React from 'react'
import { useContext } from 'react'
import MessageContext from './MessageContext';

const Result = () => {
    const { message } = useContext(MessageContext);
    let offers = message.split("&");
    if (offers.length === 1 && offers[0].includes("see also")) {
        offers = offers[0].split("but");
        if (offers.length > 1 && offers[1].trim().startsWith("see also")) {
            // Capitalize the first letter of the second part
            offers[1] = offers[1].trim();
            offers[1] = offers[1].charAt(0).toUpperCase() + offers[1].slice(1);
        }
    }
    
    
    const offerLinks = {
        "Aile Dostu": "https://pasha-insurance.az/en/other-insurance/aile-dostu-konullu-saglamliq-sigortasi#tab2",
        "SaghlamSen": "https://pasha-insurance.az/en/products-and-services/individual-insurance/medical-insurance/konullu-tibbi-sigorta",
        "Kompakt": "https://pasha-insurance.az/en/products-and-services/individual-insurance/medical-insurance/kompakt-sigorta-mehsulu",
    };

    const handleMoreInfoClick = (offer) => {
        for (let key in offerLinks) {
            if (offer.includes(key)) {
                // Open the URL in a new tab
                window.open(offerLinks[key], '_blank');
                return;
            }
        }
        console.log(`No specific link for: ${offer}`);
    };
    

    return (
        <div className="max-w-[1000px] mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Best Personalized Insurance Offers for You</h2>
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                {offers.length > 0 ? (
                    <ul className="list-none space-y-3">
                        {offers.map((offer, index) => (
                            <li key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow border border-gray-300">
                                <span className="text-lg">{offer}</span>
                                <button 
                                    onClick={() => handleMoreInfoClick(offer)}
                                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    More info...
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-lg text-gray-600">No offers available based on your selection.</p>
                )}
            </div>
        </div>
    );
}

export default Result;