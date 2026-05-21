import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function DetailsStep({ details, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...details, [field]: value });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl tracking-wider">Your Details</h2>
        <p className="font-body text-sm text-muted-foreground mt-2">Complete your booking information</p>
      </div>

      <div className="space-y-5 max-w-md mx-auto">
        <div>
          <Label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Full Name</Label>
          <Input
            value={details.client_name || ''}
            onChange={(e) => handleChange('client_name', e.target.value)}
            className="mt-2 border-border/50 focus:border-primary font-body"
            placeholder="Your full name"
          />
        </div>

        <div>
          <Label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Email Address</Label>
          <Input
            type="email"
            value={details.client_email || ''}
            onChange={(e) => handleChange('client_email', e.target.value)}
            className="mt-2 border-border/50 focus:border-primary font-body"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <Label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Phone Number</Label>
          <Input
            type="tel"
            value={details.client_phone || ''}
            onChange={(e) => handleChange('client_phone', e.target.value)}
            className="mt-2 border-border/50 focus:border-primary font-body"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <Label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Payment Preference</Label>
          <RadioGroup
            value={details.payment_method || 'in_person'}
            onValueChange={(val) => handleChange('payment_method', val)}
            className="mt-3 space-y-3"
          >
            <div className="flex items-center space-x-3 border border-border/50 p-4 cursor-pointer hover:border-primary/30 transition-colors">
              <RadioGroupItem value="in_person" id="in_person" />
              <Label htmlFor="in_person" className="font-body text-sm cursor-pointer flex-1">
                Pay at Salon
                <span className="block text-xs text-muted-foreground mt-0.5">Pay when you arrive for your appointment</span>
              </Label>
            </div>
            <div className="flex items-center space-x-3 border border-border/50 p-4 cursor-pointer hover:border-primary/30 transition-colors">
              <RadioGroupItem value="online" id="online" />
              <Label htmlFor="online" className="font-body text-sm cursor-pointer flex-1">
                Pay Online
                <span className="block text-xs text-muted-foreground mt-0.5">Secure payment to confirm your booking</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Additional Notes (Optional)</Label>
          <Textarea
            value={details.notes || ''}
            onChange={(e) => handleChange('notes', e.target.value)}
            className="mt-2 border-border/50 focus:border-primary font-body min-h-[80px]"
            placeholder="Any special requests or information we should know..."
          />
        </div>
      </div>
    </div>
  );
}