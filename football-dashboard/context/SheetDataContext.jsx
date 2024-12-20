'use client';
import { createContext, useState, useContext, useCallback } from 'react';

const SheetDataContext = createContext();

export function SheetDataProvider({ children }) {
  const [mainSheetData, setMainSheetData] = useState([]);
  const [sheet2Data, setSheet2Data] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllSheetData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [mainResponse, sheet2Response] = await Promise.all([
        fetch('https://sheetdb.io/api/v1/9xka9p944b096'),
        fetch('https://sheetdb.io/api/v1/9xka9p944b096?sheet=sheet2')
      ]);

      if (!mainResponse.ok || !sheet2Response.ok) {
        throw new Error('Failed to fetch data');
      }

      const [mainData, sheet2Data] = await Promise.all([
        mainResponse.json(),
        sheet2Response.json()
      ]);

      setMainSheetData(mainData);
      setSheet2Data(sheet2Data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    mainSheetData,
    sheet2Data,
    loading,
    error,
    fetchAllSheetData
  };

  return (
    <SheetDataContext.Provider value={value}>
      {children}
    </SheetDataContext.Provider>
  );
}

export const useSheetData = () => {
  const context = useContext(SheetDataContext);
  if (context === undefined) {
    throw new Error('useSheetData must be used within a SheetDataProvider');
  }
  return context;
}; 