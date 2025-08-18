import dedent from "dedent";
import CodeBlock from "../ui/CodeBlock";

const CustomHook = () => {
  return (
    <div>
      <h3 className="title mb-3">Custom Hooks</h3>
      <p className="subtitle">
        A <span className="highlight text-sm">custom hook</span> in React is
        simply a reusable function that starts with use and lets you share
        stateful logic between components. Instead of repeating the same code
        (like fetching data, handling forms, or managing authentication) in
        multiple components, you can extract that logic into a custom hook and
        use it anywhere. This makes your code cleaner, easier to maintain, and
        more consistent.
      </p>

      <div className="mt-4">
        <p className="subtitle">Here's a basic example:</p>

        <CodeBlock code={dedent`
            wala pa
            
        `} />
      </div>
    </div>
  );
};

export default CustomHook;
