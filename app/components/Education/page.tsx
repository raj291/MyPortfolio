'use client';
import { Container, Text, Title, Space, Timeline,Group , List} from "@mantine/core";
import { useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { SP } from "next/dist/shared/lib/utils";

const educationData = [
    {
      institution: 'University of Michigan',
      degree: 'Master of Science in Computer and Information Science',
      duration: 'Jan 2023 – Dec 2024',
      location: 'Dearborn, MI, USA',
      points: [
        'Specialized in software engineering, web technologies, and data systems.',
        'Worked on real-time applications using React, .NET, and SQL Server.',
        'Engaged in team-based projects emphasizing microservices architecture.',
        'Coursework: Algorithm and Analysis, Web Technologies, Natural Language Processing, Big Data & Database Systems'
      ],
    },
    {
      institution: 'Manipal University',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      duration: 'Sept 2017 – Jul 2021',
      location: 'Dubai, UAE',
      points: [
        'Graduated with Distinction.',
        'Focused on full-stack development and algorithms.',
        'Participated in national-level hackathons and coding events.',
        'Coursework: Data Structures & Algorithms, Operating Systems, Software Engineering and Database Systems.'
      ],
    },
    
  ];

export default function ExperiencePage (){
  const theme = useMantineTheme();
const { colorScheme } = useMantineColorScheme();

const isDark = colorScheme === 'dark';
const textColor = isDark ? theme.white : theme.black;
    return(
        <Container fluid>
            <Space h="sm"/>
            <Timeline color="orange" bulletSize={18} active = {educationData.length} lineWidth={3}>
            {educationData.map((edu , i) => (
                     <Timeline.Item  style={{
                      fontSize: '1rem',
                      color: textColor,
                    }} title = {<Group justify="space-between" p={0}>{edu.institution} <Text size="sm" p={0}>{edu.duration}</Text></Group>}>
                        <Group justify="space-between">
                            <Text c="dimmed" fs="italic" p={0} size="sm">{edu.degree}</Text>
                            <Text c="dimmed" fs="italic" p={0} size="sm">{edu.location}</Text>
                        </Group>
                        <Space h="xs"/>
                        <List size="sm" fw={300}>
                            {edu.points.map((points , id) =>(
                                <List.Item key={id}>{points}</List.Item>
                            ))}
                        </List>
                     </Timeline.Item>   
                    ))}
                     <Timeline.Item bullet={<div />} title="" style={{ height: 2, padding: 0, margin: -1 }} color="transparent" />
            </Timeline>
        </Container>
    );
}