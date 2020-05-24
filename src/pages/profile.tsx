import classnames from "classnames";
import Color from "color";
import React from "react";
import styled from "styled-components";

import CodeBlock from "~/components/CodeBlock";
import Head from "~/components/Head";
import Card from "~/components/Profile/Card";
import CommonCard from "~/components/Profile/CommonCard";
import Social from "~/components/Profile/Social";
import Timestamp from "~/components/Profile/Timestamp";
import { socials as unsortedSocials } from "~/data/accounts";

const socials = unsortedSocials.sort(
  ({ color: a }, { color: b }) =>
    ((Color(a).hue() + 40) % 360) - ((Color(b).hue() + 40) % 360),
);

export type Props = {
  className?: string;
  userAgent?: string;
};
export const Component: React.FC<Props> = ({ className }) => {
  return (
    <main className={classnames(className, "bg-blue-300")}>
      <Head title={"Profile"} url={"https://sno2wman.dev/profile"} />
      <div
        className={classnames("w-full", "min-h-screen", "flex", "items-center")}
      >
        <div
          className={classnames(
            "w-full",
            "max-w-screen-md",
            "py-16",
            "lg:py-32",
            "px-8",
            "lg:px-4",

            "grid",
            "gap-2",
            "md:gap-4",

            "grid-cols-3",
            "md:grid-cols-4",
            "lg:grid-cols-6",

            "mx-auto",
          )}
        >
          <Card
            className={classnames(
              "col-span-3",
              "md:col-span-3",
              "lg:col-span-5",

              "flex",
              "flex-col",
              "justify-center",
            )}
          >
            <CodeBlock className={classnames("w-full", "h-full")}>
              <code>npx @sno2wman/cli</code>
            </CodeBlock>
          </Card>
          <Card
            className={classnames(
              "flex",
              "bg-white",

              "col-span-1",
            )}
          >
            <img
              className={classnames(
                "w-full",
                "m-auto",
                "rounded",
                "shadow",
                "pointer-events-none",
              )}
              src="https://www.gravatar.com/avatar/9a828752a7771c3bf43e3bea39d9cf57?s=512"
              alt="me"
            />
          </Card>
          <CommonCard
            className={classnames(
              "bg-white",
              "p-2",
              "lg:p-4",

              "col-span-3",
              "md:col-span-4",
              "lg:col-span-2",
            )}
          >
            <div
              className={classnames(
                "m-auto",
                "grid",
                "grid-cols-6",
                "sm:grid-cols-8",
                "md:grid-cols-10",
                "lg:grid-cols-4",
                "gap-1",
              )}
            >
              {socials.map((props, index, array) => (
                <Social key={props.key} {...props} t={index / array.length} />
              ))}
            </div>
          </CommonCard>
          <CommonCard
            className={classnames(
              "col-span-3",
              "md:col-span-4",
              "lg:col-span-4",

              "flex",
              "flex-col",
              "justify-center",
            )}
          >
            <p>楽園の素敵なフロントエンドエンジニア</p>
            <p>色々なものに手を出して、一生身にならないだけの人生</p>
          </CommonCard>
          <Card
            className={classnames(
              "col-span-3",
              "md:col-span-4",
              "lg:col-span-6",
            )}
          >
            <Timestamp
              className={classnames(
                "w-full",
                "px-6",
                "lg:px-8",
                "py-6",
                "lg:py-8",
              )}
            />
          </Card>
        </div>
      </div>
    </main>
  );
};
export const StyledComponent: typeof Component = styled(Component)``;

export default StyledComponent;
