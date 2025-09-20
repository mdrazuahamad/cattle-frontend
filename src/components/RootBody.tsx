'use client';

import React, { useEffect, useState } from 'react';

export default function RootBody({ children }: { children: React.ReactNode }) {
  const [fontClasses, setFontClasses] = useState('antialiased');

  useEffect(() => {
    // setFontClasses(`${geistSans.variable} ${geistMono.variable} antialiased`);
  }, []);

  return <body >{children}</body>;
}
