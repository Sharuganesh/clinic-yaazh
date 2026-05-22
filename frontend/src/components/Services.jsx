import { motion } from 'framer-motion';
import { Activity, Baby, Thermometer, Stethoscope, Shield, Heart, TrendingUp, Utensils, Users, Weight, Zap as ZapIcon } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Diabetes & Hypertension',
    desc: 'Expert management of diabetes and hypertension with continuous monitoring and personalized treatment plans.',
    color: '#E87722',
    bg: 'rgba(232,119,34,0.08)',
    tags: ['Blood Sugar', 'BP Monitoring', 'Lifestyle'],
  },
  {
    icon: Stethoscope,
    title: 'Thyroid Disorders',
    desc: 'Comprehensive thyroid management including TSH monitoring and effective treatment strategies.',
    color: '#1B4B5A',
    bg: 'rgba(27,75,90,0.07)',
    tags: ['TSH Monitoring', 'Hormonal Balance', 'Treatment'],
  },
  {
    icon: Shield,
    title: 'Anemia Management',
    desc: 'Diagnosis and treatment of anemia with iron supplementation and nutritional counseling.',
    color: '#E87722',
    bg: 'rgba(232,119,34,0.08)',
    tags: ['Blood Levels', 'Iron Therapy', 'Diet Planning'],
  },
  {
    icon: Heart,
    title: 'Autoimmune Disorders',
    desc: 'Management of autoimmune conditions with specialized care and regular monitoring protocols.',
    color: '#1B4B5A',
    bg: 'rgba(27,75,90,0.07)',
    tags: ['Immune Care', 'Monitoring', 'Treatment'],
  },
  {
    icon: Thermometer,
    title: 'Vitamin Deficiencies',
    desc: 'Identification and treatment of vitamin deficiencies through supplementation and dietary guidance.',
    color: '#E87722',
    bg: 'rgba(232,119,34,0.08)',
    tags: ['Lab Tests', 'Supplementation', 'Nutrition'],
  },
  {
    icon: Thermometer,
    title: 'Fever & Infections',
    desc: 'Prompt diagnosis and effective treatment of viral fevers and acute infections.',
    color: '#1B4B5A',
    bg: 'rgba(27,75,90,0.07)',
    tags: ['Viral Fever', 'Infections', 'Treatment'],
  },
  {
    icon: Weight,
    title: 'Obesity Management',
    desc: 'Comprehensive weight management program with lifestyle modification and medical guidance.',
    color: '#E87722',
    bg: 'rgba(232,119,34,0.08)',
    tags: ['Weight Loss', 'Diet Planning', 'Exercise'],
  },
  {
    icon: Heart,
    title: 'Pregnancy Diabetes & Hypertension',
    desc: 'Specialized maternal care for gestational diabetes and pregnancy-induced hypertension management.',
    color: '#1B4B5A',
    bg: 'rgba(27,75,90,0.07)',
    tags: ['Maternal Health', 'Blood Sugar', 'BP Monitoring'],
  },
  {
    icon: Baby,
    title: 'Newborn Care',
    desc: 'Comprehensive care for newborns including health checks, feeding support, and development tracking.',
    color: '#E87722',
    bg: 'rgba(232,119,34,0.08)',
    tags: ['Health Checks', 'Feeding Support', 'Monitoring'],
  },
  {
    icon: TrendingUp,
    title: 'Growth & Development',
    desc: 'Regular monitoring and assessment of child growth, development milestones, and health progression.',
    color: '#1B4B5A',
    bg: 'rgba(27,75,90,0.07)',
    tags: ['Milestone Tracking', 'Assessment', 'Counseling'],
  },
  {
    icon: Utensils,
    title: 'Child Nutrition',
    desc: 'Expert nutritional guidance and meal planning for optimal child health and development.',
    color: '#E87722',
    bg: 'rgba(232,119,34,0.08)',
    tags: ['Diet Planning', 'Counseling', 'Supplementation'],
  },
  {
    icon: ZapIcon,
    title: 'Vaccination Services',
    desc: 'Complete immunization services including routine and special vaccinations for all age groups.',
    color: '#1B4B5A',
    bg: 'rgba(27,75,90,0.07)',
    tags: ['Routine Vaccines', 'Special Vaccines', 'Records'],
  },
  {
    icon: Users,
    title: 'Adolescent Health',
    desc: 'Comprehensive healthcare for teenagers including growth monitoring, nutrition, and health education.',
    color: '#E87722',
    bg: 'rgba(232,119,34,0.08)',
    tags: ['Growth Check', 'Counseling', 'Health Education'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#1B4B5A]/4 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-[#E87722]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-4 mx-auto w-fit">Our Services</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4B5A] font-outfit leading-tight mb-4">
            Comprehensive <span className="text-[#E87722]">Healthcare</span> Solutions
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            From preventive care to specialized treatments, we offer a wide range of medical services tailored to your individual needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              data-testid={`service-card-${i}`}
              className="group relative p-7 rounded-2xl border border-[#1B4B5A]/8 bg-white hover:shadow-2xl hover:shadow-[#1B4B5A]/10 transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Background color hint */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: service.bg }}
              />

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: service.bg }}
              >
                <service.icon size={26} style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-bold text-[#1B4B5A] font-outfit mb-2 group-hover:text-[#E87722] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-sm text-[#475569] leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-1.5">
                {service.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors duration-300"
                    style={{
                      background: service.bg,
                      color: service.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://wa.me/917904203074"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="services-whatsapp-btn"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#1B4B5A] text-white rounded-2xl font-bold hover:bg-[#E87722] hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#1B4B5A]/20"
          >
            Book a Consultation
            <Activity size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
