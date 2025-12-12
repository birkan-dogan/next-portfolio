import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { summary } from "@/utilities/data";

const Summary = () => {
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

  return (
    <motion.div variants={itemVariants} className="px-4">
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {summary}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Summary;
