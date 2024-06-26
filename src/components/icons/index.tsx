import React from "react";

// icon library
import * as Icons from "./lib";

interface Match {
  [key: string]: JSX.Element;
}

type IconType = keyof Match;

interface Props {
  icon: IconType;
  width?: number;
  height?: number;
  fill?: string;
}

const Icon = React.memo(({ icon, ...props }: Props) => {
  const match: Match = {
    edit: <Icons.Edit {...props} />,
    delete: <Icons.Delete {...props} />,
  };

  if (!match[icon]) return null;
  return <span className="icon">{match[icon]}</span>;
});

export default Icon;
