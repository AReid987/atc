import ArchitectureDiagramPage from '../../components/page';

/**
 * @description Renders a main HTML element with a flexible layout, centered vertically
 * and horizontally, containing an `ArchitectureDiagramPage`. It is likely used as
 * an entry point for a React application and serves as a container for other components.
 * 
 * @returns {ReactElement} A JSX element representing a main HTML element with specific
 * attributes and children.
 */
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ArchitectureDiagramPage />
    </main>
  );
}

