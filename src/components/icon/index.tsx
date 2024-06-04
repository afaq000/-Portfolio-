import { color } from 'html2canvas/dist/types/css/types/color';

export const DoubleLeftArrow = ({
  width = 10,
  height = 10,
  color = 'black',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.22097 1.02903C5.34301 1.15107 5.34301 1.34893 5.22097 1.47097L1.69194 5L5.22097 8.52903C5.34301 8.65107 5.34301 8.84893 5.22097 8.97097C5.09893 9.09301 4.90107 9.09301 4.77903 8.97097L1.02903 5.22097C0.90699 5.09893 0.90699 4.90107 1.02903 4.77903L4.77903 1.02903C4.90107 0.90699 5.09893 0.90699 5.22097 1.02903Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.72097 1.02903C7.84301 1.15107 7.84301 1.34893 7.72097 1.47097L4.19194 5L7.72097 8.52903C7.84301 8.65107 7.84301 8.84893 7.72097 8.97097C7.59893 9.09301 7.40107 9.09301 7.27903 8.97097L3.52903 5.22097C3.40699 5.09893 3.40699 4.90107 3.52903 4.77903L7.27903 1.02903C7.40107 0.90699 7.59893 0.90699 7.72097 1.02903Z"
      fill={color}
    />
  </svg>
);

export const DoubleRightArrow = ({
  width = 10,
  height = 10,
  color = 'black',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 10"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.27903 1.02903C2.40107 0.90699 2.59893 0.90699 2.72097 1.02903L6.47097 4.77903C6.59301 4.90107 6.59301 5.09893 6.47097 5.22097L2.72097 8.97097C2.59893 9.09301 2.40107 9.09301 2.27903 8.97097C2.15699 8.84893 2.15699 8.65107 2.27903 8.52903L5.80806 5L2.27903 1.47097C2.15699 1.34893 2.15699 1.15107 2.27903 1.02903Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.77903 1.02903C4.90107 0.90699 5.09893 0.90699 5.22097 1.02903L8.97097 4.77903C9.09301 4.90107 9.09301 5.09893 8.97097 5.22097L5.22097 8.97097C5.09893 9.09301 4.90107 9.09301 4.77903 8.97097C4.65699 8.84893 4.65699 8.65107 4.77903 8.52903L8.30806 5L4.77903 1.47097C4.65699 1.34893 4.65699 1.15107 4.77903 1.02903Z"
      fill={color}
    />
  </svg>
);

export const ShareIcon = ({ width = 29, height = 30, color = 'white' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 29 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.5 11.375C23.433 11.375 25 9.75203 25 7.75C25 5.74797 23.433 4.125 21.5 4.125C19.567 4.125 18 5.74797 18 7.75C18 7.90164 18.009 8.0511 18.0264 8.19785L9.92971 12.3908C9.30022 11.7619 8.44373 11.375 7.5 11.375C5.567 11.375 4 12.998 4 15C4 17.002 5.567 18.625 7.5 18.625C8.44373 18.625 9.30022 18.2381 9.92971 17.6092L18.0264 21.8022C18.009 21.9489 18 22.0984 18 22.25C18 24.252 19.567 25.875 21.5 25.875C23.433 25.875 25 24.252 25 22.25C25 20.248 23.433 18.625 21.5 18.625C20.5563 18.625 19.6998 19.0119 19.0703 19.6408L10.9736 15.4478C10.991 15.3011 11 15.1516 11 15C11 14.8484 10.991 14.6989 10.9736 14.5522L19.0703 10.3592C19.6998 10.9881 20.5563 11.375 21.5 11.375Z"
      fill={color}
    />
  </svg>
);
export const DownloadIcon = ({
  width = 20,
  height = 20,
  color = '#0052CC',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.8125 1.25C8.8125 0.559644 9.34416 0 10 0C10.6558 0 11.1875 0.559644 11.1875 1.25V10.1972L15.0383 6.14376L16.7177 7.91153L10.0001 14.9826L3.28262 7.91153L4.962 6.14376L8.8125 10.1969V1.25Z"
      fill={color}
    />
    <path
      d="M0.5 12.5H2.875V17.5H17.125V12.5H19.5V17.5C19.5 18.8807 18.4367 20 17.125 20H2.875C1.56332 20 0.5 18.8807 0.5 17.5V12.5Z"
      fill={color}
    />
  </svg>
);
export const DropDownArrow = ({
  width = 12,
  height = 8,
  color = '#616161',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.0456 7.13991L0.249369 1.6585C-0.316391 1.01192 0.142787 0 1.00195 0H10.5944C11.4536 0 11.9127 1.01192 11.347 1.6585L6.55075 7.13991C6.15234 7.59524 5.44401 7.59524 5.0456 7.13991Z"
        fill={color}
      />
    </svg>
  );
};

export const ChartIcon = ({ width = 18, height = 18, color = '#092C4C' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.9375 0C4.24816 0 4.5 0.25184 4.5 0.5625V1.125H13.5V0.5625C13.5 0.25184 13.7518 0 14.0625 0C14.3732 0 14.625 0.25184 14.625 0.5625V1.125H15.75C16.9926 1.125 18 2.13236 18 3.375V15.75C18 16.9926 16.9926 18 15.75 18H2.25C1.00736 18 0 16.9926 0 15.75V3.375C0 2.13236 1.00736 1.125 2.25 1.125H3.375V0.5625C3.375 0.25184 3.62684 0 3.9375 0ZM2.25 3.9375C2.25 3.62684 2.52473 3.375 2.86364 3.375H15.1364C15.4753 3.375 15.75 3.62684 15.75 3.9375V5.0625C15.75 5.37316 15.4753 5.625 15.1364 5.625H2.86364C2.52473 5.625 2.25 5.37316 2.25 5.0625V3.9375ZM2.88103 13.8735L3.48747 12.0718H5.71989L6.32634 13.8735H7.13493L4.99919 7.875H4.21696L2.08122 13.8735H2.88103ZM4.61687 8.78027L5.51335 11.4521H3.69402L4.59489 8.78027H4.61687ZM11.0812 9.25488H10.321V12.1157C10.321 12.8496 9.85515 13.2671 9.19157 13.2671C8.58513 13.2671 8.08855 12.9902 8.08855 12.1289V9.25488H7.32829V12.3442C7.32829 13.4033 8.00945 13.9482 8.96306 13.9482C9.70134 13.9482 10.1364 13.6318 10.299 13.2671H10.3298V13.8735H11.0812V9.25488ZM12.5138 14.2163C12.5973 14.5898 12.9884 14.9326 13.6213 14.9326C14.3508 14.9326 14.8254 14.5063 14.8254 13.7812V13.1001H14.8034C14.6188 13.5 14.1134 13.8296 13.485 13.8296C12.4084 13.8296 11.6393 13.0737 11.6393 11.6895V11.3071C11.6393 9.94922 12.3996 9.18457 13.485 9.18457C14.1134 9.18457 14.6144 9.51416 14.8298 9.90527H14.8517V9.25488H15.5812V13.79C15.5812 14.9722 14.6628 15.5654 13.6169 15.5654C12.4435 15.5654 11.8459 14.9854 11.7404 14.2163H12.5138ZM14.8254 11.3643C14.8254 10.4282 14.3595 9.83496 13.6301 9.83496C12.8522 9.83496 12.3952 10.3887 12.3952 11.3643V11.6499C12.3952 12.6079 12.8522 13.1836 13.6301 13.1836C14.3859 13.1836 14.8254 12.6035 14.8254 11.6499V11.3643Z"
        fill={color}
      />
    </svg>
  );
};

export const CrossIcon = ({ width = 11, height = 11, color = '#092C4C' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.18406 1.18406C1.46301 0.905117 1.91527 0.905117 2.19422 1.18406L5.97485 4.9647L9.75549 1.18406C10.0344 0.905117 10.4867 0.905117 10.7656 1.18406C11.0446 1.46301 11.0446 1.91527 10.7656 2.19422L6.98501 5.97485L10.7656 9.75549C11.0446 10.0344 11.0446 10.4867 10.7656 10.7656C10.4867 11.0446 10.0344 11.0446 9.75549 10.7656L5.97485 6.98501L2.19422 10.7656C1.91527 11.0446 1.46301 11.0446 1.18406 10.7656C0.905117 10.4867 0.905117 10.0344 1.18406 9.75549L4.9647 5.97485L1.18406 2.19422C0.905117 1.91527 0.905117 1.46301 1.18406 1.18406Z"
        fill={color}
      />
    </svg>
  );
};
export const InLargeIcon = ({ width = 13, height = 13, color = '#092C4C' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.146406 12.7781C0.341668 12.9734 0.65825 12.9734 0.853512 12.7781L4.94971 8.68192L4.94971 11.4497C4.94971 11.7258 5.17356 11.9497 5.44971 11.9497C5.72585 11.9497 5.94971 11.7258 5.94971 11.4497L5.94971 7.47481C5.94971 7.19867 5.72585 6.97481 5.44971 6.97481L1.47487 6.97482C1.19873 6.97482 0.974872 7.19867 0.974872 7.47482C0.974872 7.75096 1.19873 7.97482 1.47487 7.97482L4.2426 7.97481L0.146406 12.071C-0.0488563 12.2663 -0.0488563 12.5829 0.146406 12.7781Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.8284 0.146447C12.6332 -0.0488155 12.3166 -0.0488155 12.1213 0.146447L8.02515 4.24264L8.02515 1.47487C8.02515 1.19872 7.80129 0.974866 7.52515 0.974867C7.249 0.974866 7.02515 1.19872 7.02515 1.47487L7.02515 5.44975C7.02515 5.72589 7.249 5.94975 7.52515 5.94975L11.5 5.94975C11.7761 5.94975 12 5.72589 12 5.44974C12 5.1736 11.7761 4.94974 11.5 4.94974L8.73225 4.94975L12.8284 0.853553C13.0237 0.658291 13.0237 0.341709 12.8284 0.146447Z"
        fill={color}
      />
    </svg>
  );
};

export const TaskIcon = ({ width = 20, height = 20, color = '#444B8C' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.25 12.5H3.75V11.25H16.25V12.5H7.5V15H16.25V16.25H7.5V18.75H6.25V16.25H3.75V15H6.25V12.5Z"
        fill="#444B8C"
      />
      <path
        d="M5 0H11.875V1.25H5C4.30964 1.25 3.75 1.80964 3.75 2.5V17.5C3.75 18.1904 4.30964 18.75 5 18.75H15C15.6904 18.75 16.25 18.1904 16.25 17.5V5.625H17.5V17.5C17.5 18.8807 16.3807 20 15 20H5C3.61929 20 2.5 18.8807 2.5 17.5V2.5C2.5 1.11929 3.61929 0 5 0Z"
        fill="#444B8C"
      />
      <path
        d="M11.875 3.75V0L17.5 5.625H13.75C12.7145 5.625 11.875 4.78553 11.875 3.75Z"
        fill="#444B8C"
      />
      <path
        d="M6.42354 10H5.88354V6.895H4.81354V6.43H7.49354V6.895H6.42354V10ZM8.62553 7.255C8.96553 7.255 9.21886 7.33 9.38553 7.48C9.55219 7.62667 9.63553 7.85833 9.63553 8.175V10H9.26053L9.15553 9.625H9.13553C9.05886 9.72167 8.97886 9.80167 8.89553 9.865C8.81553 9.92833 8.72219 9.975 8.61553 10.005C8.51219 10.035 8.38553 10.05 8.23553 10.05C8.07553 10.05 7.93053 10.0217 7.80053 9.965C7.67386 9.905 7.57386 9.815 7.50053 9.695C7.42719 9.57167 7.39053 9.41833 7.39053 9.235C7.39053 8.96167 7.49386 8.75333 7.70053 8.61C7.91053 8.46667 8.22886 8.38833 8.65553 8.375L9.11553 8.36V8.21C9.11553 8.01 9.07053 7.87 8.98053 7.79C8.89053 7.71 8.76386 7.67 8.60053 7.67C8.46053 7.67 8.32719 7.69 8.20053 7.73C8.07386 7.77 7.95386 7.81833 7.84053 7.875L7.67053 7.49C7.79719 7.42333 7.94219 7.36833 8.10553 7.325C8.27219 7.27833 8.44553 7.255 8.62553 7.255ZM8.75053 8.715C8.44386 8.72833 8.23053 8.78 8.11053 8.87C7.99386 8.95667 7.93553 9.08 7.93553 9.24C7.93553 9.38 7.97719 9.48167 8.06053 9.545C8.14719 9.60833 8.25553 9.64 8.38553 9.64C8.59553 9.64 8.76886 9.58167 8.90553 9.465C9.04219 9.34833 9.11053 9.17333 9.11053 8.94V8.705L8.75053 8.715ZM12.2416 9.24C12.2416 9.41667 12.1983 9.565 12.1116 9.685C12.025 9.805 11.9 9.89667 11.7366 9.96C11.5733 10.02 11.3766 10.05 11.1466 10.05C10.9566 10.05 10.7933 10.035 10.6566 10.005C10.5233 9.97833 10.4 9.93833 10.2866 9.885V9.42C10.4066 9.47667 10.545 9.52833 10.7016 9.575C10.8583 9.61833 11.0116 9.64 11.1616 9.64C11.3616 9.64 11.505 9.60833 11.5916 9.545C11.6816 9.48167 11.7266 9.39667 11.7266 9.29C11.7266 9.23 11.71 9.17667 11.6766 9.13C11.6433 9.08 11.58 9.03 11.4866 8.98C11.3966 8.92667 11.2633 8.86667 11.0866 8.8C10.9166 8.73 10.7716 8.66167 10.6516 8.595C10.5316 8.525 10.44 8.44333 10.3766 8.35C10.3133 8.25333 10.2816 8.13 10.2816 7.98C10.2816 7.74667 10.375 7.56833 10.5616 7.445C10.7516 7.31833 11.0016 7.255 11.3116 7.255C11.475 7.255 11.6283 7.27167 11.7716 7.305C11.9183 7.335 12.06 7.38167 12.1966 7.445L12.0216 7.85C11.945 7.81333 11.865 7.78333 11.7816 7.76C11.7016 7.73333 11.62 7.71167 11.5366 7.695C11.4566 7.67833 11.3733 7.67 11.2866 7.67C11.1266 7.67 11.005 7.695 10.9216 7.745C10.8383 7.795 10.7966 7.865 10.7966 7.955C10.7966 8.01833 10.815 8.07333 10.8516 8.12C10.8916 8.16667 10.96 8.21333 11.0566 8.26C11.1533 8.30667 11.285 8.36333 11.4516 8.43C11.6183 8.49333 11.76 8.55833 11.8766 8.625C11.9966 8.69167 12.0866 8.77333 12.1466 8.87C12.21 8.96667 12.2416 9.09 12.2416 9.24ZM13.3985 8.1C13.3985 8.17 13.3952 8.25 13.3885 8.34C13.3852 8.43 13.3802 8.51333 13.3735 8.59H13.3885C13.4152 8.55667 13.4468 8.51667 13.4835 8.47C13.5235 8.42 13.5635 8.37 13.6035 8.32C13.6435 8.27 13.6802 8.22667 13.7135 8.19L14.5385 7.305H15.1535L14.0685 8.46L15.2235 10H14.5985L13.7085 8.795L13.3985 9.055V10H12.8735V6.2H13.3985V8.1Z"
        fill={color}
      />
    </svg>
  );
};

export const BoxIcon = ({ width = 21, height = 18, color = '#F36F56' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.96875 0C0.88144 0 0 1.00736 0 2.25V5.25H7.875C8.23744 5.25 8.53125 5.58579 8.53125 6C8.53125 6.37998 8.63639 6.96665 8.93257 7.43677C9.20465 7.86865 9.66389 8.25 10.5 8.25C11.3361 8.25 11.7953 7.86865 12.0674 7.43677C12.3636 6.96665 12.4688 6.37998 12.4688 6C12.4688 5.58579 12.7626 5.25 13.125 5.25H21V2.25C21 1.00736 20.1186 0 19.0312 0H1.96875Z"
        fill="#F36F56"
      />
      <path
        d="M21 6.75H13.7142C13.6279 7.25008 13.4499 7.80949 13.1326 8.31323C12.6172 9.13135 11.7639 9.75 10.5 9.75C9.23611 9.75 8.38285 9.13135 7.86743 8.31323C7.55008 7.80949 7.37206 7.25008 7.28578 6.75H0V15.75C0 16.9926 0.88144 18 1.96875 18H19.0312C20.1186 18 21 16.9926 21 15.75V6.75Z"
        fill={color}
      />
    </svg>
  );
};