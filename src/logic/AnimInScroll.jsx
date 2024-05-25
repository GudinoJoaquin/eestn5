import React, { useEffect } from 'react';

export default function InScroll({ children, animacion }) {
  useEffect(() => {
    const element = document.querySelector('.scroll-animatable');

    if (!element) {
      console.error('Elemento no encontrado: .scroll-animatable');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(animacion);
          observer.unobserve(element); // Deja de observar una vez que se aplica la animación
        }
      },
      {
        threshold: 0.1 // El umbral indica el porcentaje del elemento visible necesario para activar la animación
      }
    );

    observer.observe(element);

    return () => observer.disconnect(); // Limpiar el observador cuando el componente se desmonte
  }, [animacion]);

  return <div className="scroll-animatable">{children}</div>;
}
