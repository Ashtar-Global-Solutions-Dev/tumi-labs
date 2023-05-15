import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';

import { customTheme } from '../themes/theme';

interface Props {
  children: React.ReactNode;
}
export default function Providers({ children }: Props) {
  return (
    <BrowserRouter>
      <NextUIProvider theme={customTheme}>{children}</NextUIProvider>
    </BrowserRouter>
  );
}
