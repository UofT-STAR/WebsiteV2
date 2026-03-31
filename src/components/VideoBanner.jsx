import React, { useState, useEffect } from 'react';
import { Typography, Button } from "@material-tailwind/react";

export const VideoBanner = () => {
  const [vid, setVid] = useState("");
  const [vidPlaceholder, setPlace] = useState("");
  const [fin, setFin] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    const mobile = width < 720;

    setVid(mobile ? "/videos/launch-mobile.mp4" : "/videos/launch-desktop.mp4");
    setPlace(mobile ? "/images/launch-mobile.webp" : "/images/launch-desktop.webp");

    const img = new Image();
    img.src = "/images/launch-mobile.webp"; // later we can change this to instead be the first element of the actual carousel but for now its just gonna loop back.
    }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      <video key={vid} autoPlay muted playsInline onEnded={() => setFin(true)} poster={vidPlaceholder} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-10 ${fin ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <source src={vid} type="video/mp4" />
      </video>

      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
        fin ? 'opacity-100' : 'opacity-0'
      }`}>
      </div>

      <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none transition-all duration-1000 transform ${
        fin 
          ? 'opacity-100 translate-y-0 delay-1000' 
          : 'opacity-0 translate-y-12'
      }`}>
        <Typography className="text-6xl md:text-9xl font-black text-white tracking-tight italic">
          utstar
        </Typography>
        <div className="h-1 w-24 bg-white my-4" />
        <Typography className="text-white text-lg md:text-2xl max-w-2xl font-light">
          we make rocket
        </Typography>
        
        <Button 
          variant="gradient" 
          color="gray"
          size="lg" 
          className={`mt-12 pointer-events-auto transition-all ${!fin && 'invisible'}`}>
          join now
        </Button>
      </div>

    </section>
  );
};

