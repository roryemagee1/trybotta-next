
// import Image from "next/image";
import styles from '@/app/home.module.css';
import { museoModerno } from '@/app/fonts/fonts';

import Panel from '@/app/ui/panel/panel';
import { View } from '@/app/ui/view/view';

import Header from '@/app/components/header';
import Photo from '@/app/components/photo';
import Textbox from '@/app/components/textbox';
import Btn from '@/app/components/btn';
import Slide from '@/app/components/slide';
import Icons from '@/app/components/icons';
import Footer from '@/app/components/footer';

import { fetchContentfulEntries } from '@/app/lib/data';

export default async function Home() {
  const items = await fetchContentfulEntries();
  console.log(items);

  function mapItems(item) {
    switch(item.fields.componentType) {
      case "Header":
        return <Header key={item.fields.order} />;
      case "Photo":
        return <Photo key={item.fields.order} />;
      case "Textbox":
        return <Textbox key={item.fields.order} />;
      case "Btn":
        return <Btn key={item.fields.order} />;
      case "Slide":
        return <Slide key={item.fields.order} />;
      case "Icons":
        return <Icons key={item.fields.order} />;
      case "Footer":
        return <Footer key={item.fields.order} />;
    }
  }

  const newsletter = await items.map(item => mapItems(item));
  
  return (
    <div className={styles.home}>
      <header>
        <h1 className={`${museoModerno.className} ${styles.trybotta}`}>trybotta</h1>
        <nav>
          <h2 style={{ textDecoration: "underline"}} className={`${museoModerno.className} ${styles.navbar}`}>Emailer</h2>
          <h2 className={`${museoModerno.className} ${styles.navbar}`}>About</h2>
          <h2 className={`${museoModerno.className} ${styles.navbar}`}>Settings</h2>
        </nav>
      </header>
      <div className={styles.headerspacer} />
      <main>
        <Panel />
        <div className={styles.panelspacer} />
        <View newsletter={newsletter} />
      </main>
    </div>
  );
}
