import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need prior experience in data to apply?",
      answer:
        "No prior data experience is required! Our beginner-level program is designed for individuals looking to start or transition into Data Analysis or Data Science. Basic computer literacy is all you need to get started.",
    },
    {
      question: "What is the time commitment for the program?",
      answer:
        "The program runs for 10 weeks (February - April 2026) with classes held on weekends only (Saturdays and Sundays). You'll need to commit to attending virtual sessions on these days and completing assignments between classes.",
    },
    {
      question: "How does the 100% scholarship work?",
      answer:
        "We're offering full tuition coverage for 50 exceptional learners. This includes access to all live virtual classes, replays, mentorship sessions, project work, and a certificate of completion. Selection is based on your application and motivation essay.",
    },
    {
      question: "What's the difference between Data Analysis and Data Science tracks?",
      answer:
        "Both tracks cover fundamental data skills like Excel, SQL, and Python. The Data Analysis track focuses more on data visualization, reporting, and business intelligence tools like Power BI. The Data Science track includes additional coverage of statistical modeling and machine learning fundamentals.",
    },
    {
      question: "Will I receive a certificate after completion?",
      answer:
        "Yes! Upon successful completion of the 10-week program, you'll receive a Certificate of Completion from KnowEdge Tech Hub, which you can add to your resume and LinkedIn profile.",
    },
    {
      question: "How are classes conducted?",
      answer:
        "All classes are 100% virtual, conducted through live online sessions. You'll have access to live classes, recorded replays for review, hands-on projects, and mentorship sessions with industry professionals.",
    },
    {
      question: "What happens after I join the waitlist?",
      answer:
        "After joining the waitlist, you'll receive information about the application process. You'll need to fill out a short online application form and write a brief motivation essay. Selection emails will be sent in late January 2026.",
    },
    {
      question: "Can I work full-time while taking this program?",
      answer:
        "Yes! The program is designed with working professionals in mind. Classes are held on weekends only, allowing you to maintain your current job or studies while learning data skills.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left hover:text-primary transition-colors text-base sm:text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
