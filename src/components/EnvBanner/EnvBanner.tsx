export interface EnvBannerProps {
  label: string;
}

export const EnvBanner = ({ label }: EnvBannerProps): JSX.Element => {
  return (
    <div className="bg-secondary-darker padding-y-1 text-center text-gold">
      EPA {label} environment: The content on this page is not production data and this site is being used for{' '}
      <b>development</b> and/or <b>testing</b> purposes only.
    </div>
  );
};

export default EnvBanner;
