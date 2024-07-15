import Image from "next/image";
import styles from "./page.module.css";

import Barbearia from "./componentes/Barbearia";

export default function Home() {
  return (
    <main className={styles.main}>
      <Barbearia/>
    </main>
  );
}
