import React, { PropsWithChildren } from "react";
import { grey } from "@mui/material/colors";

type Props = {
  title: string;
  subtitle?: string;
  timePeriod: string;
};

const Item: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  subtitle,
  timePeriod,
}) => {
  return (
    <div style={{ marginTop: 16, marginBottom: 16 }}>
      <div style={{ color: grey[900], display: "flex", flexDirection: "row" }}>
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div
          style={{
            color: grey[800],
            flex: 1,
            textAlign: "right",
            fontSize: "0.9rem",
          }}
        >
          {timePeriod}
        </div>
      </div>
      <div
        style={{
          color: grey[800],
          display: "flex",
          flexDirection: "row",
          fontSize: "0.9rem",
        }}
      >
        {subtitle ?? " "}
      </div>
      <div
        style={{
          color: grey[700],
          fontSize: "0.9rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Item;
