import { IconProps } from "@/typings/icon.types";
import { theme } from "@/settings/theme.settings";

const Star = (props: IconProps) => {
  return (
    <>
      {theme === "green" ? (
        <svg
          width={props.width}
          height={props.height}
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0L8.52786 5.35366L13.9282 4L10.0557 8L13.9282 12L8.52786 10.6463L7 16L5.47214 10.6463L0.0717969 12L3.94427 8L0.0717969 4L5.47214 5.35366L7 0Z"
            fill="url(#paint0_linear_244_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_244_4"
              x1="-1"
              y1="0"
              x2="15.6563"
              y2="0.779846"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3DAF7F" />
              <stop offset="1" stop-color="#E3D1D5" />
            </linearGradient>
          </defs>
        </svg>
      ) : theme === "blue" ? (
        <svg
          width={props.width}
          height={props.height}
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0L8.52786 5.35366L13.9282 4L10.0557 8L13.9282 12L8.52786 10.6463L7 16L5.47214 10.6463L0.0717969 12L3.94427 8L0.0717969 4L5.47214 5.35366L7 0Z"
            fill="url(#paint0_linear_244_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_244_4"
              x1="-1"
              y1="0"
              x2="15.6563"
              y2="0.779846"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3492C7" />
              <stop offset="1" stop-color="#E3D1D5" />
            </linearGradient>
          </defs>
        </svg>
      ) : theme === "red" ? (
        <svg
          width={props.width}
          height={props.height}
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0L8.52786 5.35366L13.9282 4L10.0557 8L13.9282 12L8.52786 10.6463L7 16L5.47214 10.6463L0.0717969 12L3.94427 8L0.0717969 4L5.47214 5.35366L7 0Z"
            fill="url(#paint0_linear_19_844)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_19_844"
              x1="-1"
              y1="0"
              x2="15.6563"
              y2="0.779846"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FD5A77" />
              <stop offset="1" stop-color="#E3D1D5" />
            </linearGradient>
          </defs>
        </svg>
      ) : null}
    </>
  );
};

export default Star;
