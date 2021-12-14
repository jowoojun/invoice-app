import { useState, useEffect } from 'react'

const useTimeFormat = (data: string) => {
  const [newFormatTime, setNewFormatTime] = useState("");

  useEffect(() => {
    let monthNames =[
      "Jan","Feb","Mar","Apr",
      "May","Jun","Jul","Aug",
      "Sep", "Oct","Nov","Dec"
    ];
    let time = new Date(data);
    let day = time.getDate().toString().padStart(2, '0');
    
    let monthIndex = time.getMonth();
    let monthName = monthNames[monthIndex];
    
    let year = time.getFullYear();
    
    setNewFormatTime(`${day} ${monthName} ${year}`);
  }, []);

  return newFormatTime;

}

export default useTimeFormat;