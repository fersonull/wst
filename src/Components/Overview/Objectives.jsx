const objs = [
  "Explain the purpose of useMemo and identify scenarios where it is beneficial.",
  "Implement useMemo to memoize computed values and prevent unnecessary re-renders.",
  "Define what a Custom Hook is and explain why and when to use one.",
  "Refactor existing components to improve performance and maintainability using useMemo and Custom Hooks.",
];

const Objectives = () => {
  return (
    <div>
      <h2 className="title mb-2">Objectives</h2>
      <div className="subtitle">
        <p>By the end of the lesson, students will be able to:</p>

        <ol>
          {objs.map((el, ind) => (
            <div className="flex gap-2">
              <span>{ind + 1}.</span>
              <li key={ind}>{el}</li>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Objectives;
