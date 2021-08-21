export interface AppVersionProps {
  version: string;
  publishDate: string;  
}

export const AppVersion = ({
  version, publishDate
}: AppVersionProps): JSX.Element => {
  return (
    <div className="display-flex flex-column bg-base-lightest">
      <div className="flex-align-self-end">
        <p className="margin-0 padding-y-1 padding-right-2">
          {`${version} published ${publishDate}`}
        </p>
      </div>
    </div>
  );
};

export default AppVersion;
