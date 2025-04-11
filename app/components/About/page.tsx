'use client';
import { Container, Text, Title, Space, Timeline,Group } from "@mantine/core";
import { useMantineTheme, useMantineColorScheme } from '@mantine/core';

const experiences = [
  {
    company: 'Antra, Inc.',
    title: 'Full-Stack Developer',
    time: 'Jan 2024 – Current',
    location: 'Remote, USA',
    isPresent: true,
    points: [
      'Developed a comprehensive HR Management System as a SPA using Angular and Bootstrap, increasing user engagement by 20%.',
      'Built front-end components with TypeScript for efficient data binding and lazy loading, integrated with ASP.NET Web API microservices.',
      'Designed modular microservices for Employee Management and Payroll, tested and containerized with Docker.',
      'Used Microsoft SQL Server on Azure and wrote optimized stored procedures and views that reduced query time by 15%.',
      'Implemented CI/CD via Azure DevOps and Agile development with JIRA, reducing deployment downtime by 30%.',
    ],
  },
  {
    company: 'JP Morgan (Forage)',
    title: 'Software Engineer (Internship)',
    time: 'May 2023 – July 2023',
    location: 'Remote, USA',
    isPresent: true,
    points: [
      'Created React web application using TypeScript for stock option data visualization with modular components and routing.',
      'Developed a Python-based multithreaded HTTP server for CRUD operations on stock trading data.',
      'Optimized latency by 30% and implemented observables and React Hooks for efficient state and event management.',
    ],
  },
  {
    company: 'Azinova Technologies',
    title: 'Full-Stack Developer',
    time: 'Apr 2021 – Aug 2022',
    location: 'Dubai, UAE',
    isPresent: true,
    points: [
      'Built a Cleaning Service Appointment System using ASP.NET Web API and Angular.',
      'Optimized MSSQL performance via EF Core, raw SQL, migrations, and indexing.',
      'Dockerized components and implemented CI/CD pipelines for scalable deployment.',
    ],
  },
  {
    company: 'Katalyst Incorporation, LLC',
    title: 'Web Developer',
    time: 'Feb 2020 – Feb 2021',
    location: 'Dubai, UAE',
    isPresent: false,
    points: [
      'Maintained Wholesale Food and Retail Distributor website using ASP.NET MVC and CSS.',
      'Implemented SEO techniques, leading to a 20% increase in website traffic.',
      'Collaborated across teams to integrate UI and backend logic, improving UX and boosting sales by 10%.',
    ],
  },
];
export default function AboutPage(){
  const theme = useMantineTheme();
const { colorScheme } = useMantineColorScheme();

const isDark = colorScheme === 'dark';
const textColor = isDark ? theme.white : theme.black;

  const summary = "Hello!, I'am Raj and i am a Full-stack developer with years of experience building dynamic SPAs and scalable microservices Application using Angular, React, and ASP.NET Web API. Holds both a Master's and Bachelor's degree in Computer Science, with a proven track record in optimizing databases, automating CI/CD pipelines, and deploying high-performance solutions that drive business growth.";
  return(
   <Container fluid>
    <Title order={2} mb="md">About Me</Title>
      <Text>
      {summary}
      </Text>
      <Space h="md"/> 
      <Title order={2}>Experience</Title>
      <Space h="md"/>
      <Timeline color= "red" active={experiences.length} lineWidth={3} bulletSize={18}>
        {experiences.map((exp,i) => (
          <Timeline.Item style={{
            fontSize: '1rem',
            color: textColor,
          }} title = {<Group justify="space-between">{exp.title} <Text size="sm">{exp.time}</Text></Group>}>
          <Group justify="space-between">
            <Text c="dimmed" size="sm">{exp.company}</Text>
            <Text c="dimmed" size="sm">{exp.location}</Text>
          </Group>
            <Space h="xs"/>
          </Timeline.Item>
        
        ))}
        </Timeline>
    </Container>
  );
}