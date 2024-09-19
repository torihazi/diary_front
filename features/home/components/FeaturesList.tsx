import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const FeaturesList = () => {
  const feaures = [
    {
      title: "最新トピックス1",
      memo: "AI、ブロックチェーン、クラウドコンピューティングなど、最新のテクノロジートレンドを常に追跡し、解説します。",
    },
    {
      title: "最新トピックス2",
      memo: "AI、ブロックチェーン、クラウドコンピューティングなど、最新のテクノロジートレンドを常に追跡し、解説します。",
    },
    {
      title: "最新トピックス3",
      memo: "AI、ブロックチェーン、クラウドコンピューティングなど、最新のテクノロジートレンドを常に追跡し、解説します。",
    },
  ];
  return (
    <Box sx={{ mx: 4, mb: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
        <Typography variant="h4">特徴</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        {feaures.map((feature) => (
          <Box key={feature.title}>
            <Card>
              <CardContent sx={{ height: { xs: "auto", sm: "250px" } }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography component="p">{feature.memo}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturesList;
