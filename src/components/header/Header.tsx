import { useState } from 'react';

export function Header() {
  const [title] = useState('Bolt');

  return (
    <header className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center gap-2">
        <div className="text-xl font-bold text-primary">{title}</div>
      </div>
      <div className="flex items-center gap-2">
        {/* Add any header actions here */}
      </div>
    </header>
  );
}