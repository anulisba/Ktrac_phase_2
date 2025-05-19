import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

interface Props {
  data?: {
    title: string;
    value: number;
    icon: ReactNode;
  }[];
}

export function SectionCards({ data }: Props) {
  if (!data) return;
  return (
    // <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-b *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card bg-themeYellow border-gray relative shadow-md h-[125px]">
        <CardHeader className="flex flex-col gap-0">
          <CardTitle className="text-[14px] font-semibold tabular-nums text-white drop-shadow-md">
            {data[0].title}
          </CardTitle>

          <CardDescription className="text-[38px] text-center font-bold tabular-nums text-white drop-shadow-md">
            {data[0].value}
          </CardDescription>
        </CardHeader>
        <div className="absolute bottom-2 right-2">{data[0].icon}</div>
      </Card>
      <Card className="@container/card bg-themeGreen border-gray relative shadow-md h-[125px]">
        <CardHeader className="flex flex-col gap-0">
          <CardTitle className="text-[14px] font-semibold tabular-nums text-white">
            {data[1].title}
          </CardTitle>
          <CardDescription className="text-[38px] text-center font-bold tabular-nums text-white drop-shadow-md">
            {data[1].value}
          </CardDescription>
        </CardHeader>
        <div className="absolute bottom-2 right-2">{data[1].icon}</div>
      </Card>
      <Card className="@container/card bg-[#C1292E] border-gray relative shadow-md h-[125px]">
        <CardHeader className="flex flex-col gap-0">
          <CardTitle className="text-[14px] font-semibold tabular-nums text-white">
            {data[2].title}
          </CardTitle>
          <CardDescription className="text-[38px] text-center font-bold tabular-nums text-white drop-shadow-md">
            {data[2].value}
          </CardDescription>
        </CardHeader>
        <div className="absolute bottom-2 right-2">{data[2].icon}</div>
      </Card>
      <Card className="@container/card bg-[#610345] border-gray relative shadow-md h-[125px]">
        <CardHeader className="flex flex-col gap-0">
          <CardTitle className="text-[14px] font-semibold tabular-nums text-white">
            {data[3].title}
          </CardTitle>
          <CardDescription className="text-[38px] text-center font-bold tabular-nums text-white drop-shadow-md">
            {data[3].value}
          </CardDescription>
        </CardHeader>
        <div className="absolute bottom-2 right-2">{data[3].icon}</div>
      </Card>
    </div>
  );
}
