import { IconColorsProps } from './IconColorPropsType';

export const Chevron = ({ color = '#0D5ADC', className }: IconColorsProps) => {
  return (
    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      className={className}
      <path
        d="M24.375 10.125L15 18.5625L5.625 10.125"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
