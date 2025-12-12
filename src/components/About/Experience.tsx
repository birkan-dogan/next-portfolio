import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { experiences } from "@/utilities/data";

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

const Experience = () => {
  return (
    <motion.div variants={itemVariants} className="px-4">
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 pt-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={
                index !== experiences.length - 1 ? "pb-4 sm:pb-6 border-b" : ""
              }
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 sm:mb-3 gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium text-sm sm:text-base">
                    {exp.company}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="w-fit text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1"
                >
                  {exp.period}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
              <ul className="space-y-1 sm:space-y-1.5">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Experience;
