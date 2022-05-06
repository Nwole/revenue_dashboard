import "./WidgetSm.css";
import pic from "./../../images/face1.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New join members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={pic} alt="gee" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">software Engineer</span>
          </div>
          <div className="widgetSmButton">
            <VisibilityIcon className="widgetIcon"/>
            Display
          </div>
        </li>
        <li className="widgetSmListItem">
          <img src={pic} alt="gee" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">software Engineer</span>
          </div>
          <div className="widgetSmButton">
            <VisibilityIcon  className="widgetIcon"/>
            Display
          </div>
        </li>
        <li className="widgetSmListItem">
          <img src={pic} alt="gee" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">software Engineer</span>
          </div>
          <div className="widgetSmButton">
            <VisibilityIcon className="widgetIcon" />
            Display
          </div>
        </li>
        <li className="widgetSmListItem">
          <img src={pic} alt="gee" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">software Engineer</span>
          </div>
          <div className="widgetSmButton">
            <VisibilityIcon className="widgetIcon" />
            Display
          </div>
        </li>
        <li className="widgetSmListItem">
          <img src={pic} alt="gee" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">software Engineer</span>
          </div>
          <div className="widgetSmButton">
            <VisibilityIcon className="widgetIcon"/>
            Display
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
