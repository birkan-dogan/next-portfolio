import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink } from "lucide-react";
import { projects } from "@/utilities/data";
import Link from "next/link";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects = () => {
  return (
    <motion.div variants={itemVariants} className="px-4">
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            Featured Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 pt-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={
                index !== projects.length - 1 ? "pb-4 sm:pb-6 border-b" : ""
              }
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1.5 sm:mb-2">
                <h3 className="font-semibold text-base sm:text-lg">
                  {project.name}
                </h3>
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-primary hover:text-primary/80 hover:underline transition-colors flex items-center gap-1 w-fit"
                  >
                    View Project
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Link>
                )}
              </div>
              <p className="text-muted-foreground mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="mb-2 sm:mb-3">
                <p className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Key Features:
                </p>
                <ul className="space-y-0.5 sm:space-y-1">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Projects;
