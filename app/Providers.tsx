'use client';

import { ReactNode } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';

export function Providers({ children }: { children: ReactNode }) {
  // This component helps with client-side color scheme management
  // It's a wrapper for the MantineProvider that can use hooks
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  );
}