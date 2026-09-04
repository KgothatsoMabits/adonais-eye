import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ShieldAlert, Smartphone, ArrowRight, Check } from 'lucide-react';
import { Logo } from '../components/Logo';

const slides = [
  {
    icon: <MapPin className="w-16 h-16 text-brand-blue" strokeWidth={1.5} />,
    title: "Help is connected",
    description: "With one tap, your precise location is securely shared. You don't need to explain where you are—we already know."
  },
  {
    icon: <ShieldAlert className="w-16 h-16 text-brand-blue" strokeWidth={1.5} />,
    title: "Your request is seen",
    description: "The moment you reach out, our dispatchers and nearest equipped officers are alerted and briefed on exactly what you need."
  },
  {
    icon: <Smartphone className="w-16 h-16 text-brand-blue" strokeWidth={1.5} />,
    title: "Someone is responding",
    description: "Watch help arrive in real-time. Stay informed and connected every step of the way until you are safe."
  }
];

export const Onboarding = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hold the splash screen logo for 2.5 seconds then fade to onboarding
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      navigate('/gateway');
    } else {
      setCurrentSlide(s => s + 1);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-transparent px-6 h-full font-sans relative overflow-hidden">
      
      {/* Splash Screen Overlay */}
      <div className={`absolute inset-0 z-50 flex items-center justify-center transition-all duration-1000 ease-in-out ${showSplash ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-100 ${showSplash ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
          <Logo />
        </div>
      </div>

      {/* Main Carousel Content */}
      <div className={`flex-1 flex flex-col transition-all duration-1000 ease-out ${showSplash ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'} justify-center pt-10`}>
        {/* Main Graphic Box */}
        <div className="mx-auto w-full aspect-[4/3] bg-brand-light/60 backdrop-blur-sm rounded-3xl mb-12 flex items-center justify-center ring-1 ring-brand-blue/10 shadow-sm transition-transform duration-500 hover:scale-[1.02]">
          {slides[currentSlide].icon}
        </div>

        <div className="px-2">
          <h2 className="text-3xl font-bold text-brand-dark mb-4 tracking-tight">{slides[currentSlide].title}</h2>
          <p className="text-gray-600 leading-relaxed text-[15px] pr-4">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className={`flex items-center justify-between pb-10 pt-4 px-2 transition-all duration-1000 delay-300 ${showSplash ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-8 bg-brand-blue' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-brand-blue/20"
        >
          {currentSlide === slides.length - 1 ? (
             <Check className="w-6 h-6 stroke-[2.5]" />
          ) : (
             <ArrowRight className="w-6 h-6 stroke-[2.5]" />
          )}
        </button>
      </div>
    </div>
  );
};
