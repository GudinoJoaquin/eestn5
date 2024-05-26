import React, { useEffect, useRef, useState } from 'react';

function InScroll({ children, threshold = 0.1 }) {
  const [visibleElements, setVisibleElements] = useState([]);
  const elementRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prevVisibleElements) => [
              ...prevVisibleElements,
              entry.target.id,
            ]);
          }
        });
      },
      {
        threshold,
      }
    );

    elementRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ref: (el) => (elementRefs.current[index] = el),
          style: {
            visibility: visibleElements.includes(child.props.id) ? 'visible' : 'hidden',
            transition: 'opacity 0.5s ease-in-out',
            opacity: visibleElements.includes(child.props.id) ? 1 : 0,
          },
        })
      )}
    </div>
  );
}

export default InScroll;
