import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: "Construction d'une école",
      description: "Construction d'une école primaire dans la région rurale",
      cost: "150,000€",
      progress: 65,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80"
    },
    {
      title: "Programme d'agriculture durable",
      description: "Mise en place d'un système d'irrigation moderne",
      cost: "75,000€",
      progress: 40,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
    },
    {
      title: "Centre de formation",
      description: "Création d'un centre de formation professionnelle",
      cost: "200,000€",
      progress: 25,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
    }
  ];

  const promoters = [
    {
      name: "Kofi KODJO",
      role: "Président",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Abla ABALO",
      role: "Directrice des Projets",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    },
    {
      name: "Jean YAO",
      role: "Responsable Financier",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Distribution de fournitures scolaires",
      description: "Plus de 1000 élèves équipés pour la rentrée"
    },
    {
      year: "2022",
      title: "Construction de puits",
      description: "Accès à l'eau potable pour 5 villages"
    },
    {
      year: "2021",
      title: "Formation agricole",
      description: "Programme de formation pour 200 agriculteurs"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#006A4D]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
            alt="Rural Development"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ASDIC
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Association Solidaire pour le Développement des Initiatives Communautaires
          </motion.p>
          <motion.a 
            href="#about"
            className="btn-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            En savoir plus
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="section-padding bg-white"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#006A4D]">
            Ensemble pour un d&eacute;veloppement int&eacute;gral
          </h2>
          <p className="text-lg mb-6">
            L'association ASDIC s'engage à promouvoir une éducation à la paix, la bonne gouvernance 
            et à assurer au sein des communautés une cohésion sociale et un développement intégral et durable.
          </p>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        className="section-padding bg-gray-50"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#006A4D]">
            Nos Actions
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div className="bg-white p-6 rounded-lg shadow-lg ml-4">
                  <span className="text-[#FFCF00] font-bold">{item.year}</span>
                  <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="section-padding bg-white"
        {...fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#006A4D]">
          Projets Futurs
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-[#006A4D] rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-600">{project.progress}% financé</span>
                      <span className="text-sm font-semibold">{project.cost}</span>
                    </div>
                  </div>
                  <button className="btn-primary w-full">
                    Soutenir ce projet
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="section-padding bg-gray-50"
        {...fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#006A4D]">
          Notre Équipe
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {promoters.map((promoter, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center p-6">
                <img
                  src={promoter.image}
                  alt={promoter.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{promoter.name}</h3>
                <p className="text-gray-600">{promoter.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="section-padding bg-white"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#006A4D]">
            Contactez-nous
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#006A4D] mr-3" />
                  <span>
                    Ago&egrave; Togbl&eacute;, Fidokpui <br />
                    05BP 961, Lom&eacute; Togo
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#006A4D] mr-3" />
                  <span>+228 90 02 55 78 / 90 23 60 90</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#006A4D] mr-3" />
                  <span>asdic.asso@gmail.com</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#006A4D] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#006A4D] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#006A4D] focus:border-transparent"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#006A4D] text-white">
        <div className="section-padding">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ASDIC</h3>
              <p className="text-gray-300">
                Ensemble pour un développement durable et solidaire.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                    Projets
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#FFCF00] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#FFCF00] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#FFCF00] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#FFCF00] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <div className="section-padding py-4 text-center text-sm">
            © {new Date().getFullYear()} ASDIC. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;