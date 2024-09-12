import { useEffect, useState } from "react";

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json"); // Fetch data.json from the public folder
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Recipes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {data.map((dataItem) => (
                    <div 
                        key={dataItem.id} 
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                    >
                        <img 
                            src={dataItem.image} 
                            alt={dataItem.title} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{dataItem.title}</h2>
                            <p className="text-gray-600 mb-4">{dataItem.summary}</p>
                            <a 
                                href={dataItem.image} 
                                className="text-indigo-500 hover:text-indigo-600 font-medium"
                            >
                                View Image
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
