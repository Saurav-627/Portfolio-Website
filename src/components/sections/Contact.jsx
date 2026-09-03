import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Copy, Check, Calendar, MapPin, Globe } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
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

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('sauravluitel.work@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText('9707325376');
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-transparent">
      {/* Background Orbs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Stats, Copy, Booking Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-5/12 space-y-6"
          >
            <div className="space-y-3.5">
              <div className="mb-2 inline-flex items-center space-x-2 px-3.5 py-1.5 glass rounded-full border border-slate-200/80 dark:border-white/5">
                <MessageSquare className="h-3.5 w-3.5 text-primary-600 dark:text-accent-blue" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">
                  Communications Hub
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white font-heading">
                Let's start a <br />
                <span className="text-gradient">collaboration.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
                Have a new product idea or contract requirement? Let's construct it with speed, clean components, and production performance.
              </p>
            </div>

            {/* Status cards */}
            <div className="space-y-3">
              {/* Copy Email Card */}
              <div
                onClick={copyEmailToClipboard}
                className="p-3.5 sm:p-4 glass rounded-xl border border-slate-200/80 dark:border-white/5 hover:border-primary-500/30 flex items-center justify-between cursor-pointer transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-lg text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-0.5">Direct Email</span>
                    <span className="text-slate-900 dark:text-white text-xs sm:text-sm font-bold font-mono">sauravluitel.work@gmail.com</span>
                  </div>
                </div>

                <div className="p-2 bg-slate-100 dark:bg-slate-900/60 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                </div>
              </div>

              {/* Phone Direct Card */}
              {/* <div
                onClick={copyPhoneToClipboard}
                className="p-3.5 sm:p-4 glass rounded-xl border border-slate-200/80 dark:border-white/5 hover:border-primary-500/30 flex items-center justify-between cursor-pointer transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-lg text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-0.5">Phone / WhatsApp</span>
                    <span className="text-slate-900 dark:text-white text-xs sm:text-sm font-bold font-mono">+977 9707325376</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:9707325376"
                    onClick={(e) => e.stopPropagation()}
                    className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    Call
                  </a>
                  <div className="p-2 bg-slate-100 dark:bg-slate-900/60 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                    {phoneCopied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                  </div>
                </div>
              </div> */}

              {/* Location & Timezone */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 sm:p-4 glass rounded-xl border border-slate-200/80 dark:border-white/5 flex items-center gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-lg text-primary-600 dark:text-accent-blue">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-0.5">Location</span>
                    <span className="text-slate-900 dark:text-white text-[11px] font-black uppercase tracking-wider">Kathmandu, NP</span>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 glass rounded-xl border border-slate-200/80 dark:border-white/5 flex items-center gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-lg text-secondary-600 dark:text-secondary-color">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-0.5">Timezone</span>
                    <span className="text-slate-900 dark:text-white text-[11px] font-black uppercase tracking-wider">GMT +5:45</span>
                  </div>
                </div>
              </div>

              {/* Calendly booking placeholder trigger */}
              <a
                href="https://calendly.com/sauravluitel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3.5 sm:p-4 glass rounded-xl border border-slate-200/80 dark:border-white/5 hover:border-secondary-color/30 flex items-center justify-between transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-lg text-secondary-600 dark:text-secondary-color group-hover:scale-110 transition-transform">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-0.5">Calendly Portal</span>
                    <span className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-wider">Schedule a 15m Call</span>
                  </div>
                </div>

                <span className="text-[9px] font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200 dark:text-secondary-300 dark:bg-secondary-color/10 dark:border-secondary-color/20 px-2 py-0.5 rounded">
                  Book Slot
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-7/12"
          >
            <div className="glass p-4 sm:p-6 md:p-7 rounded-2xl shadow-xl border border-slate-200/80 dark:border-white/5 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-14 h-14 bg-primary-500/10 border border-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <CheckCircle2 className="h-7 w-7 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1.5 font-heading">Transmission Deployed</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium max-w-xs mx-auto">
                      Message synchronized. Saurav will return contacts in 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 ml-1">Identify Name</label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          placeholder="Jane Doe..."
                          className="w-full px-3.5 py-2.5 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 focus:border-primary-500/50 rounded-xl outline-none text-slate-800 dark:text-white text-xs sm:text-sm placeholder:opacity-40 font-semibold transition-all"
                        />
                        {errors.name && <p className="text-rose-500 text-[10px] font-black uppercase tracking-wider ml-1">{errors.name.message}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 ml-1">Secure Email</label>
                        <input
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email structure' }
                          })}
                          placeholder="jane@example.com"
                          className="w-full px-3.5 py-2.5 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 focus:border-primary-500/50 rounded-xl outline-none text-slate-800 dark:text-white text-xs sm:text-sm placeholder:opacity-40 font-semibold transition-all"
                        />
                        {errors.email && <p className="text-rose-500 text-[10px] font-black uppercase tracking-wider ml-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 ml-1">Project Scope & Details</label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        placeholder="Detail your request scope or role requirements..."
                        rows="4"
                        className="w-full px-3.5 py-2.5 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 focus:border-primary-500/50 rounded-xl outline-none text-slate-800 dark:text-white text-xs sm:text-sm placeholder:opacity-40 font-semibold transition-all resize-none"
                      />
                      {errors.message && <p className="text-rose-500 text-[10px] font-black uppercase tracking-wider ml-1">{errors.message.message}</p>}
                    </div>

                    <button
                      disabled={isSubmitting}
                      className="btn-primary w-full !py-2.5 !px-5 group flex items-center justify-center gap-2 relative overflow-hidden cursor-pointer text-xs font-black uppercase tracking-wider"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="text-xs font-black uppercase tracking-widest">Deploying...</span>
                        </div>
                      ) : (
                        <>
                          <span className="text-xs font-black uppercase tracking-widest">Transmit Message</span>
                          <Send className="h-3.5 w-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;