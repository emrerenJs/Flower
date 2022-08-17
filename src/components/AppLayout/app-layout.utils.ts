export const getMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem =>
  ({
    key,
    icon,
    children,
    label,
  } as MenuItem)
