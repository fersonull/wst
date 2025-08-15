import React from "react";

const OverviewHead = () => {
  return (
    <div>
      <h2 className="heading">Overview</h2>
      <p className="subtitle">
        In modern React development, performance optimization and code
        reusability are essential for building efficient and maintainable
        applications. Two important tools that help achieve these goals are
        <span className="highlight text-sm mx-1">useMemo</span> and{" "}
        <span className="highlight text-sm mx-1">custom hooks</span>. While they
        serve different purposes—
        <span className="highlight text-sm mx-1">useMemo</span>
        focuses on preventing unnecessary recalculations, and custom hooks focus
        on reusing logic—they often complement each other in real-world
        projects. Understanding both concepts is crucial for developers aiming
        to write clean, optimized, and scalable React code.
      </p>
    </div>
  );
};

export default OverviewHead;
