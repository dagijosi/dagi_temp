import { Button } from '../ui';
import { FaPaperPlane } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors, isSubmitting } 
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Contact Data:", data);
        toast.success("Message sent successfully!");
        reset();
    };

    return (
        <div id="contact" className="py-24 relative z-10 bg-theme-surface/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-theme-icon tracking-wide uppercase">Contact Us</h2>
                        <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-theme-text sm:text-4xl">
                            Let’s talk about your project
                        </h3>
                        <p className="mt-6 text-lg leading-8 text-theme-text/70">
                            Have questions or need a custom solution? Our team is ready to help you build something amazing.
                        </p>
                        
                        <dl className="mt-8 space-y-4 text-theme-text/80">
                            <div className="flex gap-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    🏢
                                </dt>
                                <dd>123 Innovation Dr, Tech City, TC 90210</dd>
                            </div>
                            <div className="flex gap-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    ✉️
                                </dt>
                                <dd>support@dagi-template.com</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="bg-theme-surface p-8 rounded-3xl border border-theme-border shadow-lg">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-theme-text">
                                        First name <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="first-name" 
                                        {...register("firstName")}
                                        className={`mt-2.5 block w-full rounded-xl border px-3.5 py-2 text-theme-text focus:ring-1 outline-none bg-theme-background ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-theme-border focus:ring-theme-icon'}`} 
                                        placeholder="John" 
                                    />
                                    {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-theme-text">
                                        Last name <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="last-name" 
                                        {...register("lastName")}
                                        className={`mt-2.5 block w-full rounded-xl border px-3.5 py-2 text-theme-text focus:ring-1 outline-none bg-theme-background ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-theme-border focus:ring-theme-icon'}`} 
                                        placeholder="Doe" 
                                    />
                                    {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-theme-text">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    {...register("email")}
                                    className={`mt-2.5 block w-full rounded-xl border px-3.5 py-2 text-theme-text focus:ring-1 outline-none bg-theme-background ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-theme-border focus:ring-theme-icon'}`} 
                                    placeholder="john@example.com" 
                                />
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-theme-text">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea 
                                    id="message" 
                                    rows={4} 
                                    {...register("message")}
                                    className={`mt-2.5 block w-full rounded-xl border px-3.5 py-2 text-theme-text focus:ring-1 outline-none bg-theme-background ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-theme-border focus:ring-theme-icon'}`} 
                                    placeholder="How can we help you?"
                                ></textarea>
                                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                            </div>
                            <Button className="w-full" size="lg" rightIcon={<FaPaperPlane className="text-xs" />} isLoading={isSubmitting}>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
