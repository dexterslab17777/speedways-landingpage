import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Home, 
  Briefcase, 
  CreditCard, 
  CheckCircle, 
  Clock, 
  FileText, 
  Percent, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Globe,
  ChevronRight,
  Menu,
  X,
  Calculator
} from 'lucide-react';

const services = [
  {
    title: 'Car Loans',
    description: 'Get instant approval for new and used cars with flexible repayment options.',
    icon: Car,
    details: {
      eligibility: 'Age 21-65 years, stable income source, good credit history for better rates.',
      documents: ['Identity Proof (Aadhaar/PAN)', 'Address Proof', 'Last 3 months salary slips or ITR', 'Bank statements (6 months)'],
      benefits: ['Up to 100% on-road financing', 'Flexible tenure up to 7 years', 'Quick disbursement', 'No hidden charges']
    }
  },
  {
    title: 'Home Loans',
    description: 'Make your dream home a reality with our competitive mortgage rates.',
    icon: Home,
    details: {
      eligibility: 'Age 21-65 years, salaried or self-employed with regular income.',
      documents: ['Identity & Address Proof', 'Property Documents', 'ITR & Bank Statements', 'Salary Slips (if applicable)'],
      benefits: ['Low interest rates', 'Tenure up to 30 years', 'Balance transfer facility', 'Doorstep service']
    }
  },
  {
    title: 'Business Loans',
    description: 'Fuel your business growth with our tailored financial solutions.',
    icon: Briefcase,
    details: {
      eligibility: 'Business vintage of minimum 3 years, profitable for last 2 years.',
      documents: ['Business Proof', 'GST Returns', 'Audited Financials', 'Bank Statements (12 months)'],
      benefits: ['Collateral-free options available', 'High loan amounts', 'Flexible repayment', 'Quick processing']
    }
  },
  {
    title: 'Personal Loans',
    description: 'Quick funds for your personal needs with minimum documentation.',
    icon: CreditCard,
    details: {
      eligibility: 'Age 21-60 years, salaried individual with minimum income criteria.',
      documents: ['Identity & Address Proof', 'Last 3 months salary slips', 'Bank statements (6 months)'],
      benefits: ['No collateral required', 'Instant approval', 'Multipurpose use', 'Fixed interest rates']
    }
  },
];

const features = [
  {
    title: 'Low Interest Rates',
    description: 'We offer some of the most competitive interest rates in the market.',
    icon: Percent,
  },
  {
    title: 'Minimum Documentation',
    description: 'Hassle-free process with minimal paperwork required.',
    icon: FileText,
  },
  {
    title: 'Quick Approval',
    description: 'Get your loan approved instantly with our streamlined process.',
    icon: Clock,
  },
  {
    title: 'Trusted Since 2005',
    description: 'Over a decade of experience in providing reliable financial solutions.',
    icon: CheckCircle,
  },
];

