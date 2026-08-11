'use client';

import {
  Anchor,
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconArrowUpRight, IconBrandGithub, IconExternalLink, IconSparkles } from '@tabler/icons-react';

type Project = {
  name: string;
  repo: string;
  description: string;
  tech: string[];
  impact?: string;
  live?: string;
  featured?: boolean;
  new?: boolean;
};

const featuredRepos: Project[] = [
  {
    name: 'North Star',
    repo: 'North-Star',
    description: 'A real-time construction-safety vision system that detects and tracks workers, associates PPE, and turns persistent safety signals into reviewable events with evidence.',
    impact: '0.922 locked-test mAP50 · 0.957 headwear-challenge mAP50 · 48 tests passing',
    tech: ['Python', 'PyTorch', 'YOLO', 'ByteTrack', 'FastAPI'],
    featured: true,
    new: true,
  },
  {
    name: 'VEYRA Estates',
    repo: 'Real-Estate-SPA',
    live: 'https://veyra-realestate.vercel.app/',
    description: 'An editorial Dubai real-estate experience with typed property data, discovery filters, dynamic detail routes, responsive galleries, and accessible inquiry journeys.',
    impact: 'Designed as a complete, responsive product experience—from discovery to inquiry.',
    tech: ['TypeScript', 'React 19', 'Vite', 'Vercel'],
    featured: true,
    new: true,
  },
  {
    name: 'Online Mini Wallet',
    repo: 'OnlineMiniWalletDemo',
    description: 'A concurrency-safe wallet API with credit, debit, transfers, idempotent operations, filtered history, and layered negative-balance protection.',
    tech: ['.NET 8', 'ASP.NET Core', 'EF Core', 'SQLite', 'REST API'],
  },
  {
    name: 'AI Agent Security Shield',
    repo: 'ai-agent-security-shield',
    description: 'A multi-agent security layer for prompt injection, jailbreak, data-exfiltration, PII leakage, RAG poisoning, and behavioral anomaly detection.',
    tech: ['Python', 'LangGraph', 'FastAPI', 'ChromaDB', 'Pytest'],
  },
  {
    name: 'Neural Network from Scratch',
    repo: 'Neural-Network',
    description: 'An MNIST handwritten-digit classifier built from first principles with NumPy, including forward propagation, backpropagation, and gradient descent.',
    tech: ['Python', 'NumPy', 'MNIST', 'Machine Learning'],
  },
  {
    name: 'Financial Risk Analyzer',
    repo: 'Finacial_Risk_Analyzer',
    description: 'An AI-powered service that analyzes transaction patterns to surface fraud, suspicious activity, and high-risk behavior.',
    tech: ['Python', 'FastAPI', 'Pydantic', 'Hugging Face', 'RAG'],
  },
  {
    name: 'Requirements Clarifier AI',
    repo: 'Requirement-Clarifier',
    description: 'Turns vague Jira tickets into structured engineering specs with acceptance criteria, edge cases, test ideas, risks, and confidence scoring.',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'Zod', 'Mantine'],
  },
  {
    name: 'eShop Microservices',
    repo: 'EShop-Microservices',
    description: 'An e-commerce system built as ASP.NET Web API microservices with React and cloud delivery workflows.',
    tech: ['.NET', 'Microservices', 'RabbitMQ', 'Docker', 'React'],
  },
];

export default function ProjectPage() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Container fluid px={0}>
      <Stack gap="xs" mb="lg">
        <Group gap="xs">
          <IconSparkles size={20} aria-hidden="true" />
          <Title order={2}>Selected Projects</Title>
        </Group>
        <Text c="dimmed" size="sm">
          A focused collection of product, AI, and distributed-systems work. Practice-only daily commit repositories are intentionally excluded.
        </Text>
      </Stack>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
        {featuredRepos.map((project) => (
          <Card
            key={project.repo}
            component="article"
            radius="md"
            withBorder
            padding="lg"
            className="project-card"
            data-featured={project.featured || undefined}
            style={{
              backgroundColor: isDark ? theme.colors.dark[7] : theme.white,
              boxShadow: isDark ? '0 0 12px rgba(255, 0, 80, 0.08)' : '0 0 12px rgba(0, 0, 0, 0.04)',
            }}
          >
            <Stack justify="space-between" h="100%" gap="md">
              <div>
                <Group justify="space-between" align="flex-start" wrap="nowrap" mb="xs">
                  <div>
                    {project.featured && <Text className="project-eyebrow">RECENT CASE STUDY</Text>}
                    <Group gap="xs" align="center">
                      <Title order={3} fz={project.featured ? 'lg' : 'md'}>{project.name}</Title>
                      {project.new && <Badge size="xs" color="red" variant="filled">New</Badge>}
                    </Group>
                  </div>
                  <IconArrowUpRight size={18} aria-hidden="true" />
                </Group>
                <Text size="sm" c="dimmed" lh={1.6}>{project.description}</Text>
                {project.impact && (
                  <Text size="xs" fw={600} mt="md" className="project-impact">
                    {project.impact}
                  </Text>
                )}
              </div>
              <Stack gap="sm">
                <Group gap={6} wrap="wrap">
                  {project.tech.map((tech) => (
                    <Badge key={`${project.repo}-${tech}`} variant="light" radius="xl" size="xs" color="gray">
                      {tech}
                    </Badge>
                  ))}
                </Group>
                <Group gap="md">
                  <Anchor href={`https://github.com/raj291/${project.repo}`} target="_blank" rel="noreferrer" size="xs" fw={600} aria-label={`View ${project.name} on GitHub`}>
                    <Group gap={5}><IconBrandGithub size={15} />View code</Group>
                  </Anchor>
                  {project.live && (
                    <Anchor href={project.live} target="_blank" rel="noreferrer" size="xs" fw={600} aria-label={`Open the ${project.name} live demo`}>
                      <Group gap={5}><IconExternalLink size={15} />Live experience</Group>
                    </Anchor>
                  )}
                </Group>
              </Stack>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
