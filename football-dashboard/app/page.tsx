"use client";

import { useEffect } from "react";
import { useSheetData } from "@/context/SheetDataContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";

interface SheetDataItem {
  [key: string]: string | number | boolean;
}

export default function Home() {
  const { mainSheetData, loading, error } = useSheetData();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      disable: "mobile",
      offset: 0,
      useClassNames: true,
      disableMutationObserver: false,
    });

    AOS.refresh();
  }, []);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-2 sm:p-6 flex flex-col items-center justify-center mt-10 relative">
      <img
        data-aos="fade-right"
        data-aos-easing="ease-out-back"
        src="/images/messi10.png"
        alt="logo"
        className="hidden 2xl:block w-[220px] h-auto absolute left-[280px] bottom-0"
      />
      <Card className="w-full max-w-3xl h-[500px] overflow-y-auto scrollbar-hide">
        <CardHeader>
          <CardTitle className="font-bold text-[#1F1F41]">Thống kê mùa giải 2025</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="min-w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr className=" text-woodsmoke-600">
                  <th className="p-2 text-center font-medium">Thứ hạng</th>
                  <th className="p-2 text-left font-medium">Tên</th>
                  <th className="p-2 text-center font-medium">Bàn thắng</th>
                  <th className="p-2 text-center font-medium">Kiến tạo</th>
                  <th className="p-2 text-center font-medium">Số trận</th>
                </tr>
              </thead>
              <tbody>
                {mainSheetData
                  .sort(
                    (a: SheetDataItem, b: SheetDataItem) =>
                      Number(b.Goals) - Number(a.Goals)
                  )
                  .map((item: SheetDataItem, index: number) => (
                    <tr
                      key={index}
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-delay={50 * index}
                      className={`${
                        index % 2 === 0 ? "bg-muted" : "bg-background"
                      } ${index < 3 ? "font-semibold" : ""} ${
                        index === 0 ? "text-yellow-500" : ""
                      } ${index === 1 ? "text-red-500" : ""} ${
                        index === 2 ? "text-amber-600" : ""
                      }`}>
                      <td className="p-2 border-t text-center">
                        {index < 3 ? (
                          <span className="inline-block w-6 h-6 rounded-full text-center leading-6">
                            {index + 1}
                          </span>
                        ) : (
                          index + 1
                        )}
                      </td>
                      <td className="p-2 border-t ">{item.Name}</td>
                      <td className="p-2 border-t text-center">{item.Goals}</td>
                      <td className="p-2 border-t text-center">
                        {item.Assists}
                      </td>
                      <td className="p-2 border-t text-center">
                        {item.Appearances}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <img
        data-aos="fade-left"
        data-aos-easing="ease-out-back"
        src="/images/cr7.png"
        alt="logo"
        className="hidden 2xl:block w-[350px] h-auto absolute right-36 bottom-0"
      />
    </div>
  );
}
