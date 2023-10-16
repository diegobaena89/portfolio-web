import { Box, Text } from "@chakra-ui/react";
import { JobUnitCard } from "./styles";

interface JobCardProps {
  company: string;
  date: string;
  position: string;
  description: string;
}

export default function JobCard({
  company,
  date,
  position,
  description,
}: JobCardProps) {
  return (
    <JobUnitCard>
      <Box display={"flex"} justifyContent={"space-between"}>
        <h2>{company}</h2>
        <span>{date}</span>
      </Box>
      <Text className="position" p="5px 0">
        {position}
      </Text>
      <Text className="description">{description}</Text>
    </JobUnitCard>
  );
}
