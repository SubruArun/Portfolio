import React from 'react';
import { skillsData } from '../../data/mock';

const SkillsSection = () => {
  const getCategoryIcon = (categoryName) => {
    const icons = {
      'Languages': '💻',
      'Data Engineering': '🔄',
      'ML & AI': '🧠',
      'Deployment & Cloud': '☁️',
      'Tools': '⚙️',
      'Tools & Platforms': '🛠️',
      'MLOps': '🚀',
    };
    return icons[categoryName] || '📦';
  };

  return (
    <section id="skills" className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3 tracking-wide uppercase text-sm">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{getCategoryIcon(category.name)}</span>
                <h3 className="font-bold text-neutral-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Continuously learning and adapting to new technologies. Currently exploring
            security, server setup, optimization and cloud-native data solutions with a focus on maximizing server efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;