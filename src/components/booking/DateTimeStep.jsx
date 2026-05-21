import React, { useState } from 'react';
import { format, addDays, isSunday, isToday, isBefore, startOfDay } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30',
];

const saturdaySlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
];

export default function DateTimeStep({ selectedDate, selectedTime, onDateSelect, onTimeSelect }) {
  const [weekOffset, setWeekOffset] = useState(0);
  const today = new Date();
  const startDate = addDays(today, weekOffset * 7);

  const days = Array.from({ length: 14 }, (_, i) => addDays(startDate, i))
    .filter(d => !isSunday(d) && !isBefore(startOfDay(d), startOfDay(today)));

  const displayDays = days.slice(0, 7);

  const isSaturday = selectedDate && new Date(selectedDate).getDay() === 6;
  const slots = isSaturday ? saturdaySlots : timeSlots;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl tracking-wider">Choose Date & Time</h2>
        <p className="font-body text-sm text-muted-foreground mt-2">Select your preferred appointment slot</p>
      </div>

      {/* Date Selection */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
            disabled={weekOffset === 0}
            className="p-2 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-body text-sm tracking-wider text-muted-foreground">
            {format(displayDays[0], 'MMM yyyy')}
          </span>
          <button
            onClick={() => setWeekOffset(weekOffset + 1)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {displayDays.map((day) => {
            const dateStr = format(day, 'yyyy-MM-dd');
            const isSelected = selectedDate === dateStr;
            const isPast = isBefore(startOfDay(day), startOfDay(today));

            return (
              <button
                key={dateStr}
                onClick={() => !isPast && onDateSelect(dateStr)}
                disabled={isPast}
                className={`flex flex-col items-center py-3 transition-all duration-300 ${
                  isSelected
                    ? 'bg-primary text-primary-foreground'
                    : isPast
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:bg-accent'
                } border border-border/30`}
              >
                <span className="font-body text-[10px] tracking-wider uppercase">{format(day, 'EEE')}</span>
                <span className="font-heading text-lg mt-1">{format(day, 'd')}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div>
          <h3 className="font-heading text-sm tracking-wider mb-4 text-center">Available Times</h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
            {slots.map((time) => (
              <button
                key={time}
                onClick={() => onTimeSelect(time)}
                className={`py-3 font-body text-sm transition-all duration-300 border ${
                  selectedTime === time
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border/30 hover:border-primary/30'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}