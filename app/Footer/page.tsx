import { Container, Text } from '@mantine/core';
export default function FooterPage() {


  return (
    <div style={{ 
      padding: '1rem', 
      borderTop: '1px solid rgba(120, 120, 120, 0.2)',
      textAlign: 'center',
      backgroundColor: 'var(--mantine-color-body, white)'
    }}>
      <Container>
        <Text ta="center" size="sm">
          {`© 2026 Raj Mahadik. Built with Next.js.`}
        </Text>
      </Container>
    </div>
  );
}
