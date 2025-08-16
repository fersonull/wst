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
              import { useMemo, useState } from "react";

              export default function App() {
                // State to store the number input
                const [number, setNumber] = useState(0);
                // State to store the name input
                const [name, setName] = useState("");

                // Example useMemo: this will only run when "name" changes
                // Right now, it just logs the name (no return value used)
                const newName = useMemo(() => {
                  console.log("name: ", name);
                }, [name]);

                // A function to square a number (simulating an "expensive" calculation)
                function squared(num) {
                  console.log("calculating...");
                  return num * num;
                }

                // useMemo stores the squared result of "number"
                // It will only re-calculate when "number" changes
                const squaredNumber = useMemo(() => {
                  return squared(number);
                }, [number]);

                return (
                  <div>
                    {/* Input for name (updates state when typing) */}
                    <input
                      type="text"
                      placeholder="name"
                      onChange={(e) => setName(e.target.value)}
                    />

                    {/* Input for number (updates state when typing) */}
                    <input
                      type="number"
                      placeholder="input number"
                      onChange={(e) => setNumber(Number(e.target.value))}
                    />

                    {/* Display the squared number */}
                    <p>rounded number: {squaredNumber}</p>
                  </div>
                );
              }
            `}
        />

        <p className="subtitle">
          This code shows how <span className="highlight text-sm">useMemo</span>{" "}
          can make React apps more efficient. It has two states: one for a name
          and one for a number. Whenever the name changes, it logs the new name,
          but only when that state updates. For the number, there’s a function
          that squares it. Instead of recalculating the square every time the
          component renders, <span className="highlight text-sm">useMemo</span>{" "}
          makes sure the calculation only happens when the number changes. This
          way, React avoids doing extra work and the app runs smoother.
        </p>
      </div>
    </div>
  );
};

export default UseMemoOverview;
