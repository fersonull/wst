import dedent from "dedent";
import CodeBlock from "../ui/CodeBlock";

const UseMemoOverview = () => {
  return (
    <div id="useMemo">
      <h3 className="title mb-3">useMemo</h3>
      <p className="subtitle">
        <span className="highlight text-sm">useMemo</span> is a React hook that
        optimizes performance by caching computation results and recalculating
        only when dependencies change, making it ideal for expensive operations.
      </p>
      <div className="mt-4">
        <p className="subtitle">
          Here’s the basic syntax for{" "}
          <span className="highlight text-sm text-white">useMemo</span> in
          React:
        </p>
        <CodeBlock
          code={dedent`
                const memoizedValue = useMemo(() => {
                  // Compute and return a value here
                  return someExpensiveCalculation(dependency1, dependency2);
                }, [dependency1, dependency2]);

            `}
        />
      </div>
      <div className="mt-4">
        <p className="subtitle">Here’s a basic example:</p>
        <CodeBlock
          code={dedent`
              // Function that calculates the square of a given number
              const round = (num) => {
                return num * num;
              };

              // Memoize the computed value so the calculation only runs 
              // when the dependency (in this case, 'number') changes
              const roundedNumber = useMemo(() => {
                // Call the 'round' function with the current value of 'number'
                return round(number);
              }, [number]);
            `}
        />
      </div>
    </div>
  );
};

export default UseMemoOverview;
