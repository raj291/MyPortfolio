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
import { IconArrowUpRight } from '@tabler/icons-react';

const featuredRepos = [
  {
    name: 'North Star',
    repo: 'North-Star',
    description: 'A real-time construction-safety vision system that detects and tracks workers, associates PPE, and turns persistent safety signals into reviewable, evidence-backed events.',
    tech: ['Python', 'PyTorch', 'YOLO', 'ByteTrack', 'FastAPI'],
    new: true,
  },
  {
    name: 'Global Disaster Prediction',
    repo: 'global_disaster_prediction',
    description: 'A research-oriented probabilistic forecasting platform for extreme precipitation, floods, tropical cyclones, and wildfires with uncertainty and source-lineage safeguards.',
    tech: ['Python', 'Next.js', 'Geospatial Data', 'Forecasting'],
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
    new: true,
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
        <Title order={2}>Featured Projects</Title>
        <Text c="dimmed" size="sm">
          Selected product, AI, and distributed-systems work. Practice-only daily commit repositories are intentionally excluded.
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
            style={{
              backgroundColor: isDark ? theme.colors.dark[7] : theme.white,
              boxShadow: isDark ? '0 0 12px rgba(255, 0, 80, 0.08)' : '0 0 12px rgba(0, 0, 0, 0.04)',
            }}
          >
            <Stack justify="space-between" h="100%" gap="md">
              <div>
                <Group justify="space-between" align="flex-start" wrap="nowrap" mb="xs">
                  <Group gap="xs" align="center">
                    <Title order={3} fz="md">{project.name}</Title>
                    {project.new && <Badge size="xs" color="red" variant="filled">New</Badge>}
                  </Group>
                  <Anchor
                    href={`https://github.com/raj291/${project.repo}`}
                    target="_blank"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <IconArrowUpRight size={18} />
                  </Anchor>
                </Group>
                <Text size="sm" c="dimmed" lh={1.6}>{project.description}</Text>
              </div>
              <Group gap={6} wrap="wrap">
                {project.tech.map((tech) => (
                  <Badge key={`${project.repo}-${tech}`} variant="light" radius="xl" size="xs" color="gray">
                    {tech}
                  </Badge>
                ))}
              </Group>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