const testimonials = [
  {
    name: 'Samrendra Kumar',
    text: 'Nice ambience Good service experience',
    rating: 5,
  },
  {
    name: 'Chetan Shingavi',
    text: 'They did process very well organized and with helping staff.',
    rating: 5,
  },
  {
    name: 'Satish Sangewad',
    text: 'Very nice quality for loan process of this company',
    rating: 5,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Modals state
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Calculator state
  const [calcAmount, setCalcAmount] = useState<number>(500000);
  const [calcRate, setCalcRate] = useState<number>(8.5);
  const [calcTenure, setCalcTenure] = useState<number>(5);
  
  // Derived state for calculator
  const calculateEMI = () => {
    const p = calcAmount;
    const r = calcRate / 12 / 100;
    const n = calcTenure * 12;
    if (r === 0) return p / n;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const emi = calculateEMI();
  const totalPayment = emi * (calcTenure * 12);
  const totalInterest = totalPayment - calcAmount;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-200 transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ 
                  rotateY: [0, 8, 0, -8, 0],
                  y: [-1, 1, -1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mr-1 transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span 
                  className="font-serif italic font-black text-3xl tracking-tighter block leading-none" 
                  style={{ textShadow: '2px 3px 5px rgba(0,0,0,0.2)' }}
                >
                  <span className="text-red-600">SPEED</span><span className="text-yellow-500">WAYS</span>
                </span>
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wider uppercase block leading-tight">Financial<br/>Services</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Services</a>
              <a href="#calculator" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Calculator</a>
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Why Us</a>
              <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Reviews</a>
              <a href="#contact" onClick={scrollToContact} className="bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                Get a Loan
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full"
            >
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50">Services</a>
              <a href="#calculator" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50">Calculator</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50">Why Us</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50">Reviews</a>
              <a href="#contact" onClick={(e) => { setIsMenuOpen(false); scrollToContact(e); }} className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-slate-50">Get a Loan</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] dark:opacity-[0.08]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-900/50 text-red-700 dark:text-red-400 text-sm font-medium mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-red-600"></span>
              Trusted Financial Partner Since 2005
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight"
            >
              Your Dreams, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-500 dark:to-orange-500">
                Our Financial Solutions.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Get instant car loans, personal loans, home loans, and business loans with low interest rates, minimum documentation, and quick approval.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="#contact" onClick={scrollToContact} className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 group">
                Get a Loan Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:08169461071" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-red-600 dark:text-red-500" />
                081694 61071
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 flex items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-1">
                <div className="flex -space-x-2 mr-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 flex items-center justify-center overflow-hidden`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">4.9/5 from 43 reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-red-600 dark:text-red-500 font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Comprehensive Loan Options</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">We offer a wide range of financial products tailored to meet your specific needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 transition-all group flex flex-col"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed flex-1">{service.description}</p>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="mt-6 flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors self-start"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section id="calculator" className="py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-900/50 text-red-700 dark:text-red-400 text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Plan Your Finances
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">EMI Calculator</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Estimate your monthly payments. Adjust the loan amount, interest rate, and tenure below to see how much your loan might cost and effectively plan your budget.
              </p>
              
              <div className="space-y-8 bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                {/* Loan Amount */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-semibold text-slate-700 dark:text-slate-200">Loan Amount</label>
                    <div className="text-red-600 dark:text-red-400 font-bold text-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-lg shadow-sm">
                      {formatCurrency(calcAmount)}
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="100000" 
                    max="10000000" 
                    step="50000"
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(Number(e.target.value))}
                    className="w-full accent-red-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700" 
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
                    <span>1L</span>
                    <span>1Cr</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-semibold text-slate-700 dark:text-slate-200">Interest Rate (p.a)</label>
                    <div className="text-red-600 dark:text-red-400 font-bold text-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-lg shadow-sm">
                      {calcRate}%
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="25" 
                    step="0.5"
                    value={calcRate}
                    onChange={(e) => setCalcRate(Number(e.target.value))}
                    className="w-full accent-red-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700" 
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
                    <span>5%</span>
                    <span>25%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-semibold text-slate-700 dark:text-slate-200">Tenure (Years)</label>
                    <div className="text-red-600 dark:text-red-400 font-bold text-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-lg shadow-sm">
                      {calcTenure} Yr
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    step="1"
                    value={calcTenure}
                    onChange={(e) => setCalcTenure(Number(e.target.value))}
                    className="w-full accent-red-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700" 
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
                    <span>1 Yr</span>
                    <span>30 Yr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-600 dark:bg-red-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 xl:w-64 xl:h-64 w-48 h-48 rounded-full border-[20px] border-white/10 opacity-50"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 xl:w-40 xl:h-40 w-32 h-32 rounded-full border-[15px] border-red-500/30 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="mb-10 text-center md:text-left">
                  <p className="text-red-100 font-medium mb-2 opacity-90 uppercase tracking-widest text-sm">Monthly EMI</p>
                  <h4 className="text-5xl lg:text-7xl font-extrabold tracking-tight drop-shadow-sm">{formatCurrency(emi)}</h4>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-red-500/50 pb-4">
                    <span className="text-red-100/90 text-lg">Principal Amount</span>
                    <span className="font-bold text-xl">{formatCurrency(calcAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-red-500/50 pb-4">
                    <span className="text-red-100/90 text-lg">Total Interest</span>
                    <span className="font-bold text-xl">{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-white font-medium text-xl">Total Payable</span>
                    <span className="font-bold text-2xl">{formatCurrency(totalPayment)}</span>
                  </div>
                </div>

                <a 
                  href="#contact" 
                  onClick={scrollToContact} 
                  className="mt-12 w-full bg-white text-red-600 block text-center font-bold text-lg py-5 rounded-xl hover:bg-slate-50 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
                >
                  Apply for this Loan
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900 dark:bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-orange-600/20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-red-500 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Fast, Simple, and Transparent.</h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                At Speedways Financial Services, we believe in making financial assistance accessible to everyone. Our streamlined processes ensure you get the funds you need without the usual hassle.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-red-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop" 
                  alt="Customer signing documents" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex -space-x-2">
                       <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-10 h-10 rounded-full border-2 border-slate-800" />
                       <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-10 h-10 rounded-full border-2 border-slate-800" />
                    </div>
                    <span className="text-white font-medium">Join 10,000+ happy customers</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl max-w-xs hidden md:block"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">98%</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Approval Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-red-600 dark:text-red-500 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What Our Clients Say</h3>
            <div className="flex items-center justify-center gap-2 text-lg text-slate-600 dark:text-slate-400">
              <span className="font-bold text-slate-900 dark:text-white">4.943</span>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span>Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative"
              >
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-700 dark:text-red-500 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Verified Customer</span>
                  </div>
                </div>
                {/* Google Icon placeholder */}
                <div className="absolute top-8 right-8 opacity-20">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
                <p className="text-red-100 mb-10 text-lg">Contact us today for a free consultation. Our experts are ready to help you find the best loan option.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Visit Our Office</h4>
                      <p className="text-red-100 leading-relaxed">
                        Office Number 200 / Shop No: 39, 1st Floor,<br />
                        Raghu Leela Mega Mall, Kandivali, Poisar,<br />
                        Kandivali West, Mumbai, Maharashtra 400067
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                      <p className="text-red-100">
                        <a href="tel:08169461071" className="hover:text-white transition-colors">081694 61071</a><br />
                        <a href="tel:7045026679" className="hover:text-white transition-colors">7045026679</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Website</h4>
                      <p className="text-red-100">
                        <a href="https://www.financesolution.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          www.financesolution.co.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-10 md:p-16">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Request a Call Back</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" required />
                  </div>
                  <div>
                    <label htmlFor="loanType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Loan Type</label>
                    <select id="loanType" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required>
                      <option value="">Select a loan type</option>
                      <option value="car">Car Loan</option>
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="business">Business Loan</option>
                      <option value="mortgage">Mortgage</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-red-600 text-white font-semibold py-4 rounded-lg hover:bg-red-700 transition-colors mt-4 shadow-lg shadow-red-600/20">
                    Submit Request
                  </button>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">By submitting this form, you agree to our <button type="button" onClick={() => setShowTerms(true)} className="underline text-red-600 dark:text-red-500">terms and conditions</button>.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <motion.div
                  animate={{ 
                    rotateY: [0, 8, 0, -8, 0],
                    y: [-1, 1, -1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mr-1 transform-gpu inline-block"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span 
                    className="font-serif italic font-black text-3xl tracking-tighter block leading-none" 
                    style={{ textShadow: '2px 3px 5px rgba(0,0,0,0.5)' }}
                  >
                    <span className="text-red-600">SPEED</span><span className="text-yellow-500">WAYS</span>
                  </span>
                </motion.div>
              </div>
              <p className="text-sm max-w-md mb-6">
                Providing premium financial services since 2005. We specialize in car loans, personal loans, home loans, and business loans with quick approval and minimum documentation.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/bestloanoptions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:info@financesolution.co.in" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-red-400 transition-colors">Our Services</a></li>
                <li><a href="#features" className="hover:text-red-400 transition-colors">Why Choose Us</a></li>
                <li><a href="#testimonials" className="hover:text-red-400 transition-colors">Client Reviews</a></li>
                <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-400 transition-colors">Car Loans</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Personal Loans</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Home Loans</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Business Loans</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Mortgage</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Speedways Financial Services. All rights reserved.</p>
            <div className="flex gap-4">
              <button onClick={() => setShowPrivacy(true)} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => setShowTerms(true)} className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals (Service Details) */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col border border-slate-200"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-200 bg-slate-50 rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <selectedService.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedService.title} Guide
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-red-600" /> Eligibility
                  </h4>
                  <p className="text-slate-600 leading-relaxed ml-7">
                    {selectedService.details.eligibility}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-red-600" /> Required Documents
                  </h4>
                  <ul className="list-disc text-slate-600 ml-12 space-y-1">
                    {selectedService.details.documents.map((doc, idx) => (
                      <li key={idx}>{doc}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-red-600" /> Benefits
                  </h4>
                  <ul className="list-disc text-slate-600 ml-12 space-y-1">
                    {selectedService.details.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 border-t border-slate-200 bg-slate-50 rounded-b-2xl flex justify-end">
                <button 
                  onClick={() => { setSelectedService(null); const contact = document.getElementById('contact'); if(contact) contact.scrollIntoView({behavior: 'smooth'}) }}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2"
                >
                  Apply Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals (Privacy & Terms) */}
      <AnimatePresence>
        {(showPrivacy || showTerms) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => { setShowPrivacy(false); setShowTerms(false); }}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col border border-slate-200 dark:border-slate-800"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold dark:text-white">
                  {showPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
                </h3>
                <button 
                  onClick={() => { setShowPrivacy(false); setShowTerms(false); }}
                  className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto text-slate-600 dark:text-slate-300 space-y-4">
                {showPrivacy ? (
                  <>
                    <p>At Speedways Financial Services, your privacy is our priority. We are committed to protecting your personal and financial information continuously.</p>
                    <h4 className="font-semibold text-slate-900 dark:text-white mt-4">1. Information Collection</h4>
                    <p>We collect personal information such as your name, contact details, financial status, and credit history when you apply for our loans.</p>
                    <h4 className="font-semibold text-slate-900 dark:text-white mt-4">2. Use of Information</h4>
                    <p>Your details are strictly used to evaluate your loan applications, communicate loan updates, and improve our services. We do not sell your data.</p>
                    <h4 className="font-semibold text-slate-900 dark:text-white mt-4">3. Data Security</h4>
                    <p>We implement advanced security measures designed to prevent unauthorized access, disclosure, or misuse of your submitted data.</p>
                  </>
                ) : (
                  <>
                    <p>Welcome to Speedways Financial Services. By using our website and applying for our loans, you agree to these Terms and Conditions.</p>
                    <h4 className="font-semibold text-slate-900 dark:text-white mt-4">1. Loan Approval</h4>
                    <p>All loan applications are subject to credit approval, documentation verification, and our internal lending criteria. We reserve the right to approve or reject any application.</p>
                    <h4 className="font-semibold text-slate-900 dark:text-white mt-4">2. Accuracy of Information</h4>
                    <p>You confirm that all information provided during the application process is accurate and truthful. Providing false information may lead to legal consequences.</p>
                    <h4 className="font-semibold text-slate-900 dark:text-white mt-4">3. Interest and Repayment</h4>
                    <p>Interest rates and repayment terms are determined based on your credit profile and loan type. Late payments may incur additional charges as outlined in your final loan agreement.</p>
                  </>
                )}
              </div>
              <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button 
                  onClick={() => { setShowPrivacy(false); setShowTerms(false); }}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
