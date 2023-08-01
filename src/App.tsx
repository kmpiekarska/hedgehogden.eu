import "./App.css";
import { Flex } from "@chakra-ui/react";
import {
  HeaderArea,
  FrontImageArea,
  PatternsArea,
  AboutUs,
  TestimonialsArea,
  ContactForm,
  FooterArea,
  SectionTitle,
} from "./components";

function App() {
  return (
    <Flex direction="column" alignItems="center" marginY={1}>
      <HeaderArea />
      <FrontImageArea />
      <SectionTitle>Every Pattern Has A Story Behind</SectionTitle>
      <PatternsArea />
      <AboutUs />
      <TestimonialsArea />
      <ContactForm />
      <FooterArea />
    </Flex>
  );
}

export default App;
