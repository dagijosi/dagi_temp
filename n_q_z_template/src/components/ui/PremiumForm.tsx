'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { premiumToast } from './feedback/premiumToastUtil';

// Define validation schema
const formSchema = z.object({
  username: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const PremiumForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    premiumToast.success("Form submitted successfully", { description: "Your data has been sent." });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-theme-surface/95 backdrop-blur-xl rounded-2xl border border-theme-border shadow-lg">
      <h3 className="font-bold text-lg text-theme-text mb-4">Contact Us</h3>
      
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Name</label>
        <input 
          {...register('username')} 
          className="w-full h-11 px-4 rounded-xl border border-theme-border bg-theme-background focus:ring-2 focus:ring-theme-icon outline-none transition-all"
        />
        {errors.username && <p className="text-red-500 text-[10px] mt-1">{errors.username.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Email</label>
        <input 
          {...register('email')} 
          className="w-full h-11 px-4 rounded-xl border border-theme-border bg-theme-background focus:ring-2 focus:ring-theme-icon outline-none transition-all"
        />
        {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Message</label>
        <textarea 
          {...register('message')} 
          className="w-full h-24 p-4 rounded-xl border border-theme-border bg-theme-background focus:ring-2 focus:ring-theme-icon outline-none transition-all"
        />
        {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message.message}</p>}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full h-11 bg-theme-icon text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
};

export default PremiumForm;
