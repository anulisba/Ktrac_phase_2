import DockyardLineChart from "@/components/dockyard_linechart";
import { SectionCards } from "@/components/section-cards";
import { Bus, ClipboardList, RefreshCcw, Wrench } from "lucide-react";
import React from "react";

const DockYardPage = () => {
  const dummyData = [
    {
      title: "No of Docked",
      value: 52,
      icon: <Wrench className="w-15 h-15 text-white opacity-70" />,
    },
    {
      title: "Daily Run",
      value: 5432,
      icon: <Bus className="w-15 h-15 text-white opacity-70" />,
    },
    {
      title: "Maintanance Scheduled",
      value: 199,
      icon: <ClipboardList className="w-15 h-15 text-white opacity-70" />,
    },
    {
      title: "Repaired",
      value: 1989,
      icon: <RefreshCcw className="w-15 h-15 text-white opacity-70" />,
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards data={dummyData} />
          <div className="px-4 lg:px-6">
            <DockyardLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DockYardPage;
