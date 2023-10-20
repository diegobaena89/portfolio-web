import JobCard from "@/src/components/JobCard";
import { JobContainer } from "./styles";
import { Box } from "@chakra-ui/react";
import ProjectsTabs from "@/src/components/projectsTabs";

import { useContext } from "react";
import { PortfolioContext } from "@/src/context/PortfolioContext";
import { enUS } from "@/src/languages/english/enUS";
import { elGR } from "@/src/languages/greek/elGR";

export default function Jobs() {
  const { locale } = useContext(PortfolioContext)!;
  const traduction = locale === "en" ? enUS : elGR;

  return (
    <JobContainer>
      <Box className="jobs">
        <Box>
          <h1>{traduction.about.jobs.work}</h1>
          <strong>{traduction.about.jobs.experience}</strong>
        </Box>
        <Box>
          <JobCard
            company={"Bees Brasil"}
            date={"06/2022 - present"}
            position={"Frontend Developer"}
            description={traduction.about.jobs.bees}
          />

          <JobCard
            company={"Alpar"}
            date={"08/2021 - 06/2022"}
            position={"Software Developer"}
            description={traduction.about.jobs.alpar}
          />

          <JobCard
            company={"Capgemini"}
            date={"06/2021 - 08/2021"}
            position={"Fullstack Developer"}
            description={traduction.about.jobs.capgemini}
          />
        </Box>
      </Box>

      <Box className="projects">
        <h2>{traduction.about.projects.title}</h2>
        <Box>
          <ProjectsTabs />
        </Box>
      </Box>
    </JobContainer>
  );
}
