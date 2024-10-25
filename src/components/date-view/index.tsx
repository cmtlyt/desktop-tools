import { memo } from 'react';

interface DateViewProps {
  date?: string | number;
  children?: string | number;
  format?: string;
  className?: string;
}

function formatDateStr(date: string | number, format: string) {
  const dateObj = new Date(date);

  const dateInfo = {
    yyyy: dateObj.getFullYear(),
    yy: dateObj.getFullYear() % 100,
    MM: dateObj.getMonth() + 1,
    DD: dateObj.getDate(),
    hh: dateObj.getHours(),
    mm: dateObj.getMinutes(),
    ss: dateObj.getSeconds(),
    SS: dateObj.getMilliseconds(),
  };

  return format.replace(/[YyMDhmsS]+/g, (key) => {
    return dateInfo[key as keyof typeof dateInfo]?.toString().padStart(2, '0') || key;
  });
}

export const DateView = memo((props: DateViewProps) => {
  const { date, children, format = 'yyyy-MM-DD', className } = props;

  const inputDate = date || children;

  if (!inputDate) return null;

  const dateStr = formatDateStr(inputDate, format);

  return <span className={className}>{dateStr}</span>;
});
