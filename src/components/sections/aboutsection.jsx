import React from 'react';
import { profileData, aboutData, currentStatus } from '../../data/mock';
import { Sparkles, Target, Clock, Calendar } from 'lucide-react';
import { Badge } from '../ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3 tracking-wide uppercase text-sm">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Content */}
          <div>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
              {profileData.bio}
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
              {aboutData.introduction}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-emerald-500" />
                Highlights
              </h3>
              <ul className="space-y-3">
                {aboutData.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What I'm Up To Now */}
          <div className="bg-gradient-to-br from-emerald-50 to-neutral-50 dark:from-neutral-900 dark:to-neutral-900 rounded-2xl border border-emerald-100 dark:border-neutral-800 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-8 p-8 pb-0">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  What I'm Up To Now
                </h3>
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <Calendar className="h-3 w-3" />
                  <span>Updated: {currentStatus.lastUpdated}</span>
                </div>
              </div>
            </div>

            <div className="relative px-8 pb-8 h-[600px] overflow-y-auto custom-scrollbar">
              <Badge className="mb-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100">
                <Clock className="h-3 w-3 mr-1" />
                {currentStatus.status}
              </Badge>

              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                {currentStatus.description}
              </p>

              {currentStatus.currentProjectsAndLearning && (
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  {currentStatus.currentProjectsAndLearning}
                </p>
              )}

              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wide">
                Current Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentStatus.interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;