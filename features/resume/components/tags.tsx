import React, { PropsWithChildren } from "react";
import { grey } from "@mui/material/colors";

type Props = {
  tags: string[];
};

const Tags: React.FC<PropsWithChildren<Props>> = ({ tags }) => {
  return (
    <p
      style={{
        fontSize: "0.8rem",
        marginTop: 16,
        marginBottom: 16,
        lineHeight: 1.75,
        wordWrap: "normal",
        wordBreak: "keep-all",
      }}
    >
      {tags.map((s, i) => (
        <>
          <span
            key={i}
            style={{
              paddingLeft: 4,
              paddingRight: 4,
              borderRadius: 4,
              marginRight: 4,
              // TODO: this background color is lost when printing...figure out a solution to avoid this.
              backgroundColor: grey[200],
              color: grey[900],
            }}
          >
            {s}
          </span>{" "}
        </>
      ))}
    </p>
  );
};

export default Tags;
