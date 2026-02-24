import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">


      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6 md:space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-5 py-2 glass rounded-full">
                <MessageSquare className="h-4 w-4 text-primary-500" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary-500">Contact Hub</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter">
                Let's Start a <br />
                <span className="text-gradient">Vision.</span>
              </h2>
              <p className="text-lg md:text-xl font-medium opacity-60 max-w-md leading-relaxed">
                Have a revolutionary idea? Let's engineer it into reality with precision and soul.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:sauravluitel.work@gmail.com"
                className="group flex items-center gap-6 p-6 md:p-8 glass rounded-[2rem] hover:border-primary-500/50 transition-all shadow-xl"
              >
                <div className="p-4 bg-primary-500 rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/20">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Direct Line</p>
                  <p className="text-base sm:text-xl font-black group-hover:text-primary-500 transition-colors break-all">sauravluitel.work@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass p-5 md:p-12 rounded-[2.5rem] shadow-2xl relative">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 md:py-20"
                >
                  <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="h-10 w-10 text-primary-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4">Transmission Received</h3>
                  <p className="text-lg font-medium opacity-60">
                    Your vision has been documented. <br /> I'll reach out within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ml-2">Identify Yourself</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Saurav L..."
                      className="w-full px-6 md:px-8 py-4 md:py-5 bg-black/5 dark:bg-white/5 border-2 border-slate-100 dark:border-white/5 focus:border-primary-500 rounded-2xl md:rounded-3xl outline-none transition-all font-bold placeholder:opacity-40"
                    />
                    {errors.name && <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ml-2">Secure Email</label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                      })}
                      placeholder="saurav@example.com"
                      className="w-full px-6 md:px-8 py-4 md:py-5 bg-black/5 dark:bg-white/5 border-2 border-slate-100 dark:border-white/5 focus:border-primary-500 rounded-2xl md:rounded-3xl outline-none transition-all font-bold placeholder:opacity-40"
                    />
                    {errors.email && <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ml-2">Project Vision</label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      placeholder="Define the scope..."
                      rows="4"
                      className="w-full px-6 md:px-8 py-4 md:py-5 bg-black/5 dark:bg-white/5 border-2 border-slate-100 dark:border-white/5 focus:border-primary-500 rounded-2xl md:rounded-3xl outline-none transition-all font-bold placeholder:opacity-40 resize-none"
                    ></textarea>
                    {errors.message && <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest ml-4">{errors.message.message}</p>}
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="btn-primary w-full !py-4 md:!py-6 group flex items-center justify-center gap-4 relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="text-xs font-black uppercase tracking-widest">Transmitting...</span>
                      </div>
                    ) : (
                      <>
                        <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em]">Deploy Message</span>
                        <Send className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;