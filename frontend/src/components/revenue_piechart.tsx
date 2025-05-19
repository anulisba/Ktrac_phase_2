"use client";

import { Cell, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { bus_type: "RTC", collection: 275, fill: "var(--themeRed)" },
  { bus_type: "SWIFT", collection: 200, fill: "#ffa500" },
  { bus_type: "KURTC", collection: 187, fill: "var(--themeGreen)" },
  { bus_type: "Samudra", collection: 173, fill: "var(--themeBlue)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function RevenuePieChart() {
  return (
    <Card className="flex flex-col h-full gap-0">
      <CardHeader className="items-center pb-0 gap-1">
        <CardTitle>Total Collection</CardTitle>
        <CardDescription>By bus type</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex flex-row gap-8 items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="aspect-square h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="collection"
              nameKey="bus_type"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="space-y-4">
          {/* <h3 className="text-sm font-medium text-muted-foreground">Legend</h3> */}
          <div className="grid grid-cols-1 gap-3">
            {chartData.map((item) => (
              <div
                key={item.bus_type}
                className="flex items-center gap-2 text-sm"
              >
                <span
                  className="w-4 h-4  shadow-sm"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-muted-foreground text-[12px]">
                  {item.bus_type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing collection by bus type of May 2025
        </div>
      </CardFooter>
    </Card>
  );
}
