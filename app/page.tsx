'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Badge,
  Button,
  Group,
  Text,
  Container,
  ActionIcon,
  Paper,
  Stack,
  Title,
  useMantineColorScheme,
  useMantineTheme,
  Avatar,
  Tabs,
  FloatingIndicator,
  rem
} from '@mantine/core';
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconCopy,
  IconMapPin,
  IconMoon,
  IconSparkles,
  IconSun,
} from '@tabler/icons-react';
import { Tooltip, CopyButton } from '@mantine/core';

import logo from '../public/logo.png';
import AboutPage from './components/About/page';
import './globals.css';
import EducationPage from './components/Education/page';
import ProjectPage from './components/projectsection/page';
import SkillsSection from './components/Skills/page';
const email = 'rajmahdik29@gmail.com';
const linkedin = 'https://www.linkedin.com/in/raj-4221111s/';
const github = 'https://github.com/raj291';

const sections = ['About', 'Education', 'Skills', 'Projects'];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dark = colorScheme === 'dark';

  const [activeTab, setActiveTab] = useState<string | null>('About');
  const rootRef = useRef<HTMLDivElement | null>(null);
  const tabRefsMap = useRef<Record<string, HTMLButtonElement | null>>({});

  const setTabRef = (val: string) => (node: HTMLButtonElement | null) => {
    tabRefsMap.current[val] = node;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(dark ? 'light' : 'dark');
  };

  const showProjects = () => {
    setActiveTab('Projects');
  };

  return (
    <Container size="lg" py="xl">
      <Paper component="header" className="portfolio-hero" radius="xl" p={{ base: 'lg', sm: 'xl' }} mb="xl">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <ActionIcon
          onClick={toggleColorScheme}
          variant="subtle"
          size="lg"
          radius="md"
          aria-label="Toggle color scheme"
          className="theme-toggle"
        >
          {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
        </ActionIcon>

        <Stack gap="lg" className="hero-content">
          <Group align="center" wrap="nowrap" pr={42}>
            <Avatar src={logo.src} alt="Raj Mahadik" size={64} radius="lg" className="hero-avatar" />
            <div>
              <Badge color="red" variant="light" radius="xl" mb={7}>
                Dubai-based · Building globally
              </Badge>
              <Title order={1} className="hero-name">Raj Mahadik</Title>
              <Group gap={5} mt={4}>
                <IconMapPin size={14} aria-hidden="true" />
                <Text size="sm" c="dimmed">Full-Stack · Backend · Applied AI</Text>
              </Group>
            </div>
          </Group>

          <div>
            <Text className="hero-eyebrow">ENGINEERING WITH INTENT</Text>
            <Title order={2} className="hero-statement">
              I turn complex workflows into reliable systems people can actually use.
            </Title>
            <Text c="dimmed" mt="sm" maw={760} lh={1.7}>
              From event-driven APIs and production AI to thoughtful product interfaces, I build across the stack with a bias for clarity, resilience, and measurable outcomes.
            </Text>
          </div>

          <Group gap="sm">
            <Button color="red" radius="xl" onClick={showProjects} leftSection={<IconSparkles size={16} />} rightSection={<IconArrowRight size={16} />}>
              Explore selected work
            </Button>
            <CopyButton value={email} timeout={2000}>
              {({ copied, copy }) => (
                <Button variant="default" radius="xl" onClick={copy} leftSection={copied ? <IconCheck size={16} /> : <IconCopy size={16} />}>
                  {copied ? 'Email copied' : 'Copy email'}
                </Button>
              )}
            </CopyButton>
            <Group gap={4}>
              <Tooltip label="LinkedIn" withArrow>
                <ActionIcon component="a" href={linkedin} target="_blank" rel="noreferrer" variant="subtle" size="lg" aria-label="Open Raj Mahadik's LinkedIn profile">
                  <IconBrandLinkedin size={19} />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="GitHub" withArrow>
                <ActionIcon component="a" href={github} target="_blank" rel="noreferrer" variant="subtle" size="lg" aria-label="Open Raj Mahadik's GitHub profile">
                  <IconBrandGithub size={19} />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Group>

          <div className="hero-principles" aria-label="Engineering focus areas">
            <div>
              <Text fw={700} size="sm">Reliable systems</Text>
              <Text c="dimmed" size="xs">APIs, events, and cloud delivery</Text>
            </div>
            <div>
              <Text fw={700} size="sm">Practical AI</Text>
              <Text c="dimmed" size="xs">Vision, retrieval, and safeguards</Text>
            </div>
            <div>
              <Text fw={700} size="sm">Product thinking</Text>
              <Text c="dimmed" size="xs">Useful, accessible experiences</Text>
            </div>
          </div>
        </Stack>
      </Paper>

      {/* Tabs with FloatingIndicator */}
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        mb="xl"
        variant="pills"
      >
        <Tabs.List
          ref={rootRef}
          className="portfolio-tabs-list"
          style={{
            position: 'relative',
            display: 'inline-flex',
            overflow: 'visible',
            alignItems: 'center',
            justifyContent: 'center',
            gap: rem(5),
            padding: rem(4),
            flexWrap: 'nowrap',
            width: 'max-content',
          }}
        >
          {sections.map((section) => (
            <Tabs.Tab
              key={section}
              value={section}
              ref={setTabRef(section)}
              className="portfolio-tab"
            >
              {section}
            </Tabs.Tab>
          ))}

          {/* Render only after mount and ref is ready */}
          {mounted && tabRefsMap.current[activeTab!] && (
            <FloatingIndicator
              target={tabRefsMap.current[activeTab!]}
              parent={rootRef.current}
              style={{
                height: '100%',
                zIndex: 0,
                borderRadius: theme.radius.xl,
                boxShadow: theme.shadows.sm,
                background: dark ? theme.colors.red[9] : theme.colors.red[6],
                transition: 'all 200ms ease',
                opacity: 0.9,
                transform: 'translateY(1px)',
              }}
            />
          )}
        </Tabs.List>

        {/* Tab Panels */}
        <Container py="md" px={0} style={{ minHeight: 300 }}>
          <Tabs.Panel value="About">
            <AboutPage/>
          </Tabs.Panel>
          <Tabs.Panel value="Education">
            <EducationPage />
          </Tabs.Panel>
          <Tabs.Panel value="Skills">
            <SkillsSection />
          </Tabs.Panel>
          <Tabs.Panel value="Projects">
            <ProjectPage/>
          </Tabs.Panel>
        </Container>
      </Tabs>
    </Container>
  );
}
