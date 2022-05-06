import './featureInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeatureInfo = () => {
  return (
    <div className="featureInfo">
      <div className="featureItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
        <span className="featureMone">$2, 415</span>
        <span className="featureMoneRate">-11.4  <ArrowDownwardIcon className='featureIcon negative' /> </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureMoneyContainer">
        <span className="featureMone">$2, 255</span>
        <span className="featureMoneRate">-11.4  <ArrowDownwardIcon className='featureIcon negative'/> </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureMoneyContainer">
        <span className="featureMone">$2, 415</span>
        <span className="featureMoneRate">+2.4  <ArrowUpwardIcon className='featureIcon positive'/> </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
    </div>
  );
};

export default FeatureInfo;
