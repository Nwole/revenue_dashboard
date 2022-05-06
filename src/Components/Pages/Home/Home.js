import FeatureInfo from "../../FeatureInfo/FeatureInfo";
import WidgetLg from "../../WidgetLg/WidgetLg";
import WidgetSm from "../../WidgetSm/WidgetSm";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
