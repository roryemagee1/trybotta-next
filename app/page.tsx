
import Image from "next/image";
import styles from '@/app/home.module.css';
import { roboto } from '@/app/fonts/fonts';

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
      <main className="px-8">
        <Image 
          src="/ibotta-assets/pocket-change.svg"
          width={600}
          height={119}
          alt="Pocket Change"
          className="mx-auto py-8"
        />
        <div className="mx-auto w-full h-[450px] rounded-2xl overflow-hidden relative my-[20px]">
          <img
            src="/ibotta-assets/blog1.png"
            alt="Recess Lunch"
            className="w-full rounded-2xl"
          />
          <div className="bg-white rounded-xl absolute top-[280px] left-[20px] max-w-prose">
            <p className={`${roboto.className} text-5xl bg-white rounded-xl font-semibold p-[5px]`}>
              How to pack the perfect school lunch
            </p>
          </div>
          <div className="rounded-full absolute top-[340px] right-[20px] bg-[#0a7986] p-[10px]">
            <span className={`${roboto.className} text-3xl rounded-full font-semibold p-[5px] text-white`}>
              Learn more
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="mx-auto w-full h-[450px] rounded-2xl overflow-hidden relative">
            <img
              src="/ibotta-assets/blog2.png"
              alt="Student with Pencils"
              className="w-[100%] rounded-2xl"
            />
            <div className="bg-white rounded-xl absolute top-[280px] left-[20px] max-w-prose">
            <p className={`${roboto.className} text-4xl bg-white rounded-xl font-semibold p-[5px]`}>
              6 ways to save on back-to-school shopping
            </p>
          </div>
          <div className="rounded-full absolute top-[340px] right-[20px] bg-[#0a7986] p-[10px]">
            <span className={`${roboto.className} text-3xl rounded-full font-semibold p-[5px] text-white`}>
              Learn more
            </span>
          </div>
          </div>
          <div className="mx-auto w-full h-[450px] rounded-2xl overflow-hidden relative">
            <img
              src="/ibotta-assets/blog3.png"
              alt="Pool with Donut Float Toys"
              className="w-[100%] rounded-2xl"
            />
            <div className="bg-white rounded-xl absolute top-[280px] left-[20px] max-w-prose">
            <p className={`${roboto.className} text-4xl bg-white rounded-xl font-semibold p-[5px]`}>
              Save big on the ultimate summer pool party
            </p>
          </div>
          <div className="rounded-full absolute top-[340px] right-[20px] bg-[#0a7986] p-[10px]">
            <span className={`${roboto.className} text-3xl rounded-full font-semibold p-[5px] text-white`}>
              Learn more
            </span>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
