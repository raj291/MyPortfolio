'use client';

import {
  Container,
  Group,
  List,
  Paper,
  Space,
  Stack,
  Text,
  Timeline,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

const educationData = [
  {
    institution: 'University of Michigan',
    degree: 'Master of Science in Computer and Information Science',
    duration: 'Aug 2022 - Apr 2024',
    location: 'Dearborn, MI, USA',
    grade: 'CGPA: 3.40 / 4.00',
    coursework: 'Advanced Algorithms, Advanced Operating Systems, Big Data, NLP, Artificial Intelligence, and Cloud Computing.',
  },
  {
    institution: 'Manipal Academy of Higher Education',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    duration: 'Sep 2017 - Jun 2021',
    location: 'Dubai, UAE',
    grade: 'CGPA: 7.90 / 10',
    coursework: 'Operating Systems, Data Structures and Algorithms, Cloud Computing, Networks and Security, Software Engineering, and Project Management.',
  },
];

export default function EducationPage() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const textColor = colorScheme === 'dark' ? theme.white : theme.black;

  return (
    <Container fluid px={0}>
      <Title order={2} mb="md">Education</Title>
      <Timeline color="orange" bulletSize={18} active={educationData.length} lineWidth={3}>
        {educationData.map((edu) => (
          <Timeline.Item
            key={edu.degree}
            style={{ fontSize: '1rem', color: textColor }}
            title={
              <Group justify="space-between" align="flex-start" wrap="wrap" gap="xs">
                <Text fw={600}>{edu.institution}</Text>
                <Text size="sm">{edu.duration}</Text>
              </Group>
            }
          >
            <Group justify="space-between" align="flex-start" wrap="wrap" gap={4}>
              <Text c="dimmed" fs="italic" size="sm">{edu.degree}</Text>
              <Text c="dimmed" fs="italic" size="sm">{edu.location}</Text>
            </Group>
            <List size="sm" mt="sm" spacing={5}>
              <List.Item>{edu.grade}</List.Item>
              <List.Item><Text span fw={600}>Coursework:</Text> {edu.coursework}</List.Item>
            </List>
          </Timeline.Item>
        ))}
      </Timeline>

      <Space h="xl" />
      <Title order={2} mb="md">Research</Title>
      <Stack gap="sm">
        <Paper withBorder radius="md" p="md">
          <Text fw={600}>
            e-Pharm Assist: The Future Approach for Dispensing Medicines in Smart Cities
          </Text>
          <Text size="sm" c="dimmed" mt={4}>IEEE research publication</Text>
        </Paper>
        <Paper withBorder radius="md" p="md">
          <Text fw={600}>
            Industrial Automation Using Node-RED for Sustainable Energy
          </Text>
          <Text size="sm" c="dimmed" mt={4}>IEEE research publication</Text>
        </Paper>
      </Stack>
    </Container>
  );
}
