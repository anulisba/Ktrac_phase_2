"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Dummy data with multiple bus types per day
const chartData = [
  { date: "May 1", RTC: 120, SWIFT: 100, KURTC: 90, Samudra: 80 },
  { date: "May 2", RTC: 100, SWIFT: 130, KURTC: 130, Samudra: 100 },
  { date: "May 3", RTC: 180, SWIFT: 140, KURTC: 120, Samudra: 110 },
  { date: "May 4", RTC: 200, SWIFT: 160, KURTC: 130, Samudra: 120 },
  { date: "May 5", RTC: 170, SWIFT: 150, KURTC: 100, Samudra: 90 },
  { date: "May 6", RTC: 120, SWIFT: 100, KURTC: 90, Samudra: 125 },
];

type BusType = "RTC" | "SWIFT" | "KURTC" | "Samudra";

// Green variants
const barColors: Record<BusType, string> = {
  RTC: "#04724d", // Dark Green
  SWIFT: "#059669", // Medium Green
  KURTC: "#10b981", // Emerald Green
  Samudra: "#34d399", // Light Green
};

export function BarChartComponent() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Daily Run</CardTitle>
        <CardDescription>past 6 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <BarChart
            data={chartData}
            margin={{ right: 30 }}
            barCategoryGap={0}
            barGap={0}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {(Object.keys(barColors) as BusType[]).map((busType) => (
              <Bar
                key={busType}
                dataKey={busType}
                fill={barColors[busType]}
                radius={[0, 0, 0, 0]}
                barSize={15}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
