import {
  Stack,
  useMediaQuery,
  Typography,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@mui/material";

import { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const accordionData = [
  {
    question: "Can I customize my order?",
    answer:
      "Yes, you can customize your order to suit your preferences. Our designers will work with you to create a personalized space that reflects your style.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The time taken to complete a project depends on the size and complexity of the project. Our team will provide you with a timeline based on your requirements.",
  },
  {
    question: "What if I'm not satisfied with the final outcome?",
    answer:
      "We strive to ensure that every customer is satisfied with their project. If you are not happy with the final outcome, please contact us, and we will work to address your concerns.",
  },
  {
    question: "Can I see a design before committing to a project?",
    answer:
      "Yes, our designers will create a design proposal for your space before you commit to a project. This allows you to see how your space will look and make any changes before work begins.",
  },
  {
    question: "Do you offer warranty on your products?",
    answer:
      "Yes, we offer a warranty on our products. Please refer to the specific product page or contact us for more information on warranty coverage.",
  },
  {
    question: "Can I cancel or reschedule my installation?",
    answer:
      "Yes, you can cancel or reschedule your installation. Please contact us at least 48 hours before your scheduled installation date to make changes.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer financing options to help you fund your project. Please contact us for more information on our financing options.",
  },
];

export const Faq = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange =
    (panel: number) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedIndex(isExpanded ? panel : null);
    };

  return (
    <>
      {/* FAQ */}
      <Stack
        gap={3}
        sx={{ margin: "80px 0px" }}
        data-aos={isMobile ? "null" : "fade"}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Frequently Asked Questions
        </Typography>
        <Stack justifyContent={"center"} alignItems={"center"}>
          {accordionData.map((accordion, index) => (
            <Accordion
              key={index}
              expanded={expandedIndex === index}
              onChange={handleChange(index)}
              sx={{ width: "90%" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6" color={"primary"}>
                  {accordion.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{accordion.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>
    </>
  );
};
