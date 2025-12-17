

const testimonials = [
    {
        content: "This template saved me weeks of development time. The code quality is outstanding and the design is beautiful.",
        author: "Sarah Chen",
        role: "Senior Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        content: "Finally, a React template that doesn't feel bloated. It has exactly what I need and nothing I don't.",
        author: "Michael Ross",
        role: "Freelancer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
        content: "The theme system is incredible. I was able to match my brand colors in seconds without digging through CSS.",
        author: "Jessica Lee",
        role: "Product Designer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica"
    }
];

export const Testimonials = () => {
    return (
        <div className="py-24 relative z-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-theme-text sm:text-4xl">
                        Trusted by developers
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-theme-text/70">
                        Join hundreds of developers building faster with our tools.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-theme-surface/50 p-8 rounded-2xl border border-theme-border hover:border-theme-icon/30 transition-colors">
                            <p className="text-lg text-theme-text/80 mb-6 italic">"{testimonial.content}"</p>
                            <div className="flex items-center gap-4">
                                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full border border-theme-border" />
                                <div>
                                    <h4 className="font-bold text-theme-text">{testimonial.author}</h4>
                                    <p className="text-sm text-theme-text/50">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
