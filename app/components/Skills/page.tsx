'use client';

import type { ReactNode } from 'react';
import {
  Badge,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconApi,
  IconArrowsShuffle,
  IconBolt,
  IconBrain,
  IconBrandAngular,
  IconBrandAws,
  IconBrandBootstrap,
  IconBrandCSharp,
  IconBrandDjango,
  IconBrandDocker,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconCirclesRelation,
  IconCloud,
  IconCode,
  IconDatabase,
  IconGitMerge,
  IconNetwork,
  IconRoute,
  IconServer,
  IconTestPipe,
  IconTopologyStar3,
  IconVector,
} from '@tabler/icons-react';

const skillGroups = [
  { label: 'Backend', skills: ['Python', 'C#', '.NET Core', 'ASP.NET Web API', 'FastAPI', 'Django', 'Node.js'] },
  { label: 'Frontend', skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Bootstrap', 'Tailwind'] },
  { label: 'Data & AI', skills: ['SQL Server', 'MongoDB', 'Redis', 'Pinecone', 'RAG', 'LLMs', 'Pytest', 'MSTest', 'Moq'] },
  { label: 'Cloud & Systems', skills: ['Docker', 'AWS', 'Azure DevOps', 'CI/CD', 'Kafka', 'RabbitMQ', 'Microservices', 'DDD'] },
];

const iconProps = { size: 16, stroke: 1.8, 'aria-hidden': true } as const;

const skillIcons: Record<string, ReactNode> = {
  Python: <IconBrandPython {...iconProps} />,
  'C#': <IconBrandCSharp {...iconProps} />,
  '.NET Core': <IconCode {...iconProps} />,
  'ASP.NET Web API': <IconApi {...iconProps} />,
  FastAPI: <IconBolt {...iconProps} />,
  Django: <IconBrandDjango {...iconProps} />,
  'Node.js': <IconBrandNodejs {...iconProps} />,
  Angular: <IconBrandAngular {...iconProps} />,
  React: <IconBrandReact {...iconProps} />,
  'Next.js': <IconBrandNextjs {...iconProps} />,
  TypeScript: <IconBrandTypescript {...iconProps} />,
  JavaScript: <IconBrandJavascript {...iconProps} />,
  Bootstrap: <IconBrandBootstrap {...iconProps} />,
  Tailwind: <IconBrandTailwind {...iconProps} />,
  'SQL Server': <IconDatabase {...iconProps} />,
  MongoDB: <IconBrandMongodb {...iconProps} />,
  Redis: <IconServer {...iconProps} />,
  Pinecone: <IconVector {...iconProps} />,
  RAG: <IconRoute {...iconProps} />,
  LLMs: <IconBrain {...iconProps} />,
  Pytest: <IconTestPipe {...iconProps} />,
  MSTest: <IconTestPipe {...iconProps} />,
  Moq: <IconTestPipe {...iconProps} />,
  Docker: <IconBrandDocker {...iconProps} />,
  AWS: <IconBrandAws {...iconProps} />,
  'Azure DevOps': <IconCloud {...iconProps} />,
  'CI/CD': <IconGitMerge {...iconProps} />,
  Kafka: <IconArrowsShuffle {...iconProps} />,
  RabbitMQ: <IconNetwork {...iconProps} />,
  Microservices: <IconTopologyStar3 {...iconProps} />,
  DDD: <IconCirclesRelation {...iconProps} />,
};

export default function SkillsSection() {
  return (
    <Stack gap="lg">
      <Title order={2}>Technical Skills</Title>
      {skillGroups.map((group) => (
        <div key={group.label}>
          <Text size="md" fw={700} mb="sm">{group.label}</Text>
          <Group gap={9}>
            {group.skills.map((skill) => (
              <Badge
                key={skill}
                variant="light"
                color="red"
                radius="md"
                size="lg"
                tt="none"
                leftSection={skillIcons[skill]}
                style={{ fontSize: '0.9rem', height: 34, paddingInline: 12 }}
              >
                {skill}
              </Badge>
            ))}
          </Group>
        </div>
      ))}
    </Stack>
  );
}
