import React, { useState } from 'react';
import { base44 } from '@/api/Client';
import { useMutation } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Check } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const sendMessage = useMutation({
    mutationFn: (data) => base44.entities.ContactMessage.create(data),
    onSuccess: () => setSent(true),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage.mutate(form);
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-heading text-xl tracking-wider mb-2">Message Sent</h3>
        <p className="font-body text-sm text-muted-foreground">We'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Your Name</Label>
        <Input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-2 border-border/50 focus:border-primary font-body"
          placeholder="Full name"
        />
      </div>
      <div>
        <Label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Email Address</Label>
        <Input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-2 border-border/50 focus:border-primary font-body"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <Label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Phone (Optional)</Label>
        <Input
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="mt-2 border-border/50 focus:border-primary font-body"
          placeholder="Your phone number"
        />
      </div>
      <div>
        <Label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Your Message</Label>
        <Textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 border-border/50 focus:border-primary font-body min-h-[120px]"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        disabled={sendMessage.isPending}
        className="w-full font-body text-xs tracking-[0.2em] uppercase py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
      >
        {sendMessage.isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}