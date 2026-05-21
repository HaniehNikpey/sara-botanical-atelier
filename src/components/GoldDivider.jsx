import React from 'react';

export default function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-[0.5px] w-12 bg-primary/40" />
      <div className="w-1.5 h-1.5 rotate-45 border border-primary/40" />
      <div className="h-[0.5px] w-12 bg-primary/40" />
    </div>
  );
}