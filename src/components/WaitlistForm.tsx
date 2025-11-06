import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';

interface WaitlistFormProps {
  language: 'de' | 'en';
}

const content = {
  de: {
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    phone: 'Telefonnummer',
    company: 'Unternehmen',
    invoiceCount: 'Anzahl Abrechnungen',
    submit: 'Jetzt beitreten',
    submitting: 'Wird übermittelt...',
    success: 'Erfolgreich zur Warteliste hinzugefügt!',
  },
  en: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone Number',
    company: 'Company',
    invoiceCount: 'Count of Commission Statements',
    submit: 'Join now',
    submitting: 'Joining...',
    success: 'Successfully joined the waitlist!',
  },
};

export function WaitlistForm({ language }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    invoiceCount: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success(content[language].success);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', invoiceCount: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          type="text"
          name="firstName"
          placeholder={content[language].firstName}
          value={formData.firstName}
          onChange={handleChange}
          required
          className="border-neutral-200 focus:border-[#5B4FFF] focus:ring-[#5B4FFF]/20 transition-all"
        />
        <Input
          type="text"
          name="lastName"
          placeholder={content[language].lastName}
          value={formData.lastName}
          onChange={handleChange}
          required
          className="border-neutral-200 focus:border-[#5B4FFF] focus:ring-[#5B4FFF]/20 transition-all"
        />
      </div>
      <Input
        type="text"
        name="company"
        placeholder={content[language].company}
        value={formData.company}
        onChange={handleChange}
        required
        className="border-neutral-200 focus:border-[#5B4FFF] focus:ring-[#5B4FFF]/20 transition-all"
      />
      <Input
        type="email"
        name="email"
        placeholder={content[language].email}
        value={formData.email}
        onChange={handleChange}
        required
        className="border-neutral-200 focus:border-[#5B4FFF] focus:ring-[#5B4FFF]/20 transition-all"
      />
      <Input
        type="tel"
        name="phone"
        placeholder={content[language].phone}
        value={formData.phone}
        onChange={handleChange}
        required
        className="border-neutral-200 focus:border-[#5B4FFF] focus:ring-[#5B4FFF]/20 transition-all"
      />
      <Input
        type="text"
        name="invoiceCount"
        placeholder={content[language].invoiceCount}
        value={formData.invoiceCount}
        onChange={handleChange}
        required
        className="border-neutral-200 focus:border-[#5B4FFF] focus:ring-[#5B4FFF]/20 transition-all"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-[#5B4FFF] hover:bg-[#4A3FCC] text-white transition-all shadow-lg shadow-[#5B4FFF]/20 hover:shadow-xl hover:shadow-[#5B4FFF]/30"
      >
        {isSubmitting ? content[language].submitting : content[language].submit}
      </Button>
    </form>
  );
}
