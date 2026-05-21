import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { base44 } from '@/api/Client';
import { useMutation } from '@tanstack/react-query';
import { Check } from 'lucide-react';
import GoldDivider from '../components/GoldDivider';
import ServiceStep from '../components/booking/ServiceStep';
import DateTimeStep from '../components/booking/DateTimeStep';
import DetailsStep from '../components/booking/DetailsStep';

const steps = ['Service', 'Date & Time', 'Details'];

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [details, setDetails] = useState({ payment_method: 'in_person' });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const createAppointment = useMutation({
    mutationFn: (data) => base44.entities.Appointment.create(data),
    onSuccess: () => setIsConfirmed(true),
  });

  const canProceed = () => {
    if (currentStep === 0) return !!selectedService;
    if (currentStep === 1) return !!selectedDate && !!selectedTime;
    if (currentStep === 2) return !!details.client_name && !!details.client_email;
    return false;
  };

  const handleSubmit = () => {
    createAppointment.mutate({
      service_name: selectedService.name,
      price: selectedService.price,
      date: selectedDate,
      time: selectedTime,
      client_name: details.client_name,
      client_email: details.client_email,
      client_phone: details.client_phone || '',
      payment_method: details.payment_method,
      notes: details.notes || '',
      status: 'confirmed',
      payment_status: 'pending',
    });
  };

  if (isConfirmed) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md px-6"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-heading text-3xl tracking-wider mb-4">Appointment Confirmed</h2>
          <GoldDivider className="my-6" />
          <div className="space-y-2 font-body text-sm text-muted-foreground">
            <p><span className="text-foreground font-medium">{selectedService.name}</span></p>
            <p>{format(new Date(selectedDate), 'EEEE, d MMMM yyyy')} at {selectedTime}</p>
            <p className="text-primary font-heading text-lg mt-4">£{selectedService.price}</p>
          </div>
          <p className="font-accent text-base text-muted-foreground italic mt-8">
            A confirmation has been noted. We look forward to welcoming you.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-card text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">The Appointment Suite</p>
          <h1 className="font-heading text-5xl md:text-6xl tracking-wider">Book Your Visit</h1>
          <GoldDivider className="mt-6" />
        </div>
      </section>

      {/* Steps Indicator */}
      <section className="py-8 bg-background border-b border-border/50">
        <div className="max-w-2xl mx-auto px-6 flex justify-center gap-8">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-body transition-all duration-300 ${
                i <= currentStep ? 'bg-primary text-primary-foreground' : 'border border-border text-muted-foreground'
              }`}>
                {i < currentStep ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <span className={`font-body text-xs tracking-wider hidden sm:block ${
                i <= currentStep ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Step Content */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <ServiceStep selected={selectedService} onSelect={setSelectedService} />
              )}
              {currentStep === 1 && (
                <DateTimeStep
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onDateSelect={setSelectedDate}
                  onTimeSelect={setSelectedTime}
                />
              )}
              {currentStep === 2 && (
                <DetailsStep details={details} onChange={setDetails} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-12 pt-8 border-t border-border/30">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className={`font-body text-xs tracking-[0.2em] uppercase px-6 py-3 border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                currentStep === 0 ? 'invisible' : ''
              }`}
            >
              Back
            </button>

            {currentStep < 2 ? (
              <button
                onClick={() => canProceed() && setCurrentStep(currentStep + 1)}
                disabled={!canProceed()}
                className="font-body text-xs tracking-[0.2em] uppercase px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || createAppointment.isPending}
                className="font-body text-xs tracking-[0.2em] uppercase px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {createAppointment.isPending ? 'Confirming...' : 'Confirm Booking'}
              </button>
            )}
          </div>

          {/* Summary */}
          {selectedService && (
            <div className="mt-8 p-6 bg-card border border-border/50">
              <h3 className="font-heading text-sm tracking-wider mb-3">Booking Summary</h3>
              <div className="space-y-2 font-body text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service</span>
                  <span>{selectedService.name}</span>
                </div>
                {selectedDate && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span>{format(new Date(selectedDate), 'd MMM yyyy')}</span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span>{selectedTime}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-border/30 mt-2">
                  <span className="font-heading tracking-wider">Total</span>
                  <span className="font-heading tracking-wider text-primary">£{selectedService.price}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}