import JobCard from "@/src/components/JobCard";
import { JobContainer } from "../../styles/Jobs";
import { Box } from "@chakra-ui/react";

export default function Jobs() {
  return (
    <JobContainer>
      <Box className="jobs">
        <Box>
          <h1>work</h1>
          <strong>experience</strong>
        </Box>
        <Box>
          <JobCard
            company={"Bees Brasil"}
            date={"06/2022 - present"}
            position={"Frontend Developer"}
            description={
              "Front-end developer responsible for expanding and maintaining a B2B application using ReactJS and TypeScript. I created unit and component tests, implemented BFFs with Nest.js, and contributed to the development of a shared library to enhance usability across multiple teams."
            }
          />

          <JobCard
            company={"Alpar"}
            date={"08/2021 - 06/2022"}
            position={"Software Developer"}
            description={
              "As a Software Developer at Alpar, I contributed as a ServiceNow developer for clients like Klabin and Localiza. I created service catalogs, widgets, customized business rules, and managed business flow and workflow. My skills included ServiceNow, JavaScript, AngularJS, and CSS, with a primary focus on using the ServiceNow platform for project execution."
            }
          />

          <JobCard
            company={"Capgemini"}
            date={"06/2021 - 08/2021"}
            position={"Fullstack Developer"}
            description={
              "I served as a Systems Analyst at Capgemini, focusing on full-stack development for the BNB project. I adeptly utilized technologies like Java Web, JavaScript, CSS, HTML, jQuery, PrimeFaces, and Semantic UI, along with tools like Sonar and Git for code quality and version control."
            }
          />
        </Box>
      </Box>

      <Box className="projects">
        <h2>projects</h2>
        <Box
          p={4}
          display={"flex"}
          flexWrap={"wrap"}
          gap={8}
          alignItems={"center"}
          justifyContent={"center"}
        >
          test
        </Box>
      </Box>
    </JobContainer>
  );
}
