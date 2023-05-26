import { IconProps } from "@/typings/icon.types";
const Arrow = (props: IconProps) => {
  return (
    <div className={props.className}>
      <svg
        width={props.height}
        height={props.width}
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.136 1.13603C15.136 0.583746 14.6883 0.136031 14.136 0.13603L5.136 0.136031C4.58372 0.136031 4.136 0.583746 4.136 1.13603C4.136 1.68832 4.58372 2.13603 5.136 2.13603L13.136 2.13603L13.136 10.136C13.136 10.6883 13.5837 11.136 14.136 11.136C14.6883 11.136 15.136 10.6883 15.136 10.136L15.136 1.13603ZM2.11519 14.5711L14.8431 1.84314L13.4289 0.428924L0.700974 13.1568L2.11519 14.5711Z"
          fill="url(#paint0_linear_19_860)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_19_860"
            x1="7.45692"
            y1="7.18487"
            x2="8.84807"
            y2="8.57602"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EBEBEB" />
            <stop offset="1" stopColor="#B6B6B6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Arrow;
