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
} from "./components";

function App() {
  return (
    <Flex direction="column" align="center">
      <HeaderArea />
      <FrontImageArea />
      <PatternsArea />
      <AboutUs />
      <TestimonialsArea />
      <ContactForm />
      <FooterArea />
    </Flex>
  );
}

export default App;
