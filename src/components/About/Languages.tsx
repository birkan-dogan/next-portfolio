import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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

const Languages = () => {
  return (
    <motion.div variants={itemVariants} className="px-4">
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            Language Competencies
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center justify-between p-2.5 sm:p-3 bg-muted/50 rounded-lg">
              <span className="font-medium text-sm sm:text-base">English</span>
              <Badge className="text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1">
                Upper-Intermediate
              </Badge>
            </div>
            <div className="flex items-center justify-between p-2.5 sm:p-3 bg-muted/50 rounded-lg">
              <span className="font-medium text-sm sm:text-base">Turkish</span>
              <Badge className="text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1">
                Native
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Languages;
