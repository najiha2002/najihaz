import React from "react";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Unobserve after it's visible
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current); // Observe only if DOM element exists
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current); // Cleanup safely
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
