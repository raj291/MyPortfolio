'use client';

import {
  Container,
  Group,
  List,
  Space,
  Text,
  Timeline,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

const experiences = [
  {
    company: 'Contriva, Inc.',
    title: 'Software Engineer - AI',
    time: 'Aug 2025 - Apr 2026',
    location: 'Richmond, US',
    points: [
      'Designed FastAPI and Django REST APIs that surfaced member risk, claims utilization, and care-gap insights.',
      'Integrated Kafka and RabbitMQ for real-time healthcare data updates and reliable event processing.',
      'Built a RAG pipeline with LLM embeddings and Pinecone for semantic, context-aware document retrieval.',
      'Integrated ML inference services for risk prediction and anomaly detection, supported by containerized CI/CD deployments.',
    ],
  },
  {
    company: 'Rocket Mortgage',
    title: 'Software Engineer',
    time: 'May 2025 - Aug 2025',
    location: 'Detroit, US',
    points: [
      'Developed and optimized mortgage pricing and fee-calculation APIs for faster, accurate Rocket Pro quotations.',
      'Migrated pricing logic into scalable event-driven microservices and integrated Sierra AI workflow automation.',
      'Improved real-time diagnostics with structured Serilog logging and supported automated API delivery with QA and DevOps.',
    ],
  },
  {
    company: 'Antra, Inc.',
    title: 'Full-Stack Developer',
    time: 'Jan 2024 - May 2025',
    location: 'Remote, US',
    points: [
      'Built an Angular and ASP.NET HR platform with modular services for employee records, benefits, payroll, and attendance.',
      'Optimized SQL Server access with stored procedures and Redis caching, and secured APIs with JWT role-based access control.',
      'Maintained more than 90% test coverage with MSTest and Moq and automated build, test, and deployment in Azure DevOps.',
    ],
  },
  {
    company: 'JP Morgan (Forage)',
    title: 'Software Engineer',
    time: 'May 2023 - Jul 2023',
    location: 'Remote, US',
    points: [
      'Built a React application for real-time stock-option analysis, trade simulation, and WebSocket-driven charts.',
      'Implemented REST data services and stress-tested concurrent trade workloads for stability.',
    ],
  },
  {
    company: 'Azinova Technologies',
    title: 'Full-Stack Developer',
    time: 'Apr 2021 - Aug 2022',
    location: 'Dubai, UAE',
    points: [
      'Engineered a cleaning-service appointment platform with live tracking, automated scheduling, bookings, and payments.',
      'Added caching, lazy loading, SMS/email notifications, and Dockerized Azure App Service deployments.',
    ],
  },
  {
    company: 'Katalyst Incorporation, LLC',
    title: 'Web Developer',
    time: 'Feb 2020 - Feb 2021',
    location: 'Dubai, UAE',
    points: [
      'Developed a responsive wholesale and retail commerce platform with payments, tax-aware invoicing, and SQL reporting.',
      'Improved discoverability through schema, metadata, and structured-data SEO work.',
    ],
  },
];

export default function AboutPage() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const textColor = colorScheme === 'dark' ? theme.white : theme.black;

  return (
    <Container fluid px={0}>
      <Title order={2} mb="md">About Me</Title>
      <Text lh={1.75}>
        I&apos;m a full-stack and AI software engineer with 3+ years of experience building scalable web
        platforms, modular backend systems, and cloud-ready services across healthcare, financial,
        enterprise, and operations domains. I work across Python, .NET, Angular, and React, with a focus on
        reliable APIs, event-driven systems, AI retrieval workflows, and thoughtful user experiences.
      </Text>
      <Space h="xl" />
      <Title order={2}>Experience</Title>
      <Space h="md" />
      <Timeline color="red" active={experiences.length} lineWidth={3} bulletSize={18}>
        {experiences.map((exp) => (
          <Timeline.Item
            key={`${exp.company}-${exp.time}`}
            style={{ fontSize: '1rem', color: textColor }}
            title={
              <Group justify="space-between" align="flex-start" wrap="wrap" gap="xs">
                <Text fw={600}>{exp.title}</Text>
                <Text size="sm">{exp.time}</Text>
              </Group>
            }
          >
            <Group justify="space-between" align="flex-start" wrap="wrap" gap={4}>
              <Text c="dimmed" size="sm">{exp.company}</Text>
              <Text c="dimmed" size="sm">{exp.location}</Text>
            </Group>
            <List size="sm" mt="sm" spacing={5} pr={{ base: 0, sm: 'md' }}>
              {exp.points.map((point) => <List.Item key={point}>{point}</List.Item>)}
            </List>
          </Timeline.Item>
        ))}
      </Timeline>
    </Container>
  );
}
