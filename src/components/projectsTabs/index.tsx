import {
  TabPanel,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  Image,
  Divider,
  Tag,
  Box,
  createMultiStyleConfigHelpers,
  Card,
} from "@chakra-ui/react";
import { CustomTabs, CustomButtom } from "./styles";
import { tabsAnatomy } from "@chakra-ui/anatomy";

interface Project {
  title: string;
  imgUrl: string;
  description: string;
  stack: string[];
  githubLink: string;
  deployLink: string;
}

interface ProjectsTabsProps {
  projects: Project[];
}

export default function ProjectsTabs({ projects }: ProjectsTabsProps) {
  const { definePartsStyle } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

  const baseStyle = definePartsStyle({
    tablist: {
      fontFamily: "Poppins",
      fontSize: "14px",
    },

    tabpanels: {
      fontFamily: "Poppins",
      fontSize: "14px",
    },
  });

  function handleRedirect(url: string) {
    window.open(url, "_blank");
  }

  return (
    <CustomTabs position="relative" variant="unstyled">
      <TabList sx={baseStyle.tablist}>
        {projects.map((project) => (
          <Tab key={project.title} sx={baseStyle.tablist}>
            {project.title}
          </Tab>
        ))}
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="#a8a8b3" borderRadius="1px" />
      <TabPanels sx={baseStyle.tabpanels}>
        {projects.map((project) => (
          <TabPanel key={project.title}>
            <Card margin="20px 0">
              <Image
                src={project.imgUrl}
                alt={project.title}
                border="none !important"
                css={{
                  filter: "grayscale(100%)",
                }}
              />
            </Card>
            <p>{project.description}</p>
            <Divider padding={"10px 0"} />
            <h4>Stack</h4>
            {project.stack.map((tech) => (
              <Tag
                key={tech}
                size="md"
                variant="solid"
                backgroundColor="#f69d7b"
                margin="0 3px"
              >
                {tech}
              </Tag>
            ))}

            <Box padding="20px 0">
              <CustomButtom
                size="sm"
                onClick={() => handleRedirect(project.githubLink)}
              >
                Github
              </CustomButtom>
              <CustomButtom
                size="sm"
                onClick={() => handleRedirect(project.deployLink)}
              >
                Deploy
              </CustomButtom>
            </Box>
          </TabPanel>
        ))}
      </TabPanels>
    </CustomTabs>
  );
}
