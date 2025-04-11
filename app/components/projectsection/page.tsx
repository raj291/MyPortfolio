'use client';
import {
  Container,
  Text,
  Title,
  Space,
  Group,
  Card,
  Badge,
  Anchor,
  Loader,
  Stack,
  useMantineTheme, useMantineColorScheme
} from '@mantine/core';
import { useEffect, useState } from 'react';

const featuredrepos = [
  {
    name: 'raj291/JobProfileMaker',
    tech: ['.NET', 'C#', 'MSSQL', 'Angular', 'Microservice', 'Docker', 'Tika.NET'],
  },
  {
    name: 'raj291/MovieShop',
    tech: ['ASP.NET Core', 'EF Core', 'SQL Server', 'WebAPI', 'Azure', 'Tailwind'],
  },
  {
    name: 'raj291/EShop-Microservices',
    tech: ['.NET', 'Microservices', 'RabbitMQ', 'Docker'],
  },
  {
    name: 'raj291/weatherio',
    tech: ['React', 'REST API', 'Tailwind', 'Express'],
  },
  {
    name: 'raj291/facial-dection-haar',
    tech: ['Python', 'OpenCV', 'CCNA', 'IoT', 'YOLO'],
  },
  {
    name: 'raj291/Kanban-board',
    tech: ['React', 'Redux', 'Agile', 'Jira', 'Tailwind'],
  },
];

export default function ProjectPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useMantineTheme();
const { colorScheme } = useMantineColorScheme();

const isDark = colorScheme === 'dark';

const cardStyles = {
  backgroundColor: isDark ? theme.colors.dark[7] : theme.white,
  boxShadow: isDark
    ? '0 0 12px rgba(255, 0, 80, 0.08)'
    : '0 0 12px rgba(0, 0, 0, 0.04)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

  useEffect(() => {
    Promise.all(
      featuredrepos.map(async (repo) => {
        const res = await fetch(`https://api.github.com/repos/${repo.name}`);
        const repoData = await res.json();

        const langRes = await fetch(`https://api.github.com/repos/${repo.name}/languages`);
        const languages = await langRes.json();

        return {
          ...repoData,
          tech: repo.tech,
          full_name: repo.name,
        };
      })
    ).then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <Container size="md" py="xl">
      <Stack gap="md">
        {projects.map((repo) => (
          <Card
          key={repo.id || repo.full_name}
          radius="md"
          withBorder
          padding="md"
          style={cardStyles}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = isDark
              ? '0 0 18px rgba(255, 0, 81, 0.21)'
              : '0 0 12px rgba(254, 1, 128, 0.27)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = cardStyles.boxShadow;
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
            <Group justify='space-between' mb="xs">
              <Title order={4} style={{ fontSize: '1.1rem' }}>
                {repo.name}
              </Title>
              <Anchor href={repo.html_url} target="_blank" size="xs">
                GitHub →
              </Anchor>
            </Group>

            <Text size="sm" c="dimmed" lineClamp={2}>
              {repo.description || 'No description available.'}
            </Text>

            <Group gap="xs" mt="sm" wrap="wrap">
              {repo.tech?.map((tech: string) => (
                <Badge
                  key={`${repo.full_name}-${tech}`}
                  variant="light"
                  radius="xl"
                  size="xs"
                  color="gray"
                >
                  {tech}
                </Badge>
              ))}
            </Group>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
