import React, { PropsWithChildren } from "react";
import { grey } from "@mui/material/colors";

type Props = {
  title: string;
  url?: string;
  subtitle?: string;
  timePeriod: string;
  vertical?: boolean;
};

const Item: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  url,
  subtitle,
  timePeriod,
  vertical,
}) => {
  return (
    <div style={{ marginTop: 16, marginBottom: 16 }}>
      <div
        style={{
          color: grey[900],
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          alignItems: vertical ? "initial" : "center",
        }}
      >
        <div style={{ fontWeight: "bold" }}>
          {url ? <a href={url}>{title}</a> : title}
        </div>
        <div
          style={{
            color: grey[800],
            flex: 1,
            textAlign: vertical ? "left" : "right",
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
