import { Box, Text } from "@chakra-ui/react";
import { EducationUnitCard } from "./styles";

interface EducationCardProps {
  institution: string;
  date: string;
  course: string;
}

export default function EducationCard({
  institution,
  date,
  course,
}: EducationCardProps) {
  return (
    <EducationUnitCard>
      <Box display={"flex"} justifyContent={"space-between"}>
        <h5>{institution}</h5>
        <h4>{date}</h4>
      </Box>
      <Text className="institution">{[course]}</Text>
      <div className="cross" />
    </EducationUnitCard>
  );
}
