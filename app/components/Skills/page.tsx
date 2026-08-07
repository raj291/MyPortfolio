'use client';

import {
  Badge,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

const skillGroups = [
  { label: 'Backend', skills: ['Python', 'C#', '.NET Core', 'ASP.NET Web API', 'FastAPI', 'Django', 'Node.js'] },
  { label: 'Frontend', skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Bootstrap', 'Tailwind'] },
  { label: 'Data & AI', skills: ['SQL Server', 'MongoDB', 'Redis', 'Pinecone', 'RAG', 'LLMs', 'Pytest', 'MSTest', 'Moq'] },
  { label: 'Cloud & Systems', skills: ['Docker', 'AWS', 'Azure DevOps', 'CI/CD', 'Kafka', 'RabbitMQ', 'Microservices', 'DDD'] },
];

const visualSkills = [
  { name: 'React', logo: '/skills/react/react-original.svg' },
  { name: 'Next.js', logo: '/skills/nextjs/nextjs-original.svg' },
  { name: 'Angular', logo: '/skills/angular/angular.svg' },
  { name: '.NET Core', logo: '/skills/dot-net/dot-net-plain.svg' },
  { name: 'C#', logo: '/skills/csharp/csharp.svg' },
  { name: 'TypeScript', logo: '/skills/typescript/typescript-original.svg' },
  { name: 'JavaScript', logo: '/skills/javascript/javascript-original.svg' },
  { name: 'Node.js', logo: '/skills/nodejs/nodejs-original.svg' },
  { name: 'SQL Server', logo: '/skills/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'MongoDB', logo: '/skills/mongodb/mongodb-plain.svg' },
  { name: 'Docker', logo: '/skills/docker/docker-plain.svg' },
  { name: 'Azure', logo: '/skills/azure/azure.svg' },
  { name: 'GitHub', logo: '/skills/github/github-original.svg' },
  { name: 'Postman', logo: '/skills/postman/postman-original.svg' },
  { name: 'Jira', logo: '/skills/jira/jira-original.svg' },
];

export default function SkillsSection() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isDark = colorScheme === 'dark';

  return (
    <Stack gap="xl">
      <div>
        <Title order={2} mb="md">Technical Skills</Title>
        <Stack gap="md">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <Text size="sm" fw={700} mb={7}>{group.label}</Text>
              <Group gap={7}>
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="light" color="red" radius="sm" tt="none">
                    {skill}
                  </Badge>
                ))}
              </Group>
            </div>
          ))}
        </Stack>
      </div>

      <SimpleGrid cols={{ base: 2, sm: 3, lg: 5 }} spacing="md">
        {visualSkills.map((skill) => (
          <Paper
            key={skill.name}
            radius="lg"
            shadow="md"
            withBorder
            p="md"
            style={{
              textAlign: 'center',
              backgroundColor: isDark ? theme.colors.dark[6] : theme.colors.gray[0],
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            className="skill-card"
          >
            <Stack align="center" gap={4}>
              <Image src={skill.logo} alt="" width={40} height={40} fit="contain" loading="lazy" />
              <Text size="sm" fw={500}>{skill.name}</Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
