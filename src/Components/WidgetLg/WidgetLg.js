import "./WidgetLg.css";
import photo from "./../../images/face2.jpg"


const WidgetLg = () => {
  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transaction</h3>
      <table className="wigetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img src={photo} alt="gee" className="widgetLgImg" />
            <span className="widgetLgName"> Mr Man</span>
          </td>
          <td className="widgetLgDate">2 jan 2020</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approve" /></td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img src={photo} alt="gee" className="widgetLgImg" />
            <span className="widgetLgName"> Mr Man</span>
          </td>
          <td className="widgetLgDate">2 jan 2020</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined" /></td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img src={photo} alt="gee" className="widgetLgImg" />
            <span className="widgetLgName"> Mr Man</span>
          </td>
          <td className="widgetLgDate">2 jan 2020</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending" /></td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetUser">
            <img src={photo} alt="gee" className="widgetLgImg" />
            <span className="widgetLgName"> Mr Man</span>
          </td>
          <td className="widgetLgDate">2 jan 2020</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approve" /></td>

        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
