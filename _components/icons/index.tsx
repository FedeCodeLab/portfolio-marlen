import { Cancel, Instagram, Twitter } from "./Icons";

const iconMap = {
  cancel: Cancel,
  twitter: Twitter,
  instagram: Instagram,
};

interface IconProps {
  type: keyof typeof iconMap;
}

export const Icon = ({ type }: IconProps) => {
  const SvgIcon = iconMap[type];

  return <SvgIcon />;
};
