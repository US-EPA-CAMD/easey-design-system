import './WhatIsNewBox.scss';

export interface WhatIsNewBoxProps {
  title: string;
  text: string;
}

export const WhatIsNewBox = ({ title, text }: WhatIsNewBoxProps): JSX.Element => {
  return (
    <div className="whatIsNewBox">
      <div className="box border-right-1px border-left-1px border-bottom">
        <div className="title font-sans-xl text-bold text-white text-center padding-y-2"> {title} </div>
        <div className="padding-2"> {text}</div>
      </div>
    </div>
  );
};
export default WhatIsNewBox;
