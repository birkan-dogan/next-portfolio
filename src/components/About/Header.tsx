import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Phone, MapPin, Download } from "lucide-react";
import { motion } from "motion/react";

const Header = () => {
  const handleDownloadPDF = () => {
    window.open("/BirkanDogan.pdf", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 md:mb-12 px-4"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Birkan Dogan
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6">
        Full-Stack Developer
      </p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 mb-4 md:mb-6">
        {/* Mail link */}
        <a
          href="mailto:b.561birkan@gmail.com"
          className="flex items-center justify-center sm:justify-start gap-2 text-sm hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">b.561birkan@gmail.com</span>
        </a>

        {/* Phone link */}
        <a
          href="tel:+905468503938"
          className="flex items-center justify-center sm:justify-start gap-2 text-sm hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>+90 546 850 3938</span>
        </a>

        {/* Location */}
        <span className="flex items-center justify-center sm:justify-start gap-2 text-sm">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>Ankara, Turkey</span>
        </span>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 max-w-md mx-auto">
        {/* LinkedIn Button */}
        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto"
          asChild
        >
          <a
            href="https://www.linkedin.com/in/birkandogandeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
        </Button>

        {/* GitHub Button */}
        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto"
          asChild
        >
          <a
            href="https://github.com/birkan-dogan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>

        {/* PDF Download Button */}
        <Button
          size="sm"
          className="w-full sm:w-auto"
          onClick={handleDownloadPDF}
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>
    </motion.div>
  );
};

export default Header;
