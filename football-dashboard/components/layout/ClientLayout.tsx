"use client";
import AosInit from "@/components/layout/AosInit";
import Header from "@/components/layout/Header";
import { useSheetData } from "@/context/SheetDataContext";
import { useEffect } from "react";
export default function ClientLayout({ children }: { children: React.ReactNode }) {
 const { fetchAllSheetData } = useSheetData();
  useEffect(() => {
   fetchAllSheetData();
 }, [fetchAllSheetData]);
  return (
   <>
     <AosInit />
     <Header />
     {children}
   </>
 );
}