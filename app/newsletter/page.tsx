
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
  // console.log(items);

  function mapItems(item: any) {
    switch(item.fields.componentType) {
      case "Header":
        return <Header fields={item.fields} key={item.fields.order} />;
      case "Photo":
        return <Photo fields={item.fields} key={item.fields.order} />;
      case "Textbox":
        return <Textbox fields={item.fields} key={item.fields.order} />;
      case "Btn":
        return <Btn fields={item.fields} key={item.fields.order} />;
      case "Slide":
        return <Slide fields={item.fields} key={item.fields.order} />;
      case "Icons":
        return <Icons fields={item.fields} key={item.fields.order} />;
      case "Footer":
        return <Footer fields={item.fields} key={item.fields.order} />;
    }
  }

  const newsletter = await items.map((item: any) => mapItems(item));
  
  return (
    <div className={styles.home}>
      <main>
        <View newsletter={newsletter} />
        <div className={styles.panelspacer} />
        <Panel newsletter={newsletter} />
      </main>
    </div>
  );
}