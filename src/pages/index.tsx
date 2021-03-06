import classnames from "classnames";
import React from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";

import Head from "~/components/Head";

export type Props = {
  className?: string;
  userAgent?: string;
};
export const Component: React.FC<Props> = ({ className }) => {
  const props = useSpring({
    config: config.stiff,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <main className={classnames(className, "bg-gray-700")}>
      <Head title={"sno2wman.dev"} url={"https://sno2wman.dev"} />
      <div
        className={classnames(
          "w-full",
          "h-screen",
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
        )}
      >
        <animated.h1
          style={props}
          className={classnames(
            "text-xl",
            "text-white",
            "font-display",
            "tracking-widest",
          )}
        >
          SnO2WMaN
        </animated.h1>
      </div>
    </main>
  );
};
export const StyledComponent: typeof Component = styled(Component)``;

export default StyledComponent;
