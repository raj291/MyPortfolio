'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Group,
  Text,
  Container,
  ActionIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
  Avatar,
  Tabs,
  FloatingIndicator,
  rem
} from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconCheck, IconMapPin } from '@tabler/icons-react';
import { Tooltip, CopyButton } from '@mantine/core';

import { IconSun, IconMoon } from '@tabler/icons-react';
import logo from '../public/logo.png';
import AboutPage from './components/About/page';
import './globals.css';
import EducationPage from './components/Education/page';
import ProjectPage from './components/projectsection/page';
import SkillsSection from './components/Skills/page';
// Placeholder sections
//const AboutSection = () => (<><AboutPage/></>);
//const EducationSection = () => <Text>Education content goes here...</Text>;
//const SkillsSection = () => <Text>Skills content goes here...</Text>;
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
    if (node) {
      tabRefsMap.current[val] = node;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(dark ? 'light' : 'dark');
  };

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <Container size="lg" py="xl">
      {/* Header */}
      <Group justify="space-between" align="flex-start" mb="lg" style={{ position: 'relative' }}>
        <Group align="flex-start" wrap="nowrap" pr={50}>
          <Avatar src={logo.src} alt="logo" size="md" radius="md" />
          <div>
            <Title order={2} style={{ fontFamily: 'var(--font-pixel)' }}>Raj Mahadik</Title>
            <Text size="sm" c="dimmed">Full-Stack & AI Software Engineer</Text>
            <Group gap={4} mt={3}>
              <IconMapPin size={14} aria-hidden="true" />
              <Text size="xs" c="dimmed">Dubai, UAE</Text>
            </Group>
            <Group gap="xs" mt={4}>
    <Tooltip label="LinkedIn" withArrow>
      <ActionIcon
        component="a"
        href={linkedin}
        target="_blank"
        variant="subtle"
        size="lg"
        aria-label="Open Raj Mahadik's LinkedIn profile"
      >
        <IconBrandLinkedin size={18} />
      </ActionIcon>
    </Tooltip>

    <Tooltip label="GitHub" withArrow>
      <ActionIcon
        component="a"
        href={github}
        target="_blank"
        variant="subtle"
        size="lg"
        aria-label="Open Raj Mahadik's GitHub profile"
      >
        <IconBrandGithub size={18} />
      </ActionIcon>
    </Tooltip>

    <CopyButton value={email} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied!" : "Email"} withArrow>
          <ActionIcon onClick={copy} variant="subtle" size="lg" aria-label="Copy email address">
            {copied ? <IconCheck size={18} /> : <IconMail size={18} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  </Group>
          </div>

        </Group>

        <ActionIcon
          onClick={toggleColorScheme}
          variant="outline"
          size="lg"
          radius="md"
          aria-label="Toggle color scheme"
          style={{ position: 'absolute', top: 0, right: 0 }}
        >
          {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
        </ActionIcon>
      </Group>

      {/* Tabs with FloatingIndicator */}
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        mb="xl"
        variant="pills"
        styles={(theme) => ({
          tab: {
            position: 'relative',
            zIndex: 1,
            border: 'none',
            fontWeight: 500,
            letterSpacing: 0.5,
            padding: `${rem(8)} ${rem(12)}`,
            fontSize: theme.fontSizes.sm,
            borderRadius: theme.radius.xl,
            transition: 'all 200ms ease',

            '&[data-active]': {
              background: 'transparent',
              border: 'none',
              color: dark ? theme.white : theme.black,
            },

            '&:hover': {
              backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
            },
          },
          tabsList: {
            position: 'relative',
            borderBottom: `1px solid ${dark ? theme.colors.dark[4] : theme.colors.gray[2]}`,
            paddingBottom: theme.spacing.xs,
            gap: rem(4),
          }
        })}
      >
        <Tabs.List
          ref={rootRef}
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
