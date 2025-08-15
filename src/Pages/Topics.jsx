import UseMemoOverview from "../Components/Topics/UseMemoOverview";
import TopicList from "../Components/Topics/TopicList";

const Topics = () => {
  return (
    <div>
      <h1 className="heading">Topics</h1>
      <p className="subtitle mb-8">
        In this section, we will dive deeper into two important concepts in
        React: <span className="highlight text-sm">useMemo</span> and{" "}
        <span className="highlight text-sm">custom hooks</span>. The discussion will cover
        how each concept works, when they should be used, and the benefits they
        provide in creating efficient and maintainable applications. Practical
        examples will be provided for both topics to illustrate their usage and
        help reinforce understanding through real-world scenarios.
      </p>
      <UseMemoOverview />
    </div>
  );
};

export default Topics;
