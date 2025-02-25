import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';

const LogoDesignProcess = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div 
            className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5"
            style={{
                minHeight: '100vh',
                backgroundImage: "linear-gradient(180deg, #000103, #ffffff00 36%, #ffffff00 71%, #000103), linear-gradient(to bottom, #000000d9, #000000d9), linear-gradient(96deg, #fa955c, #00d5f3)"
            }}
        >
            <div className="text-center mt-5">
                <h1>Checkout the website <span className="color-text">Design Process</span></h1>
                <p className='mx-5' style={{fontSize: '1.25rem', color: '#b2b3b3'}}>
                    Our design process is focused on creating a seamless experience for your customers.
                    From the initial concept to the final product, we work closely with you to ensure that your vision is brought to life.
                </p>
            </div>

            {/* Video Container */}
            <div className="relative mt-5" style={{ position: 'relative', width: '80%', maxWidth: '800px' }}>
                <video 
                    ref={videoRef} 
                    width="100%" 
                    height="400px" 
                    style={{ borderRadius: '15px' }} 
                    controls={isPlaying}  // Show controls only after play is clicked
                    poster="src/assets/videoth.jpg"
                >
                    <source src="path/to/your/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Custom Play Button */}
                {!isPlaying && (
                    <button 
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-lg"
                        style={{
                            width: '80px',
                            height: '80px',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'opacity 0.3s ease-in-out',
                            borderRadius: '50%'
                        }}
                    >
                        <Play size={40} color="#000" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default LogoDesignProcess;
