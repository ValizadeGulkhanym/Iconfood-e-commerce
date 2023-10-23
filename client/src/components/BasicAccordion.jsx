import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function BasicAccordion() {
  return (
    <div className="max-w-[700px] mx-auto">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="h5 text-dark ">Work better together</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="paragraph text-gray font-[Spectral]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam molestias voluptatum culpa aliquid, facilis doloremque eveniet aliquam sit adipisci? Deleniti, doloribus! Pariatur, 
          dolor repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem ullam corporis consectetur architecto, reprehenderit commodi qui laudantium. Dicta blanditiis delectus est esse. Natus, iste! Repellat fugit cupiditate illo praesentium! Molestias illo accusantium cupiditate unde. Excitation venial consequent sent nostrum met.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="h5 text-dark">OpenType features and Variable fonts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="paragraph text-gray">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequuntur perferendis architecto reiciendis, hic quibusdam aspernatur fugit ullam, laudantium, quod harum dicta dolorem. Debitis illo pariatur dicta cum corporis optio? Excitation venial consequent sent nostrum met.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="h5 text-dark">Start working faster today</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="paragraph text-gray">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="h5 text-dark">Work at the speed of thought.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="paragraph text-gray">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="h5 text-dark">The Fastest way to organize</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="paragraph text-gray">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="h5 text-dark">The Fastest way to navigate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="paragraph text-gray">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
export default BasicAccordion;
