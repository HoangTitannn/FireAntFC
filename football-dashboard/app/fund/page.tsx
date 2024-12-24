"use client";
import { useSheetData } from "@/context/SheetDataContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle, XCircle, MinusCircle } from "lucide-react";

interface SheetDataItem {
  [key: string]: string | number | boolean;
}

export default function FundPage() {
  const { sheet2Data, loading, error } = useSheetData();

  const table1 = sheet2Data.map(
    ({
      Name,
      July,
      August,
      September,
      October,
      November,
      December,
    }: SheetDataItem) => ({
      Name,
      July,
      August,
      September,
      October,
      November,
      December,
    })
  );

  const table2 = sheet2Data.map(
    ({ Date, Description, Total }: SheetDataItem) => ({
      Date,
      Description,
      Total,
    })
  );

  const getPaymentStatus = (value: string | number | boolean) => {
    if (value === "1" || value === 1)
      return {
        paid: true,
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      };
    if (value === "2" || value === 2)
      return {
        paid: false,
        icon: <XCircle className="w-5 h-5 text-gray-500" />,
      };
    return {
      paid: false,
      icon: <MinusCircle className="w-5 h-5 text-red-500" />,
    };
  };

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
    <div className="flex flex-col gap-10 justify-center items-center mt-10 p-2 sm:p-6">
      <Card className="overflow-hidden w-[1000px] h-[600px]">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="text-2xl font-bold text-center">
            Quỹ đội
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold">Tên</TableHead>
                  <TableHead className="font-bold text-center">
                    Tháng 7
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    Tháng 8
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    Tháng 9
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    Tháng 10
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    Tháng 11
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    Tháng 12
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table1.map((row: SheetDataItem, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.Name}</TableCell>
                    {[
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month) => {
                      const status = getPaymentStatus(row[month]);
                      return (
                        <TableCell key={month} className="text-center">
                          <div className="flex items-center justify-center">
                            {status.icon}
                          </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Columns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ngày</TableHead>
                  <TableHead>Nội dung chi</TableHead>
                  <TableHead>Số tiền</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table2.map((row: SheetDataItem, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{row.Date}</TableCell>
                    <TableCell>{row.Description}</TableCell>
                    <TableCell>{row.Total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
