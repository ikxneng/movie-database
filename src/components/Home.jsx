import React, {useState, useEffect} from "react";

const images = [
    "/src/assets/bladerunner.jpg",
    "/src/assets/metime.jpg",
    "/src/assets/meetcute.jpg"
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Automatically switch images every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextImage, 5000); // 5 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return(

 <div className="relative h-screen w-full overflow-hidden">


            {/* Carousel Container */}
            <div className="absolute inset-0">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-4 pb-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
                    ></button>
                ))}
            </div>
    </div>
    )
}

export default Home;