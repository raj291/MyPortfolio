'use client';

import {
  SimpleGrid,
  Image,
  Text,
  Paper,
  Stack,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

const skills = [
    { name: 'React', logo: '/skills/react/react-original.svg' },
    { name: 'Next.js', logo: '/skills/nextjs/nextjs-original.svg'},
    { name: 'Angular', logo: '/skills/angular/angular.svg' },
    { name: '.NET Core', logo: '/skills/dot-net/dot-net-plain.svg' },
    { name: 'C#', logo: '/skills/csharp/csharp.svg' },
    { name: 'TypeScript', logo: '/skills/typescript/typescript-original.svg' },
    { name: 'JavaScript', logo: '/skills/javascript/javascript-original.svg' },
    { name: 'CSS', logo: '/skills/css3/css3.svg' },
    { name: 'Tailwind', logo: '/skills/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', logo: '/skills/nodejs/nodejs-original.svg' },
    { name: 'SQL Server', logo: '/skills/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'MongoDB', logo: '/skills/mongodb/mongodb-plain.svg' },
    { name: 'Docker', logo: '/skills/docker/docker-plain.svg' },
    { name: 'Azure', logo: '/skills/azure/azure.svg' },
    { name: 'GitHub', logo: '/skills/github/github-original.svg' },
    { name: 'Postman', logo: '/skills/postman/postman-original.svg' },
    { name: 'Jira', logo: '/skills/jira/jira-original.svg' },
    { name: 'Mantine UI', logo: '/skills/mantineui/mantineui-plain.svg' },
  ];
  

export default function SkillsSection() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isDark = colorScheme === 'dark';

  return (
    <SimpleGrid
    cols={{ base: 2, sm: 3, lg: 5 }}
      spacing="xl" 
    >
      {skills.map((skill) => (
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
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 0 14px rgba(255, 0, 81, 0.29)'
              : '0 0 10px rgba(255, 0, 98, 0.43)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '';
          }}
        >
          <Stack align="center" gap={4}>
            <Image
              src={skill.logo}
              alt={skill.name}
              width={40}
              height={40}
              fit="contain"
              loading="lazy"
            />
            <Text size="sm" fw={500}>
              {skill.name}
            </Text>
          </Stack>
        </Paper>
      ))}
    </SimpleGrid>
  );
}
