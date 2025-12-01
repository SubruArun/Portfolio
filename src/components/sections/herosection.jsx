import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { profileData, currentStatus } from '../../data/mock';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-emerald-50/30 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 pt-20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar Section */}
          <div className="relative">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-emerald-500/20 dark:ring-emerald-400/20 shadow-2xl">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-lg">
              {currentStatus.status}
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left flex-1">
            <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3 tracking-wide uppercase text-sm">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
              {profileData.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-6 font-medium">
              {profileData.title}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mb-4 leading-relaxed">
              {profileData.tagline}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
              <MapPin className="h-4 w-4" />
              <span>{profileData.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button
                onClick={scrollToProjects}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-neutral-300 dark:border-neutral-600 hover:border-emerald-500 dark:hover:border-emerald-400 px-8 py-6 rounded-full text-base font-medium transition-all"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-emerald-600 hover:text-white transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-neutral-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;