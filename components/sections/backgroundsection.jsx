import React from 'react';
import { backgroundData } from '../../data/mock';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { Badge } from '../ui/badge';

const BackgroundSection = () => {
  return (
    <section id="background" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3 tracking-wide uppercase text-sm">
            My Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Background
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <Briefcase className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Experience
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-200 dark:bg-emerald-900" />

              <div className="space-y-8">
                {backgroundData.experience.map((exp, index) => (
                  <div key={exp.id} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-neutral-950" />

                    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
                      <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                        <h4 className="font-bold text-neutral-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                        >
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-200 dark:bg-emerald-900" />

              <div className="space-y-8">
                {backgroundData.education.map((edu) => (
                  <div key={edu.id} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-neutral-950" />

                    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
                      <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                        <h4 className="font-bold text-neutral-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                        >
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.period}
                        </Badge>
                      </div>
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-3">
                        {edu.institution}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note for updating */}
            <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
              <p className="text-sm text-amber-700 dark:text-amber-400">
                💡 This section can be customized with your actual education and experience details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;