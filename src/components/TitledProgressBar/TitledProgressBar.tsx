import './TitledProgressBar.scss';

export interface TitledProgressBarProps {
  percentage: number;
  title: string;
  lastUpdated: string;
}

export const TitledProgressBar = ({ percentage, title, lastUpdated }: TitledProgressBarProps): JSX.Element => {
  return (
    <div className="easey-progress-bar">
      <div className="wrapper">
        <div style={{ width: percentage + '%' }} className="progressFill"></div>
        <span className="progressText">{percentage + '%'}</span>
      </div>
      <div className="title">
        <p className="text-bold margin-0 mainTitleText">{title}</p>
        <p className="margin-0 padding-y-1 line-height-mono-1 subTitleText">{lastUpdated}</p>
      </div>
    </div>
  );
};

export default TitledProgressBar;
