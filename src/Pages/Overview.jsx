import OverviewHead from "../Components/Overview/OverviewHead";
import Objectives from "../Components/Overview/Objectives";

const Overview = () => {
  return (
    <div>
      <div className="mb-8 z-20">
        <OverviewHead />
      </div>

      <Objectives />
    </div>
  );
};

export default Overview;
