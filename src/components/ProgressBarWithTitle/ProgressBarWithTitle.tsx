import ProgressBar  from "@ramonak/react-progress-bar";
import './ProgressBar.scss';

export interface ProgressBarProps {
  percentage: number;
  title: string;
  lastUpdated: string;
}

export const ProgressBarWithTitle = ({ percentage, title, lastUpdated }: ProgressBarProps): JSX.Element => {
  return (
    <div className="easey-progress-bar" >
      <ProgressBar className = "wrapper" completed = {percentage} barContainerClassName="barContainer" bgColor="#005ea2" labelSize="25px" height="70px"></ProgressBar>
      <div className="title">
        <p className="text-bold margin-0 mainTitleText">
          {title}
        </p>
        <p className="margin-0 padding-y-1 line-height-mono-1 subTitleText">
          {lastUpdated}
        </p>
      </div>
    </div>
  );
};

export default ProgressBarWithTitle;
